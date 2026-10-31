import { test } from 'node:test'
import assert from 'node:assert/strict'

const origin = process.env.TEST_ORIGIN || 'http://127.0.0.1:3102'
const site = 'https://furkanaymergen.dev'

for (const [path, language, description] of [
  ['/', 'tr', 'Bilgisayar Mühendisi'],
  ['/en', 'en', 'Computer Engineer']
]) {
  test(`${path} has localized, crawlable server-rendered content and metadata`, async () => {
    const response = await fetch(`${origin}${path}`)
    assert.equal(response.status, 200)
    const html = await response.text()
    assert.match(html, new RegExp(`<html[^>]+lang="${language}"`))
    assert.equal((html.match(/<h1\b/g) || []).length, 1)
    assert.match(html, /Furkan.*Aymergen/)
    assert.ok(html.includes(description))
    const experience = html.match(/<section[^>]+id="experiences"[\s\S]*?<\/section>/)?.[0]
    assert.ok(experience?.includes('2021'), 'Work history must be present before hydration')
    const canonical = html.match(/<link[^>]+rel="canonical"[^>]*>/)?.[0]
    assert.ok(canonical?.includes(`href="${site}${path === '/' ? '/' : '/en'}"`), canonical)
    for (const [lang, url] of [['tr', `${site}/`], ['en', `${site}/en`], ['x-default', `${site}/`]]) {
      const links = html.match(/<link[^>]+rel="alternate"[^>]*>/g) || []
      assert.ok(links.some(link => link.includes(`hreflang="${lang}"`) && link.includes(`href="${url}"`)), lang)
    }
    const schemas = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
      .flatMap(([, json]) => JSON.parse(json)['@graph'] || [JSON.parse(json)])
    assert.ok(schemas.some(schema => schema['@type'] === 'Person'))
    assert.ok(schemas.some(schema => schema['@type'] === 'ProfilePage' && schema.inLanguage === language))
    assert.match(html, /loading="lazy"[^>]*src="[^"]*mfa-about|src="[^"]*mfa-about[^>]*loading="lazy"/)
    assert.doesNotMatch(html, /fonts\.googleapis\.com/)
    assert.match(html, /\/fonts\/space-grotesk-latin\.woff2/)
  })
}

test('sitemap and robots expose both real language URLs', async () => {
  const sitemap = await fetch(`${origin}/sitemap.xml`)
  assert.equal(sitemap.status, 200)
  assert.match(sitemap.headers.get('content-type'), /xml/)
  const xml = await sitemap.text()
  assert.ok(xml.includes(`<loc>${site}/</loc>`))
  assert.ok(xml.includes(`<loc>${site}/en</loc>`))
  const robots = await fetch(`${origin}/robots.txt`).then(response => response.text())
  assert.match(robots, /Sitemap: https:\/\/furkanaymergen\.dev\/sitemap\.xml/i)
  assert.doesNotMatch(robots, /Disallow:\s*\/\s*$/m)
})

test('unknown URLs return a real 404 rather than duplicate portfolio pages', async () => {
  assert.equal((await fetch(`${origin}/not-a-real-page`)).status, 404)
})
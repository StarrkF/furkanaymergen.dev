import { test } from 'node:test'
import assert from 'node:assert/strict'

const origin = process.env.TEST_ORIGIN || 'http://127.0.0.1:3102'

for (const path of ['/', '/en']) {
  test(`${path} server-renders theme-adaptive code and monochrome primary actions`, async () => {
    const response = await fetch(`${origin}${path}`)
    assert.equal(response.status, 200)
    const html = await response.text()
    const hero = html.match(/<section[^>]+id="home"[\s\S]*?<\/section>/)?.[0]
    assert.ok(hero, 'Hero content must remain server-rendered')
    assert.match(hero, /glass-terminal code-theme/)
    for (const token of ['keyword', 'property', 'string', 'type', 'variable']) {
      assert.match(hero, new RegExp(`class="code-${token}(?: |")`))
    }
    assert.match(hero, /<a[^>]+href="#projects"[^>]+class="button-glass /)
    const actions = html.match(/<a\b[^>]+class="button-glass [\s\S]*?<\/a>/g) || []
    assert.ok(actions.length >= 8, 'Hero, header, projects and contact must share the action design')
    for (const action of actions) {
      assert.match(action, /class="button-label"/)
      assert.match(action, /class="button-icon" aria-hidden="true"/)
      assert.doesNotMatch(action, /hover:-translate|uppercase|tracking-wider/)
    }
    const header = html.match(/<header\b[\s\S]*?<\/header>/)?.[0]
    assert.ok(header)
    assert.doesNotMatch(header, /<details\b|dropdown-content/)
    assert.match(header, /<span class="flex shrink-0 w-8 h-8 sm:w-9 sm:h-9">/)
  })
}
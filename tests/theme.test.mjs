import { test } from 'node:test'
import assert from 'node:assert/strict'
import { normalizeThemePreference } from '../utils/theme.mjs'

test('only the two supported theme preferences are preserved', () => {
  for (const theme of ['dark', 'light']) {
    assert.equal(normalizeThemePreference(theme), theme)
  }
})

test('previous light themes migrate to light', () => {
  for (const theme of ['corporate', 'cupcake', 'lemonade', 'bumblebee', 'emerald']) {
    assert.equal(normalizeThemePreference(theme), 'light')
  }
})

test('previous dark themes and invalid preferences safely default to dark', () => {
  for (const theme of ['night', 'dracula', 'synthwave', 'halloween', 'unknown', '', null, undefined]) {
    assert.equal(normalizeThemePreference(theme), 'dark')
  }
})

test('system preferences resolve to one of the two explicit themes', () => {
  assert.equal(normalizeThemePreference('system', 'light'), 'light')
  assert.equal(normalizeThemePreference('system', 'dark'), 'dark')
  assert.equal(normalizeThemePreference('system', 'unknown'), 'dark')
})
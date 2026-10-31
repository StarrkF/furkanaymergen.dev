const lightThemes = new Set(['light', 'corporate', 'cupcake', 'lemonade', 'bumblebee', 'emerald'])

export function normalizeThemePreference(preference, resolved = 'dark') {
  if (preference === 'system') return resolved === 'light' ? 'light' : 'dark'
  return lightThemes.has(preference) ? 'light' : 'dark'
}
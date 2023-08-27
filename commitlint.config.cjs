module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'never',
      ['fe', 'be', 'api', 'auth', 'tests', 'config', 'deps'],
    ],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'experimental',
        'patch',
        'release',
        'fix',
        'docs',
        'config',
        'chore',
        'style',
        'refactor',
        'ci',
        'test',
        'perf',
        'revert',
        'vercel',
        'aws',
      ],
    ],
  },
}

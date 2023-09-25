import { defineConfig, devices } from '@playwright/experimental-ct-react';

export default defineConfig({
  testMatch: ['**/?(*.)integration.[jt]s?(x)'],
  outputDir: 'tests/integration/results',
  timeout: 60 * 1000,
  fullyParallel: true,
  expect: {
    toMatchSnapshot: { threshold: 0.2, maxDiffPixelRatio: 0.001 },
    timeout: 5000
  },
  reporter: [['html', { outputFolder: 'tests/integration/report' }]],
  use: {
    screenshot: 'only-on-failure',
    testIdAttribute: 'id',
    trace: 'on-first-retry',
    ctPort: 3100
  },
  projects: [
    {
      name: 'Mobile Chrome',
      use: devices['Pixel 5']
    },
    {
      name: 'Mobile Safari',
      use: devices['iPhone 13 Pro Max']
    }
  ]
});

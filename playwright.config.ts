import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './dossier_test/e2e_test',
  timeout: 30_000,
  retries: 2,
  use: {
    headless: true,
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    baseURL: 'http://localhost:3000'
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ]
});

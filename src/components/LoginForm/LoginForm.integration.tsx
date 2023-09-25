import { expect, test } from '@playwright/experimental-ct-react';

import { LoginForm } from './LoginForm.tsx';
import { snapshot } from '../../../tests/utils/helpers/snapshot.ts';

// if you add page.route() in wrong place, Montserrat font will not load in Chromium

// ❌ in beforeEach outside describe block
// test.beforeEach(async ({ page }) => {
//   await page.route('**/users', (route) => {
//     route.fulfill({ json: [{ name: 'John' }] });
//   });
// });

test.describe('LoginForm', () => {
  test.beforeEach(async ({ mount, page }) => {
    // ❌ before mount
    await page.route('**/users', (route) => {
      route.fulfill({ json: [{ name: 'John' }] });
    });
    await mount(<LoginForm />);
    // ✅ after mount in beforeEach
    // await page.route('**/users', (route) => {
    //   route.fulfill({ json: [{ name: 'John' }] });
    // });
  });

  test('Should test something', async ({ page }) => {
    // ✅ in test
    // await page.route('**/users', (route) => {
    //   route.fulfill({ json: [{ name: 'John' }] });
    // });
    await snapshot(page, '#root', 'LoginForm');
    await expect(page.getByTestId('LoginForm-title')).toContainText('Montserrat');
  });
});

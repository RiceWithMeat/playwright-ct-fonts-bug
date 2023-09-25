import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export const snapshot = async (page: Page, locator: string, name: string) => {
  const widthVariants = { adaptive: 420 };
  const height = 800;

  const doSnapshot = async (width: number) => {
    await page.setViewportSize({ width, height });
    expect(await page.locator(locator).screenshot()).toMatchSnapshot([name, `${width}.png`]);
  };

  await doSnapshot(widthVariants.adaptive);
};

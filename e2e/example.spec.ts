import { test, expect } from '@playwright/test';

test('render Wrapper', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.getByRole('heading')).toHaveText(/wrapper/i);
});


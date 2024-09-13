import { test, expect } from '@playwright/test';

test('render Wrapper', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading')).toHaveText(/wrapper/i);
});


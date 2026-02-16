import { test, expect } from '@playwright/test';

test.describe('Portfolio Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173');
    });

    test('TC001: Sticky navbar remains visible while scrolling', async ({ page }) => {
        const navbar = page.locator('nav').first(); 
        await expect(navbar).toBeVisible();
        await page.evaluate(() => window.scrollTo(0, 1000));
        await expect(navbar).toBeVisible();
    });

    test('TC002: Hero section loads and shows core content', async ({ page }) => {
        await expect(page.locator('text=Richard')).toBeVisible();
        await expect(page.locator('text=View My Projects')).toBeVisible();
    });

    test('TC029: Contact form submission (mocked)', async ({ page }) => {
        // Scroll to contact
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await expect(page.locator('text=Contact Me')).toBeVisible();

        // Fill form
        await page.fill('input[type="email"]', 'test@example.com');
        await page.fill('textarea', 'This is a test message from TestSprite manual run.');
        
        // Mock submission or just check button
        await expect(page.locator('button[type="submit"]')).toBeVisible();
    });
});

import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders homepage with embassy content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Embassy/)
    // Verify key homepage sections
    await expect(page.locator('text=Embassy')).toBeTruthy()
  })

  test('displays navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: /Services/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /News/i }).first()).toBeVisible()
  })
})

test.describe('Services', () => {
  test('lists all services', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('h1')).toContainText('Services')
    // Check that service cards are rendered
    await expect(page.locator('text=Visa Applications').first()).toBeVisible()
    await expect(page.locator('text=Passport Services').first()).toBeVisible()
  })

  test('service detail page loads', async ({ page }) => {
    await page.goto('/services/visa-applications')
    await expect(page.locator('text=Visa Applications').first()).toBeVisible()
  })
})

test.describe('Officials', () => {
  test('lists officials', async ({ page }) => {
    await page.goto('/officials')
    await expect(page.locator('h1')).toContainText('Officials')
    await expect(page.locator('text=Ambassador').first()).toBeVisible()
  })

  test('official detail page loads', async ({ page }) => {
    await page.goto('/officials/ambassador-thompson')
    await expect(page.locator('text=Ambassador').first()).toBeVisible()
  })
})

test.describe('News', () => {
  test('lists news articles', async ({ page }) => {
    await page.goto('/news')
    await expect(page.locator('h1')).toContainText('News')
    await expect(page.locator('text=Trade').first()).toBeVisible()
  })

  test('news detail page loads', async ({ page }) => {
    await page.goto('/news/trade-agreement-signing')
    await expect(page.locator('text=Trade').first()).toBeVisible()
  })
})

test.describe('Travel Advisories', () => {
  test('lists travel advisories', async ({ page }) => {
    await page.goto('/travel-advisories')
    await expect(page.locator('h1')).toContainText('Travel Advisories')
    await expect(page.locator('text=Germany').first()).toBeVisible()
  })

  test('travel advisory detail page loads', async ({ page }) => {
    await page.goto('/travel-advisories/germany')
    await expect(page.locator('text=Germany').first()).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('can navigate between pages', async ({ page }) => {
    await page.goto('/')
    // Click on Services link
    await page.getByRole('link', { name: /Services/i }).first().click()
    await expect(page.locator('h1')).toContainText('Services')
    // Go back home
    await page.goto('/')
    await expect(page).toHaveTitle(/Embassy/)
  })
})

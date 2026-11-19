import { test, expect } from '@playwright/test';

test('gallery lists exactly 28 working original design cards', async ({page})=>{
  await page.goto('/');
  await expect(page.getByRole('heading',{name:/Every style/})).toBeVisible();
  await expect(page.locator('.style-card')).toHaveCount(28);
  await expect(page.locator('.thumbnail')).toHaveCount(28);
  await page.getByRole('button',{name:'Surfaces',exact:true}).click();
  await expect(page.locator('.style-card')).toHaveCount(6);
  await page.getByRole('button',{name:'All styles',exact:true}).click();
  await page.getByRole('searchbox',{name:'Search designs'}).fill('aurora');
  await expect(page.locator('.style-card')).toHaveCount(1);
  await expect(page.getByRole('heading',{name:'Aurora UI'})).toBeVisible();
});

test('favorites are saved and filterable', async ({page})=>{
  await page.goto('/');
  await page.locator('.style-card').first().getByRole('button',{name:/Add Glassmorphism to favorites/}).click();
  await page.getByRole('button',{name:/Saved 1/}).click();
  await expect(page.locator('.style-card')).toHaveCount(1);
  await page.reload();
  await page.getByRole('button',{name:/Saved 1/}).click();
  await expect(page.locator('.style-card')).toHaveCount(1);
});

test('detail renders a real demo, responsive viewport and exact source', async ({page})=>{
  await page.goto('/#/styles/glassmorphism');
  await expect(page.getByRole('heading',{name:'Glassmorphism.'})).toBeVisible();
  const preview=page.frameLocator('iframe[title="Glassmorphism live responsive demo"]');
  await expect(preview.locator('.demo--glass')).toBeVisible();
  await expect(preview.getByRole('heading',{name:/Clarity in/})).toBeVisible();
  await page.getByRole('button',{name:'Mobile preview'}).click();
  await expect(page.locator('.device-frame.device-mobile iframe')).toBeVisible();
  await page.getByRole('tab',{name:'Design Tokens'}).click();
  await expect(page.locator('.token-colors>div')).toHaveCount(3);
  await page.getByRole('tab',{name:'Code Explorer'}).click();
  await expect(page.locator('.code-panel')).toContainText('function Glass()');
  await page.getByRole('button',{name:'CSS styles'}).click();
  await expect(page.locator('.code-panel')).toContainText('.glass-window');
});

test('comparison shows two independently working pages',async({page})=>{
  await page.goto('/#/compare');
  await expect(page.getByRole('heading',{name:/Two styles/})).toBeVisible();
  await expect(page.locator('.compare-frame iframe')).toHaveCount(2);
  await page.getByLabel('FIRST DESIGN').selectOption('cyberpunk');
  await expect(page.locator('.compare-panel').first()).toContainText('Cyberpunk');
  await page.getByRole('button',{name:'Swap comparison designs'}).click();
  await expect(page.locator('.compare-panel').last()).toContainText('Cyberpunk');
});

test('interactive demo updates monthly estimate',async({page})=>{
  await page.goto('/#/render/interactive-landing-page');
  await expect(page.getByRole('heading',{name:/Make it/})).toBeVisible();
  await expect(page.locator('.int-total strong')).toContainText('$72');
  await page.getByRole('button',{name:'Starter'}).click();
  await expect(page.locator('.int-total strong')).toContainText('$36');
  await page.getByRole('slider',{name:'Number of team members'}).focus();
  await page.keyboard.press('End');
  await expect(page.locator('.int-total strong')).toContainText('$180');
});

test('mobile gallery remains responsive and navigable',async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await page.goto('/');
  await expect(page.locator('.style-card')).toHaveCount(28);
  await page.getByRole('button',{name:'Open menu'}).click();
  await page.getByRole('button',{name:'Compare styles'}).click();
  await expect(page.getByRole('heading',{name:/Two styles/})).toBeVisible();
  const width=await page.evaluate(()=>document.documentElement.scrollWidth);
  expect(width).toBeLessThanOrEqual(400);
});

import {test, expect} from '@playwright/test'

import {loadHomePage} from '../helpers'

test("Simple Basic test", async ({page})=>  {
    await loadHomePage(page)
    //await page.goto("https://www.amazon.in/")
    //await page.click('text=Best Sellers')
  
    await page.hover('text=Hello, sign in')
    await page.click('text=Sign in')
    //await page.pause()
    console.log(await page.locator('h1[class=a-spacing-small]').textContent('Sign in'))
    //console.log(signIntext.textContent())
    
    //await expect(signIntext).toContainText('Sign in')

    console.log(await page.locator('#cotinue-announce').textContent('Continue'))
    await expect(page.locator('#continue-announce')).toContainText('Continue')
    //await expect(continuetext).toContainText('Continue')
    await page.locator('input[id=continue]
    
    
    
    
    
    
    
    
    
    jgyyt6uuru381uJQ    QQQWDSWWWIHBBBNMMMJITUY868RTYUI8765321`RUIO[]'PUREWQQS[PEPRITOTRDRFFHDGHUYJHFGGJGTJ').click()
    console.log(await page.locator('#auth-email-missing-alert').textContent())
    await expect(page.locator('#auth-email-missing-alert')).toContainText('Enter your email or mobile phone number')
}
)
const { default: puppeteer } = require('puppeteer')
const fs = require('fs')

const getImages = async (page) => {
  const arrayCards = []

  const ULs = await page.$$('ul.active')

  for (const ul of ULs) {
    const liElements = await ul.$$('li')

    for (const li of liElements) {
      let title = await li.$eval('.long-title', (el) => el.innerText)
      const imgSrc = await li.$eval(
        'img',
        (img) => img.getAttribute('data-src') || img.src
      )

      const card = {
        title,
        imgSrc
      }
      console.log(card)
      arrayCards.push(card)
    }
  }
  write(arrayCards)
}

const scrapper = async (dataTitle) => {
  const browser = await puppeteer.launch({ headless: false })

  try {
    const page = await browser.newPage()

    await page.goto('https://www.starwars.com/databank', {
      waitUntil: 'networkidle0'
    })

    await page.$eval(`[data-title='${dataTitle}']`, (el) => el.click())
    console.log('page clicked')

    await page.waitForSelector(`li.active[data-title='${dataTitle}']`, {
      visible: true
    })

    await getImages(page)
  } catch (error) {
    console.log('error')
  }

  browser.close()
}

const write = (arrayCards) => {
  const dataToWrite = {
    results: arrayCards
  }
  console.log('log 1')
  fs.writeFile('SWCards.json', JSON.stringify(dataToWrite), () => {
    console.log('file written')
  })
}

module.exports = { scrapper }

require('dotenv').config(); 

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const url = process.env.WEBSITE_URL;
axios.get(url)
  .then((response) => {
    if (response.status === 200) {
      const html = response.data;
      // console.log(html);
      const $ = cheerio.load(html);
      const heroText = $('.hero-text');
      // console.log(heroText.html());
      // console.log(heroText.text());
      // const output = heroText.find('h1').text();
      // const output = heroText.children('h1').text();
      // const output = heroText.children('h1').next().text();
      // const output = heroText.children('h1').parent().text();
      // console.log(output);
      $('.nav-item a').each((i, el) => {
        const item = $(el).text();
        console.log(item);
        // const link= $(el).attr('href');
        // console.log(link);
      });
    }
  })
  .catch((error) => {
    console.error(error);
});



// Website Scrap
// const axios = require('axios');
// const cheerio = require('cheerio');
// const url = process.env.WEBSITE_URL;
// axios.get(url)
//   .then((response) => {
//     if (response.status === 200) {
//       const html = response.data;
//       const $ = cheerio.load(html);
//       const projectsContainer = $('#projectsid ul li');
//       const projectsData = [];
//       projectsContainer.each((i, el) => {
//         const title = $(el).find('strong').text().trim();
//         const link = $(el).find('a').attr('href');
//         projectsData.push({
//           title,
//           link
//         });
//       });
//       projectsData.forEach((project) => {
//         console.log('Title:', project.title);
//         console.log('Link:', project.link);
//       });
//       console.log('Scraping Done...');
//     }
//   })
//   .catch((error) => {
//     console.error(error);
// });
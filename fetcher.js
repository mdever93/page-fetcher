const args = process.argv.slice(2, 4);
const URL = args[0];
const file = args[1];
const request = require('request');
const fs = require('fs');

request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  if (!error) {
    fs.writeFile(file, body, err => {
      if (err) {
        console.error(err)
        return
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${file}.`);
    })
    
  }
  // console.log('body:', body); // Print the HTML for the Google homepage.
  
});
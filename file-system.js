const fs = require('fs');

// Create "welcome.txt" file
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created successfully');
});



// Read "welcome.txt"
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  
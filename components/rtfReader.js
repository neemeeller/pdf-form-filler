const fs = require('fs');
const readline = require('readline');

const regex = '__2__';
const date = new Date();
const formattedDate = date.toLocaleDateString();

const newText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo nisl, facilisis sed sem id, fermentum feugiat augue. Vivamus consequat tortor augue, vel laoreet erat tempus non. Nulla rhoncus lacus sit amet ullamcorper luctus. Maecenas quis ullamcorper mi. Duis odio quam, laoreet id enim sit amet, pulvinar ultricies orci. Donec finibus blandit nibh vitae sollicitudin. Vivamus elementum massa turpis, quis pretium dui consectetur quis. Maecenas aliquam justo lorem, id pellentesque mauris interdum a. Vestibulum dictum at ante eget pulvinar. Pellentesque porttitor nibh et turpis finibus interdum.

Integer risus mauris, malesuada eget venenatis sit amet, vulputate at ipsum. Maecenas quam velit, ultrices vel dolor vitae, vehicula facilisis libero. Praesent faucibus diam nec egestas dictum. Suspendisse id bibendum diam. Donec ultricies rutrum arcu gravida malesuada. Integer euismod pulvinar consequat. Maecenas commodo ullamcorper mattis. Integer pharetra ante ac ultricies molestie. Praesent risus purus, malesuada ut ipsum ut, laoreet ultricies odio. Praesent vestibulum augue eget eros volutpat iaculis. Pellentesque tempus semper lorem eu eleifend.

Nunc imperdiet congue urna id imperdiet. Maecenas congue dictum arcu quis tincidunt. Fusce mi urna, interdum sodales viverra at, posuere ac elit. Aliquam nec luctus lacus. Etiam ornare mi risus, sit amet blandit elit posuere vel. Nulla magna odio, condimentum vel justo a, auctor accumsan elit. Ut in lorem nibh. Nulla interdum tempor pharetra. Nam id maximus lectus. Aenean et nisl enim. Vivamus ac est eu nibh venenatis porta. In tempus orci id diam commodo pulvinar. Cras finibus sapien a odio fermentum aliquet.`;

const rtfReader = (inputPath, outputPath) => {
  let readStream = fs.createReadStream(inputPath);
  let writeStream = fs.createWriteStream(outputPath);

  const rl = readline.createInterface({
    input: readStream,
    output: writeStream,
    crlfDelay: Infinity, // to handle different line endings in the file
  });

  // process each line of the file
  rl.on('line', line => {
    line = line.replace(regex, newText);
    writeStream.write(line);
  });

  // when the file is completely read
  rl.on('close', () => {
    console.log('Finished reading file');
  });
};

module.exports = {
  rtfReader,
};

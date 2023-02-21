const fs = require('fs');
const readline = require('readline');

const regex = 'XXDateXX';
const date = new Date();
const formattedDate = date.toLocaleDateString();

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
    console.log(line);
    line = line.replace(regex, formattedDate);
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

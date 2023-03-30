// const { Document, Packer, Paragraph } = require('docx');
const createReport = require('docx-templates').default;
const fs = require('fs');

const createDocx = async (inputPath, outputPath) => {
  if (!inputPath || !outputPath) {
    throw new Error('No path specified');
  }

  try {
    const template = fs.readFileSync(inputPath);

    const buffer = await createReport({
      template,
      cmdDelimiter: ['[', ']'],
      processLineBreaks: true,
      failFast: false,
      data: {},
      additionalJsContext: {
        // all of these will be available to JS snippets in your template commands (see below)
        _1_1: '',
        _1_2: 'X',
        _1_3: '',
        _1_4: '',
        _1_5: '',
        _1_OTHER: '',
        _2: 'This is the from field',
        _2_ACC_NO: '',
        _3: '',
        _4: '',
        _5: '',
        _6: '',
        _7: '',
        _7_ACC_NO: '',
        _page: '1',
        _pages: '2023',
      },
    });

    fs.writeFileSync(outputPath, buffer);
  } catch (e) {
    throw new Error(`Error occurred! `, e);
  }

  /* try {
    const doc = new Document({
      sections: [
        {
          children: [new Paragraph('Hello World')],
        },
      ],
    });

    Packer.toBuffer(doc).then(buffer => {
      console.log(buffer);
      fs.writeFileSync(outputPath, buffer);
    });
  } catch (e) {
    throw new Error(`Error occurred! `, e);
  } */
};

module.exports = {
  createDocx,
};

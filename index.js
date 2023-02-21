// const { createPdf } = require('./components/createPdf');
const { rtfReader } = require('./components/rtfReader');

// createPdf('./assets/input/f1099nec.pdf', './assets/output/output.pdf');
rtfReader('./assets/input/sample.rtf', './assets/output/sample.rtf');

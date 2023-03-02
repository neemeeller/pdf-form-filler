// const { createPdf } = require('./components/createPdf');
const { rtfReader } = require('./components/rtfReader');

// createPdf('./assets/input/f1099nec.pdf', './assets/output/output.pdf');
rtfReader('./assets/input/SF153-88.rtf', './assets/output/SF153-88_out.rtf');

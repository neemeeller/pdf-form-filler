// const { createPdf } = require('./components/createPdf');
// const { rtfReader } = require('./components/rtfReader');
const { createDocx } = require('./components/createDocx');

// createPdf('./assets/input/f1099nec.pdf', './assets/output/output.pdf');
// rtfReader('./assets/input/SF153-88.rtf', './assets/output/SF153-88_out.rtf');
createDocx('./assets/input/input.docx', './assets/output/create_doc.docx');

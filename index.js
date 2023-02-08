const { PDFDocument } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');

const createPdf = async (input, output) => {
  try {
    const pdfDoc = await PDFDocument.load(await readFile(input));

    // Modify doc, fill the form...
    const form = pdfDoc.getForm();
    const fieldNames = form.getFields().map(f => f.getName());
    const checkboxes = fieldNames.filter(n => n.match(/.c[0-9]+/));
    const textFields = fieldNames.filter(n => n.match(/.f[0-9]+/));

    textFields.forEach(field => form.getTextField(field).setText('TE'));
    checkboxes.forEach(field => form.getCheckBox(field).check());

    const pdfBytes = await pdfDoc.save();

    await writeFile(output, pdfBytes);
    console.log('PDF created!');
  } catch (e) {
    console.log(e);
  }
};

createPdf('./assets/input/f1099nec.pdf', './assets/output/output.pdf');

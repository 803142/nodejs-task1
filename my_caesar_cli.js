const { Command } = require('commander');
const fs = require('fs');

const { caesarDecoder } = require( './caesarDecoder.js');

const program = new Command();

program
  .option('-i, --input <string>', 'an input file')
  .option('-s, --shift <number>', ' a shift')
  .option('-o, --output <string>', 'an output file')
  .option('-a, --action <string>', 'an action encode/decode');

program.parse(process.argv);

const options = program.opts();

if (options.action === 'decode') {
  options.shift = -parseInt(options.shift, 10);
}

try {
  const data = fs.readFileSync(`${options.input}`);
  console.log(data.toString('latin1'));

  const writer = fs.createWriteStream(`${options.output}`);

  writer.write(
    data.toString('latin1').split('').reduce((acc,cur)=> {
      acc += caesarDecoder(cur, parseInt(options.shift, 10));
      return acc;
    }
    ,''));
} catch (err) {
  console.error('file not found');
}

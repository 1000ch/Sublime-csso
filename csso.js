'use strict';

const path = require('path');
const execa = require('execa');
const getStdin = require('get-stdin');

const unix = path.normalize(path.join(__dirname, 'node_modules', '.bin', 'csso'));
const win = path.normalize(path.join(__dirname, 'node_modules', '.bin', 'csso.cmd'));
const CSSO_BIN = require('os').type() === 'Windows_NT' ? win : unix;

getStdin()
  .then(data => csso(data))
  .then(data => process.stdout.write(data));

function csso(data) {
  const options = JSON.parse(process.argv[2]);
  const args = [];

  if (!options.restructure) {
    args.push('--restructure-off');
  }

  return execa.stdout(CSSO_BIN, args, {
    encoding: null,
    input: Buffer.from(data)
  });
}

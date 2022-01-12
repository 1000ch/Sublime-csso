import {Buffer} from 'node:buffer';
import getStdin from 'get-stdin';
import csso from 'csso';

getStdin()
  .then(data => minify(data))
  .then(data => process.stdout.write(data));

function minify(data) {
  const {restructure} = JSON.parse(process.argv[2]);
  const css = Buffer.isBuffer(data) ? data.toString() : data;

  return csso.minify(css, {
    restructure
  }).css;
}

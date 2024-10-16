import {Buffer} from 'node:buffer';
import getStdin from 'get-stdin';
import {minify} from 'csso';

getStdin()
  .then(data => applyCsso(data))
  .then(data => process.stdout.write(data));

function applyCsso(data) {
  const {restructure} = JSON.parse(process.argv[2]);
  const css = Buffer.isBuffer(data) ? data.toString() : data;

  return minify(css, {
    restructure
  }).css;
}

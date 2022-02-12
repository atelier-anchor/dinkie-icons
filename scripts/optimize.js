const fs = require('fs');
const { optimize } = require('svgo');

const icons = require('../data/icons.json');

const iconsDict = Object.assign(
  {},
  ...icons.map((icon) => {
    const path = `<path d="${icon.path}" />`;
    const optimizedPath = optimize(path).data;
    return {
      [icon.name]: {
        unicode: icon.unicode,
        size: icon.size,
        path: optimizedPath.replace(/^\<path d="(.+)"\/\>$/g, '$1'),
      },
    };
  })
);

const jsonSpace = null;
fs.writeFile('data/icons.min.json', JSON.stringify(iconsDict, null, jsonSpace), (err) => {
  if (err) throw err;
  console.log('Complete!');
});

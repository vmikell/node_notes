const path = require('path')

// returns path seperator
console.log(path.sep);
// returns file path
const filePath = path.join('/content','subfolder', 'test.txt')
console.log(filePath);
// returns the name of the base file
const base = path.basename(filePath)
console.log(base);
// returns complete file path
const absolute = path.resolve(__dirname, '/content','subfolder', 'test.txt')
console.log(absolute);
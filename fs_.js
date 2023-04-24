const { readFileSync, writeFileSync, read }=require('fs');

const reads=readFileSync(`./first.txt`,'ascii');
console.log(reads);
const strings='here is the data that i want to store in the file \n yeahhh'
writeFileSync('new.txt',strings);
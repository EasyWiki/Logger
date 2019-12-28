let test = process.argv[2];
test = test == undefined ? 'default' : test;

require('./' + test);
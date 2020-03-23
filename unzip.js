// UNZIP FILE: node unzip

const gzipy = require('gzipy');
const FILE_ROUTE = './';

gzipy.decompress(FILE_ROUTE, './admin-panel.component.scss', function(error)
{
  if(error){  'Something went wrong...'  } 

  console.log('File decompressed');
});
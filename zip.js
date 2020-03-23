// GZIP FILE: node zip

const gzipy = require('gzipy');
const FILE_ROUTE = './';

gzipy.compress(FILE_ROUTE, 'admin-panel.component.scss.gz', function(error)
{
  if(error){  'Something went wrong...'  } 

  console.log('File compressed!');
});
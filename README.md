# json2string
Node JS package for simplifying reading of data from JSON file and output a json string.


This requires fs module to read json file and path module.

Example usage :

var JSON2String=require('json2string');
var filepath=path.join(__dirname, 'jsonfile.json');

var json_string=JSON2String.json2string(filepath);

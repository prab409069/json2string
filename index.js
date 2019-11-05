const fs=require('fs');
exports.json2string=function(jsonFilePath)
{   
    var data=fs.readFileSync(jsonFilePath, 'utf8', (err, data) => 
    {        
        if (err) throw err;
        var JSONItems=JSON.parse(data);
        var JSON2string=JSON.stringify(JSONItems); 
        return JSON2string;        
    });
    return data;
};
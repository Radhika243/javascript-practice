const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
(async () => {
  try {
    //Implementation goes here
    const sourceFilePath = 'src.txt';
    const destFilePath = 'dest.txt';
    fs.readFile(sourceFilePath,'utf-8',(err,data)=>{
        if(err){
            console.error(`error in reading : ${sourceFilePath}`)
        }else{
            fs.writeFile(destFilePath,data,'utf-8',(err)=>{
                if(err){
                console.error(`error in writing : ${destFilePath}`)
                }else{
                    console.log('Data moved from src to dest');
                }
            });
        }
    });
    
   
  } catch (err) {
    console.log(err);
  }
})();

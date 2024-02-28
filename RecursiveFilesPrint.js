const fs=require('fs')
const path=require('path');
const DisplayFiles=(folder)=>{
fs.readdir(folder,(err,files)=>{
    if(!err){
        files.forEach((file)=>{
           fs.stat(path.join(folder,file),(erro,statsOfFile)=>{
            if(erro) console.log(erro);
            else {
                 if(statsOfFile.isDirectory())
                 {
                     console.log(`Directory: ${file}`);
                     DisplayFiles(path.join(folder,file));
                 }
                 else console.log(file);
            }
           })
        })
    }
    else throw err;
})
}
DisplayFiles(__dirname);
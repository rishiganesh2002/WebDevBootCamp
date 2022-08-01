const fs = require('fs');

const folderName = process.argv[2] || "project";
fs.mkdirSync(folderName);
fs.writeFileSync("${folderName}/app.js", "");
fs.writeFileSync(`${folderName}/app.js`, "");
fs.writeFileSync(`${folderName}/app.css`, "");

// fs.mkdirSync('Dogs', {recursive:true}, (err)=>{
//     console.log("in the callback");
//     if(err) throw err;
// })

// console.log("After MkDir in the file");

// const os = require("os"); // import inbuilt package
// console.log("Free memory",os.freemem()/1024/1024/1024)
// console.log("Total memory",os.totalmem()/1024/1024/1024)
// console.log("Version",os.version())
// console.log("CPU",os.cpus())

// const fs = require("fs")
// const quote = "<h1>Consistency is the key to success</h1>"
// fs.writeFile("./awesome.html",quote,(err)=>{
//     console.log(err);
//     console.log("Finished writing!!!")
// })
const [,,noOfFiles] = process.argv;
const fs = require("fs")
const path = require('path');
const quote2 = "Live more, worry less 😊"
fs.mkdir(path.join(__dirname,'backup'),(err)=>{
    //  console.log(err);
     console.log("Directory created successfully")
})
for(let i = 1;i<=noOfFiles;i++)
{
    fs.writeFile(`./backup/text-${i}.html`,quote2,(err)=>{     
        // console.log(err);
        console.log(`Finished writing!!! text-${i}.html`)  
    })
}

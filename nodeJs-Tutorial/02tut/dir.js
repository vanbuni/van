const fs = require('fs')

//Create dir if not exists
if (!fs.existsSync('./new')){
    fs.mkdir('./new', (err)=>{
        if (err) throw err;
        console.log('Directory created');
    })
}

//Delete dif if dir exists
if (fs.existsSync('./new')){
    fs.rmdir('./new', (err)=>{
        if (err) throw err;
        console.log('Directory removed');
    })
}


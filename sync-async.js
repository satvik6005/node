const {readFile, writeFile}=require('fs');

console.log('start')
readFile('./new.txt','utf-8',(err,result)=>{
    if (err)
    {
        console.log(err)
        return
    }
    const second=result
    writeFile('./first.txt',second,(err,result)=>{
        if(err)
        {
            console.log(err)
        return
        }
        console.log('done with this task')

    })
})
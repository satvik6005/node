// const {readFile, writeFile}=require('fs');

// console.log('start')
// readFile('./new.txt','utf-8',(err,result)=>{
//     if (err)
//     {
//         console.log(err)
//         return
//     }
//     const second=result
//     writeFile('./first.txt',second,(err,result)=>{
//         if(err)
//         {
//             console.log(err)
//         return
//         }
//         console.log('done with this task')

//     })
// })


console.log("starting everything")



    

async function fun()
{
    let i=0
    while (i<=1)
    {
        console.log('i am running');
        i+=1
        await setTimeout(()=>{
            console.log("")
        },1)
    }

}
fun()
console.log("i am running before")
console.log("finished")
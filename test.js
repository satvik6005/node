console.log("hello world");
const res=require('./module');
console.log(res.name);
const arr=[]
for(let i=0;i<10;i++)
{
    arr.push(new Array)
    for(let j=0;j<10;j++)
    {
        arr[i].push(j)
    }
}
console.log(arr)

function fib(i)
{
    if(i==0||i==1)
    return i
    else
    return fib(i-1)+fib(i-2)
}
const k = (arr) =>{
arr[0][0]=125
}
console.log(fib(4))
const arr2=new Array(new Array(1,2,3),new Array(1,2,3,4))
console.log(arr2)
k(arr)
console.log(arr)

const s='satvik'
console.log(s[2])
s[2]='g'
console.log(s)

if ('g' in s)
{
    console.log(s)
}
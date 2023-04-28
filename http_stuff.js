const http=require('http'); 
const server=http.createServer()
server.on('request',(req,res)=>
{
    if(req.url==='/')
    {
        res.write('this is the homepage')
        res.end()
    }
    if(req.url==='/somethingelse')
    {
        res.write('<h1><a href="/">back home</a></h1>')
        res.end()
    }


})
server.listen(5000)

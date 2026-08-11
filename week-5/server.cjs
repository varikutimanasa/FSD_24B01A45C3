const express=require('express');
const app=express();
const PORT=3000;
app.get('/',(req,res)=>{
    res.send(`<h1> Welcome SVECW</h1><p> This is the HomePage.</p>`);

});
app.get('/about',(req,res)=>{
    res.send('This server was built as a exercise for Express.js.');
});
app.get('/api/status',(req,res)=>{
    res.json({
        active:true,
        version:"10.0",
        message: "The server is responding"
    });
});
app.listen(PORT,()=>{
    console.log(`Success server is running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server.')
});
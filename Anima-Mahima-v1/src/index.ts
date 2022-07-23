import express from 'express'
import resizeImages from './api/images/images';

const app = express();
const port = 3000;

app.listen(port, ()=> {
    console.log('server started...');
    
})
//resize images endpoint
app.get('/api/images', resizeImages, (req,res)=>{
    res.send(req.query);
} )

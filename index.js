
const app=require('./app');
const config=require("./config/config");
const port=config.app.port;






app.listen(port, async ()=>{
    console.log(`Server is running successsfully at http://localhost:${port}`);
    
})
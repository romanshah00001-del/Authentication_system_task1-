const express=require("express");
const app = express ();
const PORT = 5000;
app.get ("/",(req,res)=>{ res.send ("well come to hci an cg lab");

});
app.listen(PORT,
    ()=>{console.log(`server running at https://localhost:${PORT}`);
    });
const express=require("express")
const db=require("../db")

const router=express();

router.get("/", (request, response)=>
{
    var connection = db.connect();
    const query= "select * from Emp"

    connection.query(query, (err,data)=>
    {
        if(err==null)
        {
            response.send(JSON.stringify(data));
        }
        else
        {
            response.send(JSON.stringify(err.message));
        }
    })
    connection.end();

});


router.post("/", (request, response)=>
{
    var connection = db.connect();
    const{No, Name, Age}=request.body;
    const query= `insert into Emp values(${No},'${Name}', ${Age})`;
    connection.query(query, (err,data)=>
    {
         if(err==null)
        {
            response.send(JSON.stringify(data));
        }
        else
        {
            response.send(JSON.stringify(err.message));
        }
    })
    connection.end();

});

module.exports= router;
import express from "express";  

const app = express(); 

const PORT = 2020;  

app.use("/", (req, res) => {  
    res.status(200).json({
        message: "hello world",  
    });
});


app.use("*", (req, res) => {  
    res.status(404).json({
        message: "not found",  
    });
});


app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);  
});
import express from 'express'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send("API is working")
})


app.post('/bfhl', (req, res) => {
  const data = req.body.data;
  const response = {
    is_success: true,
    user_id: "saurabh_shukla_13042004",
    email: "saurabh1258.be21@chitakrauniversity.edu.in",
    roll_number: "2111981258",
    odd_numbers: data.filter(num => num % 2 !== 0),
    even_numbers: data.filter(num => num % 2 === 0),
    alphabets: data.filter(char => /[a-zA-Z]/.test(char)).map(char => char.toUpperCase())
  };
  
  res.json(response);
});




app.listen(5000,()=>{
    console.log("Server is running");
})
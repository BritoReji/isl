import axios from 'axios'
import express from 'express';
import cors from 'cors'


const app = express();
app.use(cors())
var  gldata;

const get_data=()=>{
    axios.get('https://www.indiansuperleague.com/football/live/india_sl_stats/json/59458.json').then((res)=>{
       
          gldata = res.data
    })
   
}
setInterval(get_data,3000)

app.get('/isl',(req,res)=>{
    res.json(gldata)
})


app.listen(3002,()=>{
    console.log('http://localhost:3001');
})

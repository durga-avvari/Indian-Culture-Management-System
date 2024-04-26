const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')
const bcrypt = require('bcrypt')

const app = new express();
app.use(express.json());


app.use(cors());

const client = new MongoClient('mongodb+srv://admin:admin@cluster0.foxkn2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
client.connect();
const db = client.db('management1')
const col = db.collection('user')

//localhost:8081/home

app.get('/Home', (req, res) => {
    res.send("It is a Home page - New page")
})


app.post('/insert', async (req, res) =>{
    req.body.password = await bcrypt.hash(req.body.password, 5)
    console.log(req.body);
    col.insertOne(req.body);
    res.send("Data Received")
})


app.post('/login',async (req, res)=>{
    const { email, password } = req.body;
    console.log(req.body)
    const user = await col.findOne({ email });
    console.log(user.email,user.password,password)
    if(!user || !(password===user.password)) {
    return res.status(401).json({ message: 'invalid email or password'})
}
const token = jwt.sign(user, secretkey, {algorithm: algorithm, expiresIn: '1m' });
res.json({ username: user.name, token: token });
});


app.listen(8082);
console.log ("Server Running");
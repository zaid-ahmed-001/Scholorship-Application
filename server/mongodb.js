const mongoose=require ("mongoose")

mongoose. connect ("mongodb://localhost:27017/User")
.then(()=>{ 
    console.log ("mongodb connected");
})
.catch(()=>{
console. log("failed to connect");
})

const LogInSchema = new mongoose.Schema({
    UserID:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})

const collection = new mongoose.model("collection1",LogInSchema)

module.exports = collection
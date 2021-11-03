const express = require('express')
const router = express.Router();
const userModel = require('../Model/userModel')
const cors = require('cors')
const app = express();
app.use(cors());
router.get('/getData',async(req,res) =>{
    console.log('====================================')

    const data = await userModel.find();
    res.json(data);
}); 
router.post('/addData', async (req,res) =>{
    console.log("call2",req.body);
    const user = new userModel({
        firstName:req.body.firstName
    })
    try{
       const val = await user.save()
       res.json(val)
    }catch(err){
        console.log(err);
    }
});
router.put('/:id', async (req,res) =>{
    console.log(req.params.id);
    var user = {
        firstName:req.body.firstName

    }
    try{
    const val = await userModel.findByIdAndUpdate(req.params.id,{$set:user},{ new: true })
    console.log(val);
    res.json(val)
    }catch(err){
        console.log(err);
    }
});
router.delete('/:id', async (req,res) =>{
    console.log(req.params.id);
    try{
    const val = await userModel.findByIdAndDelete(req.params.id);
    console.log(val);
    res.json(val)
    }catch(err){
        console.log(err);
    }
});
module.exports = router;

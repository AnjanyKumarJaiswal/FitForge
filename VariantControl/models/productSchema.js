const mongoose = require('mongoose');


//shirt schema contains size,color,material
const shirtSchema = new mongoose.Schema({
    shirtsize:{
        type: String,
        required: true
    },
    shirtcolor: {
        type: String,
        required: true,
    },
    shirtmaterial:{
        type: String,
        required: true
    }
    
},{timestamps: true});

const Shirts = mongoose.model('shirt',shirtSchema);


//pantschema contains size,color,material
const pantSchema = new mongoose.Schema({
    wristsize:{
        type:String,
        required: true
    },
    pantcolor:{
        type: String,
        required: true
    },
    pantmaterial:{
        type: String,
        required: true
    }
},{timestamps:true});

const Pant = mongoose.model('pant',pantSchema);


//Shoe Schem contains size , color and material
const shoeSchema = new mongoose.Schema({
    shoesize:{
        type: String,
        required: true
    },
    shoecolor:{
        type: String,
        required: true
    },
    shoematerial:{
        type:String,
        required: true
    }
},{timestamps:true});

const Shoe = mongoose.model('shoe',shoeSchema);


//exporting all 
module.exports = {
    Shirts,
    Pant,
    Shoe
};
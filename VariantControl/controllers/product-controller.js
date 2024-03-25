const {Shirts,Pant,Shoe} = require('../models/productSchema');


//create shirt product
async function handleToCreatenewShirtProduct(req,res){
    const body = req.body;
    if (
        !body.shirtsize &&
        !body.shirtcolor &&
        !body.shirtmaterial
    ) return res.status(404).json({err:"You need to fill the required things for the product"})
   try{ 
        const shirtproduct = await Shirts.create({
        shirtsize: body.shirtsize,
        shirtcolor: body.shirtcolor,
        shirtmaterial: body.shirtmaterial
    })
    return res.status(201).json({success: "you Successfully created a new product!!"})
} catch(err){
    return res.status(404).json({err: "You ran into an error!! didnt created the shirt product"})
} 
}

//Fetch shirt product
async function getShirtProductDetailsById(req,res){
    const productid = req.params.productid;
    try{
    const productfound = await Shirts.findById(productid);
    return res.json(productfound).status(200);
    } catch(error){
        return res.json({error: "Id not found ! pls RE-check"});
    }
}
//all shirt products
async function getShirtProducts(req,res){
    const body = req.body;
    const allshirtproducts = await Shirts.find({});
    return res.json(allshirtproducts)
}

// Create a new product in pants
async function handleTocCreatenwPantProduct(req,res){
    const body = req.body;
    if (
        !body.wristsize &&
        !body.pantcolor &&
        !body.pantmaterial
    ) return res.status(404).json({err:"You need to fill the required things for the product"})
    const pandproduct = await Pant.create({
        wristsize: body.wristsize,
        pantcolor: body.pantcolor,
        pantmaterial: body.pantmaterial
    })
}

//get all product of pants by id
async function getPantProductDetailsById(req,res){
    const productid = req.params.productid;
    try{
        const productfound = await Pant.findById(productid);
    return res.json(productfound).status(200);
    } catch(error){
        return res.json({error: "Id not found ! pls RE-check"});
    }
}
//all pant products
async function getPantProducts(req,res){
    const body = req.body;
    const allPantproducts = await Pant.find({});
    return res.json(allPantproducts)
}

// Create a new product in shoes
async function handleTocCreateShoeProduct(req,res){
    const body = req.body;
    if (
        !body.shoesize &&
        !body.shoecolor &&
        !body.shoematerial
    ) return res.status(404).json({err:"You need to fill the required things for the product"})
    const pandproduct = await Shoe.create({
        shoesize: body.shoesize,
        shoecolor: body.shoecolor,
        shoematerial: body.shoematerial
    })
}
//get all product of shoes by id
async function getShoeProductDetailsById(req,res){
    const productid = req.params.productid;
    try{
        const productfound = await Shoe.findById(productid);
    return res.json(productfound).status(200);
    } catch(error){
        return res.json({error: "Id not found ! pls RE-check"});
    }
}
//all shoe products
async function getShoeProducts(req,res){
    const body = req.body;
    const allshoeproducts = await Shoe.find({});
    return res.json(allshoeproducts)
}

//all products fetched here
async function getallproducts(req,res){
    try { 
    const allshirts = await Shirts.find({});
    const allpants = await Pant.find({});
    const allshoes = await Shoe.find({});
    return res.json(
        {
            allshirts: allshirts,
            allpants:allpants,
            allshoes:allshoes
        });
    }catch(error){
        return res.json({error:"The DB is empty!!"})
    }
}

module.exports = {
    handleToCreatenewShirtProduct,
    handleTocCreatenwPantProduct,
    handleTocCreateShoeProduct,
    getShirtProductDetailsById,
    getPantProductDetailsById,
    getShoeProductDetailsById,
    getallproducts,
    getShirtProducts,
    getPantProducts,
    getShoeProducts
};
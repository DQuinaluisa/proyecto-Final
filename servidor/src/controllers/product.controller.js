import  Product  from '../models/Product'

export const createProduct = async(req, res) => {
    const { name, description, price  } = req.body
  const newProduct =  new Product ({
        name, description, price
    })
    const productSave = await newProduct.save()
    res.status(201).json(productSave)
}

export const getProduct = async (req, res) => {
    const products = await Product.find().sort({
       $natural : -1
    })
    
    res.status(200).json(products)
}

export const getProductById = async (req, res) => {
   const product = await Product.findById(req.params.productId)
   res.status(200).json(product)
}

export const deleteProduct = async (req, res) => {
    const deleteProduct = await Product.findByIdAndDelete(req.params.productId)
    res.status(204).json()
}

export const updateProduct = async (req, res) => {
   const updateProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
       new : true
   })
   res.status(200).json(updateProduct) 
}
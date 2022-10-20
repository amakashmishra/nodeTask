
const Product = require("../models/product.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errHandlar.js");

// Creating Products -- Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })  
});


// Get All Products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            products,

        })
    } catch (error) {
        console.log(error);
    }
});


// Update Products
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id);


        if (!product) {
            return next(new ErrorHander("product not found", 404))
        }

        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        res.status(200).json({
            success: true,
            product
        })
    } catch (error) {
        console.log(error);
    }
}
)

// Delete Products
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return next(new ErrorHander("product not found", 404))
        }

        await Product.findByIdAndDelete(req.params.id, req.body)


        res.status(200).json({
            success: true,
            massage: "Product deleted sussfully",
        })
    } catch (error) {
        console.log(error);
    }
})



// Get One Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return next(new ErrorHander("product not found", 404))
        }

        res.status(200).json({
            success: true,
            product,
        });
    } catch (error) {
        console.log(error);
    }
}
)
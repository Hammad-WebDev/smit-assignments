import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/productModel.js';

const productRoutes = express.Router();

const isIdValidate = (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            message: 'invalid product id',
            product: null,
            code: 400
        });
    }
    next();
}

// GET PRODUCTS 
productRoutes.get('/', async (req, res) => {
    try {
        let products = await Product.find();
        res.status(200).json({
            message: 'all products fetched successfully',
            products,
            code: 200
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            products: null,
            code: 500
        })
    }
})

// GET PRODUCT BY ID
productRoutes.get('/:id', isIdValidate, async (req, res) => {
    const { id } = req.params;

    try {
        let product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({
                message: "product with this id does not exist",
                product: null,
                code: 404
            })
        }

        res.status(200).json({
            message: 'product fetched successfully',
            product,
            code: 200
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            product: null,
            code: 500
        })
    }
})

// CREATE PRODUCT 
productRoutes.post('/', async (req, res) => {
    const { title, description, price } = req.body || {};

    if (!title || !description || !price) {
        return res.status(400).json({
            message: 'bad request — missing fields',
            product: null,
            code: 400
        })
    };

    try {
        let newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json({
            message: 'product created successfully',
            product: newProduct,
            code: 201
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            product: null,
            code: 500
        })
    }
})

// DELETE PRODUCT 
productRoutes.delete('/:id', isIdValidate, async (req, res) => {
    const { id } = req.params;

    try {
        let deleteProduct = await Product.findByIdAndDelete(id);

        if (!deleteProduct) {
            return res.status(404).json({
                message: "product with this id does not exist",
                product: null,
                code: 404
            })
        }

        res.status(200).json({
            message: 'product deleted successfully',
            product: deleteProduct,
            code: 200
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            product: null,
            code: 500
        })
    }
})

// UPDATE PRODUCT 
productRoutes.put('/:id', isIdValidate, async (req, res) => {
    const { id } = req.params;
    const { title, description, price } = req.body || {};

    if (!title && !description && !price) {
        return res.status(400).json({
            message: 'bad request — at least one field required',
            product: null,
            code: 400
        });
    }

    try {
        let updatedProduct = await Product.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({
                message: "product with this id does not exist",
                product: null,
                code: 404
            })
        }

        res.status(200).json({
            message: 'product updated successfully',
            product: updatedProduct,
            code: 200
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            product: null,
            code: 500
        })
    }
})

export default productRoutes;
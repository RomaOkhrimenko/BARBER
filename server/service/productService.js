const Product = require('../model/productModel')
const ApiFeatures = require('../utils/apiFeatures')
const ApiError = require('../exception/apiError')

class ProductService {
    async getAllProduct(query, resultPerPage) {
        const productsCount = await Product.countDocuments()

        const apiFeature = await new ApiFeatures(Product.find(), query)
            .search()
            .filter()

        let products = await apiFeature.query

        let filteredProductsCount = products.length
        apiFeature.pagination(resultPerPage)

        products = await apiFeature.query.clone()

        const productData = {
            products,
            productsCount,
            filteredProductsCount
        }

        return productData
    }

    async createProduct(body) {
        const product = await Product.create(body)

        return product
    }

    async getSingleProduct(id) {
        const product = await Product.findById(id)

        if(!product) {
            throw ApiError.BadRequest('product not found')
        }

        return product
    }

    async deleteProduct(id) {
        const product = await Product.findById(id)

        if(!product) {
            throw ApiError.BadRequest('product not found')
        }

        await product.remove()

        return product
    }
}

module.exports = new ProductService()
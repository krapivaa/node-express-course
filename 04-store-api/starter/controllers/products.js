const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    //const search = 'wooden'
    const products = await Product.find({price: {$gt: 30}})
    .sort('name')
    .select('name price') 
    //pagination  
    .limit(10)
    .skip(2)
   // throw new Error('testing async errors')
    res.status(200).json({products, nbHits: products.length})
}

const getAllProducts = async (req, res) => {
    //console.log(req.query)
    const {featured, company, name, sort, fields, numericFilters} = req.query
    const queryObject = {}

    //fearured
    if (featured) {
        queryObject.featured = featured === 'true' ? true: false
    }
    //company
    if (company) {
        queryObject.company = company
    }
    //name
    if (name) {
        queryObject.name = {$regex: name, $options: 'i'} 
    }
    //
    if (numericFilters) {
        const operatorMap = {
            '>':'$gt',
            '>=':'$gte',
            '=':'$eq',
            '<':'$lt',
            '<=':'$lte'
        }
        const regEx = /\b(<|<=|=|>|>=)\b/g
        let filters = numericFilters.replace(
            regEx, 
            (match) =>`-${operatorMap[match]}-`
            )
        const options = ['price', 'rating']
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-')
            if(options.includes(field)) {
                queryObject[field] = {[operator]: Number(value) }
            }
        })

        console.log(filters)  
        console.log(numericFilters)  
    }

    console.log(queryObject)

    let result = Product.find(queryObject)
    if (sort) {
        //products = products.sort()
        //console.log(sort)
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    } else {
        result = result.sort('createdAt')
    }

    if (fields) {
        const fieldList = fields.split(',').join(' ')
        result = result.select(fieldList) 
    }
    //pagination
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10

    const skip = (page -1) * limit
    result = result.skip(skip).limit(limit)
    // 23 items - 4 pages - 7 7 7 2 (left) - pagination

    const products = await result
    res.status(200).json({products, nbHits: products.length})
}

module.exports = {getAllProductsStatic, getAllProducts}
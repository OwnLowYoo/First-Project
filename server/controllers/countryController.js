const {Country} = require ('../models/models')
//const ApiError = require ('../error/AppiError')
class CountryController {
    async create(req, res) {
        const {name} = req.body
        const country = await Country.create({name})
        return res.json(country)
    }

    async getAll(req, res) {
        const countries = await Country.findAll()
        return res.json(countries)
    }

}

module.exports = new CountryController()

const uuid = require ('uuid')
const path = require ('path')
const {Tour,TourInfo} = require ('../models/models')
const ApiError = require ('../error/AppiError')
class TourController {
    async create(req, res,next) {
        try
        {
            let {name, price, countryId, typeId, info} =req.body
            const {img} = req.files
            let fileName = uuid.v4()+ ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const tour = await Tour.create({name, price, countryId, typeId, img: fileName})

            if(info){
                info = JSON.parse(info)
                info.forEach(i =>
                TourInfo.create({
                    title: i.title,
                    description: i.description,
                    tourId: tour.id
                }))
            }

            return res.json(tour)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {countryId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let tours;
        if(!countryId && !typeId){
            tours = await Tour.findAndCountAll({limit, offset})

        }
        if(countryId && !typeId){
            tours = await Tour.findAndCountAll({where:{countryId}, limit, offset})

        }
        if(!countryId && typeId){
            tours = await Tour.findAndCountAll({where:{typeId}, limit, offset})

        }
        if(countryId && typeId){
            tours = await Tour.findAndCountAll({where:{typeId, countryId}, limit, offset})
        }
        return res.json(tours)
    }
    async getOne(req, res) {
        const{id} = req.params
        const tour = await Tour.findOne(
            {where:{id},
            include: [{model: TourInfo, as: 'info'}]
            },
        )
        return res.json(tour)
    }

}

module.exports = new TourController()

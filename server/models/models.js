const sequelize = require ('../db')
const {DataTypes} = require ('sequelize')
const User = sequelize.define('user', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email:{type: DataTypes.STRING, unique: true},
    password: {type:DataTypes.STRING},
    role:{type:DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

})

const BasketTour = sequelize.define('basket_tour', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Tour = sequelize.define('tour', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type:DataTypes.STRING, unique: true, allowNull: false},
    price:{type:DataTypes.INTEGER,allowNull: false},
    rating:{type:DataTypes.INTEGER, defaultValue: 0},
    img:{type:DataTypes.STRING, allowNull:false},
})

const Type = sequelize.define('type', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type:DataTypes.STRING, unique:true, allowNull: false},
})

const Country = sequelize.define('country', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type:DataTypes.STRING, unique:true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate:{type:DataTypes.INTEGER, allowNull: false},
})

const TourInfo = sequelize.define('tour_info', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type:DataTypes.STRING, allowNull: false},
    description:{type:DataTypes.STRING, allowNull: false},
})


const TypeCountry = sequelize.define('type_country', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketTour)
BasketTour.belongsTo(Basket)

Type.hasMany(Tour)
Tour.belongsTo(Type)

Country.hasMany(Tour)
Tour.belongsTo(Country)

Tour.hasMany(Rating)
Rating.belongsTo(Tour)

Tour.hasMany(BasketTour)
BasketTour.belongsTo(Tour)

Tour.hasMany(TourInfo)
TourInfo.belongsTo(Tour)

Type.belongsToMany(Country, {through: TypeCountry})
Country.belongsToMany(Type, {through: TypeCountry})

module.exports = {
    User, Basket, BasketTour, Tour, Type, Country, Rating, TypeCountry, TourInfo
}





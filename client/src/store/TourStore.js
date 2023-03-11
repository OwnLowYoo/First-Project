import {makeAutoObservable} from "mobx";

export default class TourStore {
    constructor(){
        this._types=[
            {id: 1, name: 'Групповые туры'},
            {id: 2, name: 'Индивидуальные туры'},
            {id: 3, name: 'Оздоровительные туры'},
            {id: 4, name: 'Профессионально-деловые туры'}
        ]
        this._countries = [
            {id: 1, name: 'Испания'},
            {id: 2, name: 'Мальдивы'},
            {id: 3, name: 'Германия'},
            {id: 4, name: 'Будапешт'},

        ]
        this._tours = [
            {id: 1, name: 'Таинственная Испания', price: 1200, rating: 0, img: `https://bolerotour.ru/upload/pl_plugin_8/1_5b06645948270.jpg`},
            {id: 2, name: 'South Palms', price: 14000, rating: 0, img: `https://cdn2.tu-tu.ru/image/pagetree_node_data/2/ba18db18dd9985885bef28c0cc9be7d1/`},
            {id: 3, name: 'Французские провинции', price: 6000, rating: 0, img: `https://tutu.ru/file/4/2ce7b3ddef283640a6da6a8d19341cfe/`},
            {id: 4, name: 'BANDOS MALDIVES', price: 25000,rating: 0, img: `https://deluxe.voyage/useruploads/articles/article_3e77b92c1c.jpg`},
            {id: 5, name: 'Города испании', price: 18000,rating: 0, img: `https://belvaping.com/wp-content/uploads/2022/07/Ispaniya-mozhet-vvesti-dopolnitelnye-ogranicheniya-na-prodazhu-i-rasprostranenie-vejpov-1000x562.jpg`},
            {id: 6, name: 'Мальдивские острова', price: 9000,rating: 0, img: `https://content.skyscnr.com/m/0192fe140972c895/original/GettyImages-153638820_doc.jpg?resize=1800px:1800px&quality=100`}
        ]
        this._selectedType = {}
        this._selectedCountry = {}
        makeAutoObservable(this)
    }
    setTypes(types){
        this._types = types
    }
    setCountries(countries){
        this._countries = countries
    }
    setTours(tours){
        this._tours = tours
    }
    setSelectedType(type){
    this._selectedType = type
    } setSelectedCountry(country){
    this._selectedCountry = country
    }
    get types(){
        return this._types
    }
    get countries(){
        return this._countries
    }
    get tours(){
        return this._tours
    } get selectedType(){
        return this._selectedType
    }
     get selectedCountry(){
        return this._selectedCountry
    }
}
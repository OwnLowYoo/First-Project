import {makeAutoObservable} from "mobx";

export default class TourStore {
    constructor(){
        this._types=[
            {id: 1, name: 'Групповые туры'},
            {id: 2, name: 'Индивидуальные туры'}
        ]
        this._countries = [
            {id: 1, name: 'Испания'},
            {id: 2, name: 'Мальдивы'}
        ]
        this._tours = [
            {id: 1, name: 'Таинственная Испания', price: 1200, rating: 0, img: `088ab61d-bf4b-46a8-a04b-b1770e99a5f6.jpg`},
            {id: 2, name: 'South Palms', price: 14000, rating: 0, img: `499e26dc-5a88-4443-a487-95d5437111de.jpg`},
            {id: 3, name: 'Жемчужины французских провинций', price: 6000, rating: 0, img: `4d4e1965-b21a-48de-acc5-4313c9d26d48.jpg`},
            {id: 4, name: 'BANDOS MALDIVES', price: 20000,rating: 0, img: `75ead56a-7033-4a03-be37-c02da3221eca.jpg`}
        ]

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
    get types(){
        return this._types
    }
    get countries(){
        return this._countries
    }
    get tours(){
        return this._tours
    }
}
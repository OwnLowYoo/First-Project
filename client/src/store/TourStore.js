import {makeAutoObservable} from "mobx";

export default class TourStore {
    constructor(){
        this._types=[]
        this._countries = []
        this._tours = []
        this._selectedType = {}
        this._selectedCountry = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
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
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedCountry(country){
        this.setPage(1)
    this._selectedCountry = country
    }
    setPage(page){
        this._page = page
    }
    setTotalCount(count){
        this._totalCount = count
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
    get totalCount(){
        return this._totalCount
    }
    get page(){
        return this._page
    }
    get limit(){
        return this._limit
    }
}
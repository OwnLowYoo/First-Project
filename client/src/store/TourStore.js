import {makeAutoObservable} from "mobx";

export default class TourStore {
    constructor(){
        this._types=[]
        this._countries = []
        this._tours = []
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
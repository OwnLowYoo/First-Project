import {$authHost, $host} from "./index";

export const createType = async (type) =>{
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () =>{
    const {data} = await $host.get('api/type')
    return data

}
export const createCountry = async (country) =>{
    const {data} = await $authHost.post('api/country', country)
    return data
}

export const fetchCountries = async () =>{
    const {data} = await $host.get('api/country')
    return data

}
export const createTour = async (tour) =>{
    const {data} = await $authHost.post('api/tour', tour)
    return data
}

export const fetchTours = async () =>{
    const {data} = await $host.get('api/tour')
    return data

}
export const fetchOneTour = async (id) =>{
    const {data} = await $host.get('api/tour/' + id)
    return data

}


import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"

class HousesServices {
  async createHome(homeData) {
    let response = await api.post('/api/houses', homeData)
    let newHouse = new House(response.data)
    AppState.houses.push(newHouse)
  }
  async destroyHouse(houseId) {
    // NOTE important that the network request happens first
    // NOTE when we send a delete request, we specify which collection we want to delete the resource from, and the id of the resource we want to delete in the request URL
    // 🐕🗞️ --------> codeWorks sandbox API
    const response = await api.delete(`api/houses/${houseId}`)

    console.log('🐕🪓🏎️', response.data); // response data: 'deleted value'

    const houseIndex = AppState.houses.findIndex((house) => house.id == houseId)

    if (houseIndex == -1) throw new Error("Find index is messed up dawg")

    AppState.houses.splice(houseIndex, 1) //💂
  }
  async getHouse() {
    const response = await api.get('api/houses')
    console.log(response.data)
    const houseData = response.data.map((POJO) => new House(POJO))
    console.log(houseData)
    AppState.houses = houseData
  }

}
export const housesServices = new HousesServices()
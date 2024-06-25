import { AppState } from "../AppState.js"
import { Forming } from "../models/Form.js"
import { housesServices } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class HousesController {
  constructor() {
    this.drawForm()
    console.log('loaded')
    AppState.on('houses', this.drawHouse)
    this.getHouse()
  }
  async getHouse() {
    try {
      await housesServices.getHouse()
    } catch (error) {
      console.error(error);
    }
  }
  drawHouse() {
    let houses = AppState.houses
    let houseHTML = ''
    houses.forEach((house) => houseHTML += house.houseHTML)
    setHTML('Housing', houseHTML)
  }
  drawForm() {
    setHTML('form', Forming.someFormTemplate)
  }
  async destroyHouse(houseId) {
    try {
      // NOTE have to await Pop.confirm
      const wantsToDelete = await Pop.confirm("Are you sure that you want to delete this house?")

      if (!wantsToDelete) return //stop function


      await housesServices.destroyHouse(houseId)

      Pop.success("house was deleted!")
    } catch (error) {
      Pop.error(error) //notify user
      console.error('FAILED TO DESTROY house', error) //notify developer
    }
  }
  async createHome() {
    try {
      event.preventDefault()
      let form = event.target
      let homeData = getFormData(form)
      await housesServices.createHome(homeData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }
}
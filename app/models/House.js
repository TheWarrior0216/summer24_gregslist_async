export class House {
  constructor(data) {
    this.id = data.id
    this.bathrooms = data.bathrooms
    this.bedrooms = data.bedrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creatorId = data.creatorId
    this.creator = data.creator
  }
  get houseHTML() {
    return `
<div class="col-12 mb-3">
      <div class="car-card shadow" style="border-color: aqua ;">
        <div class="row">
          <div class="col-12 col-md-4">
            <img class="img-fluid bg-dark car-img"
              src="${this.imgUrl}"
              alt="${this.price} ${this.year}">
          </div>
          <div class="col-12 col-md-8">
            <div class="p-3">
              <h2>${this.description}</h2>
              <h2>$${this.price}</h2>
              <h3>Listed on ${this.createdAt.toLocaleString()}</h3>
              <p>Listed by ${this.creator.name}</p>
              <p>${this.description}</p>
              <buttton onClick="app.HousesController.destroyHouse('${this.id}')" class = "btn btn-rounded btn-outline-danger">Delete</buttton>
            </div>
          </div>
        </div>
      </div>
    </div>`
  }
}
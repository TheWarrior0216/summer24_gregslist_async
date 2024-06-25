class Form {
  get someFormTemplate() {
    return `
    <form onsubmit="app.HousesController.createHome()" class=" justify-content-center row ">
          <div class="col-8">
            <div class="row border shadow border-outline-black">
              <div class="col-md-6 mt-3">
                <label for="bedroom" class="form-label">Bedrooms</label>
                <input name="bedrooms" type="number" class="form-control" id="bedroom" required>
              </div>
              <div class="col-md-6 mt-3">
                <label for="bathrooms" class="form-label">Bathroom</label>
                <input name="bathrooms" type="number" class="form-control" id="bathrooms" step="0.5">
              </div>
              <div class="col-md-6">
                <label for="levels" class="form-label">Levels</label>
                <input name="levels" type="number" class="form-control" id="levels" required>
              </div>
              <div class="col-md-6">
                <label for="year" class="form-label">Year</label>
                <input name="year" type="number" class="form-control" id="year" placeholder="1900" required>
              </div>
              <div class="col-md-6">
                <label for="price" class="form-label">Price</label>
                <input name="price" type="number" class="form-control" id="price" required>
              </div>
              <div class="col-md-6">
                <label for="imgUrl" class="form-label">ImgUrl</label>
                <input name="imgUrl" type="text" class="form-control" id="imgUrl" max-length ="500">
              </div>
              <div class="col-12">
                <label for="Description" class="form-label">Add a Description</label>
                <input name="description" type="text" class="form-control" id="Description" max-length ="5000">
                <button class="btn btn-rounded btn-outline-info my-3" type="submit"> Submit </button>
              </div>
            </div>
          </div>
        </form>`
  }
}
export const Forming = new Form()
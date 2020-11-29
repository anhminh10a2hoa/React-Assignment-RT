import axios from 'axios';

let listOfProductsAndManufacturer: any = {};
let listOfProducts: any[] = [];
let listOfProductsByCategory: any = {};

export async function loadAllManufacturers(){
  // List of manufacturers
  const manufacturers = ["abiplos", "derp", "nouke", "reps", "xoon"];
  // Get all manufacturers data
  for(let m of manufacturers){
      let data = await axios.get(`https://bad-api-assignment.reaktor.com/availability/${m}`)
      listOfProductsAndManufacturer = Object.assign(listOfProductsAndManufacturer, {
        [m]: data.data.response
      })
  }
  return listOfProductsAndManufacturer;
}

export async function getAllProductsByCategory(category: string){
  // if exists listOfProductsByCategory[category] don't need to call the api
  if(listOfProductsByCategory[category]){
    return listOfProductsByCategory[category]
  }
  else {
    listOfProducts = [];
    let data = await axios.get(`https://bad-api-assignment.reaktor.com/products/${category}`, {
      headers: {
        'x-force-error-mode': 'all'
      }
    })
    data.data.map((p: any) => {
      let itemManufacturer = listOfProductsAndManufacturer[p.manufacturer];
      let valueOfProductInCategory = null;
      let status = [];
      valueOfProductInCategory = itemManufacturer.find(
        (val: any) => val.id === p.id.toUpperCase()
      );
      // Find the index of this value in listOfProductsAndManufacturer
      let index = itemManufacturer.indexOf(valueOfProductInCategory);
      // Delete this value and make the finding function loads faster next time
      itemManufacturer.splice(index, 1);
      status = valueOfProductInCategory["DATAPAYLOAD"].split('INSTOCKVALUE>');
      listOfProducts.push({
        id: p.id,
        name: p.name,
        color: p.color,
        price: p.price,
        manufacturer: p.manufacturer,
        status: status[1].replace("</", "")
      })
    })
    listOfProductsByCategory = Object.assign(listOfProductsByCategory, {
      [category]: listOfProducts
    })
    // If we have all of the product data, delete listOfProductsAndManufacturer and minimize the RAM
    if(listOfProductsByCategory["shirts"] && listOfProductsByCategory["accessories"] && listOfProductsByCategory["jackets"]){
      listOfProductsAndManufacturer = {};
    }
    return listOfProductsByCategory[category]
  }
}
import axios from 'axios';

let listOfProductsAndManufacturer: any = {};
let listOfProducts: any = [];
export async function loadAllManufacturers(){
  const manufacturers = ["abiplos", "derp", "nouke", "reps", "xoon"];
  for(let m of manufacturers){
    let data = await axios.get(`https://bad-api-assignment.reaktor.com/availability/${m}`)
    listOfProductsAndManufacturer = Object.assign(listOfProductsAndManufacturer, {
      [m]: data.data.response
    })
    if(data.data.response === 0){
      data = await axios.get(`https://bad-api-assignment.reaktor.com/availability/${m}`, {
        headers: {
          'x-force-error-mode': 'all'
        }
      })
      listOfProductsAndManufacturer = Object.assign(listOfProductsAndManufacturer, {
        [m]: data.data.response
      })
    }
  }
  return listOfProductsAndManufacturer;
}

export async function getAllProductsByCategory(category: string){
  let data = await axios.get(`https://bad-api-assignment.reaktor.com/products/${category}`, {
    headers: {
      'x-force-error-mode': 'all'
    }
  })
  data.data.map((p: any, i:number) => {
    let itemManufacturer = listOfProductsAndManufacturer[p.manufacturer];
    let datapayload = "";
    let status = [];
    datapayload = itemManufacturer.find(
      (val: any) => val.id === p.id.toUpperCase()
    )["DATAPAYLOAD"];
    status = datapayload.split('INSTOCKVALUE>');
    // listOfProducts.push(<Item key={p.id} {...p} status={status[1].replace("</", "")} />)
    listOfProducts.push({
      id: p.id,
      name: p.name,
      color: p.color,
      price: p.price,
      manufacturer: p.manufacturer,
      status: status[1].replace("</", "")
    })
  })
  return listOfProducts
}
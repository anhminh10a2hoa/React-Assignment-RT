import axios from 'axios';

export async function loadAllProducts(){
  const manufacturers = ["abiplos", "derp", "nouke", "reps", "xoon"];
  let listOfProductsAndManufacturer: any = {};
  for(let m of manufacturers){
    let data = await axios.get(`https://bad-api-assignment.reaktor.com/availability/${m}`)
    listOfProductsAndManufacturer = Object.assign(listOfProductsAndManufacturer, {
      [m]: data.data.response
    })
    if(data.data.response === 0){
      data = await axios.get(`https://bad-api-assignment.reaktor.com/availability/${m}`)
      listOfProductsAndManufacturer = Object.assign(listOfProductsAndManufacturer, {
        [m]: data.data.response
      })
    }
  }
  return listOfProductsAndManufacturer;
}
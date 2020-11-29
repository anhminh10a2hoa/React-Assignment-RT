# React Assignment 

+ Step 1: Create a function that saves all the manufacturers data

```javascript
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
```

+ Step 2: Get all of the products data when param changes then save it
+ Step 3: If the category products exist, don't need to call the api

```javascript
if(listOfProductsByCategory[category]){
  return listOfProductsByCategory[category]
}
```

+ Step 4: Else, call the API and find the id of the product equal to id in the manufacturers

```javascript
valueOfProductInCategory = itemManufacturer.find(
  (val: any) => val.id === p.id.toUpperCase()
);
```

+ Step 5: Find the index of this product above and remove it from the manufacturer data, I think it makes the finding function faster the next time.

```javascript
let index = itemManufacturer.indexOf(valueOfProductInCategory);
// Delete this value and make the finding function loads faster next time
itemManufacturer.splice(index, 1);
```

+ Step 6: Push to the products data array and assign it to the object with 3 key is the same with 3 categories of products

```javascript
listOfProducts.push({
  id: p.id,
  name: p.name,
  color: p.color,
  price: p.price,
  manufacturer: p.manufacturer,
  status: status[1].replace("</", "")
})
listOfProductsByCategory = Object.assign(listOfProductsByCategory, {
  [category]: listOfProducts
})
```

+ Step 7: If this object above has 3 categories then delete all of the manufacturer's data and minimize the Ram

```javascript
if(listOfProductsByCategory["shirts"] && listOfProductsByCategory["accessories"] && listOfProductsByCategory["jackets"]){
  listOfProductsAndManufacturer = {};
}
```

### Author: Minh Hoang - anhminh10a2hoa@gmail.com
//forEach

const forEachArray = [10, 13, 17, 20];
console.log(forEachArray);

function customCallback(element) {
  return element + 10;
}

function customForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    array[index] = callback(array[index], index, array);
  }
}
customForEach(forEachArray, customCallback);
console.log(forEachArray);

//map

const mapArray = [31, 69, 101, 1];
console.log(mapArray);

function customMap(array, callback) {
  let mappedArray = [];
  for (let index = 0; index < array.length; index++) {
    mappedArray[index] = callback(array[index], index, array);
  }
  return mappedArray;
}

console.log(customMap(mapArray, customCallback));

//filter

const filterArray = [21, 76, 10, 98];
console.log(filterArray);

function filterCallback(element) {
  return element > 50;
}

function customFilter(array, callback) {
  let filteredArray=[];
  let indexFilter=0;
 
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) {
      
      filteredArray[indexFilter] = array[index];
      indexFilter++;
    }
  }
  return filteredArray;
}

console.log(customFilter(filterArray, filterCallback));


//some
const someArray=[27,8,71,2];
console.log(someArray);

function someCallback(element){
    return element>75

}

function customSome(array,callback){
    for (let index = 0; index < array.length; index++) {
        if (callback(array[index])) {
            return true;
            
            
        }
        else{
            return false;
        }
       
        
    }
}

console.log(customSome(someArray,someCallback));

//every


const everyArray=[12,10,9,5];
console.log(everyArray);

function everyCallback(element){
    return element>5
}

function customEvery(array,callback){
    for (let index = 0; index < array.length; index++) {
        if (callback(array[index])==false) {
            return false;
            }
            
                
            
        
    }
    return true;

}

console.log(customEvery(everyArray,everyCallback));

//slice

const sliceArray=[1,13,43,54,76];
console.log(sliceArray);

function customSlice(numberOfElement,array){
    let slicedArray=[]
    let sliceIndex=0;
    
    
    if (numberOfElement<=array.length) {
        array[numberOfElement-1]=array[numberOfElement]
        
        for ( index = numberOfElement; index < array.length-1; index++) {
            array[index]=array[index+1]
            slicedArray[sliceIndex]=array[index-numberOfElement]

            
        
            
            
        }
        return slicedArray;

}}

console.log(customSlice(2,sliceArray));






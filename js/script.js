console.log('hahaha');

//objects - cars


//data types---->
//----make
//----model
//----year--numeric
//----colour
//----body
//----km's--numeric
//----transmission--boolean

var cars = [
  {
  photo:'images/c01.jpg',
  make:'toyota',
  model:'corolla',
  colour:'blue',
  body:'sedan',
  year:2015,
  kms:65861,
  trans:'auto'
  },
  {
  photo:'images/c02.jpg',
  make:'nissan',
  model:'pulsar',
  colour:'black',
  body:'sedan',
  year:2000,
  kms:210584,
  trans:'manual'
  },
  {
  photo:'images/c03.jpg',
  make:'mazda',
  model:'axela',
  colour:'black',
  body:'station wagon',
  year:2008,
  kms:154897,
  trans:'auto'
  },
  {
  photo:'images/c04.jpg',
  make:'mazda',
  model:'premacy',
  colour:'red',
  body:'van',
  year:2016,
  kms:70540,
  trans:'auto'
  },
  {
  photo:'images/c05.jpg',
  make:'ford',
  model:'falcon',
  colour:'blue',
  body:'ute',
  year:1999,
  kms:245899,
  trans:'manual'
  },
  {
  photo:'images/c06.jpg',
  make:'mitsubishi',
  model:'triton',
  colour:'red',
  body:'ute',
  year:2013,
  kms:150121,
  trans:'auto'
  },
  {
  photo:'images/c07.jpg',
  make:'suzuki',
  model:'swift',
  colour:'grey',
  body:'hatchback',
  year:2016,
  kms:190222,
  trans:'auto'
  },
  {
  photo:'images/c08.jpg',
  make:'toyota',
  model:'highlander',
  colour:'white',
  body:'suv',
  year:2014,
  kms:99451,
  trans:'manual'
  },
  {
  photo:'images/c09.jpg',
  make:'ford',
  model:'territory',
  colour:'blue',
  body:'suv',
  year:2018,
  kms:64558,
  trans:'auto'
  },
  {
  photo:'images/c10.jpg',
  make:'toyota',
  model:'avensis',
  colour:'grey',
  body:'station wagon',
  year:2019,
  kms:2100,
  trans:'auto'
  },
  {
  photo:'images/c11.jpg',
  make:'nissan',
  model:'note',
  colour:'blue',
  body:'hatchback',
  year:2008,
  kms:'121489',
  trans:'auto'
  },
  {
  photo:'images/c12.jpg',
  make:'honda',
  model:'accord',
  colour:'grey',
  body:'sedan',
  year:2006,
  kms:219876,
  trans:'auto'
  },
  {
  photo:'images/c13.jpg',
  make:'toyota',
  model:'hilux',
  colour:'black',
  body:'suv',
  year:2014,
  kms:23986,
  trans:'auto'
  },
  {
  photo:'images/c14.jpg',
  make:'mazda',
  model:'premacy',
  colour:'white',
  body:'van',
  year:2007,
  kms:'224576',
  trans:'manual'
  },
  {
  photo:'images/c15.jpg',
  make:'audi',
  model:'rs6',
  colour:'white',
  body:'station wagon',
  year:2014,
  kms:12998,
  trans:'auto'
  },
  {
  photo:'images/c16.jpg',
  make:'hyundai',
  model:'elantra',
  colour:'red',
  body:'hatchback',
  year:2001,
  kms:378996,
  trans:'manual'
  }
];


function theCars(){
for (var i = 0; i < cars.length; i++) {
console.log(cars.length);
document.getElementById('test').innerHTML
+= '<div class="card p-3 mb-2 col-3">'
+ '<img class="card-img-top shadow car-img" src="'+cars[i].photo+'"alt="car"/>'
+ '<div class="card-body">'
+ '<h3 class"card-title">'+cars[i].make+' '+cars[i].model+'</h3>'
+ '<p class"card-text">'+cars[i].colour+'</p>'
+ '<p class"card-text">'+cars[i].body+'</p>'
+ '<p class"card-text">'+cars[i].year+'</p>'
+ '<p class"card-text">'+cars[i].kms+'</p>'
+ '<p class"card-text">'+cars[i].trans+'</p>'
+ '</div>'
+ '</div>'
;}}

theCars();

// var testing = cars[i].year;
// document.getElementById('test').innerHTML = testing;

document.getElementById('yearBtn').addEventListener('click',function(){
  var temp = 0;
  // var newArray=[];
  // newArray = sortObj(cars, 'year');
  // console.log(newArray);
  // document.getElementById('test').innerHTML = testing;
  for (var i = 0; i <(cars.length-1); i++) {
    for (var j = i+1; j < cars.length; j++) {

    if (cars[i].year < cars[j].year) {
      temp= cars[i].year;


      cars[i].year = cars[j].year;
      cars[j].year = temp;
    }


  }
  }
console.log(cars);
});

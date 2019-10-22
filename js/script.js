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
  make:'toyota',
  model:'corolla',
  colour:'blue',
  body:'sedan',
  year:2015,
  kms:65861,
  trans:'auto'
  },
  {
  photo:'images/car-test.jpg',
  make:'nissan',
  model:'pulsar',
  colour:'black',
  body:'sedan',
  year:2000,
  kms:210584,
  trans:'manual'
  },
  {
  make:'mazda',
  model:'alexa',
  colour:'black',
  body:'station wagon',
  year:2008,
  kms:154897,
  trans:'auto'
  },
  {
  make:'mazda',
  model:'premacy',
  colour:'red',
  body:'van',
  year:2016,
  kms:70540,
  trans:'auto'
  },
  {
  make:'ford',
  model:'falcon',
  colour:'blue',
  body:'ute',
  year:1999,
  kms:245899,
  trans:'manual'
  },
  {
  make:'mitsubishi',
  model:'triton',
  colour:'red',
  body:'ute',
  year:2013,
  kms:150121,
  trans:'auto'
  },
  {
  make:'suzuki',
  model:'swift',
  colour:'grey',
  body:'hatchback',
  year:2016,
  kms:190222,
  trans:'auto'
  },
  {
  make:'toyota',
  model:'highlander',
  colour:'white',
  body:'suv',
  year:2014,
  kms:99451,
  trans:'manual'
  },
  {
  make:'ford',
  model:'territory',
  colour:'blue',
  body:'suv',
  year:2018,
  kms:64558,
  trans:'auto'
  },
  {
  make:'toyota',
  model:'avensis',
  colour:'grey',
  body:'station wagon',
  year:2019,
  kms:2100,
  trans:'auto'
  },
  {
  make:'nissan',
  model:'note',
  colour:'blue',
  body:'hatchback',
  year:2008,
  kms:'121489',
  trans:'auto'
  },
  {
  make:'honda',
  model:'accord',
  colour:'grey',
  body:'sedan',
  year:2006,
  kms:219876,
  trans:'auto'
  },
  {
  make:'toyota',
  model:'hilux',
  colour:'black',
  body:'suv',
  year:2014,
  kms:23986,
  trans:'auto'
  },
  {
  make:'mazda',
  model:'premacy',
  colour:'white',
  body:'van',
  year:2007,
  kms:'224576',
  trans:'manual'
  },
  {
  make:'audi',
  model:'rs6',
  colour:'white',
  body:'station wagon',
  year:2014,
  kms:12998,
  trans:'auto'
  },
  {
  make:'hyundai',
  model:'elantra',
  colour:'red',
  body:'hatchback',
  year:2001,
  kms:378996,
  trans:'manual'
  }
];

for (var i = 0; i < cars.length; i++) {
console.log(cars.length);
document.getElementById('test').innerHTML
+= '<div class="card container">'
+ '<img class="card-img-top" src="'+cars[i].photo+'"alt="car"/>'

+ '<div class="card-body">'


+ '<h3 class"card-title>'+cars[i].make+'</h3>'
+ '<h3 class"car-title">'+cars[i].model+'</h3>'
+ '<p class"card-text">'+cars[i].colour+'</p>'
+ '<p class"card-text">'+cars[i].body+'</p>'
+ '<p class"card-text">'+cars[i].year+'</p>'
+ '<p class"card-text">'+cars[i].kms+'</p>'
+ '<p class"card-text">'+cars[i].trans+'</p></br>'
+ '</div>'
+ '</div>';

}

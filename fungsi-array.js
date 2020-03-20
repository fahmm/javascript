//fungsi array reverse untuk membalikkan nilai
function panggilreverse(){
	var kota = ["jakarta","makassar","medan","bali"]
	console.log(kota)
	return kota.reverse()

	// var result = kota.reverse();
	// return result
}

console.log(panggilreverse())

//fungsi array concat

function panggilconcat(){
	var data = ["jakarta","makassar","medan","bali"]
	var kabupaten = ["maros","gowa"];

	var hasil = data.concat(kabupaten)
	return hasil
}

console.log(panggilconcat())

//fungsi array slice mengcopy var ke var lain
function slicee(){
	var isi = ['a','b','c','d','e']
	var cop =isi.slice(3,4);
	console.log(cop)
}

slicee()

//fungsi array join -> merubah array menjadi strung
function panggiljoin(){
	var kota = ["jakarta","makassar","medan","bali"]
	console.log(kota)
	var result = kota.join(",") //tanda koma bisa diganti apa saja untuk memisahkan data array
	return result
	}
	console.log(panggiljoin())

//fungsi array split -> mengubah string menjadi array
function panggilsplit(){
	var kalimat ="kita sedang belajar js"
	console.log(kalimat)
	var result = kalimat.split(" ")
	return result
}

console.log(panggilsplit())

//fungsi array index of untuk mengetahui posisi array
function panggilindexof(){
	var kota = ["jakarta","makassar","medan","bali"]
	return kota.indexOf("medan")
	}
	console.log(panggilindexof())

//perulangan array dengan foreach
function panggilforeach(){
	var isi = ['a','b','c','d','e'];
	isi.forEach(function(item,index,array){
	console.log(item);
	console.log(index);
	console.log(array);
	})
}

panggilforeach()

// function panggilPerintahMap() {
//  var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
//  dataKota.map((item, index, array) => {
//    console.log(item);
//    console.log(index);
//    console.log(array);
//  });
// }

// panggilPerintahMap();

function panggilPerintahMap() {
 var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
 dataKota.map(function(item, index, array){
   console.log(item);
   console.log(index);
   console.log(array);
 });
}

panggilPerintahMap();

//fungsi array filter mirip dengan map tapi nilai bolean yang true bakal di return
let peoples = [
{
	name : "iwan",
	gender: "male"
},
{
	name : "siti",
	gender: "female"
},
{
	name : "aso",
	gender: "male"
}
];
let female = peoples.filter(peoplea => {
	return peoplea.gender === "male"; //peoplea -> atribut
});
console.log(female)

//fungsi array every hanya mereturn nilai boelean true
let products = [
{name: "apple", type: "fruit"},
{name: "keyboard", type: "computer"},
{name: "manggo", type: "fruit"},
{name: "meja", type: "furniture"}
];
// // let everysss = products.every(tes =>{
// // 	return tes.type ==="fruit";
// });
console.log(products.every(products=>products.type === "fruit")
) 

//fungsi array some mirip every tapi ini biar ada satu yg true, bisa direturn datanya

let producta = [
{name: "apple", type: "fruit"},
{name: "keyboard", type: "computer"},
{name: "manggo", type: "fruit"},
{name: "meja", type: "furniture"}
];

console.log(producta.some(products=>products.type === "fruit")
) 

//fungsi array find dan find index
var array1 = [5,12,3,111,44];
var found = array1.find(function(element){
	return element > 100;
});

console.log(found);

var array2 = [5,12,3,111,44];

function lebihbesar(element){
	return element > 10;
}

console.log(array2.findIndex(lebihbesar));

//fungsi array reduce dan reduce right digunakan untuk mengakumulasikan atau mengurangi nilai pada array dari kiri ke kanan dan kanan ke kiri
const arrays = [1,2,3,4]  ;
const reducer = (accumulator, currentvalue) => accumulator + currentvalue;
console.log(arrays.reduce(reducer));
console.log(arrays.reduce(reducer, 5));

const arrays1 = [[01],[2,3],[3,4]].reduceRight( //membuat nilai menjadi tunggal
(accumulator, currentvalue) => accumulator.concat(currentvalue)
	); 
console.log(arrays1)

//fungsi array sort untuk mengurut array
function panggilsort(){
	var kota = ["jakarta","makassar","medan","bali"]
	console.log(kota);
	kota = kota.sort();
	return kota
}
console.log(panggilsort())
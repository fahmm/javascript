//nested array
function panggilnestedarray(){
	var datanama = [["AB","AC","AD"],
					["OK","SIP","KUY"],
					["SIAP","YUPP","GAS"]
					]
console.log(datanama.length)
console.log(datanama[1][0])
}

panggilnestedarray()

//looping array

var angka =[5,4,3,2,1];
for(var i=0; i<angka.length;i++){
	console.log(angka[i])
}

//perulangan for of
var angka =[0,1,5,2,3,4]
for (let x of angka) {
	console.log(x)
	}

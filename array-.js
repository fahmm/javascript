//shift adalah untuk menghilangkan nilai pertama array

function panggilshift(){
	var kota = ['jakarta','makassar','bandung']
	console.log(kota);
	console.log("=============")
	// kata = kota.shift();

	var kota2 = kota.shift()
	// console.log(kota2)

	return kota
}

console.log(panggilshift());

//pop untuk menghilangkan nilai akhir array

function panggilpop(){
	var kota = ['jakarta','makassar','bandung']
	console.log(kota);
	console.log("=============")
	// kata = kota.pop();

	var kota2 = kota.pop()
	// console.log(kota2)

	return kota
}

console.log(panggilpop());

//push menambah data pada nilai akhir array
function panggilpush(){
	var kota = ['jakarta','makassar','bandung']
	console.log(kota);
	console.log("=============")
	// kata = kota.shift();

	var kota2 = kota.push("kendari")
	// console.log(kota2)

	return kota
}

console.log(panggilpush());

//splice untuk menambahkan dan data pada array sesuai keinginan kita
function panggilsplice(){
	var kota = ['jakarta','makassar','bandung','aceh','mabado','ambon','bali']
	console.log(kota);
	var kota2 = kota.splice(2,3,"kendari")
	//angka pertama lokasi yang ingin ditambahkan, angka kedua jumlah data yang akan dihapus setelah penambahan data atau hanya ingin menghapus saja
	// console.log(kota2)

	return kota
}

console.log(panggilsplice());

//menambahkan data diawal array
function panggilunshift(){
	var kota = ['jakarta','makassar','bandung','aceh','mabado','ambon','bali']
	console.log(kota);
	var kota2 = kota.unshift("jayapura","kendari")
	//angka pertama lokasi yang ingin ditambahkan, angka kedua jumlah data yang akan dihapus setelah penambahan data atau hanya ingin menghapus saja
	// console.log(kota2)

	return kota
}

console.log(panggilunshift());
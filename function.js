//panggil function
function jalansatu() {
	console.log("Jalan Satu")
}

const jalandua = function (){
	console.log("Jalan Dua")
}

const jalantiga = ()=>{
	console.log("Jalan Tiga")
}

jalansatu()
jalandua()
jalantiga()

//return function
function ambil() {
	var lempar = "dterima";
	return lempar;
}
var tampung = ambil();
console.log(tampung);


//parameter
function mintadata(x,y,z) {
	console.log(x);
	console.log(y);
	console.log(z);
}
mintadata("saya","kamu","kau")

//default
function mintadatas(x = "kamu") {
	console.log(x);
	
}
mintadatas()

console.log(Math.E)// angka logaritma natural e
console.log(Math.LN2)// angka logaritma natural 2
console.log(Math.LN10)// angka logaritma natural 10
console.log(Math.LOG10E)// angka logaritma natural e basis 10 
console.log(Math.LOG2E)// angka logaritma natural e basis 2
console.log(Math.PI)// angka pi 3.14
console.log(Math.SQRT1_2)// angka 1 dibagi dengan akar kuadarat2
console.log(Math.SQRT2)// angka akar kuadarat 2

//match method ceil ,floor and round

var x = 12.8;

console.log(Math.ceil(x)) //pembulatan keatas tidak memperhatikan angka diblkg koma
console.log(Math.floor(x))//pembulatan kebawah tidak memperhatikan angka diblkg koma
console.log(Math.round(x))//pembulatan dengan 	memperhatikan angka diblkg koma

// math abs (absolute) tidak bisa negatif
var x = 30;
var y = 40;

console.log(Math.abs(x-y))

//math pow membuat sebuah pangkat
var x = 30;
console.log(Math.pow(x,3))
//angka dibelakang koma jumlah pangkatnya

//math sqrt membuat akar
var x = 25;
console.log(Math.sqrt(x))


//math log fungsi logaritma
var x = 25;
console.log(Math.log(x))


//math max min
function minmax() {
	var min = Math.min(6,3,4,7,1);
	console.log(min);
	var max = Math.max(6,3,4,7,1);
	console.log(max);
}

minmax();
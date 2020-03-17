//for
function perulangan(){
	for (var i = 2; i < 10; i++) {
		console.log("kota :", i)
	}
}

perulangan()


//while
 var i = 1;

while(i<10){
	console.log("ini urutan ke ",i)
	i++;
}

//do while, eksekusi dulu baru cek kondisi
var	i = 10;
do{
console.log("ini yang ke ",i)
}while(i<10)


//nested-loop

for(var i=0; i<2; i++) {
		console.log("i ke :", i)
		for(var j=0; j<2; j++) {
		console.log("j ke :", j)
	}
		console.log("")
	}

//infinity loop for

 //  for (var i = 0; i >= 0; i++) {
	// 	console.log("kota :", i)
	// }

//infinity loop while

// var i = 1;

// while(true){
// 	console.log("ini urutan ke ",i)
// 	i++;
// }

//break untuk menghenitkan di suatu kondisi dan continue untuk menghilangkan kondisi tertentu
for (var i = 2; i < 10; i++) {
		if (i==7) 
		continue;
		console.log("kota :", i)

	}

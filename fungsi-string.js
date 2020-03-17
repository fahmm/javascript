//codeat digunakan untuk mengetahui kode unik atau ascii pada suatu karakter
function kodeat(){
	var kode = 'saya belajar di pasar';
	console.log(kode.charCodeAt(3));
}
kodeat()

//code point untuk mengetahui kode ascii atau hexa ke dalam bentuk huruf atau simbol

function kodepoint(){
	console.log(String.fromCodePoint(3));
}
kodepoint()

//uppercase lowercase
function ubah (){
	var huruf = 'belajar di nioMic';
	console.log(huruf.toLowerCase());
	console.log(huruf.toUpperCase());
}
ubah()

//string char at memanggil urutan huruf
function Charat(){
	var kata = 'saya belajar di pasar';
	console.log(kata.charAt(4));
}
Charat()

//fungsi string substr
function substring(){
	var aku = 'saya belajar di pasar';
	console.log(aku.substr(5));
}
substring()

//fungsi string slice mirip substr
function slice(){
	var aku = 'saya belajar di pasar';
	console.log(aku.slice(5));
	console.log(aku.slice(5,13));
	console.log(aku.slice(5,6));
}
slice()

//fungsi string split mengubah srting menjadi array
function textsplit(){
	var aku = 'saya belajar di pasar';
	console.log(aku.split());
	console.log(aku.split(""));
	console.log(aku.split(" "));
}
textsplit()

//fungsi string trim menhilangkan spasi di awal dan diakhir
function trim(){
	var aku = ' saya belajar di pasar ';
	console.log(aku);
	console.log(aku.trim());
	}
trim()

//fungsi string concat untuk menggabungkan string
function concat(){
	var kalimat1 = 'saya';
	var kalimat2 = kalimat1.concat(" belajar")
	console.log(kalimat2);
	console.log(kalimat2.concat(" di", " pasar"));
	}
concat()

// fungsi string include untuk mengecek apakah string ada pada data tersebut untuk search kayaknya
function include(){
	var aku = ' saya belajar di pasar ';
	console.log(aku.includes("belajar"));
	console.log(aku.includes("sa"));
	}
include()

// fungsi string start with end with mencari kata awal dan akhir
 function startend(){
	var aku = 'saya belajar di pasar';
	console.log(aku.startsWith("saya"));
	console.log(aku.endsWith("di"));
	}
startend()

//fungsi string repeat
function repeatya(){
	var isi = "ayo tidur..."
	console.log(isi.repeat(4)); //angka menunjukkan jumlah repatnya
	console.log("ayo main ".repeat(3));
}

repeatya()
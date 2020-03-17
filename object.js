function panggilobject(){
	var mobil = {
		type: 'sedan',
		harga: 150000,
		warna: 'hitam',
		tahun:[2000,2001,2005,2015]
	}

//untuk ubah nilai property
	mobil.harga = 50000;
//untuk tambah propert
	mobil.staus = 'bekas';

	console.log(mobil)
	console.log(mobil.harga)
	console.log(mobil.tahun[3])
}

panggilobject()

//property adalah nilai dalam object

function hai(){
	return "haiiii"
}

function fungsiobject(){
	var x = {
		pesan : hai(),
			}
		console.log(x.pesan);
}

fungsiobject();

function nestedobject(){
	var mahasiswa = {
		nama : "ilham",
		ipk : {
			semester1: 3.5,
			semester2: 3.5,
			semester3: 3.5
		}
	}
	console.log(mahasiswa.ipk.semester2)
}

nestedobject()

function forin (){
	var mahasiswa ={
		nama : "Adi",
		umur : 23,
		jurusan : "menggambar"
	}
	for(var x in mahasiswa){
		console.log (mahasiswa[x])
	}
}

forin()
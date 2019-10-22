//GAME PROXYTIA

// langkah pertama, set variabel yaitu variabel nama dan peran
var nama = 'Nafies';
var peran = 'Penyihir';

// buat pengkondisian menggunakan if else
	// pengkondisian jika nama kosong
if (nama ===''){
	console.log('Nama harus diisi!');
} else {
	// pengkondisian jika peran kosong
	if (peran === '') {
		console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
	} else if (peran === 'Ksatria') { 		// jika perannya Ksatria
			console.log(`Selamat datang di Dunia Proxytia, ${nama}.`);
			console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
	} else if (peran === 'Tabib') {    // jika perannya tabib
			console.log(`Selamat datang di Dunia Proxytia, ${nama}.`);
			console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
	} else if (peran === 'Penyihir') {     // jika perannya Penyihir
			console.log(`Selamat datang di Dunia Proxytia, ${nama}.`);
			console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);			
	} else {
			console.log('Peran Anda tidak ada di dunia Proxytia. Silahkan pilih peran Ksatria, Tabib, atau Penyihir.');
	}				
	
}

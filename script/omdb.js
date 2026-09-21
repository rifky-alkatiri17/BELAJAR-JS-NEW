const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka = [];
const newAngka = angka.filter(a => a >= 3).map(b => b * 2).reduce((acc, curr) => acc + curr, 10);
console.log(newAngka);

/*-------------------------------------------------------------------*/
const movieContainer = document.querySelector('.movie-container');
const keyword = document.querySelector('.keyword');
let cards = '' //inisialisasi awal
let tumpukkan = [];

function showMovies(m) {
    // const poster = (m.Poster != "N/A")? m.Poster : "./jsfolder_99356.ico" ;
    // console.log(poster);
    return `
		<div class="card" data-bs-toggle="modal" data-bs-target="#exampleModal" style="width: 13rem;">
		  <img src="${m.Poster}" class="card-img-top" alt="..." onerror="this.src='./no-image.jpg'" height="300">
		  <div class="card-body">
		    <p class="card-text"><strong>${m.Title}</strong> (${m.Year})</p>
		  </div>
		</div>		
	`
};

keyword.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        cards = ''; //reset
        movieContainer.innerHTML = ''; //reset
        tumpukkan = []; //reset

        Promise.all([
                fetch(`http://www.omdbapi.com/?apikey=8a38adc1&s=${keyword.value}&page=1`),
                fetch(`http://www.omdbapi.com/?apikey=8a38adc1&s=${keyword.value}&page=2`),
                fetch(`http://www.omdbapi.com/?apikey=8a38adc1&s=${keyword.value}&page=3`)
            ])
            .then(responses => {
                console.log(responses);
                const [resSatu, resDua, resTiga] = responses;
                const hasilSatu = resSatu.json();
                const hasilDua = resDua.json();
                const hasilTiga = resTiga.json();

                return Promise.all([hasilSatu, hasilDua, hasilTiga]);
            })
            .then(hasil => {
                const newHasil = hasil.map(i => i.Search).flat();
                newHasil.forEach(item => {
                    cards += showMovies(item)
                });
                movieContainer.innerHTML = cards;

                // tambahan
                const cardsElement = document.querySelectorAll('.card');
                cardsElement.forEach(item => {
                    item.addEventListener('click', function() {
                        const strong = this.querySelector('strong');
                        console.log(strong.innerText)
                    })
                })
            })
            .catch(err => console.log(err))
    } // tutup if
}) // tutup event listener



/*------------------------------------------
//callback + IIFE
(function tampilkanPesan(callback) {
    const nama = prompt('input nama Anda');    
    callback(nama, nip)
})( (nama, nip='199105172025051001') => {
	const nip = prompt('NIP Anda');
	console.log(nama + " " + nip);
	}
);*/

/*----------------------------------------
const halo = (nama) => {
	console.log('Halo ' + nama);
}

function tampilkanPesan(callback){
	const nama = prompt('Input Nama');
	callback(nama) 
};

tampilkanPesan(halo)*/

/*--------------------------------------------
let ditepati = true;
let janji1 = new Promise((resolve,reject)=>{
	if(ditepati){
		// resolve('janji telah ditepati....')
		setTimeout(()=>{
			resolve('janji telah ditepati....')
		},5000)
	}else{
		setTimeout(()=>{
			reject('janji tidak ditepati...')
		},5000)		
	}
});

janji1
	.then(res=>console.log(res))
	.catch(err=>console.log(err))*/

/*-----------------------------------------------
fetch('http://192.168.42.48:3000/pegawai?page=1')
	.then(res => res.json())
	.then(res => console.log(res))
	.catch(err => console.log(err))*/
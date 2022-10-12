//program simple tepat janji

// let tepatJanji = false

// const janji = new Promise((resolve, reject) => {
//     (tepatJanji) ? resolve('Janji ditepati') : reject('kamu pembohong')
// })

// janji
// .then(response => console.log('MANTAP:' + response))
// .catch(response => console.log(response))

const cekKelipatan = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let cekAngka = num % 2 === 0

            if (cekAngka) {
                resolve(`angka = ${num} merupakan bilangan kelipatan 2`)
            } else {
                reject(new Error('bilangan ini bukan merupakan kelipatan 2'))

            }
        }, 3000)
    })
}

const angkaKelipatan = async (angka) => {
    console.log('Sedang mencari....')
    await cekKelipatan(angka).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err.message)
    })
    console.log('selesai')
}
angkaKelipatan(10)

//program cek buku
// const perpus = (buku) =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const listBuku = ['Mencari Cinta Di Tepi Jurang',"Doraemon","Naruto"]
//             let cek = listBuku.filter( item => item.toLowerCase().includes(buku.toLowerCase()) === true)
//             /* listBuku.filter(item => item.toLowerCase() === buku.toLowerCase()) */
//             if(cek){
//                 resolve(cek)
//             }else{
//                 reject(new Error('gak ada buku dengan judul itu')) 
//             }
//         },1000)
//     })
// }

// const result = async (buku) => {
//     try {
//         const data = await perpus(buku);
//         console.log(`${data} ada`)
//     } catch(error){
//         console.log(error)
//     }
// }
// result(``)

// const searchMusic = (cari) => {
//     return new Promise((resolve, reject) => {
//         const url = `https://api-song-lyrics.herokuapp.com/search?q=${cari}`;
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET',url);
//         xhr.onload = function(){
//             if (this.status === 200){
//                 const data = JSON.parse(this.responseText)
//                 // console.log(data)
//                 if(data.Response === "True"){
//                     resolve(data)
//                 }else{
//                     reject(new Error('Tidak menemukan Lagu'))
//                 }
//             }else{
//                 reject(new Error(`There's Error`))
//             }
//         }
//         xhr.send() 
//     })
// }

// searchMusic('Kala cinta menggoda')
// .then(data => {
//     data.Search.map(data => console.log(data.Title))
// })
// .catch(data => console.log(data))


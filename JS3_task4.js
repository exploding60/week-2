const url = 'https://kodepos-2d475.firebaseio.com/kota_kab/k69.json?print=pretty'
const data = fetch(url)

// data.then(hasil => hasil.json())
// .then(hasil => {
//     hasil.map(data =>{
//         console.log(data.nama)
//     })
// }).catch(hasil => {
//     console.log(hasil)
// })

data.then(hasil => hasil.json())
.then(hasil => {
    hasil.map(data =>{
        console.log(data.kecamatan)
    })
}).catch(hasil => {
    console.log(hasil)
})
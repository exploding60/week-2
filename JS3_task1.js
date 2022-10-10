const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat'];
            let cek = dataDay.find(item => {
                return item === day
            }) // cek return first data that contain condition
            if (cek){ // execute when not null / not undefined
                resolve(cek)
            }else{ // execute when undefined
                reject(new Error(`Hari ${day} bukan Hari Kerja`))
            }
        }, 1000)
    })
}


cekHariKerja('senin')
.then((data) => {
    console.log(`${data} adalah hari kerja`)
}).catch((data) => {
    console.log(data)
});
/* const hasil = async (day) => {
    try {
        const data = await cekHariKerja(day)
        console.log(`${data} adalah hari kerja`)
    } catch (error) {
        console.log(`tidak ada data`)
    }
}

hasil('sabtu') */

const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['January', 'February', 'March', 'April', 
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December']

        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Data Not Found'), [])
        }
    }, 4000)
}

// using callback 
const tampilkan = (err, month) => {
    (err) ? console.log(err.message) : month.map(data => {console.log(data)})
}
getMonth(tampilkan)


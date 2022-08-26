function discount(jmlMakanan,hargaMakanan) {
    totalHarga = jmlMakanan * hargaMakanan;
    if (totalHarga >= 60000) {
        let diskon = totalHarga * 0.35;
        if(diskon <= 50000) {
            console.log(`Total harga = ${totalHarga}`)
            console.log(`Potongan    = ${diskon}`);
            console.log(`SubTotal    = ${totalHarga - diskon}`);
        }else if (diskon > 50000) {
            console.log(`Total harga = ${totalHarga}`)
            console.log(`Potongan    = ${diskon = 50000}`);
            console.log(`SubTotal    = ${totalHarga - diskon}`);
        }
    } else {
        console.log(`Total harga = ${totalHarga}`)
        console.log(`Potongan    = ${diskon = 0}`);
        console.log(`SubTotal    = ${totalHarga - diskon}`);
    }
    return;
}

discount(4,60000);
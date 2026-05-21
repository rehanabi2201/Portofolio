console.log("Website Portfolio Berhasil Dimuat");

function tampilkanData(){
    const nama = localStorage.getItem('nama');
    const email = localStorage.getItem('email');
    const pesan = localStorage.getItem('pesan');

    document.getElementById('hasilNama').innerHTML = nama;
    document.getElementById('hasilEmail').innerHTML = email;
    document.getElementById('hasilPesan').innerHTML = pesan;
}
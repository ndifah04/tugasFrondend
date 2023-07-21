
let running = true;

while (running) {
    let username = prompt("Masukkan username:");
    let pass = prompt("Masukkan password:");

    if (username=="123" && pass=="123") {
    running = false;
    alert("LOGIN BERHASIL");
    } else {
    alert("LOGIN GAGAL");
    }
}

var namaDepan = (prompt("Masukkan Nama Depan:"));
var namaBelakang = (prompt("Masukkan Nama Belakang:"));
var nama = namaDepan + " " + namaBelakang;
document.getElementById("nama").innerHTML = nama;

var input_hobi = prompt("Masukkan Hobi:");
document.getElementById("hobi")
hobi.innerHTML = input_hobi;

var input_film = prompt("Masukkan Film:");
document.getElementById("film")
film.innerHTML = input_film;

var input_umur = prompt("Masukkan Umur:");
document.getElementById("umur")
umur.innerHTML = input_umur;

var input_alamat = prompt("Masukkan Alamat:");
document.getElementById("alamat")
alamat.innerHTML = input_alamat;

var input_email = prompt("Masukkan Email:");
document.getElementById("email")
email.innerHTML = input_email;
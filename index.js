// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

//First user data
let sekolah1 = new Set()

sekolah1.add({
    name : 'SD 01',
    city : 'Jakarta',
    graduate : 2016    
})
sekolah1.add({
    name : 'SMP 02',
    city : 'Jakarta',
    graduate : 2019
})
sekolah1.add({
    name : 'SMA 03',
    city : 'Tangerang',
})

const firstUser = {
    nama : 'Monica',
    gender : 'Female',
    age : 17,
    email : 'monica@dingdong.com',
    favoriteColor : ['Yellow', 'Pink', 'White', 'Purple'],
    isHavePet : 'Yes',
    education : sekolah1,
    favoriteRestaurant : ['Bento', 'Sushi', 'Pancake', 'Eggy', 'Tempura', 'Bento', 'Eggy', 'Padang', 'Tteok', 'Sushi', 'Sushi']
    };

//Second user data
let sekolah2 = new Set()

sekolah2.add({
    name : 'SD 02',
    city : 'Jakarta',
    graduate : 2014    
})
sekolah2.add({
    name : 'SMP 03',
    city : 'Bogor',
    graduate : 2020
})
sekolah2.add({
  name : 'SMA 01',
  city : 'Surabaya',
  graduate : 2020
})
sekolah2.add({
  name : 'Universitas Maju',
  city : 'Tangerang',
  graduate : 2020
})

const secondUser = {
    nama : 'Wendy',
    gender : 'Male',
    age : 23,
    email : 'wendy@dingdong.com',
    favoriteColor : ['Blue', 'Black', 'Grey'],
    isHavePet : 'No',
    education : sekolah2,
    favoriteRestaurant : ['Tempura', 'Bento', 'Sushi', 'Pancake', 'Padang', 'Katsu', 'Geprek', 'Pancake', 'Eggy']
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};

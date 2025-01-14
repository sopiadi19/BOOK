(async function () {
    // Ambil data dari photos.json
    const response = await fetch("photos.json");
    const data = await response.json();

    // Ambil daftar foto
    const photos = data.photos;

    // Cek apakah localStorage sudah memiliki foto terakhir
    const lastPhoto = localStorage.getItem("lastPhoto");

    let selectedPhoto;
    if (lastPhoto) {
        // Jika sudah ada, gunakan foto yang tersimpan
        selectedPhoto = lastPhoto;
    } else {
        // Jika belum, pilih foto acak
        selectedPhoto = photos[Math.floor(Math.random() * photos.length)];
        localStorage.setItem("lastPhoto", selectedPhoto); // Simpan ke localStorage
    }

    // Redirect ke foto yang dipilih
    window.location.href = selectedPhoto;
})();

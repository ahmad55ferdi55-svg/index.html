document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen-elemen dari DOM
    const detailButton = document.getElementById('detail-button');
    const detailsSection = document.getElementById('details');
    const profileCard = document.getElementById('profile');

    // Tambahkan event listener untuk tombol
    detailButton.addEventListener('click', function() {
        // Cek apakah bagian detail sedang disembunyikan
        if (detailsSection.classList.contains('hidden')) {
            // Jika tersembunyi, tampilkan
            detailsSection.classList.remove('hidden');
            detailsSection.classList.add('visible');
            detailButton.textContent = 'Sembunyikan Detail';
            
            // Opsional: Scroll ke bagian details
            setTimeout(() => {
                 detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);

        } else {
            // Jika terlihat, sembunyikan kembali
            detailsSection.classList.remove('visible');
            detailsSection.classList.add('hidden');
            detailButton.textContent = 'Lihat Detail Lanjut';
            
            // Opsional: Scroll kembali ke card profil
            profileCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

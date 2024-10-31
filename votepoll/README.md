## VotePoll
### Deskripsi :
Aplikasi ini memungkinkan pengguna membuat polling, memberikan suara dan melihat hasil voting secara real-time

### Fitur Utama :
- **Autentikasi :** Sistem login dan register
- **Pembuatan Polling :** Pengguna bisa membuat polling dengan opsi pilihan
- **Voting :** Pengguna bisa memilih opsi dan melihat hasil polling
- **Hasil Grafis :** Menampilkan hasil voting dalam bentuk grafik baatng atau pie chart

### Alur Kerja :
1. **Autentikasi :** Pengguna mendaftar atau login
2. **Pembuatan Polling :** Pengguna memasukkan pertanyaan dan opsi yang bisa dipilih
3. **Voting Real-Time :** Setelah voting, hasil langsung diperbarui (menggunakan WebSocket untuk update real-time)
4. **Visualisasi Hasil :** Menggunakan library grafik seperti ChartJS untuk menampilkan hasil voting

### Teknologi yang digunakan :
- **Frontend :** Vite, VanillaJS, ChartJS
- **Backend :** ExpressJS
- **Database :** PostgreSQl
- **Autentikasi :** JWT
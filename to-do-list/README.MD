## TO DO LIST🗒️
### Deskripsi :
Aplikasi ini memungkinkan pengguna membuat dan berbagi daftar tugas (to-do-list) secara real-time dengan kolaborasi antar pengguna

### Fitur Utama :
- **Autentikasi :** Sistem login dan register pengguna
- **To-Do-List :** Menambah, mengedit, menghapus dan menandai tugas selesai
- **Kolaborasi Real-Time :** Memungkinkan beberapa pengguna mengakses dan memperbarui daftar tugas secara bersamaan (gunakan WebSocket untuk sinkronisasi)
- **Notifikasi Real-Time :** Memberitahukan pengguna jika ada update dari pengguna lain

### Alur Kerja :
1. **Autentikasi :** Pengguna login atau mendaftar
2. **Buat To-Do :** Pengguna membuat atau memperbarui tugas yang secara otomatis muncul di layar pengguna lain
3. **Update Real-Time :** Menggunakan WebSocket untuk sinkronisasi instan
4. **Notifikasi :** Menampilkan pop-up ketika ada perubahan oleh pengguna lain

### Teknologi yang digunakan :
- **Frontend :** Vite, Vanilla JS, TailwindCSS
- **Backend :** ExpressJs, WebSocket(socket.io)
- **Database :** PostgreSQL
- **Autentikasi :** JWT
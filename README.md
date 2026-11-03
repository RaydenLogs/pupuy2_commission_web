# pupuy2_commission
Website statis (1 halaman) untuk commission Live2D Pupuy.2: HTML + CSS + JS murni, tanpa build tool.

## Fitur
- Header fixed; klik "Pupuy.2" = scroll ke atas. Icon IG/DC/WA + switch mode terang/gelap (tersimpan di browser).
- Section 1: 3 gambar miring, efek *pop* saat hover. IMG1 → Card1, IMG2 → Card2 (otomatis dibuka), IMG3 → Karya Lainnya.
- Section 2: kartu harga; tombol switch bergelombang sinyal mengganti semua teks & gambar dengan animasi flip. Border tombol bergantian pink/biru mengikuti kartu aktif (juga saat kartu dibuka dari gambar hero); gelombang berada di atas teks "Click to Switch".
- Section 3: "Karya Lainnya" auto-scroll bergantian kiri/kanan (2 baris desktop/tablet, 3 baris mobile). Jumlah mengikuti isi `works.images`, minimal 10 wadah. Klik gambar = popup pratinjau + tombol ke postingan Instagram (Escape atau klik luar untuk menutup).
- Background animasi simbol lucu (loop), halus, responsive PC/tablet/mobile, menghormati `prefers-reduced-motion`.

## Struktur
| Path | Fungsi |
|---|---|
| `index.html` | Kerangka halaman (konten diisi JS dari config) |
| `config.js` | **Semua isi & warna**: brand, link sosmed, icon, hero, harga/list, daftar karya, warna terang/gelap, footer |
| `css/style.css` | Tampilan, layout responsive, animasi |
| `js/main.js` | Membaca config, render, tema, flip, marquee, background |
| `assets/images/` | Tempat gambar |

## Cara pakai
1. Isi gambar di `assets/images/`, sesuaikan nama file di `config.js`.
2. Ganti link di `socials` (Instagram/Discord/WhatsApp). Icon diganti lewat nama class Font Awesome.
3. Tambah karya: isi `works.images`, mis. `["assets/images/k1.jpg", {src:"assets/images/k2.jpg", url:"https://instagram.com/p/XXXX"}]`. `url` dipakai tombol popup, `alt` opsional. Lebih dari 10 → otomatis bertambah.
4. Warna: ubah `colors.light` / `colors.dark`.
5. Buka `index.html` di browser (butuh internet untuk Font Awesome & Google Fonts).

Whatsapp: 0821-8530-4102

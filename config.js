// ============================================================
//  KONFIGURASI UTAMA — ubah isi web & warna di file ini saja.
//  Urutan: 1 Umum · 2 Warna · 3 Sosmed · 4 Hero · 5 Harga
//          6 Karya Lainnya · 7 Background · 8 Footer
// ============================================================
window.SITE_CONFIG = {

  // ---------- 1. UMUM ----------
  brand: "Pupuy.2",                       // teks logo di header
  title: "Pupuy.2 | Live2D Commission",   // judul tab browser
  defaultTheme: "light",                  // "light" | "dark" (pilihan pengguna tersimpan di browser)

  // ---------- 2. WARNA ----------
  // pink & blue = aksen · bg = latar · surface = panel · card = placeholder gambar
  colors: {
    light: { pink: "#ff6fa5", blue: "#7ec8f2", bg: "#f6f6f8", surface: "#ffffff", card: "#ebebf0", text: "#ff6fa5", muted: "#65656e" },
    dark: { pink: "#ff8fbd", blue: "#8ecdf0", bg: "#0b0b0e", surface: "#151519", card: "#1e1e24", text: "#f6f6f8", muted: "#a2a2ac" }
  },

  // ---------- 3. SOSMED (icon = class Font Awesome) ----------
  // Link "Instagram" juga jadi tujuan default tombol popup jika sebuah karya tidak punya url.
  socials: [
    { name: "Instagram", icon: "fa-brands fa-instagram", url: "https://www.instagram.com/pupuy.2/" },
    // { name: "Discord",   icon: "fa-brands fa-discord",   url: "https://discord.com/users/ID_ATAU_INVITE" },
    // { name: "WhatsApp",  icon: "fa-brands fa-whatsapp",  url: "https://wa.me/628XXXXXXXXXX" }
  ],

  // ---------- 4. HERO (3 gambar miring) ----------
  // go: "commission" → scroll ke kartu harga, card = nomor kartu di `commissions` (mulai 0)
  // go: "works"      → scroll ke Karya Lainnya
  hero: [
    { image: "assets/images/hero1.jpg", label: "L2D Chibi", go: "commission", card: 0 },
    { image: "assets/images/hero2.jpg", label: "L2D Normal", go: "commission", card: 1 },
    { image: "assets/images/hero3.jpg", label: "Karya Lainnya", go: "works" }
  ],

  // ---------- 5. HARGA (kartu yang di-switch) ----------
  // Border tombol switch bergantian: kartu ke-1 pink, ke-2 biru, ke-3 pink, dst.
  labels: {
    switchHint: "Click to Switch",   // teks kecil di bawah tombol
    add: "Add",               // judul kotak tambahan
    dont: "Don't",             // judul kotak larangan
    post: "Lihat di Instagram" // teks tombol di popup Karya Lainnya
  },
  commissions: [
    {
      name: "L2D Chibi", switchLabel: "L2D\nChibi", image: "assets/images/card1.jpg", price: "IDR: 300K",
      features: ["Free revisi 5x", "Free 3 ekspresi (no request)", "Pengerjaan 7-30 hari"],
      add: ["ekspresi 10k", "outfit 20-300k", "hair 20-250k", "aksesoris 5-300k"],
      dont: ["Armor", "Muscular male body", "Hard motif design"]
    },
    {
      name: "L2D Normal", switchLabel: "L2D\nNormal", image: "assets/images/card2.jpg", price: "IDR: 120K",
      features: ["Free revisi 5x", "Free 2 ekspresi (no request)", "Pengerjaan 5-18 hari"],
      add: ["ekspresi 5k", "outfit 5-100k", "hair 5-100k", "aksesoris 5-100k"],
      dont: ["Armor", "Muscular male body", "Hard motif design"]
    }
  ],

  // ---------- 6. KARYA LAINNYA (auto-scroll) ----------
  // Klik gambar → popup + tombol "Lihat di Instagram".
  // Tiap karya:  { src: "path gambar", url: "link postingan IG", alt: "deskripsi (opsional)" }
  //   • url kosong  → tombol ke profil Instagram di `socials`
  //   • cukup string "path.jpg" kalau tidak perlu url/alt
  // Jumlah wadah mengikuti jumlah gambar, minimal `minSlots`.
  works: {
    title: "Karya Lainnya",
    images: [
      // { src: "assets/images/karya1.jpg", url: "https://www.instagram.com/p/AAAAAAA/", alt: "Karya 1" },
      // { src: "assets/images/karya2.jpg", url: "https://www.instagram.com/p/BBBBBBB/" },
      // "assets/images/karya3.jpg",
      { src: "assets/images/karya1.webp", url: "https://www.instagram.com/pupuy.2/p/DMC8YODPR1j/" },
      { src: "assets/images/karya2.webp", url: "https://www.instagram.com/pupuy.2/p/DbQP4srv4Fy/" },
      { src: "assets/images/karya3.webp", url: "https://www.instagram.com/pupuy.2/p/DMC8aEuvUsG/" },
      { src: "assets/images/karya4.webp", url: "https://www.instagram.com/pupuy.2/p/DMC8bsHvjlm/" },
      { src: "assets/images/karya5.webp", url: "https://www.instagram.com/pupuy.2/p/DMC8dq2v8pY/" },
      { src: "assets/images/karya6.webp", url: "https://www.instagram.com/pupuy.2/p/DMC8fUDPRhR/" },
      { src: "assets/images/karya7.webp", url: "https://www.instagram.com/pupuy.2/p/DMC8gx8P2Jn/" },
      { src: "assets/images/karya8.webp", url: "https://www.instagram.com/pupuy.2/p/DMOnqd0y_5H/" },
      { src: "assets/images/karya9.webp", url: "https://www.instagram.com/pupuy.2/p/DO8cgrRj9pD/" },
      { src: "assets/images/karya10.webp", url: "https://www.instagram.com/pupuy.2/p/DbQP1tuvJKC/" },
      { src: "assets/images/karya11.webp", url: "https://www.instagram.com/pupuy.2/p/DO8cnb4D7eq/" },
      { src: "assets/images/karya12.webp", url: "https://www.instagram.com/pupuy.2/p/DaHXP6QPTIt/" },
      { src: "assets/images/karya13.webp", url: "https://www.instagram.com/pupuy.2/p/DR4rWDPD8T6/" },
      { src: "assets/images/karya14.webp", url: "https://www.instagram.com/pupuy.2/p/DR4t0vhjxpi/" },
      { src: "assets/images/karya15.webp", url: "https://www.instagram.com/pupuy.2/p/DSrfB-SDy4b/" },
      { src: "assets/images/karya16.webp", url: "https://www.instagram.com/pupuy.2/p/DTpvt9Tj3nr/" },
      { src: "assets/images/karya17.webp", url: "https://www.instagram.com/pupuy.2/p/DTpv4gMD-vO/" },
      { src: "assets/images/karya18.webp", url: "https://www.instagram.com/pupuy.2/p/DVLcKQIj0p1/" },
      { src: "assets/images/karya19.webp", url: "https://www.instagram.com/pupuy.2/p/DYkP-8PPoIm/" },
      { src: "assets/images/karya20.webp", url: "https://www.instagram.com/pupuy.2/p/DYkQBkZPGuA/" },
    ],
    minSlots: 10,        // jumlah wadah minimum (yang kosong tampil sebagai placeholder)
    secondsPerImage: 5   // detik per gambar; makin kecil makin cepat
  },

  // ---------- 7. BACKGROUND (simbol melayang) ----------
  background: { symbols: ["♥", "✦", "★", "✿", "♡"], count: 18 },

  // ---------- 8. FOOTER ({year} otomatis jadi tahun berjalan) ----------
  footer: {
    text: "© {year} Pupuy.2 — All rights reserved.",
    note: ""
  }
};

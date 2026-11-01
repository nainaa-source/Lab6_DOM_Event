// Memilih Elemen Form & Input
const form = document.getElementById("formWorkshop");
const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const sesiSelect = document.getElementById("sesi");
const catatanInput = document.getElementById("catatan");
const btnReset = document.getElementById("btnReset");

// Elemen Penghitung Karakter
const countNama = document.getElementById("countNama");
const countCatatan = document.getElementById("countCatatan");

// Elemen Pesan Error & Status Form
const errNama = document.getElementById("errNama");
const errEmail = document.getElementById("errEmail");
const errSesi = document.getElementById("errSesi");
const pesanForm = document.getElementById("pesanForm");

// Elemen Preview Ringkasan
const prevNama = document.getElementById("prevNama");
const prevEmail = document.getElementById("prevEmail");
const prevSesi = document.getElementById("prevSesi");
const prevCatatan = document.getElementById("prevCatatan");

// 1. Event Input: Penghitung Karakter & Live Preview Nama
namaInput.addEventListener("input", function () {
  const teks = namaInput.value;
  countNama.textContent = teks.length;
  
  if (teks.trim() !== "") {
    prevNama.textContent = teks;
    prevNama.classList.remove("placeholder-text");
    errNama.textContent = "";
  } else {
    prevNama.textContent = "-";
    prevNama.classList.add("placeholder-text");
  }
});

// Event Input: Live Preview Email
emailInput.addEventListener("input", function () {
  const teks = emailInput.value.trim();
  if (teks !== "") {
    prevEmail.textContent = teks;
    prevEmail.classList.remove("placeholder-text");
    errEmail.textContent = "";
  } else {
    prevEmail.textContent = "-";
    prevEmail.classList.add("placeholder-text");
  }
});

// 2. Event Change: Pilihan Sesi
sesiSelect.addEventListener("change", function () {
  const nilaiSesi = sesiSelect.value;
  if (nilaiSesi !== "") {
    prevSesi.textContent = nilaiSesi;
    prevSesi.classList.remove("placeholder-text");
    errSesi.textContent = "";
  } else {
    prevSesi.textContent = "-";
    prevSesi.classList.add("placeholder-text");
  }
});

// Event Input: Penghitung Karakter & Live Preview Catatan
catatanInput.addEventListener("input", function () {
  const teks = catatanInput.value;
  countCatatan.textContent = teks.length;
  
  if (teks.trim() !== "") {
    prevCatatan.textContent = teks;
    prevCatatan.classList.remove("placeholder-text");
  } else {
    prevCatatan.textContent = "-";
    prevCatatan.classList.add("placeholder-text");
  }
});

// 3. Event Submit & Validasi Form
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Reset pesan error sebelumnya
  errNama.textContent = "";
  errEmail.textContent = "";
  errSesi.textContent = "";
  pesanForm.className = "status-box";
  pesanForm.textContent = "";

  const nama = namaInput.value.trim();
  const email = emailInput.value.trim();
  const sesi = sesiSelect.value;
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isValid = true;

  // Validasi Nama (Minimal 3 Karakter)
  if (nama === "") {
    errNama.textContent = "Nama wajib diisi.";
    isValid = false;
  } else if (nama.length < 3) {
    errNama.textContent = "Nama minimal 3 karakter.";
    isValid = false;
  }

  // Validasi Email
  if (email === "") {
    errEmail.textContent = "Email wajib diisi.";
    isValid = false;
  } else if (!polaEmail.test(email)) {
    errEmail.textContent = "Format email tidak valid (contoh: user@domain.com).";
    isValid = false;
  }

  // Validasi Sesi
  if (sesi === "") {
    errSesi.textContent = "Silakan pilih sesi workshop.";
    isValid = false;
  }

  // Tampilkan Status Hasil Validasi
  if (isValid) {
    pesanForm.classList.add("sukses");
    pesanForm.textContent = `Pendaftaran Berhasil! Terima kasih, ${nama}. Bukti pendaftaran telah diproses.`;
  } else {
    pesanForm.classList.add("error");
    pesanForm.textContent = "Pendaftaran gagal. Harap periksa kembali bidang yang bernilai salah.";
  }
});

// 4. Event Click: Tombol Reset Form
btnReset.addEventListener("click", function () {
  form.reset();
  
  // Reset Penghitung Karakter
  countNama.textContent = "0";
  countCatatan.textContent = "0";
  
  // Reset Pesan Error & Status
  errNama.textContent = "";
  errEmail.textContent = "";
  errSesi.textContent = "";
  pesanForm.className = "status-box";
  pesanForm.textContent = "";
  
  // Reset Ringkasan Preview
  prevNama.textContent = "-";
  prevNama.classList.add("placeholder-text");
  
  prevEmail.textContent = "-";
  prevEmail.classList.add("placeholder-text");
  
  prevSesi.textContent = "-";
  prevSesi.classList.add("placeholder-text");
  
  prevCatatan.textContent = "-";
  prevCatatan.classList.add("placeholder-text");
});
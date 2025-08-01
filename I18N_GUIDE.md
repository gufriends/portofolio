# Internasionalisasi (i18n) Portfolio

Sistem multi-bahasa ini menggunakan `react-i18next` untuk mendukung bahasa Inggris dan Indonesia.

## Struktur File

```
src/
├── i18n/
│   ├── index.ts          # Konfigurasi i18n utama
│   └── locales/
│       ├── en.json       # Terjemahan bahasa Inggris
│       └── id.json       # Terjemahan bahasa Indonesia
└── components/
    └── LanguageSwitcher.tsx  # Komponen tombol ganti bahasa
```

## Cara Menggunakan

### 1. Menggunakan Translation dalam Komponen

**Metode 1: Hook useTranslation (Standar)**

```tsx
import { useTranslation } from "react-i18next";

const MyComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("navbar.home")}</h1>
      <p>{t("hero.description")}</p>
    </div>
  );
};
```

**Metode 2: Custom Hook useI18n (Rekomendasi)**

```tsx
import { useI18n } from "../hooks/useI18n";

const MyComponent: React.FC = () => {
  const { t, currentLang, isEnglish } = useI18n();

  return (
    <div>
      <h1>{t("navbar.home")}</h1>
      <p>Current language: {currentLang}</p>
      {isEnglish() && <span>English content</span>}
    </div>
  );
};
```

**Metode 3: Context Provider (Untuk aplikasi besar)**

```tsx
import { useI18nContext } from "../contexts/I18nContext";

const MyComponent: React.FC = () => {
  const { t, changeLanguage } = useI18nContext();

  return (
    <div>
      <h1>{t("navbar.home")}</h1>
      <button onClick={() => changeLanguage("id")}>Switch to Indonesian</button>
    </div>
  );
};
```

### 2. Menambah Terjemahan Baru

Tambahkan key-value pair baru di kedua file:

**en.json:**

```json
{
  "newSection": {
    "title": "New Title",
    "description": "New description in English"
  }
}
```

**id.json:**

```json
{
  "newSection": {
    "title": "Judul Baru",
    "description": "Deskripsi baru dalam bahasa Indonesia"
  }
}
```

### 5. Menggunakan Language Switcher

**Dengan parameter/variable:**

```tsx
// Di komponen
const currentYear = new Date().getFullYear();
<p>{t("footer.copyright", { year: currentYear })}</p>;

// Di file translation
// en.json: "copyright": "© {{year}} Muhammad Ghufran. All rights reserved."
// id.json: "copyright": "© {{year}} Muhammad Ghufran. Semua hak dilindungi."
```

**Dengan kondisional:**

```tsx
const { t, isEnglish } = useI18n();

return (
  <div>
    <h1>
      {t("hero.greeting")} {t("hero.name")}
    </h1>
    {isEnglish() ? (
      <p>Additional English content</p>
    ) : (
      <p>Konten tambahan dalam bahasa Indonesia</p>
    )}
  </div>
);
```

Komponen `LanguageSwitcher` sudah terintegrasi di navbar dan akan:

- Menampilkan bendera dan kode bahasa saat ini
- Toggle antara EN/ID saat diklik
- Menyimpan pilihan bahasa di localStorage
- Memuat bahasa yang tersimpan saat refresh halaman

## Fitur

- ✅ Switch bahasa real-time tanpa refresh
- ✅ Menyimpan preferensi bahasa di localStorage
- ✅ Mendukung nested translation keys
- ✅ Fallback ke bahasa Inggris jika key tidak ditemukan
- ✅ Responsive language switcher untuk desktop dan mobile

## Komponen yang Sudah Diupdate

- [x] Navbar (Desktop & Mobile)
- [x] HeroSection (Hero text, Biography, Connect section)
- [ ] AboutSection
- [ ] SkillsSection
- [ ] ProjectsSection
- [ ] ContactSection
- [ ] Footer

## Menambahkan Komponen Baru

1. Import `useTranslation` hook
2. Destructure fungsi `t` dari hook
3. Ganti hardcoded text dengan `t('key.subkey')`
4. Tambahkan translation keys di file `en.json` dan `id.json`

Contoh:

```tsx
import { useTranslation } from "react-i18next";

const NewComponent: React.FC = () => {
  const { t } = useTranslation();

  return <h1>{t("newComponent.title")}</h1>;
};
```

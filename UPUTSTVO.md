# Mamigo sajt – kako da pokreneš i build-uješ

Kratko uputstvo bez tehničkih objašnjenja.

---

## 1. Pokreni projekat (da vidiš sajt u browseru)

1. Otvori **Terminal** u Cursoru (Terminal → New Terminal).
2. Uveri se da si u folderu projekta (obično već jesi kad otvoriš projekat).
3. Ukucaj i pritisni Enter:

```bash
npm start
```

4. Sačekaj par sekundi dok ne vidiš nešto tipa: `Local: http://localhost:5173/`
5. Otvori u browseru: **http://localhost:5173/**  
   Ili klikni na link ako ga terminal prikaže.

**Da zaustaviš:** U terminalu pritisni **Ctrl + C**.

---

## 2. Napravi production build (za deploy)

1. Otvori **Terminal**.
2. Ukucaj i pritisni Enter:

```bash
npm run build
```

3. Kad se završi, spremni fajlovi su u folderu **`dist`**.  
   Taj folder (ili njegov sadržaj) se upload-uje na hosting.

---

## 3. Ako nešto ne radi

- **„command not found: npm”**  
  Nemaš Node.js. Instaliraj sa: https://nodejs.org (LTS verzija).

- **„Missing script: start”**  
  Nisi u folderu projekta. U terminalu ukucaj:  
  `cd "Downloads/cursor playground"`  
  (ili putanja gde ti je projekat), pa opet `npm start`.

- **Port 5173 već u upotrebi**  
  Zatvori drugi terminal gde je već pokrenut `npm start`, ili u ovom projektu u `package.json` možeš promeniti port (možemo to uraditi ako zatreba).

---

## Rezime

| Šta hoćeš           | Komanda      |
|---------------------|-------------|
| Vidim sajt lokalno  | `npm start` |
| Build za deploy     | `npm run build` |
| Zaustavim server    | **Ctrl + C** u terminalu |

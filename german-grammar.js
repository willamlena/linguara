// Grammatik-Lektionen für den Deutschkurs (Level 1). Markup wie grammar.js:
//   ## Überschrift · > Tipp-Box · = deutsch :: Übersetzung · | Tabelle | · - Liste · **fett**
// Je Lektion: title „indonesisch ¦ englisch“, body { id: `…`, en: `…` },
// quiz: [Frage „id ¦ en“, [Antworten (ggf. „id ¦ en“)], Index der richtigen, Erklärung „id ¦ en“]
window.LESSONS_GERMAN = window.LESSONS_GERMAN || {};
Object.assign(window.LESSONS_GERMAN, {

g01: { title: "Pengucapan & salam ¦ Pronunciation & greetings", body: {
id: `
Bahasa Jerman diucapkan hampir seperti tulisannya – tapi beberapa huruf berbeda dari bahasa Indonesia.

| Huruf | Bunyinya | Contoh |
| w | seperti **v** | **Wasser** → „vaser“ |
| v | biasanya seperti **f** | **Vater** → „fater“ |
| z | seperti **ts** | **Zeit** → „tsait“ |
| j | seperti **y** | **ja** → „ya“ |
| ei | seperti **ai** | **mein** → „main“ |
| ie | **i** panjang | **Liebe** → „liibe“ |
| eu / äu | seperti **oi** | **heute** → „hoite“ |
| sch | seperti **sy** | **Schule** → „syule“ |
| ch | bunyi „h“ yang kasar di tenggorokan | **ich**, **Buch** |
| ß | **s** tajam | **Straße** |

## Umlaut: ä, ö, ü
- **ä** seperti „e“ di kata „enak“: **Käse**
- **ö** ucapkan „e“ dengan bibir bulat: **schön**
- **ü** ucapkan „i“ dengan bibir bulat: **müde**

> Di HP tanpa huruf Umlaut, kamu boleh mengetik **ae, oe, ue, ss** – aplikasi menerimanya.

## Salam menurut waktu
| Salam | Kapan? |
| Guten Morgen | pagi sampai sekitar jam 10 |
| Guten Tag | siang hari |
| Guten Abend | malam (untuk menyapa) |
| Gute Nacht | sebelum tidur |

= Guten Morgen! Wie geht es Ihnen? :: Selamat pagi! Apa kabar?
= Gut, danke. Und Ihnen? :: Baik, terima kasih. Dan Anda?

> Semua kata benda dalam bahasa Jerman ditulis dengan **huruf besar**: das **Wasser**, der **Tisch**.
`,
en: `
German is pronounced almost exactly as it's written – but a few letters sound different from English.

| Letter | Sounds like | Example |
| w | **v** | **Wasser** → “vasser” |
| v | usually **f** | **Vater** → “fater” |
| z | **ts** | **Zeit** → “tsite” |
| j | **y** | **ja** → “yah” |
| ei | **eye** | **mein** → “mine” |
| ie | long **ee** | **Liebe** → “leebe” |
| eu / äu | **oy** | **heute** → “hoyte” |
| sch | **sh** | **Schule** → “shoole” |
| ch | a soft or throaty “h” | **ich**, **Buch** |
| ß | sharp **s** | **Straße** |

## Umlauts: ä, ö, ü
- **ä** like “e” in “bed”: **Käse**
- **ö** say “e” with rounded lips: **schön**
- **ü** say “ee” with rounded lips: **müde**

> If your keyboard has no umlauts, you can type **ae, oe, ue, ss** – the app accepts them.

## Greetings by time of day
| Greeting | When? |
| Guten Morgen | morning, until about 10 am |
| Guten Tag | during the day |
| Guten Abend | evening (as a greeting) |
| Gute Nacht | before going to bed |

= Guten Morgen! Wie geht es Ihnen? :: Good morning! How are you?
= Gut, danke. Und Ihnen? :: Fine, thanks. And you?

> All German nouns are written with a **capital letter**: das **Wasser**, der **Tisch**.
` },
quiz: [
  ["Bagaimana mengucapkan **w** dalam „Wasser“? ¦ How is the **w** in “Wasser” pronounced?", ["seperti v ¦ like v", "seperti w Indonesia ¦ like English w", "seperti u ¦ like u"], 0, "Huruf w Jerman = bunyi v. ¦ German w sounds like v."],
  ["Kamu pamit dari teman pada malam hari sebelum tidur. Kamu bilang … ¦ You say goodbye to a friend at night before bed. You say …", ["Gute Nacht!", "Guten Abend!", "Guten Morgen!"], 0, "„Guten Abend“ untuk menyapa, „Gute Nacht“ sebelum tidur. ¦ “Guten Abend” is a greeting; “Gute Nacht” is said before bed."],
  ["Kata benda Jerman ditulis … ¦ German nouns are written …", ["dengan huruf besar ¦ with a capital letter", "dengan huruf kecil ¦ in lowercase", "bebas ¦ either way"], 0, "Semua kata benda pakai huruf besar. ¦ All nouns are capitalised."],
]},

g02: { title: "Saya, kamu, Anda & „sein“ ¦ I, you & “sein”", body: {
id: `
## du atau Sie?
Bahasa Jerman punya dua kata untuk „kamu“:
| | Kapan? |
| **du** | teman, keluarga, anak-anak, sesama muda |
| **Sie** | orang yang belum kenal, di kantor, di toko, ke atasan |

> Kalau ragu, pakai **Sie**. Orang Jerman sering bilang sendiri kapan boleh ganti ke „du“: **Wollen wir uns duzen?**

## sein – adalah
Berbeda dengan bahasa Indonesia, bahasa Jerman **selalu** butuh kata kerja „sein“:
| | sein |
| ich | **bin** |
| du | **bist** |
| er / sie / es | **ist** |
| wir | **sind** |
| ihr | **seid** |
| sie / Sie | **sind** |

= Ich bin müde. :: Saya capek.
= Sie ist Lehrerin. :: Dia guru.

> Tidak boleh: ~~Ich müde.~~ Kata kerja harus ada!

## Bertanya nama
= Wie heißen Sie? – Ich heiße Dewi. :: Siapa nama Anda? – Nama saya Dewi.
= Wie heißt du? :: Siapa namamu?
`,
en: `
## du or Sie?
German has two words for “you”:
| | When? |
| **du** | friends, family, children, people your age |
| **Sie** | strangers, at work, in shops, your boss |

> If in doubt, use **Sie**. Germans will often tell you when you can switch to “du”: **Wollen wir uns duzen?**

## sein – to be
| | sein |
| ich | **bin** |
| du | **bist** |
| er / sie / es | **ist** |
| wir | **sind** |
| ihr | **seid** |
| sie / Sie | **sind** |

= Ich bin müde. :: I'm tired.
= Sie ist Lehrerin. :: She's a teacher.

> Note: with jobs German uses **no article**: Sie ist Lehrerin (not ~~eine Lehrerin~~).

## Asking someone's name
= Wie heißen Sie? – Ich heiße Dewi. :: What's your name? – My name is Dewi.
= Wie heißt du? :: What's your name? (informal)
`},
quiz: [
  ["Kamu bertemu atasan baru. Kamu memakai … ¦ You meet your new boss. You use …", ["Sie", "du", "ihr"], 0, "Dengan orang yang belum akrab dan atasan: Sie. ¦ With strangers and your boss: Sie."],
  ["**Wir ___ aus Indonesien.**", ["sind", "seid", "ist"], 0, "wir → sind."],
  ["„Saya capek“ ¦ “I'm tired”", ["Ich bin müde.", "Ich müde.", "Ich ist müde."], 0, "Bahasa Jerman selalu butuh kata kerja: ich bin. ¦ German always needs the verb: ich bin."],
]},

g03: { title: "Dari mana? Asal & bahasa ¦ Where from? Origin & languages", body: {
id: `
## Bertanya asal
= Woher kommen Sie? – Ich komme aus Indonesien. :: Anda dari mana? – Saya dari Indonesia.
= Wo wohnst du? – Ich wohne in Wien. :: Kamu tinggal di mana? – Saya tinggal di Wina.

| Kata | Arti |
| woher? | dari mana? |
| wo? | di mana? |
| wohin? | ke mana? |
| aus | dari (negara, kota) |
| in | di |

## Negara dengan artikel
Kebanyakan negara tanpa artikel. Beberapa memakai artikel:
| tanpa artikel | dengan artikel |
| aus Indonesien | aus **der** Schweiz |
| in Deutschland | in **der** Türkei |
| nach Österreich | in **den** USA |

## Bahasa
= Ich spreche Indonesisch und ein bisschen Deutsch. :: Saya bisa bahasa Indonesia dan sedikit bahasa Jerman.

> Kata kerja berubah sesuai orang: ich komm**e**, du komm**st**, er komm**t**. Kita pelajari lebih lanjut di Topik 10.
`,
en: `
## Asking where someone is from
= Woher kommen Sie? – Ich komme aus Indonesien. :: Where are you from? – I'm from Indonesia.
= Wo wohnst du? – Ich wohne in Wien. :: Where do you live? – I live in Vienna.

| Word | Meaning |
| woher? | where from? |
| wo? | where? |
| wohin? | where to? |
| aus | from (country, city) |
| in | in |

> German has three different “where” words – one for each direction!

## Countries with an article
Most countries have no article. A few do:
| no article | with article |
| aus Indonesien | aus **der** Schweiz |
| in Deutschland | in **der** Türkei |
| nach Österreich | in **den** USA |

## Languages
= Ich spreche Indonesisch und ein bisschen Deutsch. :: I speak Indonesian and a little German.

> Verbs change with the person: ich komm**e**, du komm**st**, er komm**t**. More on this in topic 10.
`},
quiz: [
  ["„Kamu tinggal di mana?“ ¦ “Where do you live?”", ["Wo wohnst du?", "Woher wohnst du?", "Wohin wohnst du?"], 0, "wo = di mana (tempat). ¦ wo = where (position)."],
  ["„Saya dari Swiss.“ ¦ “I'm from Switzerland.”", ["Ich komme aus der Schweiz.", "Ich komme aus Schweiz.", "Ich komme von Schweiz."], 0, "Schweiz memakai artikel: aus der Schweiz. ¦ Schweiz takes an article: aus der Schweiz."],
  ["**Woher ___ du?**", ["kommst", "kommt", "komme"], 0, "du → -st: du kommst."],
]},

g04: { title: "nicht & kein ¦ nicht & kein", body: {
id: `
Bahasa Jerman punya dua kata untuk „tidak / bukan“:

| Kata | Untuk apa? | Contoh |
| **nicht** | kata kerja, kata sifat | Ich bin **nicht** müde. |
| **kein / keine** | kata benda (pengganti „ein/eine“) | Ich habe **keine** Zeit. |

= Ich verstehe das nicht. :: Saya tidak mengerti itu.
= Das ist kein Problem. :: Itu bukan masalah.

> Aturan mudah: kalau di kalimat positif ada **ein/eine** atau tidak ada artikel → pakai **kein**. Kalau tidak → **nicht**.

| Positif | Negatif |
| Ich habe ein Auto. | Ich habe **kein** Auto. |
| Ich habe Zeit. | Ich habe **keine** Zeit. |
| Das ist gut. | Das ist **nicht** gut. |

## doch – „ya kok!“
Kalau seseorang bertanya dengan kalimat negatif dan kamu mau menjawab „ya“, pakai **doch**:
= Kommst du nicht? – Doch! :: Kamu tidak datang? – Datang kok!

## Ich auch / Ich auch nicht
= Ich bin müde. – Ich auch! :: Saya capek. – Saya juga!
= Ich habe keine Zeit. – Ich auch nicht. :: Saya tidak ada waktu. – Saya juga tidak.
`,
en: `
German has two words for “not / no”:

| Word | Used for | Example |
| **nicht** | verbs, adjectives | Ich bin **nicht** müde. |
| **kein / keine** | nouns (replaces “ein/eine”) | Ich habe **keine** Zeit. |

= Ich verstehe das nicht. :: I don't understand that.
= Das ist kein Problem. :: That's no problem.

> Easy rule: if the positive sentence has **ein/eine** or no article → use **kein**. Otherwise → **nicht**.

| Positive | Negative |
| Ich habe ein Auto. | Ich habe **kein** Auto. |
| Ich habe Zeit. | Ich habe **keine** Zeit. |
| Das ist gut. | Das ist **nicht** gut. |

## doch – “yes, I do!”
If someone asks a negative question and you want to say “yes”, use **doch**:
= Kommst du nicht? – Doch! :: Aren't you coming? – Yes, I am!

## Me too / Me neither
= Ich bin müde. – Ich auch! :: I'm tired. – Me too!
= Ich habe keine Zeit. – Ich auch nicht. :: I have no time. – Me neither.
`},
quiz: [
  ["„Saya tidak punya mobil.“ ¦ “I don't have a car.”", ["Ich habe kein Auto.", "Ich habe nicht Auto.", "Ich nicht habe Auto."], 0, "Dengan kata benda (ein Auto) → kein. ¦ With a noun (ein Auto) → kein."],
  ["**Das Wetter ist ___ gut.**", ["nicht", "kein", "keine"], 0, "Dengan kata sifat → nicht. ¦ With an adjective → nicht."],
  ["„Hast du keinen Hunger?“ – Kamu lapar. Jawabanmu: ¦ – You are hungry. Your answer:", ["Doch!", "Ja!", "Nein!"], 0, "Menjawab „ya“ pada pertanyaan negatif: doch. ¦ “Yes” to a negative question: doch."],
]},

g05: { title: "Angka ¦ Numbers", body: {
id: `
## 13–19: angka + zehn
dreizehn (13), vierzehn (14), fünfzehn (15), **sechzehn** (16), **siebzehn** (17), achtzehn (18), neunzehn (19)

## Puluhan
| | | | |
| 20 | zwanzig | 60 | sechzig |
| 30 | dreißig | 70 | siebzig |
| 40 | vierzig | 80 | achtzig |
| 50 | fünfzig | 90 | neunzig |

## Yang paling penting: dibaca terbalik!
21 bukan „dua puluh satu“, tapi **„satu-dan-dua puluh“**:
| Angka | Bahasa Jerman |
| 21 | **ein**und**zwanzig** |
| 34 | **vier**und**dreißig** |
| 99 | **neun**und**neunzig** |

= Ich bin vierunddreißig Jahre alt. :: Umur saya tiga puluh empat tahun.

> Hati-hati saat mendengar harga dan nomor telepon – angka satuan disebut lebih dulu!

## Harga
= Das kostet zwölf Euro fünfzig. :: Harganya dua belas euro lima puluh.
Bahasa Jerman memakai **koma** untuk desimal: 12,50 € dan **titik** untuk ribuan: 1.500 €.
`,
en: `
## 13–19: number + zehn
dreizehn (13), vierzehn (14), fünfzehn (15), **sechzehn** (16), **siebzehn** (17), achtzehn (18), neunzehn (19)

## Tens
| | | | |
| 20 | zwanzig | 60 | sechzig |
| 30 | dreißig | 70 | siebzig |
| 40 | vierzig | 80 | achtzig |
| 50 | fünfzig | 90 | neunzig |

## The big one: read backwards!
21 isn't “twenty-one” but **“one-and-twenty”**:
| Number | German |
| 21 | **ein**und**zwanzig** |
| 34 | **vier**und**dreißig** |
| 99 | **neun**und**neunzig** |

= Ich bin vierunddreißig Jahre alt. :: I'm thirty-four years old.

> Careful with prices and phone numbers – the unit comes first!

## Prices
= Das kostet zwölf Euro fünfzig. :: That costs twelve euros fifty.
German uses a **comma** for decimals: 12,50 € and a **full stop** for thousands: 1.500 €.
`},
quiz: [
  ["Berapa **siebenundvierzig**? ¦ What is **siebenundvierzig**?", ["47", "74", "407"], 0, "sieben (7) und vierzig (40) = 47."],
  ["„dua puluh lima“ dalam bahasa Jerman ¦ “twenty-five” in German", ["fünfundzwanzig", "zwanzigfünf", "zwanzigundfünf"], 0, "Satuan dulu: fünf-und-zwanzig. ¦ Unit first: fünf-und-zwanzig."],
  ["Bagaimana menulis 2,5 dalam bahasa Jerman? ¦ How do you write 2.5 in German?", ["2,5", "2.5", "2'5"], 0, "Bahasa Jerman memakai koma untuk desimal. ¦ German uses a decimal comma."],
]},

g06: { title: "der, die, das & bentuk jamak ¦ der, die, das & plurals", body: {
id: `
Setiap kata benda Jerman punya **jenis**: maskulin, feminin, atau netral. Artikelnya:

| Jenis | Pasti („itu“) | Tidak pasti („sebuah“) |
| maskulin | **der** Tisch | **ein** Tisch |
| feminin | **die** Tasche | **eine** Tasche |
| netral | **das** Brot | **ein** Brot |
| jamak | **die** Tische | – |

> Jenis kata tidak selalu logis: **das** Mädchen (gadis) netral! Pelajari kata benda **selalu bersama artikelnya** – di aplikasi ini semua kata benda punya artikel.

## Petunjuk yang membantu
| Akhiran | Jenis | Contoh |
| -ung, -heit, -keit, -ion | die | die Zeitung, die Freiheit |
| -chen, -lein | das | das Brötchen |
| -er (orang) | der | der Lehrer |
| -e | sering die | die Lampe, die Tasche |

## Bentuk jamak
Bahasa Jerman tidak mengulang kata, tapi punya beberapa akhiran jamak:
| Tunggal | Jamak |
| der Tisch | die Tisch**e** |
| die Lampe | die Lampe**n** |
| das Kind | die Kind**er** |
| das Auto | die Auto**s** |
| der Apfel | die **Ä**pfel |

> Artikel jamak selalu **die**. Bentuk jamaknya ada di catatan setiap kartu („Pl.“).
`,
en: `
Every German noun has a **gender**: masculine, feminine or neuter. The articles:

| Gender | Definite (“the”) | Indefinite (“a”) |
| masculine | **der** Tisch | **ein** Tisch |
| feminine | **die** Tasche | **eine** Tasche |
| neuter | **das** Brot | **ein** Brot |
| plural | **die** Tische | – |

> Gender isn't always logical: **das** Mädchen (the girl) is neuter! Always learn nouns **together with their article** – in this app every noun comes with one.

## Helpful hints
| Ending | Gender | Example |
| -ung, -heit, -keit, -ion | die | die Zeitung, die Freiheit |
| -chen, -lein | das | das Brötchen |
| -er (people) | der | der Lehrer |
| -e | often die | die Lampe, die Tasche |

## Plurals
German has several plural endings:
| Singular | Plural |
| der Tisch | die Tisch**e** |
| die Lampe | die Lampe**n** |
| das Kind | die Kind**er** |
| das Auto | die Auto**s** |
| der Apfel | die **Ä**pfel |

> The plural article is always **die**. Each card shows the plural in its note (“Pl.”).
`},
quiz: [
  ["Artikel untuk **Zeitung**? ¦ Article for **Zeitung**?", ["die", "der", "das"], 0, "Kata berakhiran -ung selalu „die“. ¦ Words ending in -ung are always “die”."],
  ["Artikel jamak selalu … ¦ The plural article is always …", ["die", "der", "das"], 0, "Jamak: die Tische, die Kinder. ¦ Plural: die Tische, die Kinder."],
  ["Artikel untuk **Brötchen**? ¦ Article for **Brötchen**?", ["das", "der", "die"], 0, "-chen selalu „das“. ¦ -chen is always “das”."],
]},

g07: { title: "Memesan dengan sopan ¦ Ordering politely", body: {
id: `
Di restoran dan toko, **„Ich will …“** (saya mau) terdengar kasar. Lebih baik:
| Ungkapan | Kesan |
| Ich hätte gern einen Kaffee. | sangat sopan |
| Ich möchte eine Suppe. | sopan |
| Ich nehme das Hähnchen. | biasa saat memesan |
| Für mich ein Wasser, bitte. | biasa |

= Ich hätte gern die Speisekarte, bitte. :: Saya minta menunya.
= Die Rechnung, bitte! :: Minta bonnya!

## Membayar
Pelayan sering bertanya: **„Zusammen oder getrennt?“** – bayar bersama atau sendiri-sendiri. Di DACH sangat biasa membayar sendiri-sendiri, juga di antara teman.

## Tip (Trinkgeld)
- Di restoran biasanya **5–10 %**, dibulatkan.
- Tip diberikan langsung saat membayar: „**Zweiundzwanzig, bitte**“ (untuk tagihan 20,40 €) atau „**Stimmt so!**“ (ambil saja kembaliannya).

> Di kafe dan restoran, kamu biasanya menunggu dipersilakan oleh pelayan – atau memilih meja sendiri kalau tidak ada tanda.
`,
en: `
In restaurants and shops, **“Ich will …”** (I want) sounds rude. Better:
| Phrase | Tone |
| Ich hätte gern einen Kaffee. | very polite |
| Ich möchte eine Suppe. | polite |
| Ich nehme das Hähnchen. | normal when ordering |
| Für mich ein Wasser, bitte. | normal |

= Ich hätte gern die Speisekarte, bitte. :: I'd like the menu, please.
= Die Rechnung, bitte! :: The bill, please!

## Paying
The waiter often asks: **“Zusammen oder getrennt?”** – together or separately? In DACH it's very normal to pay separately, even among friends.

## Tipping (Trinkgeld)
- In restaurants usually **5–10 %**, rounded up.
- You add the tip when you pay: “**Zweiundzwanzig, bitte**” (for a bill of €20.40) or “**Stimmt so!**” (keep the change).

> In cafés you often just pick a free table yourself unless there's a sign asking you to wait.
`},
quiz: [
  ["Mana yang paling sopan? ¦ Which is most polite?", ["Ich hätte gern einen Tee.", "Ich will einen Tee.", "Tee!"], 0, "„Ich hätte gern“ sangat sopan. ¦ “Ich hätte gern” is very polite."],
  ["Pelayan bertanya „Zusammen oder getrennt?“. Artinya … ¦ The waiter asks “Zusammen oder getrennt?”. It means …", ["bayar bersama atau sendiri-sendiri? ¦ pay together or separately?", "makan di sini atau dibawa? ¦ eat in or take away?", "tunai atau kartu? ¦ cash or card?"], 0, "zusammen = bersama, getrennt = terpisah. ¦ zusammen = together, getrennt = separately."],
  ["Tagihan 18,60 €. Kamu memberi 20 € dan bilang … ¦ The bill is €18.60. You give €20 and say …", ["Stimmt so!", "Danke schön, tschüss!", "Zusammen!"], 0, "„Stimmt so“ = ambil saja kembaliannya. ¦ “Stimmt so” = keep the change."],
]},

g08: { title: "Bertanya ¦ Asking questions", body: {
id: `
## Kata tanya (W-Fragen)
| Jerman | Indonesia |
| was? | apa? |
| wer? | siapa? |
| wo? / wohin? / woher? | di mana? / ke mana? / dari mana? |
| wann? | kapan? |
| warum? | kenapa? |
| wie? | bagaimana? |
| wie viel? | berapa? |
| welcher / welche / welches? | yang mana? |

Pada pertanyaan dengan kata tanya, **kata kerja berada di posisi 2**:
= Wo **wohnst** du? :: Kamu tinggal di mana?
= Was **machst** du heute? :: Hari ini kamu ngapain?

## Pertanyaan ya/tidak: kata kerja di depan!
Bahasa Indonesia cukup menaikkan nada. Bahasa Jerman **memindahkan kata kerja ke awal**:
| Pernyataan | Pertanyaan |
| Du kommst aus Bali. | **Kommst** du aus Bali? |
| Sie spricht Deutsch. | **Spricht** sie Deutsch? |

## Minta bantuan
= Wie sagt man „kelapa“ auf Deutsch? :: Apa bahasa Jermannya „kelapa“?
= Können Sie das bitte wiederholen? :: Bisa tolong diulang?
`,
en: `
## Question words (W-questions)
| German | English |
| was? | what? |
| wer? | who? |
| wo? / wohin? / woher? | where? / where to? / where from? |
| wann? | when? |
| warum? | why? |
| wie? | how? |
| wie viel? | how much? |
| welcher / welche / welches? | which? |

In questions with a question word, **the verb comes second**:
= Wo **wohnst** du? :: Where do you live?
= Was **machst** du heute? :: What are you doing today?

## Yes/no questions: verb first!
German has no “do” for questions – you simply **move the verb to the front**:
| Statement | Question |
| Du kommst aus Bali. | **Kommst** du aus Bali? |
| Sie spricht Deutsch. | **Spricht** sie Deutsch? |

## Asking for help
= Wie sagt man „kelapa“ auf Deutsch? :: How do you say “coconut” in German?
= Können Sie das bitte wiederholen? :: Could you repeat that, please?
`},
quiz: [
  ["„Apakah kamu bisa bahasa Jerman?“ ¦ “Do you speak German?”", ["Sprichst du Deutsch?", "Du sprichst Deutsch?", "Tust du sprechen Deutsch?"], 0, "Pertanyaan ya/tidak: kata kerja di depan. ¦ Yes/no questions: verb first."],
  ["**___ kommst du?** (dari mana) ¦ (where from)", ["Woher", "Wo", "Wohin"], 0, "woher = dari mana. ¦ woher = where from."],
  ["**Wann ___ der Kurs?**", ["beginnt", "beginnen", "der beginnt"], 0, "Kata kerja di posisi 2, sesuai subjek: der Kurs beginnt. ¦ Verb in position 2, agreeing with the subject."],
]},

g09: { title: "Waktu & posisi kata kerja ¦ Time words & verb position", body: {
id: `
## Kata keterangan waktu
| lalu | sekarang | nanti |
| gestern | heute | morgen |
| letzte Woche | diese Woche | nächste Woche |
| vor zwei Tagen | jetzt | in zwei Tagen |

> **vor** = „yang lalu“ dan diletakkan **sebelum** waktu: vor drei Tagen (tiga hari yang lalu).

## Aturan emas: kata kerja di posisi 2
Dalam kalimat biasa, kata kerja **selalu di posisi kedua**. Kalau kalimat dimulai dengan waktu, subjek pindah ke belakang kata kerja:
| 1 | 2 (kata kerja) | sisanya |
| Ich | gehe | heute ins Kino. |
| Heute | gehe | ich ins Kino. |
| Am Montag | arbeite | ich nicht. |

= Morgen habe ich frei. :: Besok saya libur.
= Am Wochenende besuche ich meine Tante. :: Akhir pekan saya mengunjungi tante saya.

> Salah: ~~Heute ich gehe ins Kino.~~ Ini kesalahan yang sangat umum – latih terus!

## Bagian hari
am Morgen (pagi) · am Vormittag · am Mittag · am Nachmittag · am Abend · **in der** Nacht
`,
en: `
## Time words
| past | now | future |
| gestern | heute | morgen |
| letzte Woche | diese Woche | nächste Woche |
| vor zwei Tagen | jetzt | in zwei Tagen |

> **vor** = “ago” and goes **before** the time: vor drei Tagen (three days ago).

## The golden rule: the verb is in position 2
In a normal sentence the verb is **always second**. If the sentence starts with a time, the subject moves behind the verb:
| 1 | 2 (verb) | rest |
| Ich | gehe | heute ins Kino. |
| Heute | gehe | ich ins Kino. |
| Am Montag | arbeite | ich nicht. |

= Morgen habe ich frei. :: Tomorrow I'm off.
= Am Wochenende besuche ich meine Tante. :: At the weekend I'm visiting my aunt.

> Wrong: ~~Heute ich gehe ins Kino.~~ This is a very common mistake – keep practising!

## Parts of the day
am Morgen · am Vormittag · am Mittag · am Nachmittag · am Abend · **in der** Nacht
`},
quiz: [
  ["Mana yang benar? ¦ Which is correct?", ["Heute gehe ich einkaufen.", "Heute ich gehe einkaufen.", "Heute einkaufen ich gehe."], 0, "Kata kerja di posisi 2. ¦ Verb in position 2."],
  ["„tiga hari yang lalu“ ¦ “three days ago”", ["vor drei Tagen", "drei Tage vor", "seit drei Tagen"], 0, "vor + waktu. ¦ vor + time."],
  ["**Am Montag ___ ich nicht.**", ["arbeite", "ich arbeite", "arbeiten"], 0, "Setelah „Am Montag“ langsung kata kerja. ¦ After “Am Montag” comes the verb."],
]},

g10: { title: "Kata kerja: bentuk sekarang ¦ Verbs: the present tense", body: {
id: `
Kata kerja Jerman berubah akhirannya sesuai **orang**. Bentuk dasar berakhir **-en**: mach**en**, wohn**en**.

| | machen | wohnen |
| ich | mach**e** | wohn**e** |
| du | mach**st** | wohn**st** |
| er / sie / es | mach**t** | wohn**t** |
| wir | mach**en** | wohn**en** |
| ihr | mach**t** | wohn**t** |
| sie / Sie | mach**en** | wohn**en** |

= Ich arbeite in einem Hotel. :: Saya bekerja di hotel.
= Er arbeitet in Linz. :: Dia bekerja di Linz.

> Kalau akar kata berakhir -t atau -d, tambahkan **e**: du arbeit**est**, er arbeit**et**.

## Kata kerja yang berubah vokal
Beberapa kata kerja mengubah vokal pada **du** dan **er/sie/es**:
| | fahren | essen | sehen |
| ich | fahre | esse | sehe |
| du | f**ä**hrst | **i**sst | s**ie**hst |
| er | f**ä**hrt | **i**sst | s**ie**ht |

## haben – punya
ich habe · du **hast** · er **hat** · wir haben · ihr habt · sie haben
= Ich habe zwei Kinder. :: Saya punya dua anak.

> Bahasa Jerman tidak punya bentuk „sedang“. **Ich koche** bisa berarti „saya memasak“ atau „saya sedang memasak“.
`,
en: `
German verbs change their ending depending on the **person**. The base form ends in **-en**: mach**en**, wohn**en**.

| | machen | wohnen |
| ich | mach**e** | wohn**e** |
| du | mach**st** | wohn**st** |
| er / sie / es | mach**t** | wohn**t** |
| wir | mach**en** | wohn**en** |
| ihr | mach**t** | wohn**t** |
| sie / Sie | mach**en** | wohn**en** |

= Ich arbeite in einem Hotel. :: I work in a hotel.
= Er arbeitet in Linz. :: He works in Linz.

> If the stem ends in -t or -d, add an **e**: du arbeit**est**, er arbeit**et**.

## Verbs that change their vowel
Some verbs change the vowel with **du** and **er/sie/es**:
| | fahren | essen | sehen |
| ich | fahre | esse | sehe |
| du | f**ä**hrst | **i**sst | s**ie**hst |
| er | f**ä**hrt | **i**sst | s**ie**ht |

## haben – to have
ich habe · du **hast** · er **hat** · wir haben · ihr habt · sie haben
= Ich habe zwei Kinder. :: I have two children.

> German has no continuous form. **Ich koche** means “I cook” or “I'm cooking”.
`},
quiz: [
  ["**Sie (dia) ___ in Wien.** (wohnen)", ["wohnt", "wohnst", "wohnen"], 0, "er/sie/es → -t. ¦ er/sie/es → -t."],
  ["**Du ___ zu schnell.** (fahren)", ["fährst", "fahrst", "fährt"], 0, "fahren berubah vokal: du fährst. ¦ fahren changes its vowel: du fährst."],
  ["**Er ___ ein Auto.** (haben)", ["hat", "habt", "hast"], 0, "haben tidak beraturan: er hat. ¦ haben is irregular: er hat."],
]},

g11: { title: "Milik siapa? mein, dein … ¦ Whose? mein, dein …", body: {
id: `
## Kata ganti milik
| Orang | milik | Contoh |
| ich | mein / meine | mein Bruder, meine Schwester |
| du | dein / deine | dein Auto |
| er | sein / seine | seine Frau |
| sie (dia pr) | ihr / ihre | ihr Mann |
| wir | unser / unsere | unser Haus |
| ihr | euer / eure | eure Kinder |
| sie (mereka) | ihr / ihre | ihre Eltern |
| Sie | Ihr / Ihre | Ihr Name |

Akhirannya mengikuti kata benda, seperti **ein / eine**:
| der / das | die / jamak |
| **mein** Vater, **mein** Kind | **meine** Mutter, **meine** Eltern |

= Das ist meine Familie. :: Ini keluarga saya.
= Wie ist Ihr Name? :: Siapa nama Anda?

> **sein** = miliknya (laki-laki), **ihr** = miliknya (perempuan). Bahasa Indonesia cukup „-nya“, bahasa Jerman membedakan!

## von – milik (cara sehari-hari)
= das Auto von meinem Bruder :: mobil saudara laki-laki saya
= Annas Tasche :: tas Anna
`,
en: `
## Possessives
| Person | Possessive | Example |
| ich | mein / meine | mein Bruder, meine Schwester |
| du | dein / deine | dein Auto |
| er | sein / seine | seine Frau |
| sie (she) | ihr / ihre | ihr Mann |
| wir | unser / unsere | unser Haus |
| ihr | euer / eure | eure Kinder |
| sie (they) | ihr / ihre | ihre Eltern |
| Sie | Ihr / Ihre | Ihr Name |

The ending follows the noun, just like **ein / eine**:
| der / das | die / plural |
| **mein** Vater, **mein** Kind | **meine** Mutter, **meine** Eltern |

= Das ist meine Familie. :: This is my family.
= Wie ist Ihr Name? :: What's your name?

> **sein** = his, **ihr** = her or their, **Ihr** (capital) = your (formal).

## von – the everyday way to show possession
= das Auto von meinem Bruder :: my brother's car
= Annas Tasche :: Anna's bag (no apostrophe!)
`},
quiz: [
  ["„ibu saya“ ¦ “my mother”", ["meine Mutter", "mein Mutter", "meiner Mutter"], 0, "Mutter adalah „die“ → meine. ¦ Mutter is “die” → meine."],
  ["Tom dan **___ Frau** (istrinya) ¦ Tom and **___ Frau** (his wife)", ["seine", "ihre", "seiner"], 0, "Pemiliknya laki-laki (Tom) → sein/seine. ¦ The owner is male → seine."],
  ["„tas Anna“ ¦ “Anna's bag”", ["Annas Tasche", "Anna's Tasche", "die Tasche Anna"], 0, "Bahasa Jerman tanpa apostrof: Annas Tasche. ¦ German uses no apostrophe."],
]},

g12: { title: "Akusatif: den, einen ¦ The accusative: den, einen", body: {
id: `
Bahasa Jerman punya **kasus**: artikel berubah sesuai fungsi kata benda dalam kalimat. Yang pertama: **Akkusativ** – untuk **objek** (yang dibeli, dilihat, dipunyai …).

Kabar baik: hanya **maskulin (der)** yang berubah!
| | Nominativ (subjek) | Akkusativ (objek) |
| maskulin | **der** / **ein** Pullover | **den** / **einen** Pullover |
| feminin | die / eine Jacke | die / eine Jacke |
| netral | das / ein Hemd | das / ein Hemd |
| jamak | die Schuhe | die Schuhe |

= Der Pullover ist schön. :: Sweternya bagus. (subjek)
= Ich kaufe den Pullover. :: Saya membeli sweter itu. (objek)
= Ich habe keinen Hunger. :: Saya tidak lapar.

## Kata kerja yang biasa dengan Akkusativ
haben, kaufen, nehmen, brauchen, suchen, sehen, möchten, **es gibt**
= Es gibt einen Supermarkt in der Nähe. :: Ada supermarket di dekat sini.

> Ingat: **der → den, ein → einen, kein → keinen**. Yang lain tetap sama.
`,
en: `
German has **cases**: the article changes depending on the noun's role in the sentence. The first one: the **accusative** – for the **object** (what you buy, see, have …).

Good news: only **masculine (der)** changes!
| | Nominative (subject) | Accusative (object) |
| masculine | **der** / **ein** Pullover | **den** / **einen** Pullover |
| feminine | die / eine Jacke | die / eine Jacke |
| neuter | das / ein Hemd | das / ein Hemd |
| plural | die Schuhe | die Schuhe |

= Der Pullover ist schön. :: The jumper is nice. (subject)
= Ich kaufe den Pullover. :: I'm buying the jumper. (object)
= Ich habe keinen Hunger. :: I'm not hungry.

## Verbs often used with the accusative
haben, kaufen, nehmen, brauchen, suchen, sehen, möchten, **es gibt**
= Es gibt einen Supermarkt in der Nähe. :: There's a supermarket nearby.

> Remember: **der → den, ein → einen, kein → keinen**. Everything else stays the same.
`},
quiz: [
  ["**Ich nehme ___ Kaffee.** (der Kaffee)", ["den", "der", "dem"], 0, "Objek maskulin: der → den. ¦ Masculine object: der → den."],
  ["**Ich brauche ___ Jacke.** (die Jacke)", ["eine", "einen", "ein"], 0, "Feminin tidak berubah. ¦ Feminine doesn't change."],
  ["**Es gibt ___ Park hier.** (der Park)", ["einen", "ein", "eine"], 0, "es gibt + Akkusativ: einen Park. ¦ es gibt + accusative."],
]},

g13: { title: "Arah & tempat: nach, zu, in ¦ Directions & places: nach, zu, in", body: {
id: `
## Ke mana? (wohin?)
| Kata | Untuk | Contoh |
| **nach** | kota, negara, „pulang“ | nach Wien, nach Hause |
| **zu** | orang, tempat, toko | zum Arzt, zur Post |
| **in** + Akk. | masuk ke dalam | ins Kino, in die Stadt |

> **zum** = zu dem (der/das), **zur** = zu der (die), **ins** = in das.

## Di mana? (wo?) – Dativ
Setelah **in, an, bei, neben, gegenüber** untuk tempat, artikel berubah menjadi **Dativ**:
| | Dativ |
| der / das | **dem** → im, am, beim |
| die | **der** |
| jamak | **den** (+n) |
= Ich bin im Park. :: Saya di taman.
= Die Bank ist neben der Post. :: Banknya di samping kantor pos.

## Menunjukkan jalan: kalimat perintah dengan Sie
Kata kerja di depan, lalu **Sie**:
= Gehen Sie geradeaus. :: Jalan lurus.
= Biegen Sie links ab. :: Belok kiri.
= Nehmen Sie die U-Bahn. :: Naik kereta bawah tanah.

## Naik kendaraan: mit + Dativ
mit **dem** Bus · mit **der** U-Bahn · mit **dem** Auto · aber: **zu Fuß**
`,
en: `
## Where to? (wohin?)
| Word | Used for | Example |
| **nach** | cities, countries, “home” | nach Wien, nach Hause |
| **zu** | people, places, shops | zum Arzt, zur Post |
| **in** + acc. | going into | ins Kino, in die Stadt |

> **zum** = zu dem (der/das), **zur** = zu der (die), **ins** = in das.

## Where? (wo?) – the dative
After **in, an, bei, neben, gegenüber** for a location, the article changes to the **dative**:
| | Dative |
| der / das | **dem** → im, am, beim |
| die | **der** |
| plural | **den** (+n) |
= Ich bin im Park. :: I'm in the park.
= Die Bank ist neben der Post. :: The bank is next to the post office.

## Giving directions: commands with Sie
Verb first, then **Sie**:
= Gehen Sie geradeaus. :: Go straight on.
= Biegen Sie links ab. :: Turn left.
= Nehmen Sie die U-Bahn. :: Take the underground.

## Means of transport: mit + dative
mit **dem** Bus · mit **der** U-Bahn · mit **dem** Auto · but: **zu Fuß**
`},
quiz: [
  ["„Saya pergi ke dokter.“ ¦ “I'm going to the doctor.”", ["Ich gehe zum Arzt.", "Ich gehe nach Arzt.", "Ich gehe in Arzt."], 0, "Ke orang/tempat: zu → zum Arzt. ¦ To a person/place: zu → zum Arzt."],
  ["„Saya terbang ke Berlin.“ ¦ “I'm flying to Berlin.”", ["Ich fliege nach Berlin.", "Ich fliege zu Berlin.", "Ich fliege in Berlin."], 0, "Kota: nach. ¦ Cities: nach."],
  ["**Ich fahre mit ___ Bus.**", ["dem", "den", "der"], 0, "mit + Dativ: der Bus → dem Bus. ¦ mit + dative: dem Bus."],
]},

g14: { title: "Jam & waktu: um, am, im ¦ Telling the time: um, am, im", body: {
id: `
## Jam
| Jam | Jerman |
| 3.00 | drei Uhr |
| 3.15 | Viertel nach drei |
| 3.30 | **halb vier** |
| 3.45 | Viertel vor vier |
| 3.10 | zehn nach drei |
| 3.50 | zehn vor vier |

> Jebakan: **halb vier** = 3.30 (setengah **menuju** empat), bukan 4.30! Sama seperti „setengah empat“ dalam bahasa Indonesia.

Dalam bahasa resmi (jadwal, TV) dipakai format 24 jam: **15.30 Uhr** = fünfzehn Uhr dreißig.

## um, am, im
| | untuk | contoh |
| **um** | jam | um 8 Uhr |
| **am** | hari, tanggal, bagian hari | am Montag, am Abend |
| **im** | bulan, musim | im Mai, im Winter |
| **von … bis** | dari … sampai | von 9 bis 17 Uhr |

= Der Termin ist am Dienstag um zehn Uhr. :: Janjinya hari Selasa jam sepuluh.

## Ketepatan waktu
Di DACH, **datang tepat waktu** sangat penting – juga untuk acara pribadi. Kalau terlambat lebih dari 5 menit, beri tahu sebelumnya.
`,
en: `
## Telling the time
| Time | German |
| 3:00 | drei Uhr |
| 3:15 | Viertel nach drei |
| 3:30 | **halb vier** |
| 3:45 | Viertel vor vier |
| 3:10 | zehn nach drei |
| 3:50 | zehn vor vier |

> Trap: **halb vier** = 3:30 (half **towards** four), not 4:30!

Officially (timetables, TV) Germans use the 24-hour clock: **15.30 Uhr** = fünfzehn Uhr dreißig.

## um, am, im
| | for | example |
| **um** | clock times | um 8 Uhr |
| **am** | days, dates, parts of the day | am Montag, am Abend |
| **im** | months, seasons | im Mai, im Winter |
| **von … bis** | from … to | von 9 bis 17 Uhr |

= Der Termin ist am Dienstag um zehn Uhr. :: The appointment is on Tuesday at ten.

## Punctuality
In DACH, **being on time** really matters – for private plans too. If you'll be more than 5 minutes late, let people know.
`},
quiz: [
  ["Jam berapa **halb neun**? ¦ What time is **halb neun**?", ["8.30", "9.30", "8.50"], 0, "halb neun = setengah menuju sembilan = 8.30. ¦ halb neun = half towards nine = 8:30."],
  ["**Ich habe ___ Freitag frei.**", ["am", "um", "im"], 0, "Hari: am. ¦ Days: am."],
  ["**Der Kurs beginnt ___ 18 Uhr.**", ["um", "am", "im"], 0, "Jam: um. ¦ Clock time: um."],
]},

g15: { title: "Kata kerja terpisah ¦ Separable verbs", body: {
id: `
Banyak kata kerja Jerman punya awalan yang **terpisah** dan **pindah ke akhir kalimat**:
| Infinitif | Kalimat |
| **auf**stehen | Ich stehe um sechs Uhr **auf**. |
| **an**rufen | Ich rufe dich morgen **an**. |
| **ein**kaufen | Wir kaufen am Samstag **ein**. |
| **an**fangen | Der Kurs fängt um neun **an**. |
| **fern**sehen | Er sieht jeden Abend **fern**. |

Awalan yang biasanya terpisah: **an, auf, aus, ein, mit, zu, ab, vor, zurück, fern**.

## Dengan kata kerja bantu: tetap bersatu
= Ich muss morgen früh aufstehen. :: Besok saya harus bangun pagi.

## Kata seberapa sering
immer · meistens · oft · manchmal · selten · nie
= Ich stehe meistens früh auf. :: Saya biasanya bangun pagi.
= Wie oft rufst du deine Mutter an? :: Seberapa sering kamu menelepon ibumu?

> Tekanan suara selalu pada awalan: **AUF**stehen, **AN**rufen.
`,
en: `
Many German verbs have a prefix that **separates** and **moves to the end of the sentence**:
| Infinitive | Sentence |
| **auf**stehen | Ich stehe um sechs Uhr **auf**. |
| **an**rufen | Ich rufe dich morgen **an**. |
| **ein**kaufen | Wir kaufen am Samstag **ein**. |
| **an**fangen | Der Kurs fängt um neun **an**. |
| **fern**sehen | Er sieht jeden Abend **fern**. |

Prefixes that usually separate: **an, auf, aus, ein, mit, zu, ab, vor, zurück, fern**.

## With a modal verb: they stay together
= Ich muss morgen früh aufstehen. :: I have to get up early tomorrow.

## How often?
immer · meistens · oft · manchmal · selten · nie
= Ich stehe meistens früh auf. :: I usually get up early.
= Wie oft rufst du deine Mutter an? :: How often do you call your mother?

> The stress is always on the prefix: **AUF**stehen, **AN**rufen. (Like English “get UP”, “call BACK”.)
`},
quiz: [
  ["„Saya bangun jam tujuh.“ ¦ “I get up at seven.”", ["Ich stehe um sieben Uhr auf.", "Ich aufstehe um sieben Uhr.", "Ich stehe auf um sieben Uhr."], 0, "Awalan „auf“ pindah ke akhir. ¦ The prefix “auf” goes to the end."],
  ["**Wann ___ der Film ___?** (anfangen)", ["fängt … an", "anfängt … –", "fängt an … –"], 0, "fangen … an mengapit kalimat. ¦ fängt … an frames the sentence."],
  ["„Saya harus belanja.“ ¦ “I have to go shopping.”", ["Ich muss einkaufen.", "Ich muss kaufen ein.", "Ich kaufe muss ein."], 0, "Setelah kata kerja bantu: bentuk dasar utuh di akhir. ¦ After a modal: the whole infinitive at the end."],
]},

g16: { title: "„Mir ist kalt“ & sangat, terlalu ¦ “Mir ist kalt” & very, too", body: {
id: `
## Perasaan tubuh: mir ist …
Untuk rasa dingin, panas, mual, bosan, bahasa Jerman memakai **mir ist** („bagi saya …“):
| Jerman | Indonesia |
| Mir ist kalt. | Saya kedinginan. |
| Mir ist warm. | Saya kepanasan. |
| Mir ist schlecht. | Saya mual. |
| Mir ist langweilig. | Saya bosan. |

> Jangan bilang ~~Ich bin kalt~~ – artinya „saya orang yang dingin (sifatnya)“!

## Perasaan lain dengan „ich bin“
Ich bin müde / glücklich / traurig / nervös / krank.

## Menguatkan & melemahkan
| Jerman | Indonesia |
| total / sehr | sangat |
| ziemlich | cukup, agak |
| ein bisschen | sedikit |
| zu | terlalu |

= Das ist zu teuer. :: Itu terlalu mahal.
= Ich bin ein bisschen müde. :: Saya agak capek.

## Bertanya kabar
= Wie fühlst du dich? – Besser, danke. :: Bagaimana perasaanmu? – Lebih baik, terima kasih.
`,
en: `
## Body feelings: mir ist …
For feeling cold, hot, sick or bored, German uses **mir ist** (“to me it is …”):
| German | English |
| Mir ist kalt. | I'm cold. |
| Mir ist warm. | I'm warm. |
| Mir ist schlecht. | I feel sick. |
| Mir ist langweilig. | I'm bored. |

> Don't say ~~Ich bin kalt~~ – it means “I'm a cold person”!

## Other feelings with “ich bin”
Ich bin müde / glücklich / traurig / nervös / krank.

## Stronger & weaker
| German | English |
| total / sehr | very |
| ziemlich | quite |
| ein bisschen | a bit |
| zu | too |

= Das ist zu teuer. :: That's too expensive.
= Ich bin ein bisschen müde. :: I'm a bit tired.

## Asking how someone feels
= Wie fühlst du dich? – Besser, danke. :: How do you feel? – Better, thanks.
`},
quiz: [
  ["„Saya kedinginan.“ ¦ “I'm cold.”", ["Mir ist kalt.", "Ich bin kalt.", "Ich habe kalt."], 0, "Rasa dingin: mir ist kalt. ¦ Feeling cold: mir ist kalt."],
  ["„Saya bosan.“ ¦ “I'm bored.”", ["Mir ist langweilig.", "Ich bin langweilig.", "Ich langweilig."], 0, "„Ich bin langweilig“ = saya orang yang membosankan! ¦ “Ich bin langweilig” = I'm a boring person!"],
  ["„Itu terlalu mahal.“ ¦ “That's too expensive.”", ["Das ist zu teuer.", "Das ist sehr teuer.", "Das ist auch teuer."], 0, "zu = terlalu. ¦ zu = too."],
]},

g17: { title: "es gibt & di hotel ¦ es gibt & at the hotel", body: {
id: `
## es gibt – ada
**es gibt** + Akkusativ = „ada“ (secara umum):
= Es gibt einen Pool. :: Ada kolam renang.
= Gibt es hier WLAN? :: Di sini ada wifi?
= Es gibt keine Handtücher. :: Tidak ada handuk.

> Bentuknya tidak berubah untuk jamak: Es gibt zwei Betten.

## Kalimat penting di hotel
= Ich habe eine Reservierung auf den Namen … :: Saya ada reservasi atas nama …
= Ist das Frühstück inklusive? :: Apakah sarapan termasuk?
= Ab wann kann ich einchecken? :: Mulai jam berapa saya bisa check in?
= Die Heizung funktioniert nicht. :: Pemanasnya tidak berfungsi.

## Lantai
| Jerman | Arti |
| das Erdgeschoss (EG) | lantai dasar |
| der erste Stock | lantai satu (di atas lantai dasar) |
| der Keller | ruang bawah tanah |

> Di DACH, „erster Stock“ adalah lantai **di atas** lantai dasar – berbeda dari kebiasaan di Indonesia!
`,
en: `
## es gibt – there is / there are
**es gibt** + accusative = “there is / there are”:
= Es gibt einen Pool. :: There's a pool.
= Gibt es hier WLAN? :: Is there Wi-Fi here?
= Es gibt keine Handtücher. :: There are no towels.

> It doesn't change for plurals: Es gibt zwei Betten.

## Useful sentences at the hotel
= Ich habe eine Reservierung auf den Namen … :: I have a reservation under the name …
= Ist das Frühstück inklusive? :: Is breakfast included?
= Ab wann kann ich einchecken? :: From when can I check in?
= Die Heizung funktioniert nicht. :: The heating isn't working.

## Floors
| German | Meaning |
| das Erdgeschoss (EG) | ground floor |
| der erste Stock | first floor (one above ground) |
| der Keller | cellar, basement |

> Like in British English, “erster Stock” is the floor **above** the ground floor.
`},
quiz: [
  ["„Ada restoran di hotel.“ ¦ “There's a restaurant in the hotel.”", ["Es gibt ein Restaurant im Hotel.", "Es ist ein Restaurant im Hotel.", "Da gibt ein Restaurant."], 0, "Ada = es gibt. ¦ There is = es gibt."],
  ["**Es gibt ___ Aufzug.** (der Aufzug, tidak ada ¦ there's no …)", ["keinen", "kein", "keine"], 0, "es gibt + Akkusativ: kein → keinen. ¦ accusative: keinen."],
  ["„erster Stock“ adalah … ¦ “erster Stock” is …", ["satu lantai di atas lantai dasar ¦ one floor above the ground floor", "lantai dasar ¦ the ground floor", "ruang bawah tanah ¦ the basement"], 0, "Lantai dasar = Erdgeschoss. ¦ Ground floor = Erdgeschoss."],
]},

g18: { title: "Kata kerja modal ¦ Modal verbs", body: {
id: `
Kata kerja modal: **können** (bisa), **müssen** (harus), **dürfen** (boleh), **wollen** (mau), **sollen** (sebaiknya), **möchten** (ingin).

## Kerangka kalimat
Kata kerja modal di **posisi 2**, kata kerja utama dalam **bentuk dasar di akhir**:
| 1 | 2 | … | akhir |
| Ich | kann | gut | **kochen**. |
| Morgen | muss | ich früh | **aufstehen**. |
| | Darf | ich hier | **parken**? |

## Bentuknya
| | können | müssen | dürfen | wollen |
| ich | kann | muss | darf | will |
| du | kannst | musst | darfst | willst |
| er/sie | kann | muss | darf | will |
| wir/sie | können | müssen | dürfen | wollen |

> ich dan er/sie **sama** dan tanpa -t: ich kann, er kann.

## Hati-hati: nicht müssen ≠ nicht dürfen
| | Arti |
| Du musst nicht kommen. | Kamu **tidak perlu** datang. |
| Du darfst nicht rauchen. | Kamu **tidak boleh** merokok. |

> **will** = mau (bukan „akan“). Lebih sopan: **möchte**.
`,
en: `
Modal verbs: **können** (can), **müssen** (must), **dürfen** (may), **wollen** (want), **sollen** (should), **möchten** (would like).

## The sentence frame
The modal is in **position 2**, the main verb goes **to the end in its base form**:
| 1 | 2 | … | end |
| Ich | kann | gut | **kochen**. |
| Morgen | muss | ich früh | **aufstehen**. |
| | Darf | ich hier | **parken**? |

## Forms
| | können | müssen | dürfen | wollen |
| ich | kann | muss | darf | will |
| du | kannst | musst | darfst | willst |
| er/sie | kann | muss | darf | will |
| wir/sie | können | müssen | dürfen | wollen |

> ich and er/sie are **the same** with no -t: ich kann, er kann.

## Careful: nicht müssen ≠ nicht dürfen
| | Meaning |
| Du musst nicht kommen. | You **don't have to** come. |
| Du darfst nicht rauchen. | You **mustn't** smoke. |

> **will** means “want” (not “will”!). More polite: **möchte**.
`},
quiz: [
  ["„Saya bisa berenang.“ ¦ “I can swim.”", ["Ich kann schwimmen.", "Ich kann schwimme.", "Ich schwimmen kann."], 0, "Modal + bentuk dasar di akhir. ¦ Modal + infinitive at the end."],
  ["„Kamu tidak perlu membayar.“ ¦ “You don't have to pay.”", ["Du musst nicht bezahlen.", "Du darfst nicht bezahlen.", "Du willst nicht bezahlen."], 0, "Tidak perlu = nicht müssen. ¦ Don't have to = nicht müssen."],
  ["**Er ___ Deutsch sprechen.** (können)", ["kann", "kannt", "können"], 0, "er kann – tanpa -t. ¦ er kann – no -t."],
]},

g19: { title: "Kalimat perintah & di dokter ¦ Commands & at the doctor's", body: {
id: `
## Kalimat perintah (Imperativ)
| untuk | bentuk | contoh |
| Sie | kata kerja + Sie | **Nehmen Sie** zwei Tabletten. |
| du | akar kata (tanpa -st) | **Nimm** eine Jacke mit! |
| ihr | bentuk ihr | **Kommt** schnell! |

> Pakai **bitte** supaya sopan: Setzen Sie sich **bitte**.

## Keluhan
= Mein Kopf tut weh. :: Kepala saya sakit.
= Mir tut der Rücken weh. :: Punggung saya sakit.
= Ich habe Kopfschmerzen / Fieber / Husten. :: Saya sakit kepala / demam / batuk.

**wehtun**: satu bagian → **tut weh**, beberapa bagian → **tun weh**: Meine Füße tun weh.

## Sistem kesehatan di DACH
- Pertama ke **Hausarzt** (dokter umum) – biasanya dengan janji (Termin).
- Obat dengan resep di **Apotheke**.
- Kalau sakit, kamu butuh **Krankmeldung** (surat sakit) untuk tempat kerja – sering mulai hari pertama atau ketiga.
- Darurat: **112**.
`,
en: `
## Commands (the imperative)
| for | form | example |
| Sie | verb + Sie | **Nehmen Sie** zwei Tabletten. |
| du | verb stem (no -st) | **Nimm** eine Jacke mit! |
| ihr | ihr form | **Kommt** schnell! |

> Add **bitte** to be polite: Setzen Sie sich **bitte**.

## Describing symptoms
= Mein Kopf tut weh. :: My head hurts.
= Mir tut der Rücken weh. :: My back hurts.
= Ich habe Kopfschmerzen / Fieber / Husten. :: I have a headache / fever / cough.

**wehtun**: one body part → **tut weh**, several → **tun weh**: Meine Füße tun weh.

## Healthcare in DACH
- First go to your **Hausarzt** (GP) – usually with an appointment (Termin).
- Prescription medicine comes from the **Apotheke**.
- When you're ill you need a **Krankmeldung** (sick note) for work – often from day one or day three.
- Emergency: **112**.
`},
quiz: [
  ["Perintah sopan: „Silakan duduk.“ ¦ Polite command: “Please sit down.”", ["Setzen Sie sich bitte.", "Sie setzen sich bitte?", "Setz bitte."], 0, "Sie-Imperativ: kata kerja + Sie. ¦ Sie imperative: verb + Sie."],
  ["**Mein Bauch ___ weh.**", ["tut", "tun", "hat"], 0, "Satu bagian: tut weh. ¦ One part: tut weh."],
  ["Perintah untuk teman: „Ambil payung!“ (nehmen) ¦ To a friend: “Take an umbrella!”", ["Nimm einen Schirm!", "Nehmen einen Schirm!", "Nimmst einen Schirm!"], 0, "du-Imperativ: nimm. ¦ du imperative: nimm."],
]},

g20: { title: "Berkenalan: du atau Sie? ¦ Getting to know people: du or Sie?", body: {
id: `
## Basa-basi yang umum
= Was machen Sie beruflich? :: Anda bekerja sebagai apa?
= Wie gefällt es Ihnen hier? :: Bagaimana kesan Anda di sini?
= Seit wann sind Sie in Österreich? :: Sejak kapan Anda di Austria?

## gefallen – menyukai (terbalik!)
Dengan **gefallen**, benda yang disukai menjadi subjek:
= Wien gefällt mir. :: Saya suka Wina. (harfiah: Wina menyenangkan bagi saya)
= Gefällt dir die Stadt? :: Kamu suka kotanya?

## seit + bentuk sekarang
Bahasa Jerman memakai **bentuk sekarang** untuk hal yang masih berlangsung:
= Ich bin seit drei Monaten hier. :: Saya di sini sejak tiga bulan.

## Kapan „du“?
- Sesama muda, teman, di banyak tempat kerja modern → **du**
- Lebih tua, formal, di kantor pemerintah → **Sie**
- Biasanya orang yang lebih tua atau atasan yang menawarkan „du“: **Wir können uns gern duzen.**

> Topik yang aman: cuaca, pekerjaan, liburan, makanan. Gaji dan agama sebaiknya dihindari di awal.
`,
en: `
## Common small talk
= Was machen Sie beruflich? :: What do you do for a living?
= Wie gefällt es Ihnen hier? :: How do you like it here?
= Seit wann sind Sie in Österreich? :: How long have you been in Austria?

## gefallen – to like (back to front!)
With **gefallen**, the thing you like is the subject:
= Wien gefällt mir. :: I like Vienna. (literally: Vienna pleases me)
= Gefällt dir die Stadt? :: Do you like the city?

## seit + present tense
German uses the **present tense** for things that are still going on:
= Ich bin seit drei Monaten hier. :: I've been here for three months.

## When to say “du”?
- People your age, friends, many modern workplaces → **du**
- Older people, formal settings, official offices → **Sie**
- Usually the older person or the boss offers “du”: **Wir können uns gern duzen.**

> Safe topics: weather, work, holidays, food. Avoid salary and religion at first.
`},
quiz: [
  ["„Saya suka Berlin.“ (gefallen) ¦ “I like Berlin.” (gefallen)", ["Berlin gefällt mir.", "Ich gefalle Berlin.", "Mir gefällt Berlin mich."], 0, "Yang disukai adalah subjek. ¦ The thing you like is the subject."],
  ["„Saya di sini sejak setahun.“ ¦ “I've been here for a year.”", ["Ich bin seit einem Jahr hier.", "Ich war seit einem Jahr hier.", "Ich bin für ein Jahr hier gewesen."], 0, "seit + bentuk sekarang. ¦ seit + present tense."],
  ["Siapa biasanya menawarkan „du“? ¦ Who usually offers “du”?", ["yang lebih tua atau atasan ¦ the older person or the boss", "yang lebih muda ¦ the younger person", "tidak ada aturan ¦ there's no rule"], 0, "Yang lebih tua/atasan menawarkan. ¦ The older person/boss offers it."],
]},

g21: { title: "Membandingkan ¦ Comparing", body: {
id: `
## Lebih … daripada: -er + als
| Dasar | Komparatif | Superlatif |
| klein | klein**er** | am klein**sten** |
| schnell | schnell**er** | am schnell**sten** |
| alt | **ä**lt**er** | am **ä**lt**esten** |
| groß | gr**ö**ß**er** | am gr**ö**ß**ten** |

Kata sifat pendek sering mendapat **Umlaut**: alt → älter, jung → jünger, warm → wärmer.

## Tidak beraturan
| | | |
| gut | besser | am besten |
| viel | mehr | am meisten |
| gern | lieber | am liebsten |
| hoch | höher | am höchsten |

= Wien ist größer als Graz. :: Wina lebih besar daripada Graz.
= Ich trinke lieber Tee. :: Saya lebih suka minum teh.

## Sama: so … wie
= Mein Deutsch ist nicht so gut wie dein Englisch. :: Bahasa Jermanku tidak sebagus bahasa Inggrismu.

> „daripada“ = **als** (bukan „wie“). „se…/sama“ = **so … wie**.
`,
en: `
## -er + als (“than”)
| Base | Comparative | Superlative |
| klein | klein**er** | am klein**sten** |
| schnell | schnell**er** | am schnell**sten** |
| alt | **ä**lt**er** | am **ä**lt**esten** |
| groß | gr**ö**ß**er** | am gr**ö**ß**ten** |

Short adjectives often get an **umlaut**: alt → älter, jung → jünger, warm → wärmer.

> Unlike English, German never uses “more” for long adjectives: interessant → interessant**er**.

## Irregular
| | | |
| gut | besser | am besten |
| viel | mehr | am meisten |
| gern | lieber | am liebsten |
| hoch | höher | am höchsten |

= Wien ist größer als Graz. :: Vienna is bigger than Graz.
= Ich trinke lieber Tee. :: I'd rather drink tea.

## as … as: so … wie
= Mein Deutsch ist nicht so gut wie dein Englisch. :: My German isn't as good as your English.

> “than” = **als** (not “wie”). “as … as” = **so … wie**.
`},
quiz: [
  ["„lebih tua daripada“ ¦ “older than”", ["älter als", "alter als", "mehr alt als"], 0, "alt → älter, + als. ¦ alt → älter, + als."],
  ["Komparatif dari **gut** ¦ Comparative of **gut**", ["besser", "guter", "mehr gut"], 0, "gut – besser – am besten."],
  ["**Das Buch ist interessanter ___ der Film.**", ["als", "wie", "dann"], 0, "Perbandingan: als. ¦ Comparison: als."],
]},

g22: { title: "Kata kerja di akhir: weil, dass, wenn ¦ Verb at the end: weil, dass, wenn", body: {
id: `
## Kata hubung biasa: urutan tidak berubah
**und, aber, oder, denn, sondern** – kalimat kedua tetap normal (kata kerja posisi 2):
= Ich bin müde, aber ich gehe noch einkaufen. :: Saya capek, tapi saya masih pergi belanja.

## Anak kalimat: kata kerja ke AKHIR
Setelah **weil, dass, wenn, ob, obwohl, als, bevor, nachdem**, kata kerja pindah ke **akhir kalimat**:
| Kalimat utama | anak kalimat |
| Ich lerne Deutsch, | weil ich in Wien **arbeite**. |
| Ich glaube, | dass er recht **hat**. |
| Ich weiß nicht, | ob sie morgen **kommt**. |

> Dengan kata kerja modal: modal paling akhir: …, weil ich früh aufstehen **muss**.

## Anak kalimat di depan
Kalau anak kalimat di depan, kalimat utama dimulai dengan **kata kerja**:
= Wenn es regnet, **bleiben** wir zu Hause. :: Kalau hujan, kami tinggal di rumah.

## deshalb & trotzdem
Setelah **deshalb, trotzdem, dann** langsung kata kerja:
= Ich bin krank, deshalb **bleibe** ich zu Hause. :: Saya sakit, karena itu saya di rumah.
`,
en: `
## Simple connectors: word order doesn't change
**und, aber, oder, denn, sondern** – the second clause stays normal (verb in position 2):
= Ich bin müde, aber ich gehe noch einkaufen. :: I'm tired, but I'm still going shopping.

## Subordinate clauses: the verb goes to the END
After **weil, dass, wenn, ob, obwohl, als, bevor, nachdem**, the verb moves to the **end of the clause**:
| Main clause | subordinate clause |
| Ich lerne Deutsch, | weil ich in Wien **arbeite**. |
| Ich glaube, | dass er recht **hat**. |
| Ich weiß nicht, | ob sie morgen **kommt**. |

> With a modal: the modal comes last: …, weil ich früh aufstehen **muss**.

## Subordinate clause first
If the subordinate clause comes first, the main clause starts with the **verb**:
= Wenn es regnet, **bleiben** wir zu Hause. :: If it rains, we'll stay at home.

## deshalb & trotzdem
After **deshalb, trotzdem, dann** the verb comes straight away:
= Ich bin krank, deshalb **bleibe** ich zu Hause. :: I'm ill, so I'm staying at home.
`},
quiz: [
  ["„… karena saya capek.“ ¦ “… because I'm tired.”", ["…, weil ich müde bin.", "…, weil ich bin müde.", "…, weil bin ich müde."], 0, "Setelah weil, kata kerja di akhir. ¦ After weil, the verb goes last."],
  ["**Wenn ich Zeit habe, ___ ich dich.**", ["besuche", "ich besuche", "besuchen"], 0, "Anak kalimat di depan → kata kerja langsung. ¦ Subordinate clause first → verb comes next."],
  ["**Ich bin krank, deshalb ___ ich nicht.**", ["komme", "ich komme", "kommen"], 0, "Setelah deshalb: kata kerja. ¦ After deshalb: verb."],
]},

g23: { title: "Cuaca: es regnet ¦ Weather: es regnet", body: {
id: `
## Cuaca dengan „es“
Bahasa Jerman selalu memakai **es** untuk cuaca:
| Jerman | Indonesia |
| Es regnet. | Hujan. |
| Es schneit. | Turun salju. |
| Es ist sonnig. | Cerah. |
| Es ist windig. | Berangin. |
| Es ist kalt / warm / heiß. | Dingin / hangat / panas. |
| Es hat 20 Grad. | Suhunya 20 derajat. |

= Wie ist das Wetter heute? :: Bagaimana cuaca hari ini?

## Empat musim
der Frühling (Maret–Mei) · der Sommer (Juni–Agustus) · der Herbst (September–November) · der Winter (Desember–Februar)
= Im Winter wird es schon um vier Uhr dunkel. :: Di musim dingin sudah gelap jam empat sore.

> Di musim dingin, berpakaian berlapis (**Zwiebelprinzip** – prinsip bawang) dan jangan lupa **Mütze** dan sarung tangan!

## Basa-basi
Cuaca adalah topik obrolan yang aman:
= Schönes Wetter heute, oder? :: Cuacanya bagus hari ini, ya?
`,
en: `
## Weather with “es”
German always uses **es** for the weather:
| German | English |
| Es regnet. | It's raining. |
| Es schneit. | It's snowing. |
| Es ist sonnig. | It's sunny. |
| Es ist windig. | It's windy. |
| Es ist kalt / warm / heiß. | It's cold / warm / hot. |
| Es hat 20 Grad. | It's 20 degrees. |

= Wie ist das Wetter heute? :: What's the weather like today?

## The four seasons
der Frühling (spring) · der Sommer (summer) · der Herbst (autumn) · der Winter (winter)
= Im Winter wird es schon um vier Uhr dunkel. :: In winter it gets dark by four o'clock.

> In winter, dress in layers (the **Zwiebelprinzip** – the “onion principle”) and don't forget a **Mütze** and gloves!

## Small talk
The weather is a safe topic:
= Schönes Wetter heute, oder? :: Nice weather today, isn't it?
`},
quiz: [
  ["„Hujan.“ ¦ “It's raining.”", ["Es regnet.", "Regnet.", "Der Regen ist."], 0, "Cuaca selalu dengan es. ¦ Weather always takes es."],
  ["Musim apa **der Herbst**? ¦ Which season is **der Herbst**?", ["musim gugur ¦ autumn", "musim semi ¦ spring", "musim dingin ¦ winter"], 0, "Herbst = September–November."],
  ["**Im Winter ___ es oft.**", ["schneit", "schneien", "Schnee"], 0, "es schneit = turun salju. ¦ es schneit = it snows."],
]},

g25: { title: "Bahasa Jerman di tempat kerja ¦ German at work", body: {
id: `
## Bercerita tentang pekerjaan
| Jerman | Indonesia |
| Ich bin Krankenpflegerin. | Saya perawat. |
| Ich arbeite **als** Koch. | Saya bekerja sebagai juru masak. |
| Ich arbeite **bei** Siemens. | Saya bekerja di Siemens. |
| Ich arbeite **in** einem Hotel. | Saya bekerja di sebuah hotel. |
| Ich bin **für** … zuständig. | Saya bertanggung jawab atas … |

> Profesi **tanpa artikel**: Ich bin Lehrer (bukan ~~ein Lehrer~~). Bentuk perempuan sering dengan **-in**: Lehrer → Lehrer**in**, Koch → K**ö**ch**in**.

## Di kantor: Sie dan nama belakang
Di banyak perusahaan rekan kerja saling memakai **Sie** dan **Herr / Frau + nama belakang**. Di perusahaan modern dan di bidang perawatan/gastronomi, **du** juga umum. Ikuti saja kebiasaan rekan kerjamu.

## Kalimat berguna
= Können Sie mir das bitte zeigen? :: Bisakah Anda tunjukkan pada saya?
= Ich habe eine Frage zum Dienstplan. :: Saya ada pertanyaan soal jadwal kerja.
= Ich bin heute leider krank. :: Hari ini saya sakit.
= Wann habe ich Urlaub? :: Kapan saya cuti?

> Orang Jerman memisahkan kerja dan waktu pribadi: **Feierabend** (waktu pulang kerja) itu sakral!
`,
en: `
## Talking about your job
| German | English |
| Ich bin Krankenpflegerin. | I'm a nurse. |
| Ich arbeite **als** Koch. | I work as a cook. |
| Ich arbeite **bei** Siemens. | I work at Siemens. |
| Ich arbeite **in** einem Hotel. | I work in a hotel. |
| Ich bin **für** … zuständig. | I'm responsible for … |

> Jobs take **no article**: Ich bin Lehrer (not ~~ein Lehrer~~). The female form often adds **-in**: Lehrer → Lehrer**in**, Koch → K**ö**ch**in**.

## At the office: Sie and surnames
In many companies colleagues use **Sie** and **Herr / Frau + surname**. In modern companies and in care or hospitality jobs **du** is common too. Just follow your colleagues.

## Useful sentences
= Können Sie mir das bitte zeigen? :: Could you show me that, please?
= Ich habe eine Frage zum Dienstplan. :: I have a question about the rota.
= Ich bin heute leider krank. :: I'm afraid I'm ill today.
= Wann habe ich Urlaub? :: When do I have holiday?

> Germans keep work and private life apart: **Feierabend** (the end of the working day) is sacred!
`},
quiz: [
  ["„Saya bekerja sebagai perawat.“ ¦ “I work as a nurse.”", ["Ich arbeite als Krankenpfleger.", "Ich arbeite wie Krankenpfleger.", "Ich arbeite als ein Krankenpfleger."], 0, "als + profesi, tanpa artikel. ¦ als + job, no article."],
  ["„Saya bekerja di BMW.“ ¦ “I work at BMW.”", ["Ich arbeite bei BMW.", "Ich arbeite für BMW in.", "Ich arbeite an BMW."], 0, "Perusahaan: bei. ¦ Company: bei."],
  ["Bentuk perempuan dari **Lehrer** ¦ Female form of **Lehrer**", ["Lehrerin", "Lehrerine", "Lehrin"], 0, "+ -in."],
]},

g27: { title: "gern, lieber, am liebsten ¦ gern, lieber, am liebsten", body: {
id: `
## Menyukai kegiatan: kata kerja + gern
Untuk mengatakan kamu **suka melakukan** sesuatu, tambahkan **gern** setelah kata kerja:
= Ich koche gern. :: Saya suka memasak.
= Ich lese nicht gern. :: Saya tidak suka membaca.

| | arti |
| gern | suka |
| lieber | lebih suka |
| am liebsten | paling suka |

= Ich trinke gern Kaffee, aber lieber Tee. Am liebsten trinke ich Wasser. :: Saya suka kopi, tapi lebih suka teh. Yang paling saya suka adalah air.

## mögen – untuk benda dan orang
= Ich mag Schokolade. :: Saya suka cokelat.
= Magst du Hunde? :: Kamu suka anjing?

## Lust haben – ingin, mood
= Hast du Lust auf Kino? :: Kamu mau ke bioskop?
= Ich habe keine Lust. :: Saya tidak mood.

## Olahraga: spielen, machen, gehen
Fußball **spielen** · Yoga **machen** · schwimmen / wandern **gehen**
`,
en: `
## Liking activities: verb + gern
To say you **like doing** something, add **gern** after the verb:
= Ich koche gern. :: I like cooking.
= Ich lese nicht gern. :: I don't like reading.

| | meaning |
| gern | like to |
| lieber | prefer to |
| am liebsten | like most of all |

= Ich trinke gern Kaffee, aber lieber Tee. Am liebsten trinke ich Wasser. :: I like coffee, but I prefer tea. Most of all I like water.

## mögen – for things and people
= Ich mag Schokolade. :: I like chocolate.
= Magst du Hunde? :: Do you like dogs?

## Lust haben – to feel like
= Hast du Lust auf Kino? :: Do you feel like going to the cinema?
= Ich habe keine Lust. :: I don't feel like it.

## Sports: spielen, machen, gehen
Fußball **spielen** · Yoga **machen** · schwimmen / wandern **gehen**
`},
quiz: [
  ["„Saya suka berenang.“ ¦ “I like swimming.”", ["Ich schwimme gern.", "Ich mag schwimmen gern.", "Ich gern schwimme."], 0, "Kata kerja + gern. ¦ Verb + gern."],
  ["„Saya paling suka membaca.“ ¦ “I like reading most of all.”", ["Am liebsten lese ich.", "Am gernsten lese ich.", "Ich lese am meisten gern."], 0, "gern – lieber – am liebsten."],
  ["**Ich ___ Yoga.**", ["mache", "spiele", "gehe"], 0, "Yoga machen."],
]},

g28: { title: "Masa lampau: Perfekt dengan „haben“ ¦ Past: perfect with “haben”", body: {
id: `
Dalam percakapan sehari-hari, orang Jerman bercerita tentang masa lalu dengan **Perfekt**:
**haben** (posisi 2) + **Partizip II** (di akhir).

= Ich habe gestern Fußball gespielt. :: Kemarin saya main sepak bola.

## Membentuk Partizip II
| Jenis | Pola | Contoh |
| beraturan | **ge**…**t** | machen → **ge**mach**t** |
| tidak beraturan | **ge**…**en** | essen → **ge**gess**en**, sehen → **ge**seh**en** |
| terpisah | …**ge**… | einkaufen → ein**ge**kauft |
| tanpa ge- | be-, ver-, er-, -ieren | verstehen → verstanden, telefonieren → telefoniert |

## Kerangka kalimat
| 1 | haben | … | Partizip |
| Ich | habe | Brot | gekauft. |
| Gestern | hat | sie lange | gearbeitet. |
| Was | hast | du | gemacht? |

> Partizip tidak berubah – hanya **haben** yang menyesuaikan orang: ich habe, du hast, er hat …

> Partizip tidak beraturan harus dihafal. Di kartu, bentuk dasarnya ditulis dalam kurung.
`,
en: `
In everyday speech, Germans talk about the past with the **perfect tense**:
**haben** (position 2) + **past participle** (at the end).

= Ich habe gestern Fußball gespielt. :: I played football yesterday.

> German uses this for **simple past** situations too: “I played”, “I have played” – both are “ich habe gespielt”.

## Forming the participle
| Type | Pattern | Example |
| regular | **ge**…**t** | machen → **ge**mach**t** |
| irregular | **ge**…**en** | essen → **ge**gess**en**, sehen → **ge**seh**en** |
| separable | …**ge**… | einkaufen → ein**ge**kauft |
| no ge- | be-, ver-, er-, -ieren | verstehen → verstanden, telefonieren → telefoniert |

## Sentence frame
| 1 | haben | … | participle |
| Ich | habe | Brot | gekauft. |
| Gestern | hat | sie lange | gearbeitet. |
| Was | hast | du | gemacht? |

> The participle never changes – only **haben** agrees with the person.
`},
quiz: [
  ["„Saya membeli roti.“ ¦ “I bought bread.”", ["Ich habe Brot gekauft.", "Ich habe gekauft Brot.", "Ich kaufte gekauft Brot."], 0, "haben + … + Partizip di akhir. ¦ haben + … + participle at the end."],
  ["Partizip dari **einkaufen** ¦ Participle of **einkaufen**", ["eingekauft", "geeinkauft", "einkaufen"], 0, "ge- di tengah: ein-ge-kauft. ¦ ge- in the middle."],
  ["Partizip dari **verstehen** ¦ Participle of **verstehen**", ["verstanden", "geverstanden", "verstehtet"], 0, "ver- tanpa ge-. ¦ ver- verbs take no ge-."],
]},

g29: { title: "Perfekt dengan „sein“ ¦ The perfect with “sein”", body: {
id: `
Beberapa kata kerja memakai **sein** (bukan haben) dalam Perfekt:

## Kapan „sein“?
1. **Gerakan dari A ke B**: gehen, fahren, fliegen, kommen, laufen, reisen
2. **Perubahan keadaan**: aufstehen, einschlafen, sterben, werden
3. Kata kerja **sein**, **bleiben**, **passieren**

= Ich bin nach Hause gegangen. :: Saya pulang.
= Wir sind nach Salzburg gefahren. :: Kami pergi ke Salzburg.
= Was ist passiert? :: Apa yang terjadi?
= Sie ist gestern angekommen. :: Dia tiba kemarin.

## war & hatte
Untuk **sein** dan **haben**, orang biasanya memakai bentuk lampau yang lebih pendek (**Präteritum**):
| | sein | haben |
| ich | war | hatte |
| du | warst | hattest |
| er/sie | war | hatte |
| wir/sie | waren | hatten |

= Gestern war ich müde. :: Kemarin saya capek.
= Ich hatte keine Zeit. :: Saya tidak ada waktu.

> Lahir: **Ich bin 1995 geboren.** (selalu dengan „bin“)
`,
en: `
Some verbs use **sein** (not haben) in the perfect tense:

## When “sein”?
1. **Movement from A to B**: gehen, fahren, fliegen, kommen, laufen, reisen
2. **Change of state**: aufstehen, einschlafen, sterben, werden
3. The verbs **sein**, **bleiben**, **passieren**

= Ich bin nach Hause gegangen. :: I went home.
= Wir sind nach Salzburg gefahren. :: We went to Salzburg.
= Was ist passiert? :: What happened?
= Sie ist gestern angekommen. :: She arrived yesterday.

## war & hatte
For **sein** and **haben**, people usually use the shorter past form (**Präteritum**):
| | sein | haben |
| ich | war | hatte |
| du | warst | hattest |
| er/sie | war | hatte |
| wir/sie | waren | hatten |

= Gestern war ich müde. :: Yesterday I was tired.
= Ich hatte keine Zeit. :: I had no time.

> Being born: **Ich bin 1995 geboren.** (always with “bin”)
`},
quiz: [
  ["„Kami pergi ke Wina.“ ¦ “We went to Vienna.”", ["Wir sind nach Wien gefahren.", "Wir haben nach Wien gefahren.", "Wir sind nach Wien gefahrt."], 0, "Gerakan → sein. ¦ Movement → sein."],
  ["**Was ___ passiert?**", ["ist", "hat", "war gewesen"], 0, "passieren → sein."],
  ["„Kemarin saya capek.“ ¦ “Yesterday I was tired.”", ["Gestern war ich müde.", "Gestern habe ich müde.", "Gestern bin ich müde gewesen worden."], 0, "sein → war (Präteritum)."],
]},

g30: { title: "Masa depan & rencana ¦ Future & plans", body: {
id: `
## Bentuk sekarang + kata waktu
Untuk rencana yang jelas, bahasa Jerman biasanya cukup memakai **bentuk sekarang**:
= Morgen fahre ich nach Graz. :: Besok saya pergi ke Graz.
= Nächstes Jahr mache ich eine Ausbildung. :: Tahun depan saya ikut pelatihan kerja.

## werden + bentuk dasar
**werden** dipakai untuk janji, perkiraan, atau masa depan yang lebih jauh:
| | werden |
| ich | werde |
| du | wirst |
| er/sie | wird |
| wir/sie | werden |
= Ich werde dich anrufen. :: Saya akan meneleponmu.
= Es wird morgen regnen. :: Besok akan hujan.

> **werden** juga berarti „menjadi“: Sie wird Ärztin. – Dia akan menjadi dokter.

## Berencana
= Was hast du am Wochenende vor? :: Akhir pekan kamu ada rencana apa?
= Ich habe vor, nach Deutschland zu ziehen. :: Saya berencana pindah ke Jerman.
= Ich freue mich auf den Urlaub! :: Saya menantikan liburan!

## Ausbildung
Di DACH, **Ausbildung** (pelatihan vokasi 2–3,5 tahun) adalah jalan umum untuk masuk kerja – misalnya di bidang perawatan, perhotelan, atau teknik. Kamu bekerja di perusahaan dan belajar di sekolah, dan mendapat gaji.
`,
en: `
## Present tense + time word
For definite plans, German usually just uses the **present tense**:
= Morgen fahre ich nach Graz. :: Tomorrow I'm going to Graz.
= Nächstes Jahr mache ich eine Ausbildung. :: Next year I'm doing vocational training.

## werden + infinitive
**werden** is used for promises, predictions or the more distant future:
| | werden |
| ich | werde |
| du | wirst |
| er/sie | wird |
| wir/sie | werden |
= Ich werde dich anrufen. :: I'll call you.
= Es wird morgen regnen. :: It's going to rain tomorrow.

> **werden** also means “to become”: Sie wird Ärztin. – She's going to be a doctor. And careful: German **will** means “want”!

## Making plans
= Was hast du am Wochenende vor? :: What are you up to at the weekend?
= Ich habe vor, nach Deutschland zu ziehen. :: I'm planning to move to Germany.
= Ich freue mich auf den Urlaub! :: I'm looking forward to the holiday!

## Ausbildung
In DACH an **Ausbildung** (2–3.5 years of vocational training) is a common route into work – e.g. in care, hospitality or technical jobs. You work for a company, attend vocational school and get paid.
`},
quiz: [
  ["„Besok saya pergi ke Berlin.“ (rencana pasti) ¦ “Tomorrow I'm going to Berlin.”", ["Morgen fahre ich nach Berlin.", "Morgen ich fahre nach Berlin.", "Morgen will ich Berlin."], 0, "Rencana pasti: bentuk sekarang. ¦ Fixed plan: present tense."],
  ["**Ich ___ dich morgen anrufen.**", ["werde", "wird", "will werden"], 0, "ich werde + bentuk dasar. ¦ ich werde + infinitive."],
  ["„Ich will nach Hause.“ artinya … ¦ means …", ["Saya mau pulang. ¦ I want to go home.", "Saya akan pulang. ¦ I will go home.", "Saya sudah pulang. ¦ I went home."], 0, "will = mau. ¦ will = want."],
]},

g33: { title: "Akhiran kata sifat ¦ Adjective endings", body: {
id: `
Kalau kata sifat berdiri **setelah** kata benda (dengan sein), tidak berubah:
= Die Jacke ist rot. :: Jaketnya merah.

Kalau kata sifat berdiri **sebelum** kata benda, ia mendapat **akhiran**. Dasar yang paling sering:

## Setelah der / die / das (pasti): hampir selalu -e
| | |
| der rot**e** Pullover | die rot**e** Jacke |
| das rot**e** Kleid | die rot**en** Schuhe (jamak: -en) |

## Setelah ein / eine (tidak pasti): akhiran menunjukkan jenis
| | |
| ein rot**er** Pullover (der) | eine rot**e** Jacke (die) |
| ein rot**es** Kleid (das) | rot**e** Schuhe (jamak) |

= Ich suche einen warmen Mantel. :: Saya mencari mantel yang hangat. (Akkusativ: -en)

> Jangan khawatir kalau akhirannya salah – orang tetap mengerti. Dengarkan dan tiru pola yang sering muncul.

## Warna
rot · blau · grün · gelb · schwarz · weiß · grau · braun · rosa · lila
`,
en: `
When the adjective comes **after** the noun (with sein), it doesn't change:
= Die Jacke ist rot. :: The jacket is red.

When the adjective comes **before** the noun, it gets an **ending**. The most common basics:

## After der / die / das (definite): almost always -e
| | |
| der rot**e** Pullover | die rot**e** Jacke |
| das rot**e** Kleid | die rot**en** Schuhe (plural: -en) |

## After ein / eine (indefinite): the ending shows the gender
| | |
| ein rot**er** Pullover (der) | eine rot**e** Jacke (die) |
| ein rot**es** Kleid (das) | rot**e** Schuhe (plural) |

= Ich suche einen warmen Mantel. :: I'm looking for a warm coat. (accusative: -en)

> Don't worry if you get the ending wrong – people will still understand. Listen and copy the common patterns.

## Colours
rot · blau · grün · gelb · schwarz · weiß · grau · braun · rosa · lila
`},
quiz: [
  ["**Das Auto ist ___.**", ["neu", "neues", "neue"], 0, "Setelah sein: tanpa akhiran. ¦ After sein: no ending."],
  ["**ein ___ Kleid** (schön, das Kleid)", ["schönes", "schöne", "schöner"], 0, "ein + das-Wort → -es."],
  ["**der ___ Mann** (alt)", ["alte", "alter", "altes"], 0, "Setelah der/die/das: -e. ¦ After der/die/das: -e."],
]},

g34: { title: "Pernah? Präteritum & Perfekt ¦ Ever? Simple past & perfect", body: {
id: `
## Pengalaman: schon mal / noch nie
= Warst du schon mal in Deutschland? :: Kamu pernah ke Jerman?
= Ich war noch nie in der Schweiz. :: Saya belum pernah ke Swiss.
= Hast du schon mal Sauerkraut gegessen? :: Kamu pernah makan Sauerkraut?

## Präteritum – bentuk lampau tertulis
Dalam **tulisan** (buku, berita, cerita) orang memakai **Präteritum**. Dalam **percakapan** biasanya **Perfekt** – kecuali untuk beberapa kata kerja penting:
| | Präteritum (lisan juga) |
| sein | war |
| haben | hatte |
| können | konnte |
| müssen | musste |
| wollen | wollte |
| es gibt | es gab |

= Als Kind hatte ich keinen Pass. :: Waktu kecil saya tidak punya paspor.
= Ich musste lange warten. :: Saya harus menunggu lama.

## Di bandara & stasiun
= Mein Flug hat Verspätung. :: Penerbangan saya terlambat.
= Ich habe den Zug verpasst. :: Saya ketinggalan kereta.
= Von welchem Gleis fährt der Zug? :: Keretanya berangkat dari jalur berapa?

> Di stasiun DACH, pengumuman sering cepat. Kata kunci: **Verspätung** (terlambat), **Gleis** (jalur), **fällt aus** (batal).
`,
en: `
## Experiences: schon mal / noch nie
= Warst du schon mal in Deutschland? :: Have you ever been to Germany?
= Ich war noch nie in der Schweiz. :: I've never been to Switzerland.
= Hast du schon mal Sauerkraut gegessen? :: Have you ever eaten sauerkraut?

## The simple past (Präteritum)
In **writing** (books, news, stories) German uses the **Präteritum**. In **conversation** it usually uses the **perfect** – except for a few key verbs:
| | Präteritum (spoken too) |
| sein | war |
| haben | hatte |
| können | konnte |
| müssen | musste |
| wollen | wollte |
| es gibt | es gab |

= Als Kind hatte ich keinen Pass. :: As a child I didn't have a passport.
= Ich musste lange warten. :: I had to wait a long time.

## At the airport & station
= Mein Flug hat Verspätung. :: My flight is delayed.
= Ich habe den Zug verpasst. :: I missed the train.
= Von welchem Gleis fährt der Zug? :: Which platform does the train leave from?

> Station announcements in DACH can be fast. Key words: **Verspätung** (delay), **Gleis** (platform), **fällt aus** (cancelled).
`},
quiz: [
  ["„Kamu pernah ke Wina?“ ¦ “Have you ever been to Vienna?”", ["Warst du schon mal in Wien?", "Bist du schon mal Wien?", "Hattest du Wien?"], 0, "Pengalaman: schon mal + war. ¦ Experience: schon mal + war."],
  ["**Ich ___ gestern keine Zeit.**", ["hatte", "habe gehabt war", "hat"], 0, "haben → hatte."],
  ["„Der Zug fällt aus“ artinya … ¦ means …", ["keretanya batal ¦ the train is cancelled", "keretanya terlambat ¦ the train is late", "keretanya penuh ¦ the train is full"], 0, "ausfallen = batal. ¦ ausfallen = to be cancelled."],
]},

g35: { title: "Strategi percakapan ¦ Conversation strategies", body: {
id: `
Tidak ada yang mengerti semuanya – bahkan penutur asli. Dengan beberapa kalimat, kamu bisa terus bercakap-cakap.

## Kalau tidak mengerti
| Jerman | Indonesia |
| Wie bitte? | Maaf, apa? |
| Können Sie das bitte wiederholen? | Bisa diulang? |
| Können Sie bitte langsamer sprechen? | Bisa bicara lebih pelan? |
| Was bedeutet …? | Apa artinya …? |
| Ich habe das nicht verstanden. | Saya tidak mengerti itu. |

## Kalau tidak tahu katanya
| | |
| Wie heißt das auf Deutsch? | Apa ini dalam bahasa Jerman? |
| Das ist so ein Ding zum … | Itu semacam alat untuk … |
| Wie sagt man …? | Bagaimana mengatakan …? |

= Das ist so ein Ding zum Flaschenöffnen. :: Itu alat untuk membuka botol.

## Menunjukkan bahwa kamu mendengarkan
**Ach so!** · **Genau!** · **Echt?** · **Stimmt.** · **Interessant!**

## Mengulur waktu
**Also …** · **Na ja …** · **Moment …** · **Wie soll ich sagen …**

> Orang Jerman sering berbicara langsung dan jujur. „Das stimmt nicht“ (itu tidak benar) bukan berarti marah – hanya terus terang.
`,
en: `
Nobody understands everything – not even native speakers. With a few sentences you can keep any conversation going.

## When you don't understand
| German | English |
| Wie bitte? | Pardon? |
| Können Sie das bitte wiederholen? | Could you repeat that? |
| Können Sie bitte langsamer sprechen? | Could you speak more slowly? |
| Was bedeutet …? | What does … mean? |
| Ich habe das nicht verstanden. | I didn't understand that. |

## When you don't know the word
| | |
| Wie heißt das auf Deutsch? | What's that called in German? |
| Das ist so ein Ding zum … | It's a thing for … |
| Wie sagt man …? | How do you say …? |

= Das ist so ein Ding zum Flaschenöffnen. :: It's a thing for opening bottles.

## Showing you're listening
**Ach so!** · **Genau!** · **Echt?** · **Stimmt.** · **Interessant!**

## Buying time
**Also …** · **Na ja …** · **Moment …** · **Wie soll ich sagen …**

> Germans often speak directly and honestly. “Das stimmt nicht” (that's not right) doesn't mean they're angry – they're just being clear.
`},
quiz: [
  ["Kamu tidak mengerti. Kamu bilang … ¦ You didn't understand. You say …", ["Können Sie das bitte wiederholen?", "Ich weiß.", "Genau!"], 0, "Minta diulang dengan sopan. ¦ Politely ask for a repeat."],
  ["„Ach so!“ artinya … ¦ means …", ["Oh begitu! ¦ Oh, I see!", "Tidak! ¦ No!", "Tunggu! ¦ Wait!"], 0, "Ach so = oh begitu. ¦ Ach so = I see."],
  ["Kamu lupa kata „pembuka botol“. Kamu bilang … ¦ You forgot the word “bottle opener”. You say …", ["Das ist so ein Ding zum Flaschenöffnen.", "Ich kann kein Deutsch.", "Flasche weg!"], 0, "Jelaskan dengan kata lain. ¦ Describe it in other words."],
]},

g37: { title: "Datif: mir, dir, dem ¦ The dative: mir, dir, dem", body: {
id: `
Kasus ketiga: **Dativ** – untuk **penerima** (kepada siapa?) dan setelah preposisi tertentu.

## Artikel dalam Dativ
| | Nominativ | Dativ |
| der | der / ein | **dem / einem** |
| die | die / eine | **der / einer** |
| das | das / ein | **dem / einem** |
| jamak | die | **den** (+n) |

## Kata ganti dalam Dativ
| | | | |
| ich | **mir** | wir | **uns** |
| du | **dir** | ihr | **euch** |
| er / es | **ihm** | sie | **ihnen** |
| sie | **ihr** | Sie | **Ihnen** |

= Können Sie mir helfen? :: Bisakah Anda membantu saya?
= Ich gebe dem Kind ein Geschenk. :: Saya memberi anak itu hadiah.
= Wie geht es Ihnen? :: Apa kabar Anda?

## Preposisi selalu dengan Dativ
**aus, bei, mit, nach, seit, von, zu, gegenüber**
= mit dem Bus · bei der Arbeit · seit einem Jahr · von meiner Mutter

## Kata kerja dengan Dativ
helfen, danken, gefallen, gehören, schmecken, wehtun
= Das Essen schmeckt mir. :: Saya suka makanannya.
`,
en: `
The third case: the **dative** – for the **receiver** (to whom?) and after certain prepositions.

## Articles in the dative
| | Nominative | Dative |
| der | der / ein | **dem / einem** |
| die | die / eine | **der / einer** |
| das | das / ein | **dem / einem** |
| plural | die | **den** (+n) |

## Pronouns in the dative
| | | | |
| ich | **mir** | wir | **uns** |
| du | **dir** | ihr | **euch** |
| er / es | **ihm** | sie | **ihnen** |
| sie | **ihr** | Sie | **Ihnen** |

= Können Sie mir helfen? :: Can you help me?
= Ich gebe dem Kind ein Geschenk. :: I'm giving the child a present.
= Wie geht es Ihnen? :: How are you?

## Prepositions always followed by the dative
**aus, bei, mit, nach, seit, von, zu, gegenüber**
= mit dem Bus · bei der Arbeit · seit einem Jahr · von meiner Mutter

## Verbs with the dative
helfen, danken, gefallen, gehören, schmecken, wehtun
= Das Essen schmeckt mir. :: I like the food.
`},
quiz: [
  ["„Bisakah kamu membantu saya?“ ¦ “Can you help me?”", ["Kannst du mir helfen?", "Kannst du mich helfen?", "Kannst du ich helfen?"], 0, "helfen + Dativ: mir. ¦ helfen takes the dative: mir."],
  ["**Ich fahre mit ___ U-Bahn.** (die U-Bahn)", ["der", "die", "den"], 0, "mit + Dativ: die → der. ¦ mit + dative: die → der."],
  ["**seit ___ Jahr** (ein Jahr)", ["einem", "ein", "einen"], 0, "seit + Dativ: einem. ¦ seit + dative: einem."],
]},

g40: { title: "Kata kerja refleksif ¦ Reflexive verbs", body: {
id: `
Kata kerja refleksif memakai **sich** („diri sendiri“). Kata ganti berubah sesuai orang:
| | sich freuen |
| ich | freue **mich** |
| du | freust **dich** |
| er / sie | freut **sich** |
| wir | freuen **uns** |
| ihr | freut **euch** |
| sie / Sie | freuen **sich** |

= Ich freue mich sehr! :: Saya senang sekali!
= Setzen Sie sich bitte. :: Silakan duduk.

## Banyak kata kerja refleksif punya preposisi tetap
| | |
| sich freuen **auf** + Akk. | menantikan (masa depan) |
| sich freuen **über** + Akk. | senang atas (yang sudah terjadi) |
| sich interessieren **für** | tertarik pada |
| sich erinnern **an** | ingat akan |
| sich gewöhnen **an** | terbiasa dengan |
| sich kümmern **um** | mengurus |

= Ich freue mich auf das Wochenende. :: Saya menantikan akhir pekan.
= Ich gewöhne mich an das Wetter. :: Saya mulai terbiasa dengan cuacanya.

> Pelajari kata kerja ini **dengan preposisinya** – seperti artikel pada kata benda.
`,
en: `
Reflexive verbs use **sich** (“oneself”). The pronoun changes with the person:
| | sich freuen |
| ich | freue **mich** |
| du | freust **dich** |
| er / sie | freut **sich** |
| wir | freuen **uns** |
| ihr | freut **euch** |
| sie / Sie | freuen **sich** |

= Ich freue mich sehr! :: I'm very happy!
= Setzen Sie sich bitte. :: Please sit down.

> Many German reflexive verbs aren't reflexive in English: sich beeilen (to hurry), sich setzen (to sit down).

## Many reflexive verbs have a fixed preposition
| | |
| sich freuen **auf** + acc. | to look forward to |
| sich freuen **über** + acc. | to be happy about |
| sich interessieren **für** | to be interested in |
| sich erinnern **an** | to remember |
| sich gewöhnen **an** | to get used to |
| sich kümmern **um** | to take care of |

= Ich freue mich auf das Wochenende. :: I'm looking forward to the weekend.
= Ich gewöhne mich an das Wetter. :: I'm getting used to the weather.

> Learn these verbs **with their preposition** – like the article with a noun.
`},
quiz: [
  ["**Wir freuen ___ auf den Urlaub.**", ["uns", "sich", "euch"], 0, "wir → uns."],
  ["„Saya menantikan pesta.“ ¦ “I'm looking forward to the party.”", ["Ich freue mich auf die Party.", "Ich freue mich über die Party.", "Ich freue die Party."], 0, "Masa depan: freuen auf. ¦ Future: freuen auf."],
  ["**Ich interessiere mich ___ Musik.**", ["für", "an", "auf"], 0, "sich interessieren für."],
]},

g41: { title: "Di mana atau ke mana? ¦ Where or where to?", body: {
id: `
Sembilan preposisi bisa memakai **Akkusativ** atau **Dativ**:
**in, an, auf, über, unter, vor, hinter, neben, zwischen**

| Pertanyaan | Kasus | Contoh |
| **Wo?** (tempat, diam) | Dativ | Das Buch liegt auf **dem** Tisch. |
| **Wohin?** (arah, gerak) | Akkusativ | Ich lege das Buch auf **den** Tisch. |

= Ich bin im Park. :: Saya di taman. (wo? – in dem)
= Ich gehe in den Park. :: Saya pergi ke taman. (wohin? – in den)

## Pasangan kata kerja
| Wo? (Dativ) | Wohin? (Akkusativ) |
| liegen – terletak | legen – meletakkan |
| stehen – berdiri | stellen – menaruh (tegak) |
| sitzen – duduk | sich setzen – mendudukkan diri |
| hängen – tergantung | hängen – menggantung |

= Die Flasche steht im Kühlschrank. :: Botolnya di kulkas.
= Ich stelle die Flasche in den Kühlschrank. :: Saya taruh botolnya di kulkas.

> Singkatan: in dem → **im**, in das → **ins**, an dem → **am**, an das → **ans**.
`,
en: `
Nine prepositions can take either the **accusative** or the **dative**:
**in, an, auf, über, unter, vor, hinter, neben, zwischen**

| Question | Case | Example |
| **Wo?** (position, no movement) | Dative | Das Buch liegt auf **dem** Tisch. |
| **Wohin?** (direction, movement) | Accusative | Ich lege das Buch auf **den** Tisch. |

= Ich bin im Park. :: I'm in the park. (wo? – in dem)
= Ich gehe in den Park. :: I'm going to the park. (wohin? – in den)

## Verb pairs
| Wo? (dative) | Wohin? (accusative) |
| liegen – to lie | legen – to lay |
| stehen – to stand | stellen – to put (upright) |
| sitzen – to sit | sich setzen – to sit down |
| hängen – to hang (be) | hängen – to hang (put) |

= Die Flasche steht im Kühlschrank. :: The bottle is in the fridge.
= Ich stelle die Flasche in den Kühlschrank. :: I'm putting the bottle in the fridge.

> Contractions: in dem → **im**, in das → **ins**, an dem → **am**, an das → **ans**.
`},
quiz: [
  ["**Die Katze schläft auf ___ Sofa.** (das Sofa)", ["dem", "das", "den"], 0, "wo? → Dativ: dem. ¦ where? → dative: dem."],
  ["**Ich gehe in ___ Küche.** (die Küche)", ["die", "der", "dem"], 0, "wohin? → Akkusativ: die. ¦ where to? → accusative: die."],
  ["„Saya letakkan kuncinya di meja.“ ¦ “I put the key on the table.”", ["Ich lege den Schlüssel auf den Tisch.", "Ich liege den Schlüssel auf dem Tisch.", "Ich lege den Schlüssel auf dem Tisch."], 0, "legen + wohin → Akkusativ. ¦ legen + where to → accusative."],
]},

g42: { title: "Jumlah: viel, wenig, etwas ¦ Quantities: viel, wenig, etwas", body: {
id: `
## viel / viele
| | |
| **viel** + tak terhitung | viel Zeit, viel Wasser |
| **viele** + terhitung (jamak) | viele Leute, viele Bücher |
| **wenig / wenige** | sedikit |
| **ein paar** | beberapa (terhitung) |
| **etwas** | sedikit (tak terhitung) |
| **genug** | cukup |

= Ich habe viel Arbeit. :: Saya banyak pekerjaan.
= Es gibt viele Touristen. :: Ada banyak turis.
= Möchtest du etwas Milch? :: Mau sedikit susu?

## Wie viel? / Wie viele?
= Wie viel kostet das? :: Berapa harganya?
= Wie viele Kinder hast du? :: Anakmu berapa?

## Satuan
Setelah satuan, kata benda **tanpa artikel dan tanpa „von“**:
= ein Kilo Äpfel :: satu kilo apel
= eine Flasche Wasser :: sebotol air
= zwei Stück Kuchen :: dua potong kue

> Satuan maskulin/netral sering tetap tunggal: zwei **Kilo**, drei **Glas** Wein, 500 **Gramm**.
`,
en: `
## viel / viele
| | |
| **viel** + uncountable | viel Zeit, viel Wasser |
| **viele** + countable (plural) | viele Leute, viele Bücher |
| **wenig / wenige** | little / few |
| **ein paar** | a few |
| **etwas** | some (uncountable) |
| **genug** | enough |

= Ich habe viel Arbeit. :: I have a lot of work.
= Es gibt viele Touristen. :: There are lots of tourists.
= Möchtest du etwas Milch? :: Would you like some milk?

## Wie viel? / Wie viele?
= Wie viel kostet das? :: How much is it?
= Wie viele Kinder hast du? :: How many children do you have?

## Units
After a unit the noun has **no article and no “of”**:
= ein Kilo Äpfel :: a kilo of apples
= eine Flasche Wasser :: a bottle of water
= zwei Stück Kuchen :: two pieces of cake

> Masculine/neuter units often stay singular: zwei **Kilo**, drei **Glas** Wein, 500 **Gramm**.
`},
quiz: [
  ["**Ich habe ___ Freunde in Wien.**", ["viele", "viel", "vieles"], 0, "Terhitung jamak → viele. ¦ Countable plural → viele."],
  ["„sebotol air“ ¦ “a bottle of water”", ["eine Flasche Wasser", "eine Flasche von Wasser", "eine Flasche mit Wasser von"], 0, "Tanpa „von“. ¦ No “von”."],
  ["**Wie ___ Zeit haben wir?**", ["viel", "viele", "vielen"], 0, "Zeit tak terhitung → viel. ¦ Uncountable → viel."],
]},

g44: { title: "Sopan santun: Konjunktiv II ¦ Politeness: the Konjunktiv II", body: {
id: `
Orang Jerman sering terdengar langsung – tapi dalam permintaan, mereka memakai bentuk sopan **Konjunktiv II**:

| Langsung | Sopan |
| Können Sie …? | **Könnten** Sie …? |
| Haben Sie …? | **Hätten** Sie …? |
| Ich will … | Ich **würde** gern … / Ich **möchte** … |
| Darf ich …? | **Dürfte** ich …? |
| Ist das möglich? | **Wäre** das möglich? |

= Könnten Sie mir bitte helfen? :: Bisakah Anda membantu saya?
= Hätten Sie einen Moment Zeit? :: Apakah Anda punya waktu sebentar?
= Ich würde gern einen Termin vereinbaren. :: Saya ingin membuat janji.

## Kebiasaan sopan di DACH
- **Tepat waktu** – terlambat 5 menit: beri kabar.
- **Berjabat tangan** saat bertemu dan berpamitan (situasi formal).
- **Kontak mata** saat bersulang: **Prost!**
- Membatalkan janji **sedini mungkin**.
- Hari Minggu dan malam hari: **tenang** (Ruhezeit).

> Bahasa Jerman yang langsung („Das geht nicht.“) bukan berarti tidak sopan. Sebaliknya, terlalu basa-basi bisa membingungkan.
`,
en: `
Germans can sound direct – but in requests they use the polite **Konjunktiv II**:

| Direct | Polite |
| Können Sie …? | **Könnten** Sie …? |
| Haben Sie …? | **Hätten** Sie …? |
| Ich will … | Ich **würde** gern … / Ich **möchte** … |
| Darf ich …? | **Dürfte** ich …? |
| Ist das möglich? | **Wäre** das möglich? |

= Könnten Sie mir bitte helfen? :: Could you help me, please?
= Hätten Sie einen Moment Zeit? :: Would you have a moment?
= Ich würde gern einen Termin vereinbaren. :: I'd like to make an appointment.

## Polite habits in DACH
- **Be on time** – 5 minutes late: let them know.
- **Shake hands** when meeting and leaving (formal situations).
- **Eye contact** when toasting: **Prost!**
- Cancel appointments **as early as possible**.
- Sundays and evenings are **quiet** (Ruhezeit).

> Direct German (“Das geht nicht.”) isn't rude. On the other hand, being very indirect can confuse people.
`},
quiz: [
  ["Permintaan paling sopan ¦ Most polite request", ["Könnten Sie das Fenster öffnen?", "Öffnen Sie das Fenster!", "Sie öffnen das Fenster."], 0, "könnten = Konjunktiv II, sopan. ¦ könnten = polite."],
  ["„Saya ingin membuat janji.“ ¦ “I'd like to make an appointment.”", ["Ich würde gern einen Termin vereinbaren.", "Ich will Termin.", "Ich werde Termin machen gern."], 0, "würde gern = ingin (sopan). ¦ würde gern = would like."],
  ["Saat bersulang di DACH, kamu … ¦ When toasting in DACH you …", ["melihat mata orang ¦ make eye contact", "melihat gelas ¦ look at the glass", "diam saja ¦ stay silent"], 0, "Kontak mata saat „Prost!“. ¦ Eye contact when saying “Prost!”."],
]},

});

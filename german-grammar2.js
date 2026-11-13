// Grammatik-Lektionen für den Deutschkurs (Level 2). Gleiches Format wie german-grammar.js.
window.LESSONS_GERMAN = window.LESSONS_GERMAN || {};
Object.assign(window.LESSONS_GERMAN, {

g45: { title: "Bercerita: Präteritum ¦ Telling stories: the simple past", body: {
id: `
Dalam **cerita tertulis** (dan di Jerman utara juga lisan), orang memakai **Präteritum**.

## Kata kerja beraturan: -te
| | machen | arbeiten |
| ich | mach**te** | arbeit**ete** |
| du | mach**test** | arbeit**etest** |
| er/sie | mach**te** | arbeit**ete** |
| wir/sie | mach**ten** | arbeit**eten** |

## Kata kerja tidak beraturan: vokal berubah
| Infinitif | Präteritum |
| gehen | ging |
| kommen | kam |
| sehen | sah |
| finden | fand |
| essen | aß |
| fahren | fuhr |

= Als ich ein Kind war, wohnten wir in Bandung. :: Ketika saya kecil, kami tinggal di Bandung.

## als atau wenn?
| | |
| **als** | sekali di masa lalu: Als ich 18 war, … |
| **wenn** | berulang atau masa depan: Wenn ich Zeit habe, … |

> Dalam percakapan, untuk kebanyakan kata kerja tetap pakai **Perfekt**. Tapi **war, hatte, konnte, musste, wollte** selalu Präteritum.
`,
en: `
In **written stories** (and in spoken northern German), people use the **simple past (Präteritum)**.

## Regular verbs: -te
| | machen | arbeiten |
| ich | mach**te** | arbeit**ete** |
| du | mach**test** | arbeit**etest** |
| er/sie | mach**te** | arbeit**ete** |
| wir/sie | mach**ten** | arbeit**eten** |

## Irregular verbs: the vowel changes
| Infinitive | Simple past |
| gehen | ging |
| kommen | kam |
| sehen | sah |
| finden | fand |
| essen | aß |
| fahren | fuhr |

= Als ich ein Kind war, wohnten wir in Bandung. :: When I was a child, we lived in Bandung.

## als or wenn?
| | |
| **als** | once in the past: Als ich 18 war, … |
| **wenn** | repeated or future: Wenn ich Zeit habe, … |

> In conversation, use the **perfect** for most verbs. But **war, hatte, konnte, musste, wollte** are always simple past.
`},
quiz: [
  ["Präteritum dari **gehen** ¦ Simple past of **gehen**", ["ging", "gehte", "gang"], 0, "gehen – ging – gegangen."],
  ["**___ ich in Wien ankam, regnete es.**", ["Als", "Wenn", "Wann"], 0, "Sekali di masa lalu → als. ¦ Once in the past → als."],
  ["**Früher ___ wir in Jakarta.** (wohnen)", ["wohnten", "wohnen", "gewohnt"], 0, "Präteritum: wohn-te-n."],
]},

g46: { title: "Kata kerja dengan preposisi ¦ Verbs with prepositions", body: {
id: `
Banyak kata kerja Jerman punya **preposisi tetap** – sering berbeda dari bahasa Indonesia. Pelajari bersama!

| Jerman | Indonesia |
| Angst haben **vor** + Dat. | takut akan |
| sich freuen **auf** + Akk. | menantikan |
| sich freuen **über** + Akk. | senang atas |
| sich ärgern **über** + Akk. | kesal karena |
| warten **auf** + Akk. | menunggu |
| denken **an** + Akk. | memikirkan |
| stolz sein **auf** + Akk. | bangga pada |
| sprechen **über** + Akk. | berbicara tentang |

= Ich warte auf den Bus. :: Saya menunggu bus.
= Ich denke oft an meine Familie. :: Saya sering memikirkan keluarga saya.

## da- & wo-
Untuk **benda**, ganti „preposisi + es“ dengan **da-** (dan bertanya dengan **wo-**):
= Worauf wartest du? – Ich warte darauf. :: Kamu menunggu apa? – Saya menunggu itu.
= Woran denkst du? :: Kamu memikirkan apa?

> Sebelum vokal tambahkan **r**: dar**auf**, wor**über**. Untuk orang: **Auf wen** wartest du?
`,
en: `
Many German verbs have a **fixed preposition** – often different from English. Learn them together!

| German | English |
| Angst haben **vor** + dat. | to be afraid of |
| sich freuen **auf** + acc. | to look forward to |
| sich freuen **über** + acc. | to be happy about |
| sich ärgern **über** + acc. | to be annoyed about |
| warten **auf** + acc. | to wait for |
| denken **an** + acc. | to think of |
| stolz sein **auf** + acc. | to be proud of |
| sprechen **über** + acc. | to talk about |

= Ich warte auf den Bus. :: I'm waiting for the bus.
= Ich denke oft an meine Familie. :: I often think of my family.

## da- & wo-
For **things**, replace “preposition + it” with **da-** (and ask with **wo-**):
= Worauf wartest du? – Ich warte darauf. :: What are you waiting for? – I'm waiting for it.
= Woran denkst du? :: What are you thinking about?

> Before a vowel add **r**: dar**auf**, wor**über**. For people: **Auf wen** wartest du?
`},
quiz: [
  ["„Saya menunggu kereta.“ ¦ “I'm waiting for the train.”", ["Ich warte auf den Zug.", "Ich warte für den Zug.", "Ich warte den Zug."], 0, "warten auf + Akk."],
  ["**Ich habe Angst ___ Spinnen.**", ["vor", "von", "über"], 0, "Angst haben vor."],
  ["**Wartest du auf das Paket? – Ja, ich warte ___.**", ["darauf", "auf es", "dafür"], 0, "Benda: da(r)- + preposisi. ¦ Things: da(r)- + preposition."],
]},

g47: { title: "Anak kalimat relatif ¦ Relative clauses", body: {
id: `
Dengan anak kalimat relatif, kamu menjelaskan **siapa** atau **apa** yang dimaksud – seperti „yang“ dalam bahasa Indonesia.

Kata ganti relatif biasanya **sama dengan artikel**:
| | Nom. | Akk. | Dat. |
| der | der | **den** | **dem** |
| die | die | die | **der** |
| das | das | das | **dem** |
| jamak | die | die | **denen** |

= Der Mann, der dort steht, ist mein Vermieter. :: Laki-laki yang berdiri di sana adalah pemilik rumah saya.
= Die Wohnung, die ich gesehen habe, ist schön. :: Apartemen yang saya lihat itu bagus.
= Das ist die Frau, der ich geholfen habe. :: Itu perempuan yang saya bantu.

## Aturannya
- Jenis (der/die/das) mengikuti **kata benda yang dijelaskan**.
- Kasus mengikuti **fungsi di anak kalimat**.
- Kata kerja ada di **akhir** anak kalimat.
- Selalu ada **koma**.

> Untuk tempat sering dipakai **wo**: die Stadt, **wo** ich wohne.
`,
en: `
Relative clauses describe **who** or **what** you mean – like “who / which / that”.

The relative pronoun is usually **the same as the article**:
| | Nom. | Acc. | Dat. |
| der | der | **den** | **dem** |
| die | die | die | **der** |
| das | das | das | **dem** |
| plural | die | die | **denen** |

= Der Mann, der dort steht, ist mein Vermieter. :: The man who's standing there is my landlord.
= Die Wohnung, die ich gesehen habe, ist schön. :: The flat that I saw is nice.
= Das ist die Frau, der ich geholfen habe. :: That's the woman I helped.

## The rules
- The gender follows **the noun being described**.
- The case follows **its role in the relative clause**.
- The verb goes to the **end**.
- There's always a **comma**, and the pronoun can never be left out (unlike English “the flat I saw”).

> For places **wo** is often used: die Stadt, **wo** ich wohne.
`},
quiz: [
  ["**Das ist der Kollege, ___ aus Graz kommt.**", ["der", "den", "die"], 0, "Subjek, maskulin → der. ¦ Subject, masculine → der."],
  ["**Die Wohnung, ___ ich miete, ist klein.**", ["die", "der", "den"], 0, "Objek, feminin → die. ¦ Object, feminine → die."],
  ["**Der Mann, ___ ich geholfen habe, …**", ["dem", "den", "der"], 0, "helfen + Dativ → dem."],
]},

g48: { title: "Kalimat pasif ¦ The passive", body: {
id: `
Dalam kalimat pasif, yang penting adalah **apa yang terjadi** – bukan siapa pelakunya. Kantor pemerintah, formulir dan berita sangat suka pasif.

## Bentuk: werden + Partizip II
| Waktu | Pasif |
| sekarang | Der Antrag **wird** bearbeitet. |
| lampau | Der Antrag **wurde** bearbeitet. |
| Perfekt | Der Antrag **ist** bearbeitet **worden**. |
| dengan modal | Das Formular **muss** unterschrieben **werden**. |

= Ihr Antrag wird innerhalb von zehn Tagen bearbeitet. :: Permohonan Anda diproses dalam sepuluh hari.
= Mein Fahrrad wurde gestohlen. :: Sepeda saya dicuri.

## Pelakunya: von + Dativ
= Das Formular wird von der Behörde geprüft. :: Formulir itu diperiksa oleh instansi.

> Mirip dengan bentuk **di-** dalam bahasa Indonesia: dicuri = **wurde gestohlen**, diproses = **wird bearbeitet**.
`,
en: `
In the passive, what matters is **what happens** – not who does it. Offices, forms and the news love the passive.

## Form: werden + past participle
| Tense | Passive |
| present | Der Antrag **wird** bearbeitet. |
| past | Der Antrag **wurde** bearbeitet. |
| perfect | Der Antrag **ist** bearbeitet **worden**. |
| with a modal | Das Formular **muss** unterschrieben **werden**. |

= Ihr Antrag wird innerhalb von zehn Tagen bearbeitet. :: Your application will be processed within ten days.
= Mein Fahrrad wurde gestohlen. :: My bike was stolen.

## The doer: von + dative
= Das Formular wird von der Behörde geprüft. :: The form is checked by the authorities.

> German uses **werden** for the passive, not “sein”. Careful: “Ich werde …” on its own means “I will …”.
`},
quiz: [
  ["„Paspor saya dicuri.“ ¦ “My passport was stolen.”", ["Mein Pass wurde gestohlen.", "Mein Pass hat gestohlen.", "Mein Pass ist stehlen."], 0, "Pasif lampau: wurde + Partizip. ¦ Past passive: wurde + participle."],
  ["**Das Formular muss unterschrieben ___.**", ["werden", "worden", "wird"], 0, "Modal + Partizip + werden."],
  ["**Der Brief ___ morgen geschickt.**", ["wird", "werden", "wurde morgen"], 0, "Sekarang/masa depan: wird. ¦ Present/future: wird."],
]},

g49: { title: "seit, vor, für ¦ seit, vor, für", body: {
id: `
## seit + bentuk SEKARANG
Untuk hal yang mulai di masa lalu dan **masih berlangsung**, bahasa Jerman memakai **bentuk sekarang**:
= Ich lerne seit einem Jahr Deutsch. :: Saya belajar bahasa Jerman sejak setahun (dan masih belajar).
= Ich wohne seit März in Linz. :: Saya tinggal di Linz sejak Maret.

> Salah: ~~Ich habe seit einem Jahr Deutsch gelernt~~ – itu terdengar seperti sudah berhenti.

## Tiga kata waktu
| | Arti | Contoh |
| **seit** + Dat. | sejak (masih berlangsung) | seit zwei Wochen |
| **vor** + Dat. | … yang lalu | vor zwei Wochen |
| **für** + Akk. | selama (rencana) | für zwei Wochen |

= Ich bin vor drei Jahren nach Österreich gekommen. :: Saya datang ke Austria tiga tahun lalu.
= Ich fahre für eine Woche nach Hause. :: Saya pulang selama seminggu.

## Pertanyaan
= Seit wann wohnst du hier? :: Sejak kapan kamu tinggal di sini?
= Wie lange dauert der Kurs? :: Kursusnya berapa lama?
`,
en: `
## seit + PRESENT tense
For things that started in the past and **are still going on**, German uses the **present tense**:
= Ich lerne seit einem Jahr Deutsch. :: I've been learning German for a year.
= Ich wohne seit März in Linz. :: I've lived in Linz since March.

> Wrong: ~~Ich habe seit einem Jahr Deutsch gelernt~~ – that sounds as if you've stopped. English “have been …ing” = German present tense!

## Three time words
| | Meaning | Example |
| **seit** + dat. | since / for (still ongoing) | seit zwei Wochen |
| **vor** + dat. | … ago | vor zwei Wochen |
| **für** + acc. | for (planned) | für zwei Wochen |

= Ich bin vor drei Jahren nach Österreich gekommen. :: I came to Austria three years ago.
= Ich fahre für eine Woche nach Hause. :: I'm going home for a week.

## Questions
= Seit wann wohnst du hier? :: How long have you lived here?
= Wie lange dauert der Kurs? :: How long does the course last?
`},
quiz: [
  ["„Saya bekerja di sini sejak 2021.“ ¦ “I've worked here since 2021.”", ["Ich arbeite seit 2021 hier.", "Ich habe seit 2021 hier gearbeitet.", "Ich arbeite für 2021 hier."], 0, "seit + bentuk sekarang. ¦ seit + present tense."],
  ["„dua tahun yang lalu“ ¦ “two years ago”", ["vor zwei Jahren", "seit zwei Jahren", "für zwei Jahre"], 0, "… yang lalu = vor. ¦ ago = vor."],
  ["„Saya ke Bali selama tiga minggu.“ ¦ “I'm going to Bali for three weeks.”", ["Ich fliege für drei Wochen nach Bali.", "Ich fliege seit drei Wochen nach Bali.", "Ich fliege vor drei Wochen nach Bali."], 0, "Rencana ke depan: für. ¦ Planned period: für."],
]},

g51: { title: "Di dokter: menjelaskan keluhan ¦ At the doctor's: describing symptoms", body: {
id: `
## Menjelaskan keluhan
| Jerman | Indonesia |
| Mir ist schwindlig / übel. | Saya pusing / mual. |
| Ich habe seit drei Tagen Fieber. | Saya demam sejak tiga hari. |
| Es tut hier weh. | Sakitnya di sini. |
| Der Schmerz ist stechend / dumpf. | Sakitnya menusuk / tumpul. |
| Es wird schlimmer. | Makin parah. |

## Pertanyaan dokter
= Was fehlt Ihnen? :: Apa keluhan Anda?
= Nehmen Sie Medikamente? :: Apakah Anda minum obat?
= Sind Sie gegen etwas allergisch? :: Apakah Anda alergi sesuatu?

## Sistem di DACH
- Kartu asuransi kesehatan (**e-card** di Austria, **Gesundheitskarte** di Jerman) selalu dibawa.
- Ke dokter spesialis sering perlu **Überweisung** (rujukan) dari Hausarzt.
- Kalau sakit, hubungi tempat kerja **di pagi hari** dan minta **Krankmeldung**.
- Darurat malam/akhir pekan: **Notaufnahme** atau nomor **112**.
`,
en: `
## Describing symptoms
| German | English |
| Mir ist schwindlig / übel. | I feel dizzy / sick. |
| Ich habe seit drei Tagen Fieber. | I've had a fever for three days. |
| Es tut hier weh. | It hurts here. |
| Der Schmerz ist stechend / dumpf. | It's a sharp / dull pain. |
| Es wird schlimmer. | It's getting worse. |

## The doctor's questions
= Was fehlt Ihnen? :: What seems to be the problem?
= Nehmen Sie Medikamente? :: Are you taking any medication?
= Sind Sie gegen etwas allergisch? :: Are you allergic to anything?

## The system in DACH
- Always carry your health insurance card (**e-card** in Austria, **Gesundheitskarte** in Germany).
- Specialists often require a **referral (Überweisung)** from your GP.
- If you're ill, call work **in the morning** and get a **Krankmeldung** (sick note).
- Emergencies at night/weekends: **Notaufnahme** (A&E) or **112**.
`},
quiz: [
  ["„Saya demam sejak kemarin.“ ¦ “I've had a fever since yesterday.”", ["Ich habe seit gestern Fieber.", "Ich hatte seit gestern Fieber gehabt.", "Ich bin seit gestern Fieber."], 0, "seit + bentuk sekarang. ¦ seit + present tense."],
  ["„Mir ist übel“ artinya … ¦ means …", ["saya mual ¦ I feel sick", "saya marah ¦ I'm angry", "saya capek ¦ I'm tired"], 0, "übel = mual. ¦ übel = nauseous."],
  ["Untuk dokter spesialis kamu sering butuh … ¦ For a specialist you often need …", ["eine Überweisung", "eine Rechnung", "einen Ausweis"], 0, "Überweisung = rujukan. ¦ Überweisung = referral."],
]},

g52: { title: "zu + Infinitif & um … zu ¦ zu + infinitive & um … zu", body: {
id: `
## zu + Infinitif
Setelah banyak kata kerja dan ungkapan, kata kerja kedua memakai **zu** dan berada di akhir:
= Ich habe vor, eine Ausbildung zu machen. :: Saya berencana mengikuti pelatihan kerja.
= Es ist schwer, eine Wohnung zu finden. :: Sulit menemukan apartemen.
= Vergiss nicht, die Unterlagen mitzubringen. :: Jangan lupa membawa dokumennya.

> Kata kerja terpisah: **zu** di tengah: mit**zu**bringen, an**zu**rufen.
> Setelah **kata kerja modal** tanpa zu: Ich muss arbeiten.

Kata yang sering dengan zu: vorhaben, versuchen, vergessen, anfangen, aufhören, Lust haben, Zeit haben, es ist wichtig / schwer / schön.

## um … zu – untuk (tujuan)
= Ich lerne Deutsch, um in Österreich zu arbeiten. :: Saya belajar bahasa Jerman untuk bekerja di Austria.
= Ich spare, um ein Auto zu kaufen. :: Saya menabung untuk membeli mobil.

> **um … zu** hanya kalau subjeknya sama. Kalau berbeda: **damit** – Ich spreche langsam, **damit** du mich verstehst.
`,
en: `
## zu + infinitive
After many verbs and expressions, the second verb takes **zu** and goes to the end:
= Ich habe vor, eine Ausbildung zu machen. :: I'm planning to do vocational training.
= Es ist schwer, eine Wohnung zu finden. :: It's hard to find a flat.
= Vergiss nicht, die Unterlagen mitzubringen. :: Don't forget to bring the documents.

> Separable verbs: **zu** goes in the middle: mit**zu**bringen, an**zu**rufen.
> After **modal verbs** there's no zu: Ich muss arbeiten.

Common triggers: vorhaben, versuchen, vergessen, anfangen, aufhören, Lust haben, Zeit haben, es ist wichtig / schwer / schön.

## um … zu – in order to
= Ich lerne Deutsch, um in Österreich zu arbeiten. :: I'm learning German in order to work in Austria.
= Ich spare, um ein Auto zu kaufen. :: I'm saving to buy a car.

> **um … zu** only if the subject is the same. If it's different: **damit** – Ich spreche langsam, **damit** du mich verstehst.
`},
quiz: [
  ["„Saya mencoba menelepon kamu.“ ¦ “I tried to call you.”", ["Ich habe versucht, dich anzurufen.", "Ich habe versucht, dich zu anrufen.", "Ich habe versucht, anrufen dich."], 0, "Kata kerja terpisah: an-zu-rufen. ¦ Separable: an-zu-rufen."],
  ["„Saya belajar untuk lulus ujian.“ ¦ “I'm studying to pass the exam.”", ["Ich lerne, um die Prüfung zu bestehen.", "Ich lerne, für die Prüfung bestehen.", "Ich lerne, damit bestehen."], 0, "Tujuan, subjek sama: um … zu. ¦ Purpose, same subject: um … zu."],
  ["**Ich muss morgen früh ___.**", ["aufstehen", "aufzustehen", "zu aufstehen"], 0, "Setelah modal tanpa zu. ¦ No zu after a modal."],
]},

g53: { title: "Pertanyaan tidak langsung & rapat ¦ Indirect questions & meetings", body: {
id: `
## Pertanyaan tidak langsung – lebih sopan
Pertanyaan langsung terdengar lebih keras. Dengan **Wissen Sie, …?** atau **Können Sie mir sagen, …?** jadi lebih sopan – dan **kata kerja pindah ke akhir**:
| Langsung | Tidak langsung |
| Wann beginnt das Meeting? | Wissen Sie, wann das Meeting **beginnt**? |
| Wo ist der Raum? | Können Sie mir sagen, wo der Raum **ist**? |
| Kommt sie? | Ich weiß nicht, **ob** sie **kommt**. |

> Pertanyaan ya/tidak menjadi **ob** (apakah).

## Di rapat
| | |
| Sollen wir anfangen? | Kita mulai? |
| Darf ich kurz ergänzen? | Boleh saya menambahkan? |
| Ich schlage vor, dass … | Saya usul agar … |
| Kommen wir zum nächsten Punkt. | Mari ke poin berikutnya. |
| Wer übernimmt das? | Siapa yang mengurus itu? |
| Fassen wir zusammen. | Mari kita rangkum. |

> Rapat di DACH biasanya mulai **tepat waktu** dan punya **Tagesordnung** (agenda) yang jelas.
`,
en: `
## Indirect questions – more polite
Direct questions can sound blunt. With **Wissen Sie, …?** or **Können Sie mir sagen, …?** they're more polite – and **the verb moves to the end**:
| Direct | Indirect |
| Wann beginnt das Meeting? | Wissen Sie, wann das Meeting **beginnt**? |
| Wo ist der Raum? | Können Sie mir sagen, wo der Raum **ist**? |
| Kommt sie? | Ich weiß nicht, **ob** sie **kommt**. |

> Yes/no questions become **ob** (whether).

## In meetings
| | |
| Sollen wir anfangen? | Shall we start? |
| Darf ich kurz ergänzen? | May I add something? |
| Ich schlage vor, dass … | I suggest that … |
| Kommen wir zum nächsten Punkt. | Let's move on to the next item. |
| Wer übernimmt das? | Who will take that on? |
| Fassen wir zusammen. | Let's sum up. |

> Meetings in DACH usually start **on time** and have a clear **Tagesordnung** (agenda).
`},
quiz: [
  ["„Anda tahu di mana ruangannya?“ ¦ “Do you know where the room is?”", ["Wissen Sie, wo der Raum ist?", "Wissen Sie, wo ist der Raum?", "Wissen Sie, ist wo der Raum?"], 0, "Pertanyaan tidak langsung: kata kerja di akhir. ¦ Indirect question: verb at the end."],
  ["**Ich weiß nicht, ___ er heute kommt.**", ["ob", "wenn", "dass ob"], 0, "Ya/tidak → ob. ¦ Yes/no → ob."],
  ["„Mari ke poin berikutnya.“ ¦ “Let's move on to the next item.”", ["Kommen wir zum nächsten Punkt.", "Gehen wir nach Punkt.", "Nächste Punkt kommt."], 0, "Ungkapan rapat standar. ¦ Standard meeting phrase."],
]},

g54: { title: "E-mail formal & santai ¦ Formal & informal e-mails", body: {
id: `
## Susunan
| Bagian | formal | santai |
| Sapaan | Sehr geehrte Frau Berger, | Liebe Anna, / Hallo Tom, |
| tanpa nama | Sehr geehrte Damen und Herren, | – |
| Pembuka | ich schreibe Ihnen, weil … | danke für deine Nachricht! |
| Lampiran | Im Anhang finden Sie … | Ich schicke dir … mit. |
| Permintaan | Könnten Sie bitte …? | Kannst du …? |
| Penutup | Ich freue mich auf Ihre Antwort. | Bis bald! |
| Salam | Mit freundlichen Grüßen | Viele Grüße / Liebe Grüße |

> Setelah sapaan ada **koma**, lalu baris berikutnya dimulai dengan **huruf kecil**: Sehr geehrte Frau Berger, **ich** schreibe Ihnen …

## Aturan lain
- **Sie, Ihr, Ihnen** selalu huruf besar.
- Untuk laki-laki: Sehr geehrte**r** Herr …, untuk perempuan: Sehr geehrte Frau …
- Subjek (Betreff) singkat dan jelas: „Bewerbung als Pflegefachkraft“.
- Balas dalam **1–2 hari kerja**.

= Vielen Dank für Ihre schnelle Antwort. :: Terima kasih atas balasan cepat Anda.
= Bei Fragen stehe ich Ihnen gern zur Verfügung. :: Jika ada pertanyaan, saya siap membantu.
`,
en: `
## Structure
| Part | formal | informal |
| Greeting | Sehr geehrte Frau Berger, | Liebe Anna, / Hallo Tom, |
| no name | Sehr geehrte Damen und Herren, | – |
| Opening | ich schreibe Ihnen, weil … | danke für deine Nachricht! |
| Attachment | Im Anhang finden Sie … | Ich schicke dir … mit. |
| Request | Könnten Sie bitte …? | Kannst du …? |
| Closing | Ich freue mich auf Ihre Antwort. | Bis bald! |
| Sign-off | Mit freundlichen Grüßen | Viele Grüße / Liebe Grüße |

> After the greeting there's a **comma**, and the next line starts with a **lowercase letter**: Sehr geehrte Frau Berger, **ich** schreibe Ihnen …

## Other rules
- **Sie, Ihr, Ihnen** always have a capital letter.
- For men: Sehr geehrte**r** Herr …, for women: Sehr geehrte Frau …
- Keep the subject (Betreff) short and clear: “Bewerbung als Pflegefachkraft”.
- Reply within **1–2 working days**.

= Vielen Dank für Ihre schnelle Antwort. :: Thank you for your quick reply.
= Bei Fragen stehe ich Ihnen gern zur Verfügung. :: If you have any questions, I'm happy to help.
`},
quiz: [
  ["Sapaan formal untuk Pak Schmidt ¦ Formal greeting for Mr Schmidt", ["Sehr geehrter Herr Schmidt,", "Sehr geehrte Herr Schmidt,", "Lieber Herr Schmidt!"], 0, "Laki-laki: geehrter. ¦ Men: geehrter."],
  ["Salam penutup formal standar ¦ Standard formal sign-off", ["Mit freundlichen Grüßen", "Liebe Grüße", "Tschüss"], 0, "MfG = standar formal. ¦ MfG = the standard."],
  ["Setelah „Sehr geehrte Frau Berger,“ baris berikutnya mulai dengan … ¦ After “Sehr geehrte Frau Berger,” the next line starts with …", ["huruf kecil ¦ a lowercase letter", "huruf besar ¦ a capital letter", "tanda seru ¦ an exclamation mark"], 0, "Setelah koma: huruf kecil. ¦ After the comma: lowercase."],
]},

g55: { title: "Menelepon & rapat video ¦ Phone calls & video calls", body: {
id: `
## Mengangkat telepon
Di DACH, orang mengangkat telepon dengan **nama belakangnya**: „**Weber.**“ atau „**Lestari, guten Tag.**“ Di kantor: „Firma Müller, **Lestari am Apparat**.“

## Kalimat telepon
| | |
| Könnte ich bitte mit Frau Weber sprechen? | Bisa bicara dengan Ibu Weber? |
| Einen Moment, ich verbinde Sie. | Sebentar, saya sambungkan. |
| Sie ist gerade nicht da. | Beliau sedang tidak ada. |
| Kann ich etwas ausrichten? | Ada pesan? |
| Können Sie mich zurückrufen? | Bisa telepon balik? |
| Wie war Ihr Name noch mal? | Siapa nama Anda tadi? |
| Auf Wiederhören! | Sampai jumpa! (di telepon) |

## Mengeja
Nama dan email sering dieja. **@** = „at“ / „ät“, **.** = „Punkt“, **-** = „Bindestrich“.

## Rapat video
= Hören Sie mich? :: Anda bisa mendengar saya?
= Du bist stumm geschaltet. :: Mikrofonmu mati.
= Ich teile kurz meinen Bildschirm. :: Saya bagikan layar sebentar.
`,
en: `
## Answering the phone
In DACH people answer with their **surname**: “**Weber.**” or “**Lestari, guten Tag.**” At work: “Firma Müller, **Lestari am Apparat**.”

## Phone phrases
| | |
| Könnte ich bitte mit Frau Weber sprechen? | Could I speak to Ms Weber, please? |
| Einen Moment, ich verbinde Sie. | One moment, I'll put you through. |
| Sie ist gerade nicht da. | She's not here right now. |
| Kann ich etwas ausrichten? | Can I take a message? |
| Können Sie mich zurückrufen? | Could you call me back? |
| Wie war Ihr Name noch mal? | What was your name again? |
| Auf Wiederhören! | Goodbye! (on the phone) |

## Spelling
Names and e-mails are often spelled out. **@** = “at” / “ät”, **.** = “Punkt”, **-** = “Bindestrich”.

## Video calls
= Hören Sie mich? :: Can you hear me?
= Du bist stumm geschaltet. :: You're on mute.
= Ich teile kurz meinen Bildschirm. :: I'll share my screen for a moment.
`},
quiz: [
  ["Bagaimana orang di DACH biasanya mengangkat telepon? ¦ How do people in DACH usually answer the phone?", ["dengan nama belakang ¦ with their surname", "dengan „Halo?“ saja ¦ with just “Hello?”", "dengan nomor telepon ¦ with their number"], 0, "Contoh: „Weber.“ ¦ E.g. “Weber.”"],
  ["Pamit di telepon ¦ Saying goodbye on the phone", ["Auf Wiederhören!", "Auf Wiedersehen!", "Gute Nacht!"], 0, "Di telepon: Wiederhören (mendengar lagi). ¦ On the phone: Wiederhören (hear again)."],
  ["„Ada pesan?“ ¦ “Can I take a message?”", ["Kann ich etwas ausrichten?", "Haben Sie Nachricht?", "Wollen Sie schreiben?"], 0, "etwas ausrichten = menyampaikan pesan. ¦ = to pass on a message."],
]},

g56: { title: "Angka & tren ¦ Figures & trends", body: {
id: `
## Naik & turun
| Kata kerja | Kata benda |
| steigen (ist gestiegen) | die Steigerung |
| sinken (ist gesunken) | der Rückgang |
| gleich bleiben | – |
| sich verdoppeln | die Verdopplung |

## Seberapa banyak?
| | |
| **um** 10 % | sebanyak 10 % (selisih) |
| **auf** 50.000 € | menjadi 50.000 € (hasil) |
| **von** 3 % **auf** 5 % | dari 3 % menjadi 5 % |

= Der Umsatz ist um 10 % gestiegen. :: Omzet naik 10 %.
= Die Kosten sind auf 2 Millionen Euro gesunken. :: Biaya turun menjadi 2 juta euro.

## Kata keterangan
leicht (sedikit) · deutlich (signifikan) · stark (tajam) · kontinuierlich (terus-menerus)

## Angka dalam bahasa Jerman
- **2,5** = zwei Komma fünf (koma!)
- **1.500** = eintausendfünfhundert (titik!)
- **eine Milliarde** = satu miliar · **eine Billion** = satu triliun!
`,
en: `
## Rising & falling
| Verb | Noun |
| steigen (ist gestiegen) | die Steigerung |
| sinken (ist gesunken) | der Rückgang |
| gleich bleiben | – |
| sich verdoppeln | die Verdopplung |

## By how much?
| | |
| **um** 10 % | by 10 % (difference) |
| **auf** 50.000 € | to €50,000 (result) |
| **von** 3 % **auf** 5 % | from 3 % to 5 % |

= Der Umsatz ist um 10 % gestiegen. :: Turnover rose by 10 %.
= Die Kosten sind auf 2 Millionen Euro gesunken. :: Costs fell to 2 million euros.

## Adverbs
leicht (slightly) · deutlich (significantly) · stark (sharply) · kontinuierlich (steadily)

## Numbers in German
- **2,5** = zwei Komma fünf (comma!)
- **1.500** = eintausendfünfhundert (full stop!)
- **eine Milliarde** = a billion · **eine Billion** = a trillion!
`},
quiz: [
  ["„Harganya naik 5 %.“ ¦ “Prices rose by 5 %.”", ["Die Preise sind um 5 % gestiegen.", "Die Preise sind auf 5 % gestiegen.", "Die Preise haben 5 % gestiegen."], 0, "Selisih: um. ¦ Difference: um."],
  ["Apa **eine Milliarde**? ¦ What is **eine Milliarde**?", ["satu miliar ¦ a billion", "satu juta ¦ a million", "satu triliun ¦ a trillion"], 0, "Milliarde = 1.000.000.000."],
  ["Perfekt dari **sinken** ¦ Perfect of **sinken**", ["ist gesunken", "hat gesinkt", "ist gesinkt"], 0, "Perubahan → sein, tidak beraturan: gesunken. ¦ Change of state → sein."],
]},

g57: { title: "Kalau & seandainya: Konjunktiv II ¦ If & would: Konjunktiv II", body: {
id: `
## Kalau nyata: wenn + bentuk biasa
= Wenn es morgen regnet, bleiben wir zu Hause. :: Kalau besok hujan, kami di rumah.
= Wenn du Hilfe brauchst, ruf mich an. :: Kalau butuh bantuan, telepon aku.

## Seandainya (tidak nyata): Konjunktiv II
Untuk hal yang **tidak nyata atau hanya bayangan**:
| | Konjunktiv II |
| sein | ich **wäre** |
| haben | ich **hätte** |
| können | ich **könnte** |
| kata kerja lain | ich **würde** + bentuk dasar |

= Wenn ich mehr Zeit hätte, würde ich Spanisch lernen. :: Seandainya saya punya lebih banyak waktu, saya akan belajar bahasa Spanyol.
= Wenn ich reich wäre, würde ich reisen. :: Seandainya saya kaya, saya akan berkeliling dunia.
= An deiner Stelle würde ich das machen. :: Kalau aku jadi kamu, aku akan melakukannya.

## falls – jika (kemungkinan)
= Falls es regnet, nimm einen Schirm mit. :: Jika hujan, bawa payung.

> Ingat: kata kerja di anak kalimat ke **akhir**, dan kalimat utama setelahnya mulai dengan **kata kerja**.
`,
en: `
## Real conditions: wenn + normal tense
= Wenn es morgen regnet, bleiben wir zu Hause. :: If it rains tomorrow, we'll stay at home.
= Wenn du Hilfe brauchst, ruf mich an. :: If you need help, call me.

> German uses the **present tense** after “wenn” where English uses “will” in the main clause.

## Unreal conditions: Konjunktiv II
For things that are **not real or only imagined**:
| | Konjunktiv II |
| sein | ich **wäre** |
| haben | ich **hätte** |
| können | ich **könnte** |
| other verbs | ich **würde** + infinitive |

= Wenn ich mehr Zeit hätte, würde ich Spanisch lernen. :: If I had more time, I'd learn Spanish.
= Wenn ich reich wäre, würde ich reisen. :: If I were rich, I'd travel.
= An deiner Stelle würde ich das machen. :: If I were you, I'd do it.

## falls – in case, if
= Falls es regnet, nimm einen Schirm mit. :: In case it rains, take an umbrella.

> Remember: the verb in the wenn-clause goes to the **end**, and the main clause after it starts with the **verb**.
`},
quiz: [
  ["„Seandainya saya punya waktu, …“ ¦ “If I had time, …”", ["Wenn ich Zeit hätte, …", "Wenn ich Zeit habe würde, …", "Wenn ich hatte Zeit, …"], 0, "Tidak nyata: hätte. ¦ Unreal: hätte."],
  ["**Wenn ich du ___, würde ich gehen.**", ["wäre", "bin", "war"], 0, "sein → wäre."],
  ["**Wenn es regnet, ___ wir zu Hause.**", ["bleiben", "wir bleiben", "würden bleiben wir"], 0, "Setelah anak kalimat: kata kerja dulu. ¦ After the clause: verb first."],
]},

g58: { title: "Negosiasi dengan diplomatis ¦ Negotiating diplomatically", body: {
id: `
Bahasa Jerman bisnis cukup langsung, tapi dalam negosiasi **Konjunktiv II** membuat kalimat lebih lunak.

| Langsung | Diplomatis |
| Das ist zu teuer. | Das liegt etwas über unserem Budget. |
| Wir wollen Rabatt. | Wären Sie bereit, uns Rabatt zu geben? |
| Nein. | Das wäre für uns leider schwierig. |
| Liefern Sie bis Mai! | Wäre eine Lieferung bis Mai möglich? |

## Usulan & kompromi
= Wie wäre es, wenn wir uns in der Mitte treffen? :: Bagaimana kalau kita bertemu di tengah?
= Wir könnten Ihnen 5 % Rabatt anbieten, wenn … :: Kami bisa menawarkan diskon 5 % kalau …
= Unter der Bedingung, dass … :: Dengan syarat bahwa …

## Menyelesaikan
= Dann sind wir uns einig. :: Kalau begitu kita sepakat.
= Lassen Sie uns das schriftlich festhalten. :: Mari catat secara tertulis.

> Di DACH, kesepakatan **tertulis** sangat penting. Ucapan „Abgemacht!“ (deal) bagus, tapi kontraknya lebih penting.
`,
en: `
Business German is fairly direct, but in negotiations the **Konjunktiv II** softens things.

| Direct | Diplomatic |
| Das ist zu teuer. | Das liegt etwas über unserem Budget. |
| Wir wollen Rabatt. | Wären Sie bereit, uns Rabatt zu geben? |
| Nein. | Das wäre für uns leider schwierig. |
| Liefern Sie bis Mai! | Wäre eine Lieferung bis Mai möglich? |

## Proposals & compromises
= Wie wäre es, wenn wir uns in der Mitte treffen? :: How about meeting halfway?
= Wir könnten Ihnen 5 % Rabatt anbieten, wenn … :: We could offer you a 5 % discount if …
= Unter der Bedingung, dass … :: On condition that …

## Closing
= Dann sind wir uns einig. :: Then we're agreed.
= Lassen Sie uns das schriftlich festhalten. :: Let's put that in writing.

> In DACH **written** agreements matter a lot. “Abgemacht!” (deal!) is nice, but the contract is what counts.
`},
quiz: [
  ["Penolakan yang paling diplomatis ¦ The most diplomatic refusal", ["Das wäre für uns leider schwierig.", "Nein, das geht nicht.", "Vergessen Sie es."], 0, "Konjunktiv II melunakkan. ¦ Konjunktiv II softens it."],
  ["„Bagaimana kalau kita bertemu di tengah?“ ¦ “How about meeting halfway?”", ["Wie wäre es, wenn wir uns in der Mitte treffen?", "Wir treffen Mitte.", "Wann treffen wir uns?"], 0, "Wie wäre es, wenn … = bagaimana kalau. ¦ = how about."],
  ["**___ Sie bereit, den Preis zu senken?**", ["Wären", "Würden", "Hätten"], 0, "bereit sein → wären Sie bereit."],
]},

g59: { title: "Komplain & menanggapi komplain ¦ Complaining & handling complaints", body: {
id: `
## Komplain dengan sopan tapi tegas
| | |
| Ich möchte mich beschweren. | Saya ingin menyampaikan keluhan. |
| Leider gibt es ein Problem mit … | Sayangnya ada masalah dengan … |
| Ich habe … bestellt, aber … bekommen. | Saya pesan …, tapi menerima … |
| Das Gerät funktioniert nicht richtig. | Alatnya tidak berfungsi dengan baik. |
| Ich hätte gern mein Geld zurück. | Saya ingin uang saya kembali. |

= Leider ist die Lieferung beschädigt angekommen. :: Sayangnya kirimannya datang dalam keadaan rusak.

## Sebagai perusahaan
| | |
| Das tut mir sehr leid. | Kami mohon maaf. |
| Entschuldigen Sie die Unannehmlichkeiten. | Mohon maaf atas ketidaknyamanannya. |
| Ich kümmere mich sofort darum. | Saya segera mengurusnya. |
| Wir schicken Ihnen Ersatz. | Kami kirimkan penggantinya. |

## Hak pembeli di DACH
- Barang rusak: kamu punya hak **Gewährleistung** (garansi hukum) selama **2 tahun**.
- Belanja online: biasanya bisa dikembalikan dalam **14 hari**.
- Simpan **Kassenbon** (struk)!
`,
en: `
## Complaining politely but firmly
| | |
| Ich möchte mich beschweren. | I'd like to make a complaint. |
| Leider gibt es ein Problem mit … | Unfortunately there's a problem with … |
| Ich habe … bestellt, aber … bekommen. | I ordered … but received … |
| Das Gerät funktioniert nicht richtig. | The device isn't working properly. |
| Ich hätte gern mein Geld zurück. | I'd like my money back. |

= Leider ist die Lieferung beschädigt angekommen. :: Unfortunately the delivery arrived damaged.

## As a company
| | |
| Das tut mir sehr leid. | I'm very sorry. |
| Entschuldigen Sie die Unannehmlichkeiten. | We apologise for the inconvenience. |
| Ich kümmere mich sofort darum. | I'll deal with it right away. |
| Wir schicken Ihnen Ersatz. | We'll send you a replacement. |

## Consumer rights in DACH
- Faulty goods: you have a legal **Gewährleistung** (warranty) of **2 years**.
- Online shopping: you can usually return items within **14 days**.
- Keep the **Kassenbon** (receipt)!
`},
quiz: [
  ["„Saya ingin menyampaikan keluhan.“ ¦ “I'd like to make a complaint.”", ["Ich möchte mich beschweren.", "Ich möchte beschweren.", "Ich beschwere."], 0, "Refleksif: sich beschweren. ¦ Reflexive: sich beschweren."],
  ["Tanggapan sopan atas komplain ¦ A polite reply to a complaint", ["Das tut mir leid, ich kümmere mich darum.", "Das ist nicht mein Problem.", "Na und?"], 0, "Empati + solusi. ¦ Empathy + solution."],
  ["Belanja online biasanya bisa dikembalikan dalam … ¦ Online purchases can usually be returned within …", ["14 Tagen", "2 Tagen", "1 Jahr"], 0, "Hak pengembalian 14 hari. ¦ 14-day right of withdrawal."],
]},

g60: { title: "Masa depan II & tenggat ¦ Future perfect & deadlines", body: {
id: `
## bis, ab, seit, innerhalb
| | Arti | Contoh |
| **bis** | paling lambat; sampai | bis Freitag |
| **ab** | mulai | ab Montag |
| **innerhalb** + Gen./Dat. | dalam (jangka waktu) | innerhalb einer Woche |
| **bis spätestens** | paling lambat | bis spätestens 12 Uhr |

= Ich brauche den Bericht bis Freitag. :: Saya butuh laporannya paling lambat Jumat.

## Futur II: akan sudah …
**werden + Partizip + haben/sein**: sesuatu akan **sudah selesai** pada waktu tertentu.
= Bis Montag werde ich den Bericht geschrieben haben. :: Sampai Senin saya akan sudah menulis laporannya.

> Dalam percakapan, orang Jerman lebih sering memakai **Perfekt + waktu**: Bis Montag habe ich den Bericht fertig.

## Bahasa proyek
= Wir liegen im Zeitplan. :: Kita sesuai jadwal.
= Wir sind leider in Verzug. :: Sayangnya kita terlambat.
= Können wir die Frist verlängern? :: Bisakah tenggatnya diperpanjang?
`,
en: `
## bis, ab, seit, innerhalb
| | Meaning | Example |
| **bis** | by; until | bis Freitag |
| **ab** | from | ab Montag |
| **innerhalb** + gen./dat. | within | innerhalb einer Woche |
| **bis spätestens** | by … at the latest | bis spätestens 12 Uhr |

= Ich brauche den Bericht bis Freitag. :: I need the report by Friday.

## Future perfect: will have …
**werden + participle + haben/sein**: something **will be finished** by a certain time.
= Bis Montag werde ich den Bericht geschrieben haben. :: By Monday I will have written the report.

> In conversation Germans usually prefer **perfect + time**: Bis Montag habe ich den Bericht fertig.

## Project language
= Wir liegen im Zeitplan. :: We're on schedule.
= Wir sind leider in Verzug. :: Unfortunately we're behind schedule.
= Können wir die Frist verlängern? :: Can we extend the deadline?
`},
quiz: [
  ["„paling lambat hari Jumat“ ¦ “by Friday”", ["bis Freitag", "ab Freitag", "seit Freitag"], 0, "bis = paling lambat. ¦ bis = by."],
  ["„mulai Senin“ ¦ “from Monday”", ["ab Montag", "bis Montag", "vor Montag"], 0, "ab = mulai. ¦ ab = from."],
  ["„Kita sesuai jadwal.“ ¦ “We're on schedule.”", ["Wir liegen im Zeitplan.", "Wir sind in Verzug.", "Wir haben Zeitplan."], 0, "im Zeitplan liegen."],
]},

g61: { title: "Bahasa gaul ¦ Colloquial German", body: {
id: `
Dalam percakapan sehari-hari, bahasa Jerman jauh lebih santai daripada di buku.

## Bentuk yang dipendekkan
| Lisan | Baku |
| hab | habe |
| 'n / 'ne | ein / eine |
| gibt's | gibt es |
| geht's | geht es |
| nee | nein |
| nix | nichts |
| mal | einmal |

= Hast du 'ne Idee? :: Kamu punya ide?

## Kata gaul populer
| | |
| geil / cool / krass | keren, gila |
| echt? | beneran? |
| voll | banget |
| kein Bock | malas |
| Kohle | duit |
| Quatsch! | omong kosong! |

## Salam regional
- **Moin** – Jerman utara
- **Servus / Grüß Gott** – Bayern & Austria
- **Grüezi** – Swiss

> Pakai bahasa gaul **hanya dengan teman**. Di kantor dan kantor pemerintah: bahasa baku.
`,
en: `
In everyday conversation, German is much more relaxed than in textbooks.

## Shortened forms
| Spoken | Standard |
| hab | habe |
| 'n / 'ne | ein / eine |
| gibt's | gibt es |
| geht's | geht es |
| nee | nein |
| nix | nichts |
| mal | einmal |

= Hast du 'ne Idee? :: Got an idea?

## Popular slang
| | |
| geil / cool / krass | awesome, crazy |
| echt? | really? |
| voll | totally |
| kein Bock | can't be bothered |
| Kohle | cash |
| Quatsch! | nonsense! |

## Regional greetings
- **Moin** – northern Germany
- **Servus / Grüß Gott** – Bavaria & Austria
- **Grüezi** – Switzerland

> Use slang **only with friends**. At work and in official offices: standard German.
`},
quiz: [
  ["„Ich hab keinen Bock.“ artinya … ¦ means …", ["Aku lagi malas. ¦ I can't be bothered.", "Aku tidak punya kambing. ¦ I have no goat.", "Aku lapar. ¦ I'm hungry."], 0, "kein Bock = malas. ¦ kein Bock = can't be bothered."],
  ["Salam di Austria ¦ A greeting in Austria", ["Servus!", "Moin!", "Grüezi!"], 0, "Servus/Grüß Gott: Austria & Bayern."],
  ["Bentuk baku dari **nee** ¦ Standard form of **nee**", ["nein", "nicht", "na"], 0, "nee = nein."],
]},

g62: { title: "Jerman, Austria, Swiss ¦ Germany, Austria, Switzerland", body: {
id: `
Bahasa Jerman dipakai di **Jerman, Austria, Swiss** (dan Liechtenstein, sebagian Italia & Belgia). Bahasa bakunya sama, tapi ada beberapa kata yang berbeda.

| Jerman | Austria | Swiss | Arti |
| Januar | Jänner | Januar | Januari |
| Kartoffel | Erdapfel | Kartoffel | kentang |
| Tomate | Paradeiser | Tomate | tomat |
| Brötchen | Semmel | Brötli | roti kecil |
| Tüte | Sackerl | Sack | kantong |
| Krankenhaus | Spital | Spital | rumah sakit |
| Fahrrad | Fahrrad / Radl | Velo | sepeda |
| Tschüss | Baba / Servus | Tschüss / Ciao | dah |
| Danke | Danke | Merci | terima kasih |

## Dialek
Di banyak daerah orang berbicara **dialek** – terutama di Swiss (Schweizerdeutsch), Austria dan Bayern. Jangan khawatir: semua orang juga mengerti **Hochdeutsch** (bahasa baku).

= Können Sie bitte Hochdeutsch sprechen? :: Bisa bicara bahasa Jerman baku?

> Kursus ini mengajarkan bahasa Jerman baku yang netral – dimengerti di mana saja.
`,
en: `
German is spoken in **Germany, Austria and Switzerland** (plus Liechtenstein and parts of Italy and Belgium). The standard language is the same, but some words differ.

| Germany | Austria | Switzerland | Meaning |
| Januar | Jänner | Januar | January |
| Kartoffel | Erdapfel | Kartoffel | potato |
| Tomate | Paradeiser | Tomate | tomato |
| Brötchen | Semmel | Brötli | bread roll |
| Tüte | Sackerl | Sack | bag |
| Krankenhaus | Spital | Spital | hospital |
| Fahrrad | Fahrrad / Radl | Velo | bicycle |
| Tschüss | Baba / Servus | Tschüss / Ciao | bye |
| Danke | Danke | Merci | thanks |

## Dialects
In many regions people speak **dialect** – especially in Switzerland (Swiss German), Austria and Bavaria. Don't worry: everyone also understands **Hochdeutsch** (standard German).

= Können Sie bitte Hochdeutsch sprechen? :: Could you please speak standard German?

> This course teaches neutral standard German – understood everywhere.
`},
quiz: [
  ["Di Austria, „Januar“ disebut … ¦ In Austria, “Januar” is called …", ["Jänner", "Jenner", "Janu"], 0, "Jänner = Januari di Austria. ¦ Jänner = January in Austria."],
  ["„Velo“ dalam bahasa Jerman Swiss artinya … ¦ “Velo” in Swiss German means …", ["sepeda ¦ bicycle", "mobil ¦ car", "kereta ¦ train"], 0, "Velo = Fahrrad."],
  ["Kalau tidak mengerti dialek, minta … ¦ If you don't understand a dialect, ask for …", ["Hochdeutsch", "Plattdeutsch", "Englisch nur"], 0, "Hochdeutsch = bahasa baku. ¦ Hochdeutsch = standard German."],
]},

g63: { title: "Ungkapan ¦ Idioms", body: {
id: `
Ungkapan (Redewendungen) membuat bahasa Jerman hidup. Banyak yang lucu kalau diterjemahkan harfiah!

| Ungkapan | Harfiah | Arti |
| Ich drücke dir die Daumen. | Saya menekan jempol untukmu. | Semoga berhasil. |
| Ich verstehe nur Bahnhof. | Saya hanya mengerti stasiun. | Saya sama sekali tidak mengerti. |
| Das ist nicht mein Bier. | Itu bukan birku. | Itu bukan urusanku. |
| Schwein haben | punya babi | beruntung |
| Tomaten auf den Augen haben | punya tomat di mata | tidak melihat yang jelas |
| Das ist mir Wurst. | Itu sosis bagiku. | Saya tidak peduli. |
| die Nase voll haben | hidungnya penuh | muak |

## Mirip dengan bahasa Indonesia
= die Katze im Sack kaufen :: membeli kucing dalam karung
= zwei Fliegen mit einer Klappe schlagen :: sekali dayung, dua tiga pulau terlampaui

> Pakai ungkapan saat situasinya cocok – orang Jerman akan senang dan sering tertawa!
`,
en: `
Idioms (Redewendungen) bring German to life. Many are funny when translated literally!

| Idiom | Literally | Meaning |
| Ich drücke dir die Daumen. | I'm pressing my thumbs for you. | Fingers crossed. |
| Ich verstehe nur Bahnhof. | I only understand “station”. | It's all Greek to me. |
| Das ist nicht mein Bier. | That's not my beer. | Not my problem. |
| Schwein haben | to have a pig | to be lucky |
| Tomaten auf den Augen haben | to have tomatoes on your eyes | to be blind to the obvious |
| Das ist mir Wurst. | That's sausage to me. | I couldn't care less. |
| die Nase voll haben | to have a full nose | to be fed up |

## Similar to English
= die Katze im Sack kaufen :: to buy a pig in a poke
= zwei Fliegen mit einer Klappe schlagen :: to kill two birds with one stone

> Use idioms when the moment fits – Germans will be delighted and often laugh!
`},
quiz: [
  ["„Ich drücke dir die Daumen!“ artinya … ¦ means …", ["Semoga berhasil! ¦ Good luck!", "Saya marah! ¦ I'm angry!", "Pegang jempolku! ¦ Hold my thumb!"], 0, "Daumen drücken = mendoakan sukses. ¦ = keeping fingers crossed."],
  ["„Da hast du Schwein gehabt!“ ¦", ["Kamu beruntung! ¦ You were lucky!", "Kamu kotor! ¦ You're dirty!", "Kamu lapar! ¦ You're hungry!"], 0, "Schwein haben = beruntung. ¦ = to be lucky."],
  ["Kamu sama sekali tidak mengerti. Kamu bilang … ¦ You don't understand anything. You say …", ["Ich verstehe nur Bahnhof.", "Das ist mein Bier.", "Ich habe die Nase voll."], 0, "nur Bahnhof verstehen."],
]},

g64: { title: "Partikel dalam basa-basi ¦ Particles in small talk", body: {
id: `
Partikel kecil seperti **doch, mal, ja, halt, denn** membuat bahasa Jerman terdengar alami dan ramah – mirip „dong, kok, sih, deh“ dalam bahasa Indonesia.

| Partikel | Efek | Contoh |
| **mal** | melunakkan permintaan | Schau mal! – Coba lihat! |
| **doch** | ajakan ramah | Komm doch mit! – Ikut dong! |
| **ja** | heran, penegasan | Das ist ja toll! – Wah, hebat! |
| **denn** | pertanyaan lebih ramah | Was ist denn los? – Ada apa sih? |
| **halt / eben** | ya memang begitu | Das ist halt so. – Memang begitu. |

## Kata tanya di akhir
**oder?**, **nicht wahr?**, **gell?** (Selatan) = „ya, kan?“
= Schönes Wetter heute, oder? :: Cuacanya bagus hari ini, ya?

## Basa-basi lanjutan
= Na, wie läuft's? :: Hei, gimana kabarnya?
= Lange nicht gesehen! :: Lama tidak bertemu!
= Hast du dich gut eingelebt? :: Sudah betah?
= Ich muss leider los. :: Sayangnya saya harus pergi.
`,
en: `
Little particles like **doch, mal, ja, halt, denn** make German sound natural and friendly. They're hard to translate – they change the tone, not the meaning.

| Particle | Effect | Example |
| **mal** | softens a request | Schau mal! – Have a look! |
| **doch** | friendly encouragement | Komm doch mit! – Do come along! |
| **ja** | surprise, emphasis | Das ist ja toll! – That's great! |
| **denn** | makes a question friendlier | Was ist denn los? – What's up? |
| **halt / eben** | that's just how it is | Das ist halt so. – That's just how it is. |

## Question tags
**oder?**, **nicht wahr?**, **gell?** (south) = “isn't it?”, “right?”
= Schönes Wetter heute, oder? :: Nice weather today, isn't it?

## More small talk
= Na, wie läuft's? :: Hey, how's it going?
= Lange nicht gesehen! :: Long time no see!
= Hast du dich gut eingelebt? :: Have you settled in well?
= Ich muss leider los. :: I'm afraid I have to go.
`},
quiz: [
  ["Ajakan yang ramah ¦ A friendly invitation", ["Komm doch mal vorbei!", "Komm vorbei!", "Du kommst vorbei."], 0, "doch + mal melunakkan. ¦ doch + mal soften it."],
  ["**Du bist aus Indonesien, ___?**", ["oder", "denn", "halt"], 0, "Kata tanya akhir: oder? ¦ Question tag: oder?"],
  ["„Was ist denn los?“ terdengar … ¦ sounds …", ["lebih ramah ¦ friendlier", "lebih marah ¦ angrier", "lebih formal ¦ more formal"], 0, "denn membuat pertanyaan lebih ramah. ¦ denn makes the question friendlier."],
]},

g65: { title: "Undangan: menerima & menolak ¦ Invitations: accepting & declining", body: {
id: `
## Mengundang
| | |
| Hast du Lust, … zu …? | Kamu mau …? |
| Hast du am Samstag Zeit? | Sabtu ada waktu? |
| Wie wäre es mit …? | Bagaimana kalau …? |
| Komm doch vorbei! | Mampir dong! |

## Menerima
= Sehr gern! :: Dengan senang hati!
= Gute Idee, ich bin dabei! :: Ide bagus, aku ikut!

## Menolak – selalu dengan alasan & terima kasih
= Danke für die Einladung, aber ich habe leider schon etwas vor. :: Terima kasih atas undangannya, tapi sayangnya saya sudah ada rencana.
= Schade, vielleicht ein anderes Mal? :: Sayang sekali, mungkin lain kali?

## Kebiasaan di DACH
- Sebagai tamu, bawa **hadiah kecil** (bunga, wine, cokelat).
- Datang **tepat waktu** (pesta: boleh 10–15 menit terlambat).
- **„Ich lade dich ein“** = aku yang bayar. Kalau tidak, biasanya bayar **sendiri-sendiri**.
- Pamit: **Danke für den schönen Abend!**
`,
en: `
## Inviting
| | |
| Hast du Lust, … zu …? | Do you feel like …? |
| Hast du am Samstag Zeit? | Are you free on Saturday? |
| Wie wäre es mit …? | How about …? |
| Komm doch vorbei! | Do drop by! |

## Accepting
= Sehr gern! :: I'd love to!
= Gute Idee, ich bin dabei! :: Good idea, count me in!

## Declining – always with a reason and thanks
= Danke für die Einladung, aber ich habe leider schon etwas vor. :: Thanks for the invitation, but I'm afraid I already have plans.
= Schade, vielleicht ein anderes Mal? :: What a pity – maybe another time?

## Customs in DACH
- As a guest, bring a **small gift** (flowers, wine, chocolate).
- Arrive **on time** (for parties 10–15 minutes late is fine).
- **“Ich lade dich ein”** = it's on me. Otherwise people usually **pay separately**.
- When leaving: **Danke für den schönen Abend!**
`},
quiz: [
  ["Penolakan yang sopan ¦ A polite refusal", ["Danke, aber ich habe leider schon etwas vor.", "Nein, keine Lust.", "Ich komme nicht."], 0, "Terima kasih + alasan. ¦ Thanks + reason."],
  ["„Ich lade dich ein“ di restoran artinya … ¦ at a restaurant means …", ["aku yang bayar ¦ it's on me", "aku mengundangmu ke rumah ¦ I'm inviting you home", "bayar sendiri-sendiri ¦ let's split"], 0, "einladen = mentraktir. ¦ einladen = to treat."],
  ["„Kamu mau ikut?“ ¦ “Do you feel like coming?”", ["Hast du Lust mitzukommen?", "Hast du Lust kommen mit?", "Willst du mitkommen zu?"], 0, "Lust haben + zu + Infinitif."],
]},

g67: { title: "Ucapan selamat & belasungkawa ¦ Congratulations & condolences", body: {
id: `
## Memberi selamat
| | |
| Herzlichen Glückwunsch zum Geburtstag! | Selamat ulang tahun! |
| Herzlichen Glückwunsch zur Hochzeit! | Selamat atas pernikahannya! |
| Alles Gute! | Semoga yang terbaik! |
| Gut gemacht! | Bagus sekali! |

> **zum** (der/das) / **zur** (die): zum Geburtstag, zur Prüfung, zum neuen Job.

## Mendoakan
= Viel Glück! / Viel Erfolg! :: Semoga berhasil! / Semoga sukses!
= Gute Besserung! :: Semoga cepat sembuh!
= Gute Reise! :: Selamat jalan!
= Ich drücke dir die Daumen! :: Semoga berhasil!

## Menghibur
= Das tut mir so leid. :: Aku ikut sedih.
= Das wird schon wieder. :: Nanti juga baik lagi.
= Wenn ich etwas tun kann, sag Bescheid. :: Kalau ada yang bisa kubantu, bilang ya.

## Belasungkawa
= Mein herzliches Beileid. :: Saya turut berduka cita.
Di DACH orang mengirim **kartu duka** (Trauerkarte) dengan tulisan tangan.
`,
en: `
## Congratulating
| | |
| Herzlichen Glückwunsch zum Geburtstag! | Happy birthday! |
| Herzlichen Glückwunsch zur Hochzeit! | Congratulations on your wedding! |
| Alles Gute! | All the best! |
| Gut gemacht! | Well done! |

> **zum** (der/das) / **zur** (die): zum Geburtstag, zur Prüfung, zum neuen Job.

## Wishing
= Viel Glück! / Viel Erfolg! :: Good luck! / Every success!
= Gute Besserung! :: Get well soon!
= Gute Reise! :: Have a good trip!
= Ich drücke dir die Daumen! :: Fingers crossed!

## Comforting
= Das tut mir so leid. :: I'm so sorry.
= Das wird schon wieder. :: It'll be all right.
= Wenn ich etwas tun kann, sag Bescheid. :: If there's anything I can do, let me know.

## Condolences
= Mein herzliches Beileid. :: My deepest sympathy.
In DACH people send a handwritten **condolence card** (Trauerkarte).
`},
quiz: [
  ["„Selamat atas pekerjaan barunya!“ ¦ “Congratulations on your new job!”", ["Herzlichen Glückwunsch zum neuen Job!", "Herzlichen Glückwunsch für den neuen Job!", "Viel Beileid zum Job!"], 0, "Glückwunsch zum/zur."],
  ["Untuk orang sakit kamu bilang … ¦ To someone who's ill you say …", ["Gute Besserung!", "Gute Reise!", "Prost!"], 0, "Gute Besserung = semoga cepat sembuh. ¦ = get well soon."],
  ["„Mein herzliches Beileid“ dipakai saat … ¦ is used when …", ["ada yang meninggal ¦ someone has died", "ada yang menikah ¦ someone gets married", "ulang tahun ¦ a birthday"], 0, "Beileid = belasungkawa. ¦ Beileid = condolences."],
]},

g68: { title: "Kalimat tidak langsung ¦ Reported speech", body: {
id: `
Kalau kamu menyampaikan apa yang dikatakan orang lain:

## Dalam percakapan: dass + bentuk biasa
= Er hat gesagt, dass er später kommt. :: Dia bilang dia datang nanti.
= Sie meint, das Essen ist gut. :: Katanya makanannya enak.

## Dalam berita: Konjunktiv I
Koran dan berita memakai **Konjunktiv I** untuk menunjukkan „katanya“ (tidak dijamin benar):
| | sein | haben | kata kerja lain |
| er / sie | **sei** | **habe** | komm**e**, geh**e** |

= Der Minister sagte, die Lage sei stabil. :: Menteri mengatakan situasinya stabil.
= Laut Polizei habe es keine Verletzten gegeben. :: Menurut polisi tidak ada korban luka.

> Kamu tidak perlu memakai Konjunktiv I sendiri – cukup **mengenalinya** saat membaca berita.

## Pertanyaan tidak langsung
= Sie fragte, ob wir kommen. :: Dia bertanya apakah kami datang.
= Er wollte wissen, wann der Zug fährt. :: Dia ingin tahu kapan keretanya berangkat.
`,
en: `
When you report what someone else said:

## In conversation: dass + normal tense
= Er hat gesagt, dass er später kommt. :: He said he'd come later.
= Sie meint, das Essen ist gut. :: She says the food is good.

## In the news: Konjunktiv I
Newspapers and news use **Konjunktiv I** to show “reportedly” (not guaranteed to be true):
| | sein | haben | other verbs |
| er / sie | **sei** | **habe** | komm**e**, geh**e** |

= Der Minister sagte, die Lage sei stabil. :: The minister said the situation was stable.
= Laut Polizei habe es keine Verletzten gegeben. :: According to the police nobody was injured.

> You don't need to use Konjunktiv I yourself – just **recognise** it when reading the news.

## Reported questions
= Sie fragte, ob wir kommen. :: She asked whether we were coming.
= Er wollte wissen, wann der Zug fährt. :: He wanted to know when the train leaves.
`},
quiz: [
  ["„Er sagt, er sei krank.“ – „sei“ adalah … ¦ “sei” is …", ["Konjunktiv I (katanya) ¦ Konjunktiv I (reported)", "salah ketik ¦ a typo", "masa depan ¦ future"], 0, "Konjunktiv I dari sein. ¦ Konjunktiv I of sein."],
  ["„Dia bertanya apakah saya datang.“ ¦ “She asked whether I was coming.”", ["Sie fragte, ob ich komme.", "Sie fragte, dass ich komme.", "Sie fragte, komme ich."], 0, "Pertanyaan ya/tidak → ob. ¦ Yes/no → ob."],
  ["Dalam percakapan, orang biasanya bilang … ¦ In conversation people usually say …", ["Er hat gesagt, dass er kommt.", "Er sagte, er komme.", "Er sage, er kam."], 0, "Lisan: dass + bentuk biasa. ¦ Spoken: dass + normal tense."],
]},

g70: { title: "Berpendapat ¦ Giving your opinion", body: {
id: `
## Menyampaikan pendapat
| | |
| Ich finde, … | Menurut saya, … |
| Ich glaube / denke, dass … | Saya pikir bahwa … |
| Meiner Meinung nach … | Menurut pendapat saya … |
| Ich bin der Meinung, dass … | Saya berpendapat bahwa … |
| Aus meiner Sicht … | Dari sudut pandang saya … |

> Hati-hati urutan kata! Setelah **meiner Meinung nach** langsung **kata kerja**: Meiner Meinung nach **ist** das falsch. Setelah **dass**, kata kerja di akhir.

## Menyusun argumen
| | |
| Einerseits … andererseits … | Di satu sisi … di sisi lain … |
| Ein Vorteil / Nachteil ist, dass … | Kelebihan / kekurangannya adalah … |
| Außerdem … / Darüber hinaus … | Selain itu … |
| Zum Schluss … | Sebagai penutup … |

## Setuju
= Da hast du recht. :: Kamu benar.
= Das sehe ich genauso. :: Saya juga berpikir begitu.
= Da stimme ich dir zu. :: Saya setuju denganmu.

> Di DACH, berdiskusi dan berbeda pendapat itu **normal dan dihargai** – asal tetap sopan dan objektif.
`,
en: `
## Expressing your opinion
| | |
| Ich finde, … | I think … |
| Ich glaube / denke, dass … | I believe that … |
| Meiner Meinung nach … | In my opinion … |
| Ich bin der Meinung, dass … | I'm of the opinion that … |
| Aus meiner Sicht … | From my point of view … |

> Watch the word order! After **meiner Meinung nach** comes the **verb**: Meiner Meinung nach **ist** das falsch. After **dass**, the verb goes to the end.

## Structuring arguments
| | |
| Einerseits … andererseits … | On the one hand … on the other … |
| Ein Vorteil / Nachteil ist, dass … | One advantage / disadvantage is … |
| Außerdem … / Darüber hinaus … | Furthermore … |
| Zum Schluss … | Finally … |

## Agreeing
= Da hast du recht. :: You're right there.
= Das sehe ich genauso. :: I see it the same way.
= Da stimme ich dir zu. :: I agree with you.

> In DACH, discussing and disagreeing is **normal and valued** – as long as you stay polite and objective.
`},
quiz: [
  ["**Meiner Meinung nach ___ das eine gute Idee.**", ["ist", "das ist", "sein"], 0, "Setelah frasa pembuka: kata kerja. ¦ After the opening phrase: verb."],
  ["„Saya juga berpikir begitu.“ ¦ “I see it the same way.”", ["Das sehe ich genauso.", "Ich sehe auch.", "Genau sehe ich."], 0, "Ungkapan tetap. ¦ Fixed phrase."],
  ["„di satu sisi … di sisi lain“ ¦ “on the one hand … on the other”", ["einerseits … andererseits", "erstens … zweitens", "entweder … oder"], 0, "einerseits/andererseits."],
]},

g71: { title: "Membantah dengan sopan ¦ Disagreeing politely", body: {
id: `
Orang Jerman sering langsung („Das stimmt nicht.“). Tapi membantah dengan halus selalu lebih baik, apalagi di tempat kerja.

## Pola: mengakui dulu, lalu membantah
| | |
| Das stimmt zwar, aber … | Memang benar, tapi … |
| Ich verstehe deinen Punkt, aber … | Saya mengerti maksudmu, tapi … |
| Du hast nicht ganz unrecht, aber … | Kamu tidak sepenuhnya salah, tapi … |

## Melunakkan
| keras | lunak |
| Das ist falsch. | Ich bin mir nicht sicher, ob das stimmt. |
| Ich bin dagegen. | Ich sehe das ein bisschen anders. |
| Nein. | Nicht unbedingt. |
| Das geht nicht. | Das wäre schwierig. |

= Vielleicht könnten wir eine andere Lösung finden? :: Mungkin kita bisa mencari solusi lain?

## Menutup diskusi
= Lass uns sachlich bleiben. :: Mari tetap objektif.
= Darüber sollten wir noch einmal sprechen. :: Kita perlu bicarakan itu lagi.

> Kritik terhadap **ide** bukan kritik terhadap **orang**. Di DACH, rekan kerja bisa berdebat keras di rapat lalu makan siang bersama dengan santai.
`,
en: `
Germans are often direct (“Das stimmt nicht.”). But disagreeing gently is always better, especially at work.

## Pattern: acknowledge first, then disagree
| | |
| Das stimmt zwar, aber … | That's true, but … |
| Ich verstehe deinen Punkt, aber … | I see your point, but … |
| Du hast nicht ganz unrecht, aber … | You do have a point, but … |

## Softening
| hard | soft |
| Das ist falsch. | Ich bin mir nicht sicher, ob das stimmt. |
| Ich bin dagegen. | Ich sehe das ein bisschen anders. |
| Nein. | Nicht unbedingt. |
| Das geht nicht. | Das wäre schwierig. |

= Vielleicht könnten wir eine andere Lösung finden? :: Perhaps we could find another solution?

## Closing a discussion
= Lass uns sachlich bleiben. :: Let's stay objective.
= Darüber sollten wir noch einmal sprechen. :: We should talk about that again.

> Criticising an **idea** isn't criticising the **person**. In DACH colleagues can argue hard in a meeting and then have a relaxed lunch together.
`},
quiz: [
  ["Bantahan yang paling lunak ¦ The softest disagreement", ["Ich sehe das ein bisschen anders.", "Das ist falsch.", "Unsinn!"], 0, "Melunakkan dengan „ein bisschen anders“. ¦ Softened with “ein bisschen anders”."],
  ["„Belum tentu.“ ¦ “Not necessarily.”", ["Nicht unbedingt.", "Nicht nötig.", "Unbedingt nicht."], 0, "nicht unbedingt."],
  ["**Das stimmt ___, aber es ist zu teuer.**", ["zwar", "doch", "schon mal"], 0, "zwar … aber = memang …, tapi. ¦ zwar … aber = true …, but."],
]},

g73: { title: "Sebab & akibat ¦ Cause & effect", body: {
id: `
## Sebab
| Kata | Posisi kata kerja | Contoh |
| **weil / da** | akhir | …, weil es regnet. |
| **denn** | normal | …, denn es regnet. |
| **wegen** + Gen. | (kata benda) | wegen des Regens |
| **aufgrund** + Gen. | (formal) | aufgrund eines Streiks |
| **dank** | (positif) | dank deiner Hilfe |

## Akibat
| Kata | Posisi kata kerja | Contoh |
| **deshalb / deswegen / daher** | langsung setelahnya | Deshalb **bleiben** wir zu Hause. |
| **sodass** | akhir | …, sodass wir nass **wurden**. |
| **also** | langsung setelahnya | Also **gehen** wir. |

## Tujuan
| | |
| **damit** + anak kalimat | agar, supaya |
| **um … zu** | untuk (subjek sama) |

= Ich spreche langsam, damit du mich verstehst. :: Saya bicara pelan supaya kamu mengerti.

> Dalam percakapan, **wegen** sering dipakai dengan Dativ: wegen dem Regen. Dalam tulisan: wegen des Regens.
`,
en: `
## Cause
| Word | Verb position | Example |
| **weil / da** | end | …, weil es regnet. |
| **denn** | normal | …, denn es regnet. |
| **wegen** + gen. | (noun) | wegen des Regens |
| **aufgrund** + gen. | (formal) | aufgrund eines Streiks |
| **dank** | (positive) | dank deiner Hilfe |

## Effect
| Word | Verb position | Example |
| **deshalb / deswegen / daher** | straight after | Deshalb **bleiben** wir zu Hause. |
| **sodass** | end | …, sodass wir nass **wurden**. |
| **also** | straight after | Also **gehen** wir. |

> Careful: German **also** means “so / therefore”, not “too”!

## Purpose
| | |
| **damit** + clause | so that |
| **um … zu** | in order to (same subject) |

= Ich spreche langsam, damit du mich verstehst. :: I speak slowly so that you understand me.

> In speech **wegen** is often used with the dative: wegen dem Regen. In writing: wegen des Regens.
`},
quiz: [
  ["**Es regnet, deshalb ___ wir zu Hause.**", ["bleiben", "wir bleiben", "bleiben wir nicht deshalb"], 0, "deshalb + kata kerja. ¦ deshalb + verb."],
  ["„karena pemogokan“ (formal) ¦ “due to a strike” (formal)", ["aufgrund eines Streiks", "weil eines Streiks", "denn ein Streik"], 0, "aufgrund + Genitiv."],
  ["„also“ dalam bahasa Jerman artinya … ¦ German “also” means …", ["jadi, karena itu ¦ so, therefore", "juga ¦ too", "tetapi ¦ but"], 0, "also = jadi. ¦ also = so."],
]},

g74: { title: "Seandainya dulu: Konjunktiv II lampau ¦ If only: the past Konjunktiv II", body: {
id: `
Untuk berbicara tentang **masa lalu yang bisa saja berbeda** – penyesalan, kelegaan, „seandainya …“.

## Bentuk: hätte / wäre + Partizip II
| | |
| hätte + Partizip | Ich **hätte** das anders **gemacht**. |
| wäre + Partizip (gerak/perubahan) | Ich **wäre** gern **mitgekommen**. |

= Wenn ich das gewusst hätte, wäre ich gekommen. :: Seandainya saya tahu, saya pasti datang.
= Wenn wir früher losgefahren wären, hätten wir den Zug nicht verpasst. :: Seandainya kami berangkat lebih awal, kami tidak akan ketinggalan kereta.

## Dengan kata kerja modal
| | |
| hätte … sollen | seharusnya |
| hätte … können | seharusnya bisa |
| hätte … müssen | seharusnya harus |

= Ich hätte früher anrufen sollen. :: Seharusnya saya menelepon lebih awal.
= Du hättest mich fragen können! :: Kamu bisa saja bertanya padaku!

## Penyesalan
= Wenn ich doch nur mehr gelernt hätte! :: Andai saja saya belajar lebih banyak!
`,
en: `
For talking about a **past that could have been different** – regret, relief, “if only …”.

## Form: hätte / wäre + past participle
| | |
| hätte + participle | Ich **hätte** das anders **gemacht**. |
| wäre + participle (movement/change) | Ich **wäre** gern **mitgekommen**. |

= Wenn ich das gewusst hätte, wäre ich gekommen. :: If I had known, I would have come.
= Wenn wir früher losgefahren wären, hätten wir den Zug nicht verpasst. :: If we had left earlier, we wouldn't have missed the train.

## With modal verbs
| | |
| hätte … sollen | should have |
| hätte … können | could have |
| hätte … müssen | would have had to |

= Ich hätte früher anrufen sollen. :: I should have called earlier.
= Du hättest mich fragen können! :: You could have asked me!

## Regret
= Wenn ich doch nur mehr gelernt hätte! :: If only I had studied more!
`},
quiz: [
  ["„Seandainya saya tahu, …“ ¦ “If I had known, …”", ["Wenn ich das gewusst hätte, …", "Wenn ich das wusste, …", "Wenn ich das wissen würde gehabt, …"], 0, "hätte + Partizip."],
  ["„Seharusnya kamu bilang padaku!“ ¦ “You should have told me!”", ["Du hättest es mir sagen sollen!", "Du solltest es mir gesagt!", "Du hast mir sagen sollen!"], 0, "hätte + Infinitif + sollen."],
  ["**Ich ___ gern mitgekommen.**", ["wäre", "hätte", "würde"], 0, "mitkommen = gerak → wäre. ¦ Movement → wäre."],
]},

g77: { title: "Lalu lintas & transportasi di DACH ¦ Traffic & transport in DACH", body: {
id: `
## Mengemudi
- SIM dari Indonesia sering hanya berlaku **6 bulan** setelah pindah, lalu harus ditukar.
- **Rechts vor links**: di persimpangan tanpa rambu, kendaraan dari **kanan** punya hak jalan.
- Di Austria & Swiss, jalan tol butuh **Vignette** (stiker tol).
- Di Jerman, sebagian Autobahn **tanpa batas kecepatan** – tapi dianjurkan 130 km/jam.
- Selalu pakai **sabuk pengaman**, juga di kursi belakang.

## Transportasi umum
| | |
| die Monatskarte / das Jahresticket | tiket bulanan / tahunan |
| entwerten | memvalidasi tiket (di beberapa kota) |
| Schwarzfahren | naik tanpa tiket (denda sekitar 60–100 €!) |
| der Schienenersatzverkehr | bus pengganti kereta |

## Di kereta
= Ist dieser Platz noch frei? :: Kursi ini masih kosong?
= Hält dieser Zug in Linz? :: Kereta ini berhenti di Linz?
= Ich habe meinen Anschluss verpasst. :: Saya ketinggalan kereta sambungan.

> Pengumuman penting: **„Der Zug fällt heute aus.“** = keretanya batal hari ini. **„… hat 10 Minuten Verspätung“** = terlambat 10 menit.
`,
en: `
## Driving
- An Indonesian or other non-EU licence is often only valid for **6 months** after moving, then must be converted.
- **Rechts vor links**: at junctions without signs, traffic from the **right** has priority.
- In Austria and Switzerland motorways require a **Vignette** (toll sticker).
- In Germany parts of the Autobahn have **no speed limit** – but 130 km/h is recommended.
- Always wear a **seatbelt**, in the back too.

## Public transport
| | |
| die Monatskarte / das Jahresticket | monthly / annual pass |
| entwerten | to validate a ticket (in some cities) |
| Schwarzfahren | riding without a ticket (fine around €60–100!) |
| der Schienenersatzverkehr | rail replacement bus |

## On the train
= Ist dieser Platz noch frei? :: Is this seat free?
= Hält dieser Zug in Linz? :: Does this train stop in Linz?
= Ich habe meinen Anschluss verpasst. :: I've missed my connection.

> Key announcements: **“Der Zug fällt heute aus.”** = the train is cancelled today. **“… hat 10 Minuten Verspätung”** = 10 minutes late.
`},
quiz: [
  ["„Rechts vor links“ artinya … ¦ means …", ["kendaraan dari kanan didahulukan ¦ traffic from the right has priority", "jalan di sebelah kanan ¦ drive on the right", "belok kanan dulu ¦ turn right first"], 0, "Aturan hak jalan. ¦ The priority rule."],
  ["„Schwarzfahren“ artinya … ¦ means …", ["naik tanpa tiket ¦ riding without a ticket", "menyetir malam hari ¦ driving at night", "naik mobil hitam ¦ driving a black car"], 0, "schwarzfahren = tanpa tiket. ¦ = fare-dodging."],
  ["„Der Zug fällt aus.“", ["Keretanya batal. ¦ The train is cancelled.", "Keretanya jatuh. ¦ The train falls.", "Keretanya penuh. ¦ The train is full."], 0, "ausfallen = batal. ¦ = to be cancelled."],
]},

g78: { title: "Awalan kata kerja ¦ Verb prefixes", body: {
id: `
## Awalan terpisah – ditekan
**ab-, an-, auf-, aus-, ein-, mit-, nach-, vor-, weg-, zu-, zurück-**
= Ich hole dich ab. :: Saya jemput kamu.
= Wann kommst du zurück? :: Kapan kamu kembali?
Perfekt: ab**ge**holt, zurück**ge**kommen.

## Awalan tidak terpisah – tidak ditekan, tanpa ge-
**be-, ver-, er-, ent-, emp-, ge-, miss-, zer-**
= Ich verstehe dich. :: Saya mengerti kamu.
= Ich habe den Zug verpasst. :: Saya ketinggalan kereta.
Perfekt: **ver**standen, **be**zahlt, **er**zählt (tanpa ge-!)

## Awalan mengubah arti
| | |
| kommen | datang |
| **an**kommen | tiba |
| **be**kommen | mendapat (bukan „become“!) |
| **mit**kommen | ikut |
| **zurück**kommen | kembali |
| **ver**kommen | menjadi rusak |

> Awalan **über-, unter-, um-, durch-** bisa terpisah atau tidak – tergantung arti. Contoh: Kannst du das **übersetzen**? (menerjemahkan, tidak terpisah).
`,
en: `
## Separable prefixes – stressed
**ab-, an-, auf-, aus-, ein-, mit-, nach-, vor-, weg-, zu-, zurück-**
= Ich hole dich ab. :: I'll pick you up.
= Wann kommst du zurück? :: When are you coming back?
Perfect: ab**ge**holt, zurück**ge**kommen.

## Inseparable prefixes – unstressed, no ge-
**be-, ver-, er-, ent-, emp-, ge-, miss-, zer-**
= Ich verstehe dich. :: I understand you.
= Ich habe den Zug verpasst. :: I missed the train.
Perfect: **ver**standen, **be**zahlt, **er**zählt (no ge-!)

## Prefixes change the meaning
| | |
| kommen | to come |
| **an**kommen | to arrive |
| **be**kommen | to get (not “become”!) |
| **mit**kommen | to come along |
| **zurück**kommen | to come back |
| **ver**kommen | to go to ruin |

> **über-, unter-, um-, durch-** can be separable or not – depending on the meaning. E.g. Kannst du das **übersetzen**? (to translate, inseparable).
`},
quiz: [
  ["Perfekt dari **bezahlen** ¦ Perfect of **bezahlen**", ["bezahlt", "gebezahlt", "bezahlgt"], 0, "be- tanpa ge-. ¦ be- takes no ge-."],
  ["„Saya jemput kamu jam 8.“ ¦ “I'll pick you up at 8.”", ["Ich hole dich um 8 ab.", "Ich abhole dich um 8.", "Ich hole ab dich um 8."], 0, "ab- terpisah, ke akhir. ¦ ab- separates to the end."],
  ["„bekommen“ artinya … ¦ means …", ["mendapat ¦ to get", "menjadi ¦ to become", "datang ¦ to come"], 0, "bekommen = mendapat (falsche Freunde!). ¦ = to get (false friend!)."],
]},

g79: { title: "Pembentukan kata ¦ Word building", body: {
id: `
## Kata majemuk
Bahasa Jerman menggabungkan kata menjadi satu kata panjang. **Kata terakhir** menentukan arti dasar dan **artikel**:
| | |
| das Haus + **die Tür** | **die** Haustür |
| der Kranken + **das Haus** | **das** Krankenhaus |
| die Arbeit + **der Tag** | **der** Arbeitstag |

> Kadang ada **-s-** atau **-n-** di tengah: Arbeit**s**tag, Straße**n**bahn.

## Akhiran kata benda (selalu „die“)
| | dari | contoh |
| -ung | kata kerja | erklären → die Erklär**ung** |
| -heit / -keit | kata sifat | frei → die Frei**heit**, möglich → die Möglich**keit** |
| -in | profesi (perempuan) | Lehrer → die Lehrer**in** |

## Akhiran & awalan kata sifat
| | arti | contoh |
| un- | tidak | unfreundlich |
| -los | tanpa | arbeitslos |
| -bar | bisa di- | waschbar, essbar |
| -lich / -ig | sifat | freundlich, lustig |

= Das ist unmöglich! :: Itu tidak mungkin!
`,
en: `
## Compound nouns
German glues words together into one long word. The **last word** gives the basic meaning and the **article**:
| | |
| das Haus + **die Tür** | **die** Haustür |
| der Kranken + **das Haus** | **das** Krankenhaus |
| die Arbeit + **der Tag** | **der** Arbeitstag |

> Sometimes there's an **-s-** or **-n-** in the middle: Arbeit**s**tag, Straße**n**bahn.

## Noun endings (always “die”)
| | from | example |
| -ung | verbs | erklären → die Erklär**ung** |
| -heit / -keit | adjectives | frei → die Frei**heit**, möglich → die Möglich**keit** |
| -in | jobs (female) | Lehrer → die Lehrer**in** |

## Adjective prefixes & suffixes
| | meaning | example |
| un- | not | unfreundlich |
| -los | without | arbeitslos |
| -bar | can be …ed | waschbar, essbar |
| -lich / -ig | quality | freundlich, lustig |

= Das ist unmöglich! :: That's impossible!
`},
quiz: [
  ["Artikel untuk **Haustür** ¦ Article for **Haustür**", ["die", "das", "der"], 0, "Kata terakhir: die Tür. ¦ Last word: die Tür."],
  ["Kata benda dari **erklären** ¦ Noun from **erklären**", ["die Erklärung", "das Erklären", "der Erklärer"], 0, "-ung → die."],
  ["„arbeitslos“ artinya … ¦ means …", ["menganggur ¦ unemployed", "pekerja keras ¦ hard-working", "bekerja penuh ¦ full-time"], 0, "-los = tanpa: tanpa kerja. ¦ -los = without work."],
]},

g80: { title: "Dugaan ¦ Making guesses", body: {
id: `
## Seberapa yakin?
| Keyakinan | Jerman | Contoh |
| hampir pasti | bestimmt / sicher | Er kommt bestimmt. |
| sangat mungkin | wahrscheinlich / vermutlich | Sie ist wahrscheinlich krank. |
| mungkin | vielleicht / wohl / eventuell | Vielleicht regnet es. |
| kurang mungkin | kaum / wohl nicht | Das klappt wohl nicht. |

## Dengan kata kerja modal
| | |
| Das **muss** stimmen. | Itu pasti benar. |
| Das **dürfte** reichen. | Itu kemungkinan cukup. |
| Das **könnte** sein. | Mungkin saja. |
| Das **kann nicht** sein. | Itu tidak mungkin. |

= Er muss den Termin vergessen haben. :: Dia pasti lupa janjinya.

## Kelihatannya …
= Es sieht nach Regen aus. :: Kelihatannya mau hujan.
= Du scheinst müde zu sein. :: Kamu tampak capek.

> **eventuell** = mungkin (bukan „pada akhirnya“). Ini „teman palsu“ untuk penutur bahasa Inggris.
`,
en: `
## How sure are you?
| Certainty | German | Example |
| almost certain | bestimmt / sicher | Er kommt bestimmt. |
| very likely | wahrscheinlich / vermutlich | Sie ist wahrscheinlich krank. |
| possible | vielleicht / wohl / eventuell | Vielleicht regnet es. |
| unlikely | kaum / wohl nicht | Das klappt wohl nicht. |

## With modal verbs
| | |
| Das **muss** stimmen. | That must be true. |
| Das **dürfte** reichen. | That should be enough. |
| Das **könnte** sein. | That could be. |
| Das **kann nicht** sein. | That can't be. |

= Er muss den Termin vergessen haben. :: He must have forgotten the appointment.

## It looks like …
= Es sieht nach Regen aus. :: It looks like rain.
= Du scheinst müde zu sein. :: You seem tired.

> **eventuell** = possibly (not “eventually”). A classic false friend!
`},
quiz: [
  ["„Itu tidak mungkin benar!“ ¦ “That can't be true!”", ["Das kann nicht wahr sein!", "Das muss nicht wahr sein!", "Das darf nicht wahr!"], 0, "kann nicht = tidak mungkin. ¦ kann nicht = can't."],
  ["„eventuell“ artinya … ¦ means …", ["mungkin ¦ possibly", "akhirnya ¦ eventually", "pasti ¦ definitely"], 0, "eventuell = vielleicht."],
  ["„Kelihatannya mau hujan.“ ¦ “It looks like rain.”", ["Es sieht nach Regen aus.", "Es scheint Regen.", "Es guckt Regen."], 0, "aussehen nach."],
]},

g81: { title: "Hidup di DACH ¦ Living in DACH", body: {
id: `
## Terbiasa
| | |
| sich gewöhnen an + Akk. | mulai terbiasa (proses) |
| gewöhnt sein an + Akk. | sudah terbiasa |

= Ich gewöhne mich langsam an das Wetter. :: Saya pelan-pelan terbiasa dengan cuacanya.
= Ich bin es nicht gewöhnt, so früh zu essen. :: Saya tidak terbiasa makan secepat itu.

## Hal yang sering mengejutkan pendatang
- **Sonntagsruhe**: toko tutup hari Minggu, dan orang tidak boleh berisik (tidak memotong rumput, tidak mengebor).
- **Mülltrennung**: sampah dipilah – kertas, plastik, kaca, organik, sisa.
- **Pfand**: botol dan kaleng dikembalikan ke mesin di supermarket.
- **Pünktlichkeit**: tepat waktu sangat penting.
- **Termin**: hampir semua hal butuh janji – dokter, kantor, bahkan tukang.
- **Lüften**: membuka jendela lebar-lebar beberapa menit, juga di musim dingin.
- Makan malam sering **sederhana** (roti, keju, sosis) – **Abendbrot**.

## Membandingkan
= Bei uns in Indonesien … :: Di Indonesia, kami …
= Hier ist vieles anders als zu Hause. :: Di sini banyak hal berbeda dari di rumah.
`,
en: `
## Getting used to things
| | |
| sich gewöhnen an + acc. | to get used to (process) |
| gewöhnt sein an + acc. | to be used to |

= Ich gewöhne mich langsam an das Wetter. :: I'm slowly getting used to the weather.
= Ich bin es nicht gewöhnt, so früh zu essen. :: I'm not used to eating so early.

## Things that often surprise newcomers
- **Sonntagsruhe**: shops are closed on Sundays and people aren't supposed to make noise (no mowing, no drilling).
- **Mülltrennung**: rubbish is separated – paper, plastic, glass, organic, general waste.
- **Pfand**: bottles and cans go back into a machine at the supermarket.
- **Pünktlichkeit**: being on time really matters.
- **Termin**: almost everything needs an appointment – doctors, offices, even tradespeople.
- **Lüften**: opening the windows wide for a few minutes, even in winter.
- Dinner is often **simple** (bread, cheese, cold meats) – **Abendbrot**.

## Comparing
= Bei uns in Indonesien … :: Back home in Indonesia …
= Hier ist vieles anders als zu Hause. :: A lot is different here from home.
`},
quiz: [
  ["„Saya mulai terbiasa dengan dingin.“ ¦ “I'm getting used to the cold.”", ["Ich gewöhne mich an die Kälte.", "Ich bin an die Kälte gewöhnen.", "Ich gewöhne die Kälte."], 0, "sich gewöhnen an + Akk."],
  ["„Sonntagsruhe“ artinya … ¦ means …", ["hari Minggu harus tenang ¦ Sunday is a quiet day", "hari Minggu kerja ¦ working on Sunday", "hari Minggu pesta ¦ Sunday party"], 0, "Ruhe = tenang. ¦ Ruhe = quiet."],
  ["Botol dengan „Pfand“ … ¦ Bottles with “Pfand” …", ["dikembalikan ke mesin di toko ¦ go back into a machine at the shop", "dibuang ke sampah ¦ go in the bin", "tidak boleh dibeli ¦ can't be bought"], 0, "Pfand = deposit botol. ¦ = bottle deposit."],
]},

g82: { title: "Bahasa Jerman formal ¦ Formal German", body: {
id: `
Surat dari kantor pemerintah, bank atau asuransi memakai bahasa yang sangat formal (**Amtsdeutsch**). Ciri-cirinya:

## Gaya nominal
Kata kerja diubah menjadi kata benda (-ung):
| Sehari-hari | Formal |
| Wir bearbeiten Ihren Antrag. | Die **Bearbeitung** Ihres Antrags … |
| Bitte melden Sie sich an. | Eine **Anmeldung** ist erforderlich. |
| wenn Sie unterschreiben | nach **Unterzeichnung** |

## Kata formal
| Sehari-hari | Formal |
| bekommen | erhalten |
| brauchen | benötigen |
| sagen | mitteilen |
| wegen | aufgrund |
| vor | vor / bevor |
| nötig | erforderlich |

## Ungkapan tetap
= Hiermit bestätigen wir … :: Dengan ini kami menyatakan …
= Sollten Sie Fragen haben, … :: Jika Anda ada pertanyaan, …
= Wir bitten um Ihr Verständnis. :: Mohon pengertian Anda.
= Beiliegend finden Sie … :: Terlampir …

> Kalau suratnya sulit dimengerti, tidak apa-apa bertanya: **Können Sie mir erklären, was das bedeutet?**
`,
en: `
Letters from authorities, banks or insurers use very formal language (**Amtsdeutsch**). Its features:

## Nominal style
Verbs become nouns (-ung):
| Everyday | Formal |
| Wir bearbeiten Ihren Antrag. | Die **Bearbeitung** Ihres Antrags … |
| Bitte melden Sie sich an. | Eine **Anmeldung** ist erforderlich. |
| wenn Sie unterschreiben | nach **Unterzeichnung** |

## Formal words
| Everyday | Formal |
| bekommen | erhalten |
| brauchen | benötigen |
| sagen | mitteilen |
| wegen | aufgrund |
| vor | vor / bevor |
| nötig | erforderlich |

## Fixed phrases
= Hiermit bestätigen wir … :: We hereby confirm …
= Sollten Sie Fragen haben, … :: Should you have any questions, …
= Wir bitten um Ihr Verständnis. :: We ask for your understanding.
= Beiliegend finden Sie … :: Please find enclosed …

> If a letter is hard to understand, it's fine to ask: **Können Sie mir erklären, was das bedeutet?**
`},
quiz: [
  ["Kata formal untuk **bekommen** ¦ Formal word for **bekommen**", ["erhalten", "holen", "kriegen"], 0, "bekommen → erhalten."],
  ["„Mohon pengertian Anda.“ ¦ “We ask for your understanding.”", ["Wir bitten um Ihr Verständnis.", "Verstehen Sie bitte!", "Bitte Verständnis haben Sie."], 0, "Ungkapan tetap. ¦ Fixed phrase."],
  ["Gaya nominal dari „wir bearbeiten“ ¦ Nominal style of “wir bearbeiten”", ["die Bearbeitung", "das Bearbeiten wird", "der Bearbeiter"], 0, "-ung."],
]},

g83: { title: "Tujuan & masa depan ¦ Goals & the future", body: {
id: `
## Menyatakan tujuan
| | |
| Mein Ziel ist, … zu … | Tujuan saya adalah … |
| Ich habe vor, … zu … | Saya berniat … |
| Ich möchte … | Saya ingin … |
| Ich plane, … zu … | Saya berencana … |

= Mein Ziel ist, die B2-Prüfung zu bestehen. :: Tujuan saya lulus ujian B2.

## Sedang berlangsung: gerade / dabei sein
Bahasa Jerman tidak punya bentuk „sedang -ing“. Pakai **gerade** atau **dabei sein, … zu …**:
= Ich koche gerade. :: Saya sedang masak.
= Ich bin gerade dabei, eine Wohnung zu suchen. :: Saya sedang mencari apartemen.

## Futur II – akan sudah selesai
= Bis Ende des Jahres werde ich die Prüfung gemacht haben. :: Akhir tahun saya akan sudah ikut ujiannya.

## Ujian bahasa
Untuk kerja, visa, atau kewarganegaraan, sering dibutuhkan sertifikat: **A2, B1, B2** (Goethe, ÖSD, telc).
> Untuk banyak pekerjaan di bidang perawatan: biasanya **B1/B2**.
`,
en: `
## Stating goals
| | |
| Mein Ziel ist, … zu … | My goal is to … |
| Ich habe vor, … zu … | I intend to … |
| Ich möchte … | I'd like to … |
| Ich plane, … zu … | I'm planning to … |

= Mein Ziel ist, die B2-Prüfung zu bestehen. :: My goal is to pass the B2 exam.

## In progress: gerade / dabei sein
German has no “-ing” form. Use **gerade** or **dabei sein, … zu …**:
= Ich koche gerade. :: I'm cooking right now.
= Ich bin gerade dabei, eine Wohnung zu suchen. :: I'm currently looking for a flat.

## Future perfect – will have finished
= Bis Ende des Jahres werde ich die Prüfung gemacht haben. :: By the end of the year I'll have taken the exam.

## Language exams
For work, visas or citizenship you often need a certificate: **A2, B1, B2** (Goethe, ÖSD, telc).
> For many care jobs: usually **B1/B2**.
`},
quiz: [
  ["„Saya sedang masak.“ ¦ “I'm cooking right now.”", ["Ich koche gerade.", "Ich bin kochend.", "Ich koche jetzt gerade dabei."], 0, "gerade = sedang. ¦ gerade = right now."],
  ["„Tujuan saya adalah lulus ujian.“ ¦ “My goal is to pass the exam.”", ["Mein Ziel ist, die Prüfung zu bestehen.", "Mein Ziel ist die Prüfung bestehen.", "Mein Ziel, Prüfung bestehen zu."], 0, "Mein Ziel ist, … zu + Infinitif."],
  ["Level bahasa yang sering dibutuhkan untuk perawat ¦ Language level often needed for nurses", ["B1/B2", "A1", "C2"], 0, "Biasanya B1/B2. ¦ Usually B1/B2."],
]},

g84: { title: "Partikel & nuansa ¦ Particles & nuances", body: {
id: `
Partikel memberi warna pada kalimat – seperti „dong, kok, sih, deh, kan, toh“ dalam bahasa Indonesia.

| Partikel | Fungsi | Contoh |
| **doch** | ajakan, membantah | Komm doch! – Ayo dong! |
| **mal** | melunakkan | Hilf mir mal kurz. – Bantu sebentar dong. |
| **ja** | heran, sudah diketahui | Das ist ja super! |
| **denn** | pertanyaan ramah/heran | Was ist denn passiert? |
| **halt / eben** | ya memang begitu | Das ist halt so. |
| **schon** | menenangkan | Das klappt schon. – Pasti berhasil kok. |
| **eh / sowieso** | toh, lagipula | Ich muss eh einkaufen. |
| **ruhig** | silakan saja | Frag ruhig! |

## „Teman palsu“
| Jerman | artinya | bukan |
| also | jadi | juga (also EN) |
| eventuell | mungkin | akhirnya |
| bekommen | mendapat | menjadi |
| Chef | atasan | koki |
| Handy | HP | praktis |

> Kamu tidak harus memakai semua partikel – tapi mengenalinya membuatmu jauh lebih paham bahasa lisan!
`,
en: `
Particles colour a sentence – they change the tone, not the meaning.

| Particle | Function | Example |
| **doch** | encouraging, contradicting | Komm doch! – Do come! |
| **mal** | softening | Hilf mir mal kurz. – Give me a hand for a sec. |
| **ja** | surprise, shared knowledge | Das ist ja super! |
| **denn** | friendly or surprised question | Was ist denn passiert? |
| **halt / eben** | that's just how it is | Das ist halt so. |
| **schon** | reassuring | Das klappt schon. – It'll work out. |
| **eh / sowieso** | anyway | Ich muss eh einkaufen. |
| **ruhig** | feel free | Frag ruhig! |

## False friends
| German | means | not |
| also | so, therefore | also |
| eventuell | possibly | eventually |
| bekommen | to get | to become |
| Chef | boss | chef |
| Handy | mobile phone | handy |

> You don't have to use every particle – but recognising them makes spoken German much easier to follow!
`},
quiz: [
  ["„Das klappt schon!“ terdengar … ¦ sounds …", ["menenangkan ¦ reassuring", "marah ¦ angry", "ragu ¦ doubtful"], 0, "schon menenangkan. ¦ schon reassures."],
  ["„Chef“ dalam bahasa Jerman adalah … ¦ “Chef” in German is …", ["atasan ¦ the boss", "koki ¦ a cook", "pelayan ¦ a waiter"], 0, "Chef = atasan; koki = Koch. ¦ Chef = boss; cook = Koch."],
  ["Ajakan ramah ¦ A friendly invitation", ["Komm doch mit!", "Komm mit!", "Du kommst mit."], 0, "doch melunakkan. ¦ doch softens it."],
]},

});

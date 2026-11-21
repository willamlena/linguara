// Dein Tal: Für jede Übung gibt es 🌱 Punkte. Bei bestimmten Punktzahlen und Serien
// ziehen Tiere ein und es kommen Dinge für sie dazu (Futter, Haus, Baum …).
// Es geht nie etwas verloren – auch wenn die Serie reißt.
(function () {
  'use strict';
  const { t, esc, TARGET, LANG } = window.U;
  const St = () => window.Store;

  // ---------- Zeichnungen (Ursprung = Mitte unten, wo das Tier auf dem Boden steht) ----------
  const D = '#2D2B25', CREAM = '#F4EFE6', WHITE = '#FBF8F2', BROWN = '#8A5A3C', TERRA = '#E08A63', MUST = '#DDAE4F';
  const flower = (x, y, r, petal, mid) => [0, 72, 144, 216, 288].map(a =>
    `<ellipse cx="${x}" cy="${y - r}" rx="${r * .55}" ry="${r}" fill="${petal}" transform="rotate(${a} ${x} ${y})"/>`).join('') +
    `<circle cx="${x}" cy="${y}" r="${r * .45}" fill="${mid}"/>`;
  const SPRITES = {
    bird: `<ellipse cx="0" cy="-7" rx="7" ry="6" fill="#8C7B6B"/><path d="M-6 -9 l-6 -3 l2 6z" fill="#8C7B6B"/><ellipse cx="2" cy="-5" rx="4" ry="3.5" fill="${TERRA}"/><circle cx="3" cy="-10" r="1" fill="${D}"/><path d="M6 -10 l4 1 l-4 1.5z" fill="${MUST}"/><path d="M-1 -1.5 v1.5 M2 -1.5 v1.5" stroke="${D}" stroke-width=".9"/>`,
    feeder: `<rect x="-1.5" y="-26" width="3" height="26" fill="${BROWN}"/><rect x="-9" y="-36" width="18" height="12" rx="1.5" fill="${TERRA}"/><path d="M-12 -35 L0 -44 L12 -35z" fill="#2F5A2D"/><circle cx="0" cy="-30" r="3" fill="#5A3B28"/><rect x="-11" y="-25" width="22" height="2" fill="${BROWN}"/><circle cx="-6" cy="-26" r="1" fill="${MUST}"/><circle cx="6" cy="-26" r="1" fill="${MUST}"/>`,
    hedgehog: `<path d="M-13 0 l1 -6 l2 2 l1 -6 l2 3 l2 -7 l2 4 l2 -7 l2 5 l2 -6 l2 5 l1 -3 l2 5 L8 0z" fill="#6B4A30"/><ellipse cx="-2" cy="-4" rx="10" ry="4.5" fill="#7A5638"/><path d="M5 -7 C10 -8 14 -4 16 -1.5 L5 0z" fill="#E9CDA8"/><circle cx="16" cy="-1.8" r="1.2" fill="${D}"/><circle cx="10" cy="-4.5" r=".9" fill="${D}"/>`,
    flowers: `<path d="M-8 0 V-12 M0 0 V-17 M8 0 V-10" stroke="#4F7348" stroke-width="1.5"/><path d="M0 -7 c-4 -2 -6 0 -6 0 c2 2 5 1 6 0z M0 -9 c4 -2 6 0 6 0 c-2 2 -5 1 -6 0z" fill="#6E9365"/>${flower(-8, -13, 3, TERRA, MUST)}${flower(0, -18, 3.5, MUST, TERRA)}${flower(8, -11, 3, WHITE, MUST)}`,
    rabbit: `<ellipse cx="-2" cy="-7" rx="9" ry="7" fill="#D8CBB6"/><ellipse cx="5" cy="-22" rx="1.8" ry="6" fill="#D8CBB6"/><ellipse cx="9" cy="-21" rx="1.8" ry="6" fill="#D8CBB6" transform="rotate(18 9 -16)"/><ellipse cx="5" cy="-22" rx=".8" ry="4" fill="#E9A989"/><circle cx="7" cy="-13" r="5" fill="#D8CBB6"/><circle cx="-11" cy="-8" r="2.6" fill="${WHITE}"/><circle cx="9" cy="-14" r="1" fill="${D}"/><circle cx="11.6" cy="-12.4" r=".8" fill="#E9A989"/>`,
    appletree: `<rect x="-2.5" y="-16" width="5" height="16" fill="${BROWN}"/><circle cx="0" cy="-27" r="14" fill="#4F7A48"/><circle cx="-7" cy="-23" r="8" fill="#5E8A55"/><circle cx="7" cy="-31" r="7" fill="#5E8A55"/><circle cx="-5" cy="-29" r="2" fill="#E07A55"/><circle cx="6" cy="-22" r="2" fill="#E07A55"/><circle cx="2" cy="-35" r="2" fill="#E07A55"/><circle cx="-9" cy="-19" r="2" fill="#E07A55"/>`,
    squirrel: `<path d="M-4 0 C-16 -2 -16 -21 -8 -23 C-3 -24 -1 -18 -6 -16 C-10 -14 -10 -6 -4 -4z" fill="#C46A3A"/><ellipse cx="2" cy="-6" rx="5" ry="6" fill="#D9743F"/><circle cx="4" cy="-13" r="4" fill="#D9743F"/><path d="M2 -16 l1 -4.5 l2.2 3.5z" fill="#D9743F"/><circle cx="5.6" cy="-13.6" r=".9" fill="${D}"/><ellipse cx="3" cy="-4.5" rx="2.5" ry="3" fill="#F0C9A0"/><circle cx="6" cy="-8" r="1.6" fill="#8A5A3C"/>`,
    pond: `<ellipse cx="0" cy="-4" rx="24" ry="6.5" fill="#8FB5B0"/><ellipse cx="-4" cy="-5" rx="14" ry="2.6" fill="#B5D1CC"/><path d="M18 -6 v-9 M21 -5 v-11 M-21 -5 v-7" stroke="#4F7348" stroke-width="1.3"/><ellipse cx="21" cy="-16" rx="1.2" ry="3" fill="${BROWN}"/><ellipse cx="18" cy="-15" rx="1.1" ry="2.6" fill="${BROWN}"/><ellipse cx="10" cy="-3" rx="3" ry="1.2" fill="#6E9365"/>`,
    duck: `<path d="M-9 -4 C-10 -11 2 -11 4 -7 L9 -7 C9 -2 4 0 -2 0 C-6 0 -9 -2 -9 -4z" fill="${WHITE}"/><circle cx="5" cy="-11" r="4" fill="#2F6B4A"/><path d="M8 -11 l4.5 1 l-4.5 1.6z" fill="${MUST}"/><circle cx="6" cy="-12" r=".9" fill="${D}"/><path d="M-5 -6 c2 -2 5 -2 7 0" stroke="#C9BBA4" fill="none"/><rect x="2" y="-8" width="4" height="1.2" fill="${WHITE}"/>`,
    duckw: `<path d="M-9 -4 C-10 -11 2 -11 4 -7 L9 -7 C9 -2 4 0 -2 0 C-6 0 -9 -2 -9 -4z" fill="${WHITE}"/><circle cx="5" cy="-11" r="4" fill="${WHITE}"/><path d="M8 -11 l4.5 1 l-4.5 1.6z" fill="${MUST}"/><circle cx="6" cy="-12" r=".9" fill="${D}"/><path d="M-5 -6 c2 -2 5 -2 7 0" stroke="#D8CBB6" fill="none"/>`,
    butterfly: `<g class="flap"><path d="M0 -2 C-8 -13 -13 -2 -6 0 C-11 3 -6 9 0 2z" fill="${TERRA}"/><path d="M0 -2 C8 -13 13 -2 6 0 C11 3 6 9 0 2z" fill="${MUST}"/></g><rect x="-.7" y="-5" width="1.4" height="9" rx=".7" fill="${D}"/><path d="M0 -5 l-2 -3 M0 -5 l2 -3" stroke="${D}" stroke-width=".6"/>`,
    fence: `<g fill="#C9A27C"><path d="M-20 0 v-12 l1.5 -2 l1.5 2 v12z M-8 0 v-12 l1.5 -2 l1.5 2 v12z M4 0 v-12 l1.5 -2 l1.5 2 v12z M16 0 v-12 l1.5 -2 l1.5 2 v12z"/><rect x="-22" y="-10" width="44" height="2"/><rect x="-22" y="-5" width="44" height="2"/></g>`,
    fox: `<path d="M-11 -5 C-19 -6 -22 -14 -16 -15 C-14 -11 -10 -10 -7 -9z" fill="#D9743F"/><circle cx="-17.5" cy="-14" r="2.2" fill="${WHITE}"/><ellipse cx="-2" cy="-7" rx="10" ry="5.5" fill="#D9743F"/><rect x="-8" y="-3" width="2" height="3" fill="#5A3B28"/><rect x="4" y="-3" width="2" height="3" fill="#5A3B28"/><path d="M5 -11 L17 -9 L8 -3z" fill="#D9743F"/><path d="M6 -10.5 l1 -6 l3.4 5z M9.5 -10 l3 -5.5 l1 6z" fill="#D9743F"/><path d="M8.5 -6 L14 -8 L9 -3z" fill="${WHITE}"/><circle cx="12.5" cy="-9.5" r="1" fill="${D}"/><circle cx="17" cy="-9" r=".9" fill="${D}"/>`,
    mushrooms: `<rect x="-5.5" y="-6" width="3" height="6" rx="1" fill="${CREAM}"/><path d="M-10.5 -6 C-10.5 -15 3.5 -15 3.5 -6z" fill="#E07A55"/><circle cx="-6" cy="-10" r="1.1" fill="${WHITE}"/><circle cx="-1.5" cy="-8.5" r=".9" fill="${WHITE}"/><circle cx="-8" cy="-7.5" r=".8" fill="${WHITE}"/><rect x="5" y="-4" width="2.4" height="4" rx="1" fill="${CREAM}"/><path d="M2 -4 C2 -9.5 10.5 -9.5 10.5 -4z" fill="#C46A3A"/>`,
    deer: `<ellipse cx="0" cy="-14" rx="10" ry="5.5" fill="#B9825A"/><g fill="${BROWN}"><rect x="-7" y="-11" width="1.8" height="11"/><rect x="-3.5" y="-11" width="1.8" height="11"/><rect x="4" y="-11" width="1.8" height="11"/><rect x="7" y="-11" width="1.8" height="11"/></g><path d="M5 -16 L9.5 -26 L13 -24 L10 -14z" fill="#B9825A"/><ellipse cx="13" cy="-26" rx="4.2" ry="2.6" fill="#B9825A"/><path d="M10 -28 l-3.5 -2.5 l4.5 .5z" fill="#B9825A"/><path d="M11.5 -28 l-1 -6 m.4 3 l-3 -2 M13.5 -28 l1 -6 m-.4 3 l3 -2" stroke="${BROWN}" stroke-width="1.1" fill="none"/><circle cx="14" cy="-26.5" r=".8" fill="${D}"/><circle cx="-3" cy="-15" r="1" fill="${CREAM}"/><circle cx="1" cy="-16" r="1" fill="${CREAM}"/><circle cx="-6" cy="-13" r=".9" fill="${CREAM}"/><path d="M-10 -15 l-2 -2" stroke="#B9825A" stroke-width="1.6"/>`,
    lantern: `<rect x="-1" y="-26" width="2" height="26" fill="#5A3B28"/><path d="M-1 -25 h8 v3" stroke="#5A3B28" stroke-width="1.4" fill="none"/><circle class="glow" cx="7" cy="-17" r="7" fill="#F6D27A" opacity="0"/><rect x="4" y="-21.5" width="6" height="8" rx="1.5" fill="#F6D27A"/><path d="M3 -21.5 h8 l-1 -2 h-6z M3 -13.5 h8 v1.2 h-8z" fill="${D}"/>`,
    owl: `<ellipse cx="0" cy="-21" rx="7" ry="9" fill="#8C7B6B"/><path d="M-6.5 -27 l1 -4.5 l3.2 3z M6.5 -27 l-1 -4.5 l-3.2 3z" fill="#8C7B6B"/><ellipse cx="0" cy="-16" rx="4.2" ry="4" fill="#D8CBB6"/><circle cx="-3" cy="-24" r="2.7" fill="${CREAM}"/><circle cx="3" cy="-24" r="2.7" fill="${CREAM}"/><circle cx="-3" cy="-24" r="1.2" fill="${D}"/><circle cx="3" cy="-24" r="1.2" fill="${D}"/><path d="M-1 -21 l1 2 l1 -2z" fill="${MUST}"/>`,
    sheep: `<g fill="#F1EBDD"><circle cx="-7" cy="-9" r="5"/><circle cx="-1" cy="-11.5" r="6"/><circle cx="5" cy="-9.5" r="5"/><circle cx="-4" cy="-5.5" r="5"/><circle cx="3" cy="-5.5" r="5"/></g><g fill="#3A3530"><rect x="-6" y="-3" width="1.8" height="3"/><rect x="3" y="-3" width="1.8" height="3"/><ellipse cx="10.5" cy="-10" rx="3.6" ry="4.6"/><ellipse cx="7.6" cy="-13.4" rx="2.4" ry="1"/></g><circle cx="11.6" cy="-11" r=".8" fill="#F4EFE6"/>`,
    // Tropisch
    chicken: `<path d="M-7 -9 C-14 -19 -13 -6 -8 -5z" fill="#2F5A2D"/><path d="M-6 -10 C-11 -17 -9 -6 -6 -6z" fill="#3F6B3B"/><ellipse cx="-1" cy="-8" rx="8" ry="7" fill="#C46A3A"/><circle cx="5" cy="-15" r="4" fill="#C46A3A"/><path d="M2.5 -18.5 c.5 -3 2 -3.5 2.5 -1 c.5 -2.5 2.5 -2 2 1z" fill="#E0503A"/><path d="M8.5 -15.5 l4 1 l-4 1.5z" fill="${MUST}"/><path d="M8 -13 c0 2 -1.5 2.5 -2 1z" fill="#E0503A"/><circle cx="6" cy="-16" r=".9" fill="${D}"/><path d="M-3 -1.5 v1.5 M1 -1.5 v1.5" stroke="${MUST}" stroke-width="1.1"/>`,
    banana: `<rect x="-1.8" y="-22" width="3.6" height="22" fill="#8A9A5B"/><path d="M0 -21 C-6 -30 -16 -31 -21 -25 C-12 -27 -6 -24 0 -19z" fill="#5E8A55"/><path d="M0 -21 C6 -32 16 -33 21 -27 C12 -28 6 -25 0 -19z" fill="#4F7A48"/><path d="M0 -22 C-2 -34 2 -39 5 -40 C2 -33 2 -28 0 -21z" fill="#6E9365"/><g fill="${MUST}"><ellipse cx="4" cy="-16" rx="1.6" ry="3.4" transform="rotate(22 4 -16)"/><ellipse cx="6.5" cy="-14.5" rx="1.6" ry="3.4" transform="rotate(32 6.5 -14.5)"/><ellipse cx="3" cy="-13" rx="1.6" ry="3.4" transform="rotate(12 3 -13)"/></g>`,
    cat: `<path d="M6 -2 C14 -2 14 -10 10 -12" stroke="#E9A96E" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M-6 0 C-8 -10 -4 -14 0 -14 C4 -14 8 -10 6 0z" fill="#E9A96E"/><path d="M-5 -20 l0 -6.5 l4.2 3.2z M5 -20 l0 -6.5 l-4.2 3.2z" fill="#E9A96E"/><circle cx="0" cy="-17" r="5.5" fill="#E9A96E"/><circle cx="-2" cy="-17.5" r=".9" fill="${D}"/><circle cx="2" cy="-17.5" r=".9" fill="${D}"/><path d="M-.8 -15.6 h1.6 l-.8 1z" fill="#E07A55"/><path d="M-3 -9 h3 M-3 -6 h4 M-4 -19.8 h2" stroke="#C47F45" stroke-width="1"/><ellipse cx="0" cy="-5" rx="2.6" ry="4" fill="#F6DCC0"/>`,
    frangipani: `<ellipse cx="0" cy="-6" rx="13" ry="6" fill="#5E8A55"/><ellipse cx="-6" cy="-8" rx="6" ry="4" fill="#4F7A48"/>${flower(-6, -12, 3.2, WHITE, MUST)}${flower(4, -14, 3.4, WHITE, MUST)}${flower(9, -8, 3, '#F6D9C3', MUST)}`,
    turtle: `<ellipse cx="12" cy="-4.5" rx="4" ry="3" fill="#A9B98A"/><circle cx="13.2" cy="-5.4" r=".8" fill="${D}"/><rect x="-9" y="-2.5" width="3" height="2.5" rx="1" fill="#A9B98A"/><rect x="4" y="-2.5" width="3" height="2.5" rx="1" fill="#A9B98A"/><path d="M-11 -2 C-11 -13 9 -13 9 -2z" fill="#6E8B4E"/><path d="M-5.5 -6.5 l3.5 -3 l3.5 3 l-3.5 3z" fill="#8CA866"/><path d="M-10 -3.5 h18" stroke="#5A733F" stroke-width="1.2"/>`,
    palm: `<path d="M0 0 C-2 -14 2 -27 6 -35" stroke="${BROWN}" stroke-width="3.6" fill="none"/><g fill="#4F7A48"><path d="M6 -35 C-2 -41 -12 -39 -17 -31 C-9 -35 -2 -35 6 -34z"/><path d="M6 -35 C14 -43 24 -41 27 -33 C19 -37 12 -36 6 -34z"/><path d="M6 -35 C2 -45 6 -51 12 -51 C8 -45 8 -41 7 -35z"/></g><g fill="#5E8A55"><path d="M6 -35 C0 -37 -6 -31 -8 -23 C-2 -29 2 -32 6 -34z"/><path d="M6 -35 C12 -37 18 -31 20 -23 C14 -29 10 -32 6 -34z"/></g><circle cx="5" cy="-33" r="2.1" fill="#7A5638"/><circle cx="8.2" cy="-32.5" r="2.1" fill="#7A5638"/>`,
    gecko: `<path d="M-13 -2.5 C-8 -4 -3 -2.5 1 -3.5 C5 -4.5 8.5 -4.8 12 -3.4 C9 -1.4 6 -1.6 1 -1.4 C-3 -.8 -7 -.8 -13 -2.5z" fill="#9BB07A"/><path d="M-4 -3 l-2 -3 l-1.5 .5 M-4 -2 l-2 2.4 l-1.5 -.4 M5 -3.6 l2 -3 l1.5 .5 M5 -2 l2 2.2 l1.5 -.4" stroke="#9BB07A" stroke-width="1.2" fill="none" stroke-linecap="round"/><circle cx="10" cy="-3.8" r=".7" fill="${D}"/>`,
    monkey: `<path d="M5 -3 C12 -2 12 -12 8 -14" stroke="${BROWN}" stroke-width="2" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="-8" rx="6" ry="7" fill="${BROWN}"/><circle cx="-5.5" cy="-18" r="2.1" fill="${BROWN}"/><circle cx="5.5" cy="-18" r="2.1" fill="${BROWN}"/><circle cx="-5.5" cy="-18" r="1" fill="#E9CDA8"/><circle cx="5.5" cy="-18" r="1" fill="#E9CDA8"/><circle cx="0" cy="-18" r="5.5" fill="${BROWN}"/><ellipse cx="0" cy="-17" rx="3.8" ry="3.4" fill="#E9CDA8"/><circle cx="-1.4" cy="-18" r=".8" fill="${D}"/><circle cx="1.4" cy="-18" r=".8" fill="${D}"/><ellipse cx="0" cy="-6" rx="3" ry="4" fill="#C29A72"/>`,
    rice: [-12, -6, 0, 6, 12].map((x, i) =>
      `<path d="M${x} 0 C${x} -8 ${x + 1} -14 ${x + 4} -17" stroke="#8CA866" stroke-width="1.3" fill="none"/><path d="M${x + 4} -17 c1 2 1.5 4 1 6" stroke="${MUST}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M${x} -4 c-3 -2 -5 -1 -6 0 M${x} -6 c3 -3 5 -2 6 -1" stroke="#6E9365" stroke-width="1" fill="none"/>`).join(''),
    fireflies: [[-10, -3], [-3, -9], [5, -2], [11, -8], [0, 3]].map(([x, y], i) =>
      `<circle class="glow" cx="${x}" cy="${y}" r="3.4" fill="#F6E27A" opacity=".25"/><circle class="fly f${i % 3}" cx="${x}" cy="${y}" r="1.3" fill="#E8D25A"/>`).join(''),
    hornbill: `<path d="M-6 -20 l-9 7 l2.5 -8z" fill="${D}"/><path d="M-12 -15 l-3 2 l1 -3z" fill="${WHITE}"/><ellipse cx="-1" cy="-19" rx="7" ry="5.5" fill="${D}"/><ellipse cx="0" cy="-15" rx="3.5" ry="2" fill="${WHITE}"/><circle cx="5" cy="-24" r="3.8" fill="${D}"/><path d="M7 -25 C12 -26 16.5 -24 17.5 -21 C13.5 -22 10 -22 7 -22z" fill="${MUST}"/><path d="M7 -26 C10 -29.5 14 -28.5 15 -25.5 C12 -26.5 9 -26.5 7 -25z" fill="#E07A55"/><circle cx="5.6" cy="-25" r=".9" fill="${WHITE}"/>`,
    orangutan: `<path d="M-7 -14 C-14 -8 -13 -2 -10 0 M7 -14 C14 -8 13 -2 10 0" stroke="#C0602E" stroke-width="3.2" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="-10" rx="8" ry="9.5" fill="#C0602E"/><path d="M-3 -2 v2 M3 -2 v2" stroke="#A44E22" stroke-width="3" stroke-linecap="round"/><circle cx="0" cy="-22" r="6" fill="#C0602E"/><ellipse cx="0" cy="-21" rx="4.3" ry="3.9" fill="#E9A980"/><circle cx="-1.5" cy="-22.2" r=".8" fill="${D}"/><circle cx="1.5" cy="-22.2" r=".8" fill="${D}"/><path d="M-1.6 -19.2 q1.6 1 3.2 0" stroke="#8A3E1E" stroke-width=".7" fill="none"/>`,
  };
  // Feste Teile, die stehen bleiben, wenn sich das Tier bewegt (Sitzstangen)
  const BASE = { owl: `<rect x="-1.5" y="-12" width="3" height="12" fill="${BROWN}"/><rect x="-6" y="-12.5" width="12" height="2" rx="1" fill="${BROWN}"/>`, hornbill: `<rect x="-1.5" y="-12" width="3" height="12" fill="${BROWN}"/><rect x="-10" y="-13" width="20" height="2.2" rx="1.1" fill="${BROWN}"/>` };
  const AIR = { butterfly: 1, fireflies: 1 }; // schweben in der Luft (Ursprung in der Mitte)
  const ANIMAL = { sheep: 1, bird: 1, hedgehog: 1, rabbit: 1, squirrel: 1, duck: 1, duckw: 1, fox: 1, deer: 1, owl: 1, chicken: 1, cat: 1, turtle: 1, gecko: 1, monkey: 1, hornbill: 1, orangutan: 1 };
  const NIGHT_AWAKE = { owl: 1, fireflies: 1, lantern: 1, gecko: 1 };

  // ---------- Plätze in der Landschaft (viewBox 400 × 150) ----------
  const SLOTS = [
    [212, 122, .85], [236, 120, .9], [110, 141, .95], [160, 147, .8], [300, 138, .95], [356, 114, 1.25],
    [326, 121, .75], [58, 148, 1.45], [54, 143, .8], [268, 98, .75], [124, 114, 1], [248, 146, 1],
    [192, 148, .75], [28, 114, 1], [150, 118, .8], [382, 134, .8],
  ];

  // ---------- Belohnungen pro Kurs (Name in Lernsprache, de/en/id zur Übersetzung) ----------
  // need: Punkte (p) oder beste Serie in Tagen (s)
  const LOCAL = [
    ['bird', { de: 'der Vogel', en: 'bird', id: 'burung' }, { p: 10 }],
    ['feeder', { de: 'das Vogelhaus', en: 'birdhouse', id: 'rumah burung' }, { p: 160 }],
    ['hedgehog', { de: 'der Igel', en: 'hedgehog', id: 'landak' }, { p: 90 }],
    ['flowers', { de: 'die Blumen', en: 'flowers', id: 'bunga-bunga' }, { p: 40 }],
    ['rabbit', { de: 'der Hase', en: 'rabbit', id: 'kelinci' }, { p: 250 }],
    ['appletree', { de: 'der Apfelbaum', en: 'apple tree', id: 'pohon apel' }, { p: 620 }],
    ['squirrel', { de: 'das Eichhörnchen', en: 'squirrel', id: 'tupai' }, { p: 800 }],
    ['pond', { de: 'der Teich', en: 'pond', id: 'kolam' }, { p: 360 }],
    ['duck', { de: 'die Ente', en: 'duck', id: 'bebek' }, { p: 480 }],
    ['butterfly', { de: 'der Schmetterling', en: 'butterfly', id: 'kupu-kupu' }, { s: 3 }],
    ['fence', { de: 'der Zaun', en: 'fence', id: 'pagar' }, { p: 1000 }],
    ['fox', { de: 'der Fuchs', en: 'fox', id: 'rubah' }, { p: 1250 }],
    ['mushrooms', { de: 'die Pilze', en: 'mushrooms', id: 'jamur' }, { p: 1550 }],
    ['deer', { de: 'das Reh', en: 'deer', id: 'rusa' }, { s: 14 }],
    ['lantern', { de: 'die Laterne', en: 'lantern', id: 'lentera' }, { s: 30 }],
    ['owl', { de: 'die Eule', en: 'owl', id: 'burung hantu' }, { s: 7 }],
  ];
  const TROPIC = [
    ['chicken', { de: 'das Huhn', en: 'chicken', id: 'ayam' }, { p: 10 }],
    ['banana', { de: 'die Bananenstaude', en: 'banana plant', id: 'pohon pisang' }, { p: 160 }],
    ['cat', { de: 'die Katze', en: 'cat', id: 'kucing' }, { p: 90 }],
    ['frangipani', { de: 'der Frangipani', en: 'frangipani', id: 'bunga kamboja' }, { p: 40 }],
    ['turtle', { de: 'die Schildkröte', en: 'turtle', id: 'kura-kura' }, { p: 250 }],
    ['palm', { de: 'die Kokospalme', en: 'coconut palm', id: 'pohon kelapa' }, { p: 620 }],
    ['gecko', { de: 'der Gecko', en: 'gecko', id: 'cicak' }, { p: 800 }],
    ['pond', { de: 'der Teich', en: 'pond', id: 'kolam' }, { p: 360 }],
    ['duckw', { de: 'die Ente', en: 'duck', id: 'bebek' }, { p: 480 }],
    ['butterfly', { de: 'der Schmetterling', en: 'butterfly', id: 'kupu-kupu' }, { s: 3 }],
    ['rice', { de: 'der Reis', en: 'rice plants', id: 'padi' }, { p: 1000 }],
    ['monkey', { de: 'der Affe', en: 'monkey', id: 'monyet' }, { p: 1250 }],
    ['fireflies', { de: 'die Glühwürmchen', en: 'fireflies', id: 'kunang-kunang' }, { p: 1550 }],
    ['orangutan', { de: 'der Orang-Utan', en: 'orangutan', id: 'orang utan' }, { s: 14 }],
    ['lantern', { de: 'die Laterne', en: 'lantern', id: 'lentera' }, { s: 30 }],
    ['hornbill', { de: 'der Nashornvogel', en: 'hornbill', id: 'burung rangkong' }, { s: 7 }],
  ];
  // Englischkurs: Rotkehlchen statt Vogel, Schafe statt Reh – typisch englische Landschaft
  const LOCAL_EN = LOCAL.map(r =>
    r[0] === 'bird' ? ['bird', { de: 'das Rotkehlchen', en: 'robin', id: 'burung robin' }, r[2]] :
    r[0] === 'deer' ? ['sheep', { de: 'das Schaf', en: 'sheep', id: 'domba' }, r[2]] : r);
  const SETS = { id: TROPIC, de: LOCAL, en: LOCAL_EN };
  const build = tg => (SETS[tg] || LOCAL).map(([sprite, names, need], slot) => ({ id: sprite, sprite, names, need, slot }));
  const SET = build(TARGET);

  // ---------- Punkte & Fortschritt ----------
  function data() {
    const S = St().S;
    if (!S.garden) S.garden = { got: [], seen: [] };
    return S.garden;
  }
  // 1 🌱 pro Übung (jede Antwort in Lektion, Vokabeltrainer, Gespräch) + 5 🌱 pro gelesener Grammatik
  function points() {
    const S = St().S;
    let p = 0;
    for (const k in S.days) p += S.days[k].x || 0;
    p += 5 * (Object.keys(S.lessons || {}).length + Object.keys(S.lessonsRead || {}).length);
    return p;
  }
  function bestStreak() {
    const S = St().S;
    const days = Object.keys(S.days).map(Number).filter(k => S.days[k].x > 0).sort((a, b) => a - b);
    let best = 0, run = 0, prev = null;
    days.forEach(k => { run = prev != null && k === prev + 1 ? run + 1 : 1; best = Math.max(best, run); prev = k; });
    return Math.max(best, St().streak());
  }
  // Freigeschaltet bleibt freigeschaltet (wird gemerkt)
  function unlocked() {
    const g = data();
    const p = points(), s = bestStreak();
    let changed = false;
    SET.forEach(r => {
      if (g.got.includes(r.id)) return;
      if ((r.need.p != null && p >= r.need.p) || (r.need.s != null && s >= r.need.s)) { g.got.push(r.id); changed = true; }
    });
    if (changed) St().save();
    return SET.filter(r => g.got.includes(r.id));
  }
  function nextByPoints() {
    const g = data(), p = points();
    return SET.filter(r => r.need.p != null && !g.got.includes(r.id)).sort((a, b) => a.need.p - b.need.p)[0] || null;
  }

  // ---------- Darstellung ----------
  const tgtName = r => r.names[TARGET];
  const uiName = r => r.names[LANG] && r.names[LANG] !== r.names[TARGET] ? r.names[LANG] : '';
  function place(r, phase) {
    const [x, y, sc] = SLOTS[r.slot];
    const awake = phase !== 'night' || NIGHT_AWAKE[r.sprite];
    const cls = `g-sprite s-${r.sprite}${ANIMAL[r.sprite] ? ' animal' : ''}${awake ? '' : ' asleep'}`;
    const zz = !awake && ANIMAL[r.sprite] ? `<text class="zz" x="${x + 8 * sc}" y="${y - 26 * sc}">z<tspan dx="1" dy="-4" font-size="6">z</tspan></text>` : '';
    return `<g class="${cls}" transform="translate(${x} ${y}) scale(${sc})">${BASE[r.sprite] || ''}<g class="bob">${SPRITES[r.sprite]}</g></g>${zz}`;
  }
  // Ebene für die Startseiten-Landschaft
  function layer(phase, list) {
    return (list || unlocked()).slice().sort((a, b) => a.slot - b.slot).map(r => place(r, phase)).join('');
  }

  // ---------- Landschaft je Kurs (viewBox 400 × 150) ----------
  // Indonesisch: Vulkan, Reisterrassen, Palmen, Haus mit geschwungenem Dach
  // Deutsch: Alpen mit Schnee, Tannen, Chalet, Kirchlein mit Zwiebelturm
  // Englisch: sanfte Hügel, Felder mit Hecken, runde Eichen, Steinhäuschen mit Kamin
  const SKY = { morning: ['#F9DCC8', '#FBEEDC'], day: ['#F3E3B8', '#F8EFD6'], evening: ['#E9A47F', '#F6D3A6'], night: ['#26344A', '#46566B'] };
  const ORB = {
    morning: '<circle cx="104" cy="50" r="17" fill="#F2A97F"/><circle cx="104" cy="50" r="27" fill="#F2A97F" opacity=".18"/>',
    day: '<circle cx="318" cy="34" r="19" fill="#DDAE4F"/><circle cx="318" cy="34" r="30" fill="#DDAE4F" opacity=".16"/>',
    evening: '<circle cx="300" cy="66" r="24" fill="#E07A55"/><circle cx="300" cy="66" r="36" fill="#E07A55" opacity=".18"/>',
    night: '<path d="M326 22 a17 17 0 1 0 14 27 a14 14 0 1 1 -14 -27z" fill="#F4EBD3"/>' +
      [[40, 20], [96, 34], [150, 16], [210, 30], [262, 14], [372, 30], [120, 52], [236, 50]].map(([x, y], i) =>
        `<circle cx="${x}" cy="${y}" r="${i % 3 ? 1.3 : 1.9}" fill="#F4EBD3" opacity="${i % 2 ? .6 : .9}"/>`).join(''),
  };
  const fir = (x, y, h) => `<path d="M${x} ${y} l${h * .38} ${-h} l${h * .38} ${h}z"/>`;
  const palmT = (x, y, h) => `<path d="M${x} ${y} q-1 ${-h * .6} ${h * .15} ${-h}" stroke-width="1.6" fill="none" class="h-trunk"/>` +
    `<path d="M${x + h * .15} ${y - h} c-5 -2 -9 0 -11 4 c4 -3 7 -3 11 -3z M${x + h * .15} ${y - h} c5 -3 9 -1 11 3 c-4 -3 -7 -2 -11 -2z M${x + h * .15} ${y - h} c-2 -5 0 -8 3 -9 c-2 3 -2 6 -2 9z"/>`;
  const oak = (x, y, r) => `<rect class="h-trunk-f" x="${x - 1.2}" y="${y - r}" width="2.4" height="${r}"/><circle cx="${x}" cy="${y - r * 1.5}" r="${r}"/><circle cx="${x - r * .7}" cy="${y - r * 1.1}" r="${r * .7}"/><circle cx="${x + r * .7}" cy="${y - r * 1.15}" r="${r * .72}"/>`;
  function sceneParts(tg, lit) {
    const win = c => `<rect x="${c[0]}" y="${c[1]}" width="${c[2] || 5}" height="${c[3] || 5}" rx="1" fill="${lit ? '#F6D27A' : '#B9694A'}"/>`;
    if (tg === 'id') return `
      <path class="h-far" d="M0 72 C40 60 80 62 120 68 L400 66 V150 H0Z"/>
      <path class="h-volc" d="M120 72 L196 26 Q204 21 212 26 L300 72Z"/>
      <path class="h-volc-top" d="M190 30 Q204 19 218 30 L210 34 L204 30 L198 35Z"/>
      <g class="h-smoke"><circle cx="206" cy="14" r="5"/><circle cx="214" cy="8" r="4"/><circle cx="221" cy="4" r="3"/></g>
      <path class="h-far" d="M280 70 C320 56 360 58 400 62 V150 H280Z"/>
      <path class="h-mid" d="M0 84 C50 66 100 70 150 80 S250 64 300 76 S370 82 400 74 V150 H0Z"/>
      <g class="h-terr"><path d="M0 90 C50 74 100 78 150 87 S250 72 300 84 S370 90 400 82"/><path d="M0 96 C50 82 100 85 150 93 S250 80 300 91 S370 96 400 89"/><path d="M220 77 C250 71 275 72 300 79"/></g>
      <g class="h-tree">${palmT(66, 86, 20)}${palmT(84, 87, 15)}${palmT(244, 78, 17)}</g>
      <g class="h-house"><rect class="h-wall" x="167" y="65" width="24" height="10"/><path class="h-stilt" d="M169 75 v4 M189 75 v4 M179 75 v4" stroke-width="1.4"/>
      <path class="h-terra" d="M158 57 Q166 64 172 61 L179 49 L186 61 Q192 64 200 57 L194 66 L164 66Z"/></g>${win([176, 67, 6, 6])}`;
    if (tg === 'de') return `
      <path class="h-mtn" d="M0 74 L30 46 L48 58 L84 18 L112 48 L132 36 L170 70 L210 50 L236 62 L276 28 L310 58 L336 40 L370 66 L400 52 V150 H0Z"/>
      <g class="h-snow"><path d="M84 18 L74 30 L80 28 L85 33 L90 27 L96 30Z"/><path d="M276 28 L267 39 L273 37 L278 41 L283 36 L288 39Z"/><path d="M132 36 L126 43 L132 42 L137 45Z"/><path d="M336 40 L330 47 L336 46 L341 49Z"/></g>
      <path class="h-mid" d="M0 84 C50 66 100 70 150 80 S250 64 300 76 S370 82 400 74 V150 H0Z"/>
      <g class="h-tree">${fir(58, 84, 22)}${fir(72, 86, 16)}${fir(84, 85, 19)}${fir(236, 76, 20)}${fir(250, 77, 14)}${fir(328, 79, 15)}</g>
      <g class="h-house"><rect class="h-wall" x="168" y="64" width="24" height="12"/><rect class="h-wood" x="168" y="64" width="24" height="4"/><path class="h-roof" d="M163 65 L180 55 L197 65Z"/>
      <path class="h-wood" d="M170 70 h20" stroke-width="1"/></g>${win([172, 69, 4, 4])}${win([184, 69, 4, 4])}
      <g class="h-house"><rect class="h-wall" x="290" y="64" width="12" height="10"/><rect class="h-wall" x="300" y="56" width="6" height="18"/><path class="h-roof" d="M288 65 L296 59 L302 65Z"/><path class="h-dome" d="M299 56 Q303 46 307 56Z M303 47 v-4"/></g>`;
    // Englisch
    return `
      <path class="h-far" d="M0 70 C60 50 110 54 160 62 S260 46 320 56 S380 58 400 54 V150 H0Z"/>
      <path class="h-mid" d="M0 84 C50 66 100 70 150 80 S250 64 300 76 S370 82 400 74 V150 H0Z"/>
      <g class="h-fields"><path class="h-field1" d="M96 72 C116 70 136 74 152 80 L148 93 L94 92Z"/><path class="h-field2" d="M152 80 C170 78 186 74 202 72 L204 90 L148 93Z"/>
      <path class="h-field2" d="M8 82 C30 74 52 70 72 70 L74 90 L4 94Z"/><path class="h-field1" d="M204 72 C224 68 242 66 258 68 L262 86 L204 90Z"/>
      <path class="h-field2" d="M258 68 C276 70 290 73 302 77 L306 90 L262 86Z"/><path class="h-field1" d="M302 77 C322 80 338 80 356 78 L360 92 L306 90Z"/></g>
      <g class="h-tree">${oak(64, 84, 6)}${oak(82, 86, 4.5)}${oak(238, 76, 5.5)}${oak(342, 80, 4.5)}</g>
      <g class="h-house"><rect class="h-stone" x="168" y="64" width="24" height="12"/><path class="h-slate" d="M164 65 L171 56 L189 56 L196 65Z"/><rect class="h-slate" x="185" y="51" width="4" height="7"/>
      <g class="h-smoke"><circle cx="188" cy="46" r="2.4"/><circle cx="192" cy="41" r="2"/></g><rect class="h-door" x="178" y="69" width="4" height="7"/></g>${win([171, 67, 4, 4])}${win([185, 67, 4, 4])}`;
  }
  // Ganze Landschaft (Himmel, Kurs-Landschaft, Bewohner)
  function scene(tg, phase, list) {
    const lit = phase === 'night' || phase === 'evening';
    const sky = SKY[phase];
    return `<svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMax slice" role="img" aria-label="${t('Dein Tal')}">
      <defs><linearGradient id="hsky-${phase}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="1" stop-color="${sky[1]}"/></linearGradient></defs>
      <rect width="400" height="150" fill="url(#hsky-${phase})"/>${ORB[phase]}
      ${sceneParts(tg, lit)}
      <path class="h-near" d="M0 96 C70 84 130 88 200 94 S330 86 400 92 V150 H0Z"/>
      <path class="h-front" d="M0 122 C90 114 200 118 290 122 S370 116 400 119 V150 H0Z"/>
      ${layer(phase, list)}
    </svg>`;
  }
  // Für die Vorschau: alle Bewohner eines Kurses
  const all = tg => build(tg);
  function bigSprite(r, locked) {
    const vb = AIR[r.sprite] ? '-26 -26 52 52' : r.sprite === 'pond' ? '-27 -30 54 34' : '-27 -54 54 58';
    return `<svg class="g-big${locked ? ' locked' : ''}" viewBox="${vb}" aria-hidden="true">${BASE[r.sprite] || ''}${SPRITES[r.sprite]}</svg>`;
  }
  // Fortschritt bis zur nächsten Überraschung (nur Balken – was kommt, bleibt geheim)
  function progress() {
    const p = points();
    const ths = SET.filter(r => r.need.p != null).map(r => r.need.p).sort((x, y) => x - y);
    const next = ths.find(v => v > p);
    if (next == null) return { p, done: true, frac: 1 };
    const prev = ths.filter(v => v <= p).pop() || 0;
    return { p, done: false, frac: (p - prev) / (next - prev) };
  }
  function barHTML() {
    const g = progress();
    return `<span class="g-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(g.frac * 100)}"><i style="width:${Math.max(4, g.frac * 100)}%"></i></span>`;
  }
  // Zeile unter der Landschaft
  function lineHTML() {
    const g = progress();
    return `<button class="garden-line" data-act="garden" aria-label="${t('Dein Tal')}"><span class="g-pts">🌱 <b>${g.p}</b></span>${g.done ? `<span class="grow small">${t('Dein Tal ist voller Leben 🎉')}</span>` : barHTML()}<span class="chev">›</span></button>`;
  }
  function tile(r) {
    const name = tgtName(r);
    return `<button class="g-tile" data-say="${esc(name)}">${bigSprite(r)}<b>${esc(name)} <span class="g-spk">🔊</span></b>${uiName(r) ? `<small>${esc(uiName(r))}</small>` : ''}</button>`;
  }
  function collectionHTML() {
    const got = unlocked();
    const g = progress();
    return `
      <p class="muted">${t('Für jede Übung bekommst du 🌱 – ob Lektion, Vokabeln oder Gespräch. Ist der Balken voll, zieht eine Überraschung in dein Tal ein. Wer viele Tage hintereinander lernt, bekommt zusätzlich besondere Gäste.')}</p>
      <div class="g-sum"><span>🌱 <b>${g.p}</b> ${t('Punkte')}</span>${g.done ? '' : barHTML()}</div>
      ${got.length ? `<p class="small muted">${t('Tippe auf ein Tier, um seinen Namen zu hören.')}</p>
      <div class="g-grid">${got.map(r => tile(r)).join('')}</div>` : `<p class="g-empty">${t('Noch ist dein Tal still … mach deine erste Übung!')}</p>`}`;
  }
  // Neu freigeschaltet und noch nicht gezeigt
  function takeFresh() {
    const g = data();
    const fresh = unlocked().filter(r => !g.seen.includes(r.id));
    if (fresh.length) { fresh.forEach(r => g.seen.push(r.id)); St().save(); }
    return fresh;
  }
  function freshHTML(list, first) {
    return `
      <p>${first ? t('Weil du schon fleißig gelernt hast, sind diese Tiere und Dinge bei dir eingezogen:') : t('Für deine Übungen ist etwas Neues in dein Tal gekommen:')}</p>
      <div class="g-grid g-fresh">${list.map(r => tile(r)).join('')}</div>`;
  }

  // Große Grafiken in den Kacheln auf ihren Inhalt zuschneiden
  function fit(root) {
    (root || document).querySelectorAll('svg.g-big').forEach(svg => {
      try {
        const b = svg.getBBox();
        if (!b.width) return;
        const side = Math.max(b.width, b.height) + 6;
        svg.setAttribute('viewBox', `${b.x + b.width / 2 - side / 2} ${b.y + b.height / 2 - side / 2} ${side} ${side}`);
      } catch (e) { /* ohne Zuschnitt auch gut */ }
    });
  }
  // ---------- Leben im Tal: ab und zu macht EIN Tier etwas Kleines ----------
  // gemütlich: nie mehrere gleichzeitig, 5–9 Sekunden Pause dazwischen
  const BIRDS = { bird: 1, chicken: 1, hornbill: 1, owl: 1 };
  const ACTS = {
    bird: ['hop', 'fly', 'sing', 'sing', 'turn'], hornbill: ['hop', 'fly', 'sing', 'turn'], owl: ['turn', 'sing', 'nod'],
    chicken: ['hop', 'sing', 'turn', 'nod'], duck: ['swim', 'sing', 'nod'], duckw: ['swim', 'sing', 'nod'],
    hedgehog: ['walk', 'turn', 'heart'], turtle: ['walk', 'nod'], gecko: ['walk', 'turn'],
    rabbit: ['hop', 'hop', 'turn', 'heart'], squirrel: ['hop', 'turn', 'heart'], cat: ['turn', 'nod', 'heart', 'heart'],
    fox: ['walk', 'turn', 'heart'], deer: ['nod', 'turn', 'heart'], sheep: ['nod', 'walk', 'heart'],
    monkey: ['hop', 'turn', 'heart'], orangutan: ['nod', 'heart', 'turn'],
  };
  const DUR = { hop: 1300, fly: 4200, turn: 3600, walk: 5200, swim: 5600, nod: 1800, sing: 3000, heart: 3000 };
  let lifeTimer = null, lastEl = null;
  function bubble(g, kind) {
    const inner = g.querySelector('.bob');
    let top = -30, right = 8;
    try { const b = inner.getBBox(); top = b.y; right = b.x + b.width * .75; } catch (e) { /* Standardplatz */ }
    const ns = 'http://www.w3.org/2000/svg';
    const el = document.createElementNS(ns, 'g');
    el.setAttribute('class', 'g-bubble');
    const tr = g.getAttribute('transform');
    const sc = parseFloat((tr.match(/scale\(([\d.]+)/) || [])[1]) || 1;
    const [, gx, gy] = tr.match(/translate\(([\d.]+) ([\d.]+)/) || [0, 0, 0];
    el.setAttribute('transform', `translate(${+gx + right * sc} ${+gy + top * sc - 2}) scale(1.35)`);
    const notes = kind === 'sing';
    el.innerHTML = `<path d="M-1 -14 h18 a4 4 0 0 1 4 4 v6 a4 4 0 0 1 -4 4 h-12 l-5 4 l1 -4 h-2 a4 4 0 0 1 -4 -4 v-6 a4 4 0 0 1 4 -4z" class="b-bg"/>` +
      (notes ? `<text x="1" y="-3.5" class="b-note">♪</text><text x="9" y="-5" class="b-note n2">♫</text>`
             : `<path class="b-heart" d="M8 -3 l-3.6 -3.4 a2.1 2.1 0 0 1 3.6 -2.6 a2.1 2.1 0 0 1 3.6 2.6z"/>`);
    (g.ownerSVGElement || g.parentNode).appendChild(el);
    setTimeout(() => el.remove(), DUR[kind]);
  }
  function lifeTick() {
    lifeTimer = setTimeout(lifeTick, 5000 + Math.random() * 4000);
    if (document.hidden || document.body.classList.contains('in-session')) return;
    const all = [...document.querySelectorAll('.hero-art .g-sprite.animal:not(.asleep)')].filter(g => !g.closest('#pv'));
    if (!all.length) return;
    const pool = all.length > 1 ? all.filter(g => g !== lastEl) : all;
    const g = pool[Math.floor(Math.random() * pool.length)];
    lastEl = g;
    const sp = (g.getAttribute('class').match(/s-(\w+)/) || [])[1];
    const acts = ACTS[sp] || ['nod'];
    doAct(g, acts[Math.floor(Math.random() * acts.length)], sp);
  }
  function doAct(g, act, sp) {
    if (act === 'sing' || act === 'heart') { bubble(g, act); if (act === 'sing' && BIRDS[sp]) g.classList.add('act-nod'); setTimeout(() => g.classList.remove('act-nod'), DUR.nod); return; }
    // zur Mitte hin fliegen/laufen, damit niemand aus dem Bild verschwindet
    const x = parseFloat((g.getAttribute('transform').match(/translate\(([\d.]+)/) || [])[1]) || 0;
    const cls = 'act-' + act + ((act === 'fly' || act === 'walk') && x > 200 ? 'l' : (act === 'swim' && x < 100 ? 'r' : ''));
    g.classList.add(cls);
    setTimeout(() => g.classList.remove(cls), DUR[act]);
  }
  function startLife() {
    if (lifeTimer || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches)) return;
    lifeTimer = setTimeout(lifeTick, 3000);
  }
  window.Garden = { startLife, doAct, SPRITES, scene, all, fit, points, bestStreak, unlocked, layer, lineHTML, collectionHTML, takeFresh, freshHTML, SET };
})();

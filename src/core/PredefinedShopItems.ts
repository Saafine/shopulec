import { ShopItem } from '../components/ShopItems'

const values = [
  'Chleb / Bułki',
  'Jogurty Skyrr',
  'Śmietana',
  'Płatki orkiszowe',
  'Indyk / Mielone',
  'Jajka',
  'Ser',
  'Dżem',
  'Szynka',
  'Kiełbasa',
  'Masło',
  'Twaróg',
  'Bułka tarta',

  // Owoce i warzywa
  'Banany',
  'Marchewki',
  'Cebula',
  'Papryka',
  'Rzodkiewka',
  'Ziemniaki',
  'Pomidory',
  'Pomidory w puszce',
  'Suszone pomidory',
  'Keczup',
  'Ogórek',
  'Miks sałat',
  'Mrożone owoce',
  'Szpinak',
  'Imbir',
  'Buraczki',
  'Sałata',

  'Orzechy',

  // Napoje
  'Mleko migdałowe',
  'Mleko czekoladowe',
  'Woda',
  'Mleko',
  'Coca Cola',
  'Herbata',

  // Chemia i czystość
  'Ręczniki papierowe',
  'Mokre ściereczki',
  'Płyn do naczyń',
  'Płyn do prania',
  'Worki na śmieci',
  'Papier do wypieków',
  'Żel do mycia włosów',
  'Mydło',

  // Przyprawy
  'Sól',
  'Pieprz',
  'Przyprawa do kurczaka',
  'Przyprawa do ziemniaków',
]

export const PREDEFINED_SHOP_ITEMS: ShopItem[] = values.map((label) => ({
  label,
  value: false,
}))

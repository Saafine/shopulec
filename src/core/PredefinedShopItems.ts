import { ShopItem } from '../components/ShopItems'

const values = [
  'Chleb / Bułki',
  'Jogurty Skyrr',
  'Śmietana',
  'Płatki orkiszowe',
  'Indyk',
  'Jajka',
  'Ser',
  'Dżem',
  'Szynka',
  'Kiełbasa',
  'Orzechy',
  'Twaróg',
  'Suszone pomidory',

  // Owoce i warzywa
  'Banany',
  'Marchewki',
  'Cebula',
  'Papryka',
  'Rzodkiewka',
  'Ziemniaki',
  'Pomidory',
  'Pomidory w puszce',
  'Ogórek',
  'Miks sałat',
  'Mrożone owoce',
  'Szpinak',
  'Imbir',
  'Buraczki',
  'Sałata',

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

  // Przyprawy
  'Sól',
  'Pieprz',
]

export const PREDEFINED_SHOP_ITEMS: ShopItem[] = values.map((label) => ({
  label,
  value: false,
}))

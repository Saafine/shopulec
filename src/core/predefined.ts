import { SHOP_ITEM_GROUP, ShopItem } from './models'

const tagGroup = (
  itemGroup: SHOP_ITEM_GROUP,
  userDefinedItemLabel: string
): ShopItem => ({
  tag: itemGroup,
  label: userDefinedItemLabel,
  checked: false,
  isPredefined: true,
})

export const VERSION = 3

const BAKERY = ['Chleb / Bułki']

const DAIRY = [
  'Jogurty Skyrr',
  'Śmietana',
  'Ser',
  'Jajka',
  'Masło',
  'Twaróg',
  'Mozarella',
]

const MEAT = ['Indyk / Mielone', 'Szynka', 'Kiełbasa']

const FRUITS_AND_VEGGIES = [
  'Banany',
  'Marchewki',
  'Guacamole',
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
]

const DRINKS = [
  'Mleko migdałowe',
  'Mleko czekoladowe',
  'Woda',
  'Mleko',
  'Coca Cola',
  'Herbata',
]

const CLEANING = [
  'Ręczniki papierowe',
  'Mokre ściereczki',
  'Płyn do naczyń',
  'Płyn do prania',
  'Worki na śmieci',
  'Papier do wypieków',
  'Żel do mycia włosów',
  'Mydło',
  'Nici dentystyczne',
  'Pasta do zebów',
]

const SPICES = [
  'Sól',
  'Pieprz',
  'Przyprawa do kurczaka',
  'Przyprawa do ziemniaków',
]

const OTHER = ['Płatki orkiszowe', 'Dżem', 'Bułka tarta']

export const PREDEFINED_SHOP_ITEMS = [
  ...BAKERY.map((label) => tagGroup(SHOP_ITEM_GROUP.BAKERY, label)),
  ...DAIRY.map((label) => tagGroup(SHOP_ITEM_GROUP.DAIRY, label)),
  ...MEAT.map((label) => tagGroup(SHOP_ITEM_GROUP.MEAT, label)),
  ...OTHER.map((label) => tagGroup(SHOP_ITEM_GROUP.OTHER, label)),
  ...FRUITS_AND_VEGGIES.map((label) =>
    tagGroup(SHOP_ITEM_GROUP.FRUITS_AND_VEGGIES, label)
  ),
  ...DRINKS.map((label) => tagGroup(SHOP_ITEM_GROUP.DRINKS, label)),
  ...CLEANING.map((label) => tagGroup(SHOP_ITEM_GROUP.CLEANING, label)),
  ...SPICES.map((label) => tagGroup(SHOP_ITEM_GROUP.SPICES, label)),
]

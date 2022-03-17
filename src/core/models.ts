export enum SHOP_ITEM_GROUP {
  BAKERY = 'Piekarnia',
  DAIRY = 'Nabiał',
  MEAT = 'Mięso',
  FRUITS_AND_VEGGIES = 'Owoce i warzywa',
  DRINKS = 'Napoje',
  CLEANING = 'Chemia i sprzątanie',
  SPICES = 'Przyprawy',
  USER_DEFINED = 'Użytkownika',
  OTHER = 'Inne',
}

export interface ShopItem {
  tag: SHOP_ITEM_GROUP
  isPredefined: boolean
  checked: boolean
  label: string
}

export const getUserDefinedItemDefaults: (
  userDefinedItemLabel: string
) => ShopItem = (label: string) => ({
  tag: SHOP_ITEM_GROUP.USER_DEFINED,
  isPredefined: false,
  checked: true,
  label,
})

export type AddUserDefinedItem = (itemLabel: string) => void
export type RemoveUserDefinedItem = (userDefinedItem: ShopItem) => void
export type TogglePredefinedItem = (shopItem: ShopItem) => void
export type UndoItemRemoval = () => void

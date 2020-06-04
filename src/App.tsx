import React, { useEffect, useState } from 'react'
import './App.scss'
import { ThemeProvider } from '@material-ui/core'
import Tabs from './Layout/Tabs'
import AddProduct from './AddingProduct/AddProduct'
import {
  getProductsFromPersistentStorage,
  updatePersistentStorage,
} from './core/database'
import { theme } from './core/styles/theme'
import {
  AddUserDefinedItem,
  getUserDefinedItemDefaults,
  RemoveUserDefinedItem,
  ShopItem,
  TogglePredefinedItem,
} from './core/models'
import { PREDEFINED_SHOP_ITEMS } from './core/predefined'

function App() {
  const [shopItems, setShopItems] = useState<ShopItem[]>([])

  useEffect(() => {
    getProductsFromPersistentStorage().then((products) => {
      setShopItems(products.length ? products : PREDEFINED_SHOP_ITEMS)
    })
  }, [])

  const addUserDefinedItem: AddUserDefinedItem = (userDefinedItemLabel) => {
    const newShopItem: ShopItem = getUserDefinedItemDefaults(
      userDefinedItemLabel
    )
    const newValue: ShopItem[] = [...shopItems, newShopItem]
    setShopItems(newValue)
    updatePersistentStorage(newValue)
  }

  const removeUserDefinedItem: RemoveUserDefinedItem = (userDefinedItem) => {
    if (userDefinedItem.isPredefined) {
      togglePredefinedItem(userDefinedItem)
    } else {
      const newValue: ShopItem[] = shopItems.filter(
        (item) => item.label !== userDefinedItem.label
      )
      setShopItems(newValue)
      updatePersistentStorage(newValue)
    }
  }

  const togglePredefinedItem: TogglePredefinedItem = (userDefinedItem) => {
    const newValue: ShopItem[] = shopItems.map((shopItem) =>
      shopItem.label !== userDefinedItem.label
        ? shopItem
        : {
            ...shopItem,
            checked: !shopItem.checked,
          }
    )

    setShopItems(newValue)
    updatePersistentStorage(newValue)
  }

  return (
    <ThemeProvider theme={theme}>
      <Tabs
        shopItems={shopItems
          .filter((shopItem) => shopItem.checked)
          .map((shopItem) => ({ ...shopItem, checked: false }))}
        predefinedShopItems={shopItems.filter(
          (shopItem) => shopItem.isPredefined
        )}
        onPredefinedShopItemClick={togglePredefinedItem}
        onShopItemClick={removeUserDefinedItem}
      ></Tabs>
      <AddProduct onSubmit={addUserDefinedItem} />
    </ThemeProvider>
  )
}

export default App

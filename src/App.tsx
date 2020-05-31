import React, { useState } from 'react'
import './App.scss'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Tabs from './components/Tabs'
import { ShopItem } from './components/ShopItems'
import { PREDEFINED_SHOP_ITEMS } from './core/PredefinedShopItems'
import AddProduct from './components/AddProduct'

export const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#c62828',
    },
    secondary: {
      main: '#ff5252',
    },
  },
  overrides: {
    MuiFormControlLabel: {
      label: {
        fontSize: '1.5rem',
      },
    },
  },
})

function getShopItemsWithToggledIndex(
  shopItems: readonly ShopItem[],
  index: number
) {
  return shopItems.map((control, idx) =>
    index !== idx
      ? { ...control }
      : { label: control.label, value: !control.value }
  )
}

function App() {
  const [shopItems, setShopItems] = useState<ShopItem[]>([])
  const [predefinedShopItems, setPredefinedShopItems] = useState<ShopItem[]>(
    PREDEFINED_SHOP_ITEMS
  )

  const addShopItem = (newShopItem: string) => {
    setShopItems([
      ...shopItems,
      {
        value: false,
        label: newShopItem,
      },
    ])
  }

  const updateShopItemState = (index: number) => {
    setShopItems(getShopItemsWithToggledIndex(shopItems, index))
    setTimeout(() => removeShopItem(index), 100)
  }

  const removeShopItem = (index: number) => {
    setShopItems(shopItems.filter((_, idx) => index !== idx))
  }

  const onPredefinedShopItemAdded = (index: number) => {
    const { value, label } = predefinedShopItems[index]
    value
      ? onPredefinedItemAlreadySelected(label)
      : addShopItem(predefinedShopItems[index].label)
    setPredefinedShopItems(
      getShopItemsWithToggledIndex(predefinedShopItems, index)
    )
  }

  const onPredefinedItemAlreadySelected = (label: string) => {
    const indexOfShopItems = shopItems.findIndex(
      (shopItem) => shopItem.label === label
    )
    removeShopItem(indexOfShopItems)
  }

  return (
    <ThemeProvider theme={theme}>
      <Tabs
        shopItems={shopItems}
        predefinedShopItems={predefinedShopItems}
        onPredefinedShopItemClick={onPredefinedShopItemAdded}
        onShopItemClick={updateShopItemState}
      ></Tabs>
      <AddProduct onSubmit={addShopItem} />
    </ThemeProvider>
  )
}

export default App

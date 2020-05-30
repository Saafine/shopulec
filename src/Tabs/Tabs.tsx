import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ShopItems, { ShopItem } from './ShopItems'
import { Paper, Tab, Tabs } from '@material-ui/core'
import AddProduct from './AddProduct'

// TODO [P. Labus] rename to main
function AppTabs(props: RouteComponentProps) {
  const [tabIndex, setTabIndex] = useState(0)
  const [shopItems, setShopItems] = useState<ShopItem[]>([
    {
      label: 'test',
      value: false,
    },
    {
      label: 'ABC',
      value: false,
    },
  ])

  const predefinedShopItems: ShopItem[] = [
    {
      label: 'Mrożone owoce',
      value: false,
    },
  ]

  const handleTabChange = (_: React.ChangeEvent<{}>, value: number) => {
    setTabIndex(value)
  }

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
    setShopItems(
      shopItems.map((control, idx) =>
        index !== idx
          ? { ...control }
          : { label: control.label, value: !control.value }
      )
    )

    setTimeout(() => {
      removeShopItem(index)
    }, 100)
  }

  const removeShopItem = (index: number) => {
    setShopItems(shopItems.filter((_, idx) => index !== idx))
  }

  const onPredefinedShopItemAdded = (index: number) => {
    addShopItem(predefinedShopItems[index].label)
  }

  return (
    <React.Fragment>
      <Paper square>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs"
        >
          <Tab icon={<ShoppingCartIcon />} label="Zakupy" />
          <Tab icon={<FastfoodIcon />} label="Produkty" />
          <Tab icon={<BusinessCenterIcon />} label="Przepisy" />
        </Tabs>
      </Paper>

      <div hidden={tabIndex !== 0}>
        <ShopItems
          shopItems={shopItems}
          onShopItemClick={updateShopItemState}
        ></ShopItems>
      </div>

      <div hidden={tabIndex !== 1}>
        <ShopItems
          shopItems={predefinedShopItems}
          onShopItemClick={onPredefinedShopItemAdded}
        ></ShopItems>
      </div>

      <AddProduct updateProducts={addShopItem} />
    </React.Fragment>
  )
}

export default AppTabs

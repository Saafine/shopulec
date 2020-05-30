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
      label: 'Mrożone owoce',
      value: false,
    },
    {
      label: 'test',
      value: false,
    },
    {
      label: 'ABC',
      value: false,
    },
  ])

  const handleChange = (_: React.ChangeEvent<{}>, value: number) => {
    setTabIndex(value)
  }

  const updateProducts = (newShopItem: string) => {
    console.log(newShopItem)
    setShopItems([
      ...shopItems,
      {
        value: false,
        label: newShopItem,
      },
    ])
  }

  const updateProductState = (index: number) => {
    setShopItems(
      shopItems.map((control, idx) =>
        index !== idx
          ? { ...control }
          : { label: control.label, value: !control.value }
      )
    )

    setTimeout(() => {
      removeItem(index)
    }, 100)
  }

  const removeItem = (index: number) => {
    setShopItems(shopItems.filter((_, idx) => index !== idx))
  }

  return (
    <React.Fragment>
      <Paper square>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
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
          updateItemValue={updateProductState}
          removeItem={removeItem}
        ></ShopItems>
      </div>

      <AddProduct updateProducts={updateProducts} />
    </React.Fragment>
  )
}

export default AppTabs

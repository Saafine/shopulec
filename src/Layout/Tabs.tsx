import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import ShopItems from '../ShopItems/ShopItems'
import { Paper, Tab, Tabs } from '@material-ui/core'
import { ShopItem } from '../core/models'

interface AppTabsProps {
  shopItems: ShopItem[]
  predefinedShopItems: ShopItem[]

  onShopItemClick: (shopItem: ShopItem) => void
  onPredefinedShopItemClick: (shopItem: ShopItem) => void
}

function AppTabs(props: RouteComponentProps & AppTabsProps) {
  const [tabIndex, setTabIndex] = useState(0)

  const handleTabChange = (_: React.ChangeEvent<{}>, value: number) => {
    setTabIndex(value)
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
          <Tab icon={<ShoppingCartIcon />} label="Zakupy v2" />
          <Tab icon={<FastfoodIcon />} label="Produkty" />
        </Tabs>
      </Paper>

      <div hidden={tabIndex !== 0}>
        <ShopItems
          shopItems={props.shopItems}
          onShopItemClick={props.onShopItemClick}
        ></ShopItems>
      </div>

      <div hidden={tabIndex !== 1}>
        <ShopItems
          shopItems={props.predefinedShopItems}
          onShopItemClick={props.onPredefinedShopItemClick}
        ></ShopItems>
      </div>
    </React.Fragment>
  )
}

export default AppTabs

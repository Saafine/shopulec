import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ShopItems, { ShopItem } from './ShopItems'
import { Paper, Tab, Tabs } from '@material-ui/core'

interface AppTabsProps {
  shopItems: ShopItem[]
  onShopItemClick: (index: number) => void
  predefinedShopItems: ShopItem[]
  onPredefinedShopItemClick: (index: number) => void
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
          <Tab icon={<ShoppingCartIcon />} label="Zakupy" />
          <Tab icon={<FastfoodIcon />} label="Produkty" />
          <Tab icon={<BusinessCenterIcon />} label="Przepisy" />
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

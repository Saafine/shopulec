import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ShopItems from './ShopItems'
import { Paper, Tab, Tabs, useTheme } from '@material-ui/core'
import AddProduct from './AddProduct'

function AppTabs(props: RouteComponentProps) {
  const [tabIndex, setTabIndex] = useState(0)

  const handleChange = (_: React.ChangeEvent<{}>, value: number) =>
    setTabIndex(value)

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
        <ShopItems></ShopItems>
      </div>

      <AddProduct />
    </React.Fragment>
  )
}

export default AppTabs

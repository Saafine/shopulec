import React, { CSSProperties } from 'react'
import { RouteComponentProps } from '@reach/router'
import { grey } from '@material-ui/core/colors'
import { FormControlLabel } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import { CheckCircleOutline, RadioButtonUnchecked } from '@material-ui/icons'

export interface ShopItem {
  value: boolean
  label: string
}

export interface ShopItemsProps {
  shopItems: ShopItem[]
  onShopItemClick: (index: number) => void
}

const circleSize: CSSProperties = { fontSize: '1.3rem' }
const circleStyle: CSSProperties = { color: grey[500], ...circleSize }

function ShopItems(props: RouteComponentProps & ShopItemsProps) {
  return (
    <>
      {props.shopItems.map((shopItem: ShopItem, index) => {
        return (
          <div key={index} className={'border-solid border-gray-300 border-b'}>
            <FormControlLabel
              className="p-6"
              control={
                <Checkbox
                  icon={<RadioButtonUnchecked style={circleStyle} />}
                  checkedIcon={<CheckCircleOutline style={circleSize} />}
                  checked={shopItem.value}
                  onChange={() => props.onShopItemClick(index)}
                />
              }
              label={shopItem.label}
            />
          </div>
        )
      })}
    </>
  )
}

export default ShopItems

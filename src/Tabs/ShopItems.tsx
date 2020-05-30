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
  updateItemValue: (index: number) => void
  removeItem: (index: number) => void
}

const circleStyle: CSSProperties = { color: grey[500] }

function ShopItems(props: RouteComponentProps & ShopItemsProps) {
  return (
    <>
      {props.shopItems.map((shopItem: ShopItem, index) => {
        return (
          <div key={index} className={'border-solid border-gray-300 border-b'}>
            <FormControlLabel
              className="px-6"
              control={
                <Checkbox
                  icon={<RadioButtonUnchecked style={circleStyle} />}
                  checkedIcon={<CheckCircleOutline />}
                  checked={shopItem.value}
                  onChange={() => props.updateItemValue(index)}
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

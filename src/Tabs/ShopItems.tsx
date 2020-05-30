import React, { CSSProperties, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { grey } from '@material-ui/core/colors'
import { FormControlLabel } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import { CheckCircleOutline, RadioButtonUnchecked } from '@material-ui/icons'

interface Control {
  value: boolean
  label: string
}

const circleStyle: CSSProperties = { color: grey[500] }

function ShopItems(props: RouteComponentProps) {
  const [controls, setControls] = useState<Control[]>([
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

  const handleChange = (index: number) => {
    setControls(
      controls.map((control, idx) =>
        index !== idx
          ? { ...control }
          : { label: control.label, value: !control.value }
      )
    )
  }

  return (
    <>
      {controls.map((control: Control, index) => {
        return (
          <div key={index} className={'border-solid border-gray-300 border-b'}>
            <FormControlLabel
              className="px-6"
              control={
                <Checkbox
                  icon={<RadioButtonUnchecked style={circleStyle} />}
                  checkedIcon={<CheckCircleOutline />}
                  checked={control.value}
                  onChange={() => handleChange(index)}
                />
              }
              label={control.label}
            />
          </div>
        )
      })}
    </>
  )
}

export default ShopItems

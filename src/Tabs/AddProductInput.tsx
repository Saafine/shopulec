import { RouteComponentProps } from '@reach/router'
import React, { useState } from 'react'
import { TextField, useTheme } from '@material-ui/core'
import NavigationIcon from '@material-ui/icons/Navigation'

export interface AddProductInputProps {
  updateProducts: (newItemLabel: string) => void
}

function AddProductInput(props: RouteComponentProps & AddProductInputProps) {
  const theme = useTheme()

  const [product, updateProduct] = useState('')
  const onAddProduct = (event: React.ChangeEvent<{}>) => {
    event.preventDefault()
    props.updateProducts(product)
    updateProduct('')
  }

  return (
    <div
      style={{
        position: 'absolute',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        bottom: '0',
        background: 'white',
        width: '100%',
      }}
    >
      <div className="p-8 flex justify-center items-center">
        <form onSubmit={onAddProduct}>
          <TextField
            label="Add product"
            value={product}
            onChange={(value) => updateProduct(value.target.value)}
          />
          <button type="submit">
            <NavigationIcon
              className="ml-5"
              style={{
                transform: 'rotate(90deg)',
                color: theme.palette.primary.main,
              }}
            />
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddProductInput

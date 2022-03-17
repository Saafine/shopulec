import { RouteComponentProps } from '@reach/router'
import React, { useRef, useState } from 'react'
import { TextField, useTheme } from '@material-ui/core'
import NavigationIcon from '@material-ui/icons/Navigation'

export interface AddProductInputProps {
  onSubmit: (newItemLabel: string) => void
}

function AddProductInput(props: RouteComponentProps & AddProductInputProps) {
  const theme = useTheme()
  const textInput = useRef(null)

  const [product, updateProduct] = useState('')
  const onSubmit = (event: React.ChangeEvent<{}>) => {
    event.preventDefault()
    props.onSubmit(product)
    updateProduct('')

    // @ts-ignore
    textInput.current.focus()
  }

  return (
    <div
      style={{
        zIndex: 101,
        position: 'absolute',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        bottom: '0',
        background: 'white',
        width: '100%',
      }}
    >
      <div className="p-8">
        <form onSubmit={onSubmit} className="flex justify-center items-center">
          <TextField
            inputRef={textInput}
            autoFocus
            label="Dodaj produkt"
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

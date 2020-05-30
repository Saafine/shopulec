import { RouteComponentProps } from '@reach/router'
import React, { useRef, useState } from 'react'
import { TextField, useTheme } from '@material-ui/core'
import NavigationIcon from '@material-ui/icons/Navigation'

export interface AddProductInputProps {
  onSubmit: (newItemLabel: string) => void
  onBlur?: () => void
}

// TODO [P. Labus] after enter, focus again on input
// switching tabs by swiping left and right
// drag and drop
// localstorage
// exit when keyboard closes on input
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
        <form onSubmit={onSubmit}>
          <TextField
            inputRef={textInput}
            autoFocus
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

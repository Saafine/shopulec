import { RouteComponentProps } from '@reach/router'
import React, { useState } from 'react'
import { useTheme } from '@material-ui/core'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined'
import Overlay from './Overlay'
import AddProductInput, { AddProductInputProps } from './AddProductInput'

function AddProduct(props: RouteComponentProps & AddProductInputProps) {
  const [showAddProduct, setShowAddProduct] = useState(false)

  const theme = useTheme()

  const handleClose = () => {
    setShowAddProduct(false)
  }

  return (
    <>
      {showAddProduct && <Overlay onOverlayClick={handleClose} />}

      {showAddProduct && (
        <AddProductInput updateProducts={props.updateProducts} />
      )}

      {!showAddProduct && (
        <button onClick={() => setShowAddProduct(true)}>
          <AddCircleOutlinedIcon
            style={{
              fontSize: '60px',
              color: theme.palette.primary.main,
              position: 'fixed',
              right: '5%',
              bottom: '5%',
            }}
          />
        </button>
      )}
    </>
  )
}

export default AddProduct

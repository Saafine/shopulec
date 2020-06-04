import { Link, RouteComponentProps } from '@reach/router'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined'
import React from 'react'
import { useTheme } from '@material-ui/core'
import { urls } from '../core/urls'

function AddProductButton(props: RouteComponentProps) {
  const theme = useTheme()

  return (
    <Link to={urls.newProduct()}>
      <button>
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
    </Link>
  )
}

export default AddProductButton

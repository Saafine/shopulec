import { RouteComponentProps, Router } from '@reach/router'
import React from 'react'
import { AddProductInputProps } from './AddProductInput'
import { urls } from '../core/urls'
import AddProductButton from './AddProductButton'
import AddProductContainer from './AddProductContainer'

function AddProduct(props: RouteComponentProps & AddProductInputProps) {
  return (
    <Router>
      <AddProductContainer onSubmit={props.onSubmit} path={urls.newProduct()} />
      <AddProductButton path={urls.root()} />
    </Router>
  )
}

export default AddProduct

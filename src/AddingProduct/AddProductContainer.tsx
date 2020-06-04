import { RouteComponentProps } from '@reach/router'
import React from 'react'
import AddProductInput, { AddProductInputProps } from './AddProductInput'
import Overlay from '../Layout/Overlay'

function AddProductContainer(
  props: RouteComponentProps & AddProductInputProps
) {
  return (
    <>
      <Overlay />
      <AddProductInput onSubmit={props.onSubmit} />
    </>
  )
}

export default AddProductContainer

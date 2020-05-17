import React from 'react'
import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { Link, RouteComponentProps } from '@reach/router'
import { urls } from '../consts/urls'

function AddList(props: RouteComponentProps) {
  return (
    <Link to={urls.list()}>
      <Button variant="contained" color="primary" startIcon={<AddIcon />}>
        Create new list
      </Button>
    </Link>
  )
}

export default AddList

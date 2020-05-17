import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { TextField } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import Autocomplete from '@material-ui/lab/Autocomplete'

export interface ListItemX {
  value: string
}

interface ListItemProps extends RouteComponentProps {
  handleAdd(arg: ListItemX): void
  handleDelete(arg: ListItemX): void
  handleChange(arg: ListItemX, value: string): void
  item: ListItemX
  autoCompleteOptions: string[]
  canDelete: boolean
}

function ListItem(props: ListItemProps) {
  return (
    <Autocomplete
      options={props.autoCompleteOptions}
      getOptionLabel={(value) => value}
      freeSolo
      renderInput={(params) => (
        <div className="flex">
          <TextField
            {...params}
            label="Item"
            value={props.item.value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              props.handleChange(props.item, event.target.value)
            }
          />
          <IconButton
            aria-label="add"
            color="primary"
            onClick={() => props.handleAdd(props.item)}
          >
            <AddIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            color="secondary"
            onClick={() => props.handleDelete(props.item)}
            disabled={props.canDelete}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      )}
    />
  )
}

export default ListItem

import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import ListItem, { ListItemX } from './ListItem'

function List(props: RouteComponentProps) {
  const getNewItem = () => ({
    value: 'test',
  })

  const [items, setItems] = useState([getNewItem()])
  const autoCompleteOptions = ['test']

  const handleAdd = (item: ListItemX) => {
    const index = items.indexOf(item)
    setItems([
      ...items.slice(0, index + 1),
      getNewItem(),
      ...items.slice(index + 1),
    ])
  }

  const handleDelete = (item: ListItemX) => {
    setItems(items.filter((_item) => item !== _item))
  }

  const handleChange = (item: ListItemX, value: string) => {
    const updatedItems = items.map((_item) => {
      return item === _item ? { ...item, value } : _item
    })

    setItems(updatedItems)
  }

  return (
    <div>
      {items.map((item, index: number) => {
        return (
          <ListItem
            key={index}
            autoCompleteOptions={autoCompleteOptions}
            canDelete={items.length === 1}
            item={item}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
            handleChange={handleChange}
          ></ListItem>
        )
      })}
    </div>
  )
}

export default List

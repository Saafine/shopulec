import React from 'react'
import { useTheme } from '@material-ui/core'
import { RestoreOutlined } from '@material-ui/icons'

function UndoButton(props: { handleClick: () => void }) {
  const theme = useTheme()

  return (
    <button>
      <RestoreOutlined
        onClick={props.handleClick}
        style={{
          fontSize: '60px',
          color: theme.palette.primary.main,
          position: 'fixed',
          left: '5%',
          bottom: '5%',
        }}
      />
    </button>
  )
}

export default UndoButton

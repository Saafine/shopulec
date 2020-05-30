import { RouteComponentProps } from '@reach/router'
import React from 'react'

function Overlay(props: RouteComponentProps & { onOverlayClick: () => void }) {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        position: 'absolute',
      }}
    >
      <div
        onClick={props.onOverlayClick}
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
          opacity: '0.6',
          background: 'gray',
        }}
      ></div>
    </div>
  )
}

export default Overlay

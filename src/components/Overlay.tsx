import { Link, RouteComponentProps } from '@reach/router'
import React from 'react'
import { urls } from '../core/urls'

function Overlay(props: RouteComponentProps) {
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
      <Link to={urls.root()}>
        <div
          style={{
            position: 'relative',
            height: '100%',
            width: '100%',
            opacity: '0.6',
            background: 'gray',
          }}
        ></div>
      </Link>
    </div>
  )
}

export default Overlay

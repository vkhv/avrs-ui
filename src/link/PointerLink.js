import React from 'react'
import { Link } from 'react-router'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    fontFamily: '"Ubuntu", sans-serif',
    fontWeight: 400,
    lineHeight: '17px',
    fontSize: '15px',
    color: '#0288d1',
    textDecoration: 'none',
    marginTop: '6px',
    '&:hover': {
      textDecoration: 'underline',
      '& *': {
        textDecoration: 'underline',
      },
    },
  },
  active: {
    color: '#657684',
    '&::before': {
      content: '" "',
      position: 'absolute',
      right: '-1px',
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
      borderRight: '8px solid #ccc8c8',
      borderBottom: '10px solid transparent',
      zIndex: 1,
    },
    '&::after': {
      content: '" "',
      position: 'absolute',
      right: '-2px',
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
      borderRight: '8px solid white',
      borderBottom: '10px solid transparent',
      zIndex: 2,
    },
  },
})

const PointerLink = ({ to, children }) => (
  <Link
    to={to}
    className={styles()}
    activeClassName={styles({ active: true })}
  >
    {children}
  </Link>
)

export default PointerLink

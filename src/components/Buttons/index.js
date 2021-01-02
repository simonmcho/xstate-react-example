import React from 'react'
import pt from 'prop-types'

const Buttons = ({ btnText, onClick }) => {
  return (
    <button onClick={onClick}>{btnText}</button>
  )
}

Buttons.propTypes = {
  btnText: pt.string,
  onClick: pt.func.isRequired
}

Buttons.defaultProps = {
  btnText: ''
}

export default Buttons

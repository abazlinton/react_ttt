import React from 'react'

const Button = ({isVisible, callback, text}) => {

  return isVisible ? <button onClick={callback}>{text}</button> : null
    
}

export default Button
// @flow
import * as React from 'react'

type Props = {
  children: React.Node,
  className?: string,
}
const Button = ({children, className = ''}: Props) => {
  const commonClasses = `${className} ph3 pv2 pointer`
  return (
    <button className={`${commonClasses} white bg-gold b--transparent dim`}>
      {children}
    </button>
  )
}

export default Button

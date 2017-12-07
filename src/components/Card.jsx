// @flow
import * as React from 'react'
import styled from 'react-emotion'
import Link from 'gatsby-link'

import {boxShadowTransition} from '../styles'

const CardDiv = styled.div`
  box-shadow: 2px 2px 15px 0px rgba(50, 60, 70, 0.3);
`
const DescendingCardDiv = styled(CardDiv)`
  &:hover {
    box-shadow: 5px 5px 10px 2px rgba(50, 60, 70, 0.3);
  }
  ${boxShadowTransition};
`
type Props = {
  children: React.Node,
  className?: string,
  to?: string,
}
const Card = ({children, className = '', to}: Props) => {
  const commonClasses = `br2 ${className}`
  return to ? (
    <Link to={to}>
      <DescendingCardDiv className={`${commonClasses} no-underline`}>
        {children}
      </DescendingCardDiv>
    </Link>
  ) : (
    <CardDiv className={commonClasses}>{children}</CardDiv>
  )
}

export default Card

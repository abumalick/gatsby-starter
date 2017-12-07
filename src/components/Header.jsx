// @flow
import * as React from 'react'
import styled from 'react-emotion'

const HeaderDiv = styled.div`
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
`

type Props = {
  children: React.Node,
  className?: string,
}
type State = {}
class Header extends React.Component<Props, State> {
  // TODO: reduce the header on page scroll
  state = {}
  render() {
    const {children, className = ''} = this.props
    return (
      <HeaderDiv
        className={`pa3 fixed top-0 right-0 left-0 z-999 ${className}`}
      >
        {children}
      </HeaderDiv>
    )
  }
}
export default Header

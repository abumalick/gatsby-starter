// @flow
import * as React from 'react'
import 'tachyons' // eslint-disable-line
import './styles.css'
import Header from '../components/Header'

type Props = {
  children: React.Node,
  data: {
    site: {
      siteMetadata: {
        title: string,
      },
    },
  },
}
const MainLayout = ({children, data}: Props) => {
  const {title} = data.site.siteMetadata
  return (
    <div className="mt5 pa3">
      <Header>
        <h1 className="mv0 tc">{title}</h1>
      </Header>

      {children()}
    </div>
  )
}

export default MainLayout

export const pageQuery = graphql`
  query mainLayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

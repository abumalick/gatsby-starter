// @flow
import * as React from 'react'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    // $FlowIgnore
    stylesStr = require('!raw-loader!../public/styles.css') // eslint-disable-line
  } catch (e) {
    console.log(e)
  }
}

// const BUILD_TIME = new Date().getTime()
type Props = {
  body: string,
  headComponents: React.Node,
  preBodyComponents: React.Node,
  postBodyComponents: React.Node,
}
const HTML = ({
  body,
  headComponents,
  postBodyComponents,
  preBodyComponents,
}: Props) => {
  let css
  if (process.env.NODE_ENV === `production`) {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{__html: stylesStr}}
      />
    )
  }
  return (
    <html lang="ar">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Gatsby starter</title>
        <meta name="author" content="name" />
        <meta name="description" content="description here" />
        <meta name="keywords" content="keywords,here" />
        {headComponents}
        {css}
      </head>
      <body>
        {preBodyComponents}
        <div id="___gatsby" dangerouslySetInnerHTML={{__html: body}} />
        {postBodyComponents}
      </body>
    </html>
  )
}

export default HTML

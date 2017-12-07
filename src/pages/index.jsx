import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import RawHTML from '../components/RawHTML'

const Home = () => (
  <div className="mt4 f4">
    <Card className="pa3">
      <Button>Button</Button>
    </Card>
    <Card className="mt3 pa3" to="/">
      <h3>This is a Link card</h3>
    </Card>
    <RawHTML className="mt3">{`<p>This is raw HTML</p>`}</RawHTML>
  </div>
)

export default Home

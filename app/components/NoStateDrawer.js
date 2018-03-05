import React from "react";
import StatelessDrawer from './awesome-possum/lib/StatelessDrawer'
import Menu from './awesome-possum/lib/Menu'
import Lipsum from './awesome-possum/lib/Lipsum'
var Link = require('react-router-dom').Link;

class NoStateDrawer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }
  expandPane = () => {
    this.setState({ open: true })
  }

  closePane = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <div style={{marginTop: '15px', marginLeft: '35px'}}>
        <StatelessDrawer
          open={this.state.open}
          close={this.closePane}
          expand={this.expandPane}
          collapsible  
          overlay
          expanderChildren="+"
          closerChildren="+"
        >
          <Menu>
            <Menu.Item text>
              <span>This is a drawer that is collapsible and it overlays page content.</span>
            </Menu.Item>
            <Menu.Item>
              <a href="#">one</a>
            </Menu.Item>
            <Menu.Item>
              <Link to={{pathname: "/form5"}}>StatelessDrawer</Link>
            </Menu.Item>
            <Menu.Item>
              <a href="#about">About</a>
            </Menu.Item>
          </Menu>
        </StatelessDrawer>
        <main className="rev-Content">
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p id='about'><Lipsum /></p>
        </main>

      </div>
    )
  }

}



module.exports = NoStateDrawer;
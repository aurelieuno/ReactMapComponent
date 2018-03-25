import React from "react";
import StatelessDrawer from './awesome-possum/lib/StatelessDrawer'
import Menu from './awesome-possum/lib/Menu'
import Lipsum from './awesome-possum/lib/Lipsum'
var Link = require('react-router-dom').Link;

class NoStateDrawer extends React.Component {
  state = { open: false };

  expandDrawer = () => {
    this.setState({ open: true })
  }

  closeDrawer = () => {
    this.setState({ open: false })
  }


  render() {
    return (
      <div style={{marginTop: '15px', marginLeft: '35px'}}>
        <StatelessDrawer
          collapsible
          overlay  
          open={this.state.open}
          close={this.closeDrawer}
          expand={this.expandDrawer}
          expanderChildren= '+'
          closerChildren= '+'
          >
          <Menu>
            <Menu.Item text>
              <span>This is a drawer that is collapsible and it overlays page content.</span>
            </Menu.Item>
            <Menu.Item>
              <a href='#'>one</a>
            </Menu.Item>
            <Menu.Item>
              <a href='#about' onClick={(_e) => this.closeDrawer()}>About</a>
            </Menu.Item>
            <Menu.Item>
              <a href='#about2' onClick={(_e) => this.closeDrawer()}>About2</a>
            </Menu.Item>
          </Menu>
        </StatelessDrawer>
        <main className='rev-Content'>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p id='about'>About</p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p id='about2'>About2</p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
          <p><Lipsum /></p>
        </main>

      </div>
    )
  }

}



module.exports = NoStateDrawer;


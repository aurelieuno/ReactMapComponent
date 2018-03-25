import React from "react";
import NewDrawer from './awesome-possum/lib/NewDrawer'
import Menu from './awesome-possum/lib/Menu'
import TopBar from './awesome-possum/lib/TopBar'
import Form from './awesome-possum/lib/Form'
import InputGroup from './awesome-possum/lib/InputGroup'
import Input from './awesome-possum/lib/Input'
import Button from './awesome-possum/lib/Button'
import Lipsum from './awesome-possum/lib/Lipsum'
var Link = require('react-router-dom').Link;

class StateDrawer extends React.Component {

  render() {
    return (
      <div style={{ marginTop: '15px', marginLeft: '35px' }}> 
        <NewDrawer
          open={false}
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
              <a>one</a>
            </Menu.Item>
            <Menu.Item>
              <Link to={{ pathname: "/form5" }}>NewDrawer</Link>
            </Menu.Item>
            <Menu.Item>
              <a href="#about" onClick={(_e) => this.closeDrawer()}>About</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#about2" onClick={(_e) => this.closeDrawer()}>About2</a>
            </Menu.Item>
          </Menu>
        </NewDrawer>
        <main className="rev-Content">
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



module.exports = StateDrawer;
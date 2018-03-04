import React from "react";
import Drawer from './awesome-possum/lib/Drawer'
import Menu from './awesome-possum/lib/Menu'
import Lipsum from './awesome-possum/lib/Lipsum'

class Form4 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true
    }
  }

  render() {
    return (
      <div>
        <Drawer
          scroll
          expanderChildren="+"
          closerChildren="+"
        >
          <Menu>
            <Menu.Item text>
              <span>This drawer's contents will scroll vertically.</span>
            </Menu.Item>
            <Menu.Item>
              <a href="#">one</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">two</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">three</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">four</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">five</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">six</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">seven</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">eight</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">nine</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">ten</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">eleven</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">twelve</a>
            </Menu.Item>
          </Menu>
        </Drawer>
        <main className="rev-Content">
          <p><Lipsum /></p>
          <p><Lipsum /></p>
        </main>  

      </div>
    )
  }

}



module.exports = Form4;
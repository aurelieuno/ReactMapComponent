import React from "react";
import {Link} from 'react-router-dom';
import Menu from './awesome-possum/lib/Menu'
import Row from './awesome-possum/lib/Row'
import Col from './awesome-possum/lib/Col'
import Callout from './awesome-possum/lib/Callout'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  closeModal() {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <div>
      <Row>
        <Col medium={6}>
          <Callout>
            <Menu vertical>
              <Menu.Item><a href="#">One</a>
                <Menu nested>
                    <Menu.Item><a href="#">Nested One</a>
                      <Menu nested>
                        <Menu.Item><a href="#">Double Nested One</a></Menu.Item>
                        <Menu.Item><a href="#">Double Nested Two</a></Menu.Item>
                      </Menu>    
                    </Menu.Item>
                  <Menu.Item><a href="#">Nested Two</a></Menu.Item>
                  <Menu.Item><a href="#">Nested Three</a></Menu.Item>
                </Menu>
              </Menu.Item>
              <Menu.Item><a href="#">Two</a>
                <Menu nested vertical>
                  <Menu.Item><a href="#">Nested One</a></Menu.Item>
                  <Menu.Item><a href="#">Nested Two</a></Menu.Item>
                </Menu>
              </Menu.Item>
              <Menu.Item><a href="#">Three</a></Menu.Item>
            </Menu>
          </Callout>
          </Col>
          
        <Col medium={6}>
          <Callout>
            <Menu vertical dividers>
              <Menu.Item><a href="#">One</a>
                <Menu nested>
                    <Menu.Item><a href="#">Nested One</a>
                      <Menu nested>
                        <Menu.Item><a href="#">Double Nested One</a></Menu.Item>
                        <Menu.Item><a href="#">Double Nested Two</a></Menu.Item>
                      </Menu>  
                    </Menu.Item>
                  <Menu.Item><a href="#">Nested Two</a>
                    <Menu nested>
                      <Menu.Item><a href="#">Double Nested One</a></Menu.Item>
                      <Menu.Item><a href="#">Double Nested Two</a></Menu.Item>
                    </Menu>
                  </Menu.Item>
                  <Menu.Item><a href="#">Nested Three</a></Menu.Item>
                </Menu>
              </Menu.Item>
              <Menu.Item><a href="#">Two</a></Menu.Item>
              <Menu.Item><a href="#">Three</a></Menu.Item>
            </Menu>
          </Callout>
        </Col>
        <Col>
          <Callout>
            <Menu horizontal>
              <Menu.Item><a href="#">One</a>
                <Menu nested>
                  <Menu.Item><a href="#">Nested One</a></Menu.Item>
                  <Menu.Item><a href="#">Nested Two</a>
                    <Menu nested>
                      <Menu.Item><a href="#">Double Nested One</a></Menu.Item>
                      <Menu.Item><a href="#">Double Nested Two</a></Menu.Item>
                    </Menu>
                  </Menu.Item>
                  <Menu.Item><a href="#">Nested Three</a></Menu.Item>
                </Menu>
              </Menu.Item>
              <Menu.Item><a href="#">Two</a></Menu.Item>
              <Menu.Item><a href="#">Three</a></Menu.Item>
            </Menu>
          </Callout>
        </Col>
        </Row>
      </div>  
    )
  }
}



module.exports = Home;


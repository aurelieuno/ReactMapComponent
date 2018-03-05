import React from "react";
import StatelessModal from './awesome-possum/lib/StatelessModal'
import Button from './awesome-possum/lib/Button'
import CloseButton from './awesome-possum/lib/CloseButton'

class ModalExample extends React.Component {
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
        <button onClick={() => this.openModal()}>Open modal</button>

        <StatelessModal isOpen={this.state.isOpen} onBackgroundClick={() => this.closeModal()}>
          <h1>Modal Example</h1>
          <p>Modal Content</p>  
          <CloseButton aria-label="Close Callout" onClick={() => this.closeModal()}>&times;</CloseButton>
        </StatelessModal>  
      </div>
    )
  }
}



module.exports = ModalExample;
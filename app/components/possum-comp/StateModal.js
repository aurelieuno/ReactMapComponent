import React from "react";
import StatelessModal from './awesome-possum/lib/StatelessModal'
import Modal from './awesome-possum/lib/Modal'
import Button from './awesome-possum/lib/Button'
import CloseButton from './awesome-possum/lib/CloseButton'

class StateModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.openModal()}>Open modal</button>

        <Modal isOpen={this.state.isOpen}>
          <h1>Modal title</h1>
          <p>hello</p>
          <p>hello there</p>
          <CloseButton aria-label="Close Callout">&times;</CloseButton>
          <CloseButton aria-label="Close Callout">hi</CloseButton>

        </Modal>
      </div>
    )
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  closeModal() {
    this.setState({ isOpen: false })
  }
}



module.exports = StateModal;
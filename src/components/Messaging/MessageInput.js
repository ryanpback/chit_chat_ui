import React from 'react'

class MessageInput extends React.Component {
  state = {
    inputHeight: 0
  }
  inputRef = React.createRef()

  getInputHeight = () => {
    const offset = this.inputRef.current.clientHeight
    const scrollHeight = this.inputRef.current.scrollHeight

    if (offset < scrollHeight) {
      this.setState({ inputHeight: scrollHeight - offset })
    }

    if (offset >= scrollHeight) {
      this.setState({ inputHeight: 0 })
      this.setState({ inputHeight: scrollHeight - offset })
    }

    this.setState({ inputHeight: this.inputRef.current.scrollHeight })
  }

  componentDidMount() {
    this.getInputHeight()
    document.addEventListener('keydown', e => {
      this.getInputHeight()
    })
  }

  render() {
    return (
      <div
        className="MessageInput"
        style={{ height: `${this.state.inputHeight}px` }}
      >
        <div className="message-input-wrapper">
          <textarea
            ref={this.inputRef}
            style={{ height: `${this.state.inputHeight}px` }}
            rows="1"
            className="message-input-box"
            placeholder="Don't cut the chit chat"
          ></textarea>
        </div>
      </div>
    )
  }
}

export default MessageInput

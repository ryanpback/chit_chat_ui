import React from 'react'
import styled from 'styled-components'
import helpers from 'helpers'
import variables from 'styles/variables'

const StyledMessageInput = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${helpers.hexToRgba(variables.colors.dark, 0.85)};

  .input-holder {
    position: relative;
    width: 95%;
    min-height: 50px;
    border-radius: 5px;
    background-color: ${helpers.hexToRgba(variables.colors.dark, 0.7)};
    border: 1px solid ${helpers.hexToRgba(variables.colors.primary, 0.5)};
  }

  textarea,
  .hidden-textarea-input {
    margin: 0;
    padding: 12px 0 13px;
    border: none;
    width: 90%;
    height: 100%;
    border: none;
    background-color: transparent;
    font-size: 16px;
    resize: none;
    white-space: pre-wrap;
    word-wrap: break-word;
    display: block;

    &:focus {
      outline: none;
    }
  }

  .hidden-textarea-input {
    display: block;
    margin: 0 auto;
    visibility: hidden;
    min-height: 50px;
  }

  textarea {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    line-height: 28px;
    color: #fff;
    letter-spacing: 1px;
  }
`

class MessageInput extends React.Component {
  state = {
    input: ''
  }

  setInput = e => {
    this.setState({
      input: e.target.value
    })
  }

  showInputAsHTML() {
    return { __html: this.state.input }
  }

  render() {
    return (
      <StyledMessageInput className='message-input'>
        <div className='input-holder'>
          <div
            className='hidden-textarea-input'
            dangerouslySetInnerHTML={this.showInputAsHTML()}
          />
          <textarea onKeyUp={e => this.setInput(e)}></textarea>
        </div>
      </StyledMessageInput>
    )
  }
}

export default MessageInput

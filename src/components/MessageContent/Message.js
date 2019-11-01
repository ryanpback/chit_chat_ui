import React from 'react'
import styled from 'styled-components'
import helpers from 'helpers'
import variables from 'styles/variables'

const Message = ({ message, positionClass, sender }) => {
  const StyledMessage = styled.div`
    padding: 0 3%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin: 5px 0;

    .message-wrapper {
      padding: 7px 15px;
      border-radius: 20px;
    }

    &.sender {
      justify-content: flex-end;

      .message-wrapper {
        background-color: ${helpers.hexToRgba(variables.colors.primary, 0.6)};
      }
    }

    &.recipient {
      justify-content: flex-start;

      .message-wrapper {
        background-color: ${helpers.hexToRgba(variables.colors.dark, 0.6)};
      }
    }

    .message {
      display: block;
      color: #fff;
    }
  `

  return (
    <StyledMessage className={`${sender ? 'sender' : 'recipient'}`}>
      <div className='message-wrapper'>
        <span className={`message`}>{message}</span>
      </div>
    </StyledMessage>
  )
}

export default Message

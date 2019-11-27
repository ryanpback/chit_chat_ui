import React from 'react'
import PanelHeader from 'components/Shared/PanelHeader'

const NewConversation = props => {
  return (
    <div className="NewConversation panel">
      <PanelHeader
        headerText="New Conversation"
        placeholderText="Find a friend"
        convHandler={props.newConvHandler}
        iconClass="times"
      />
    </div>
  )
}

export default NewConversation

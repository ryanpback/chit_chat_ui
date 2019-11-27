import React from 'react'
import PanelHeader from 'components/Shared/PanelHeader'

class Conversations extends React.Component {
  render() {
    return (
      <div className="Conversations panel">
        <PanelHeader
          headerText="Messages"
          placeholderText="Search"
          convHandler={this.props.newConvHandler}
          iconClass="pencil-square-o"
        />
      </div>
    )
  }
}

export default Conversations

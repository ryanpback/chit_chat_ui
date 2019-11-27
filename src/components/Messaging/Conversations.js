import React from 'react'

class Conversations extends React.Component {
  render() {
    return (
      <div className="Conversations conversation-panel">
        <div className="conversation-panel-header">
          <div className="container">
            <span className="header">Messages</span>

            <i
              className="fa fa-pencil-square-o"
              aria-hidden="true"
              onClick={this.props.newConvHandler}
            ></i>
          </div>
        </div>

        <div className="panel-search">
          <div className="container">
            <div className="input-wrapper">
              <i className="fa fa-search" aria-hidden="true"></i>

              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Conversations

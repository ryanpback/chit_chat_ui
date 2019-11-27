import React from 'react'

const PanelHeader = props => {
  return (
    <div className="PanelHeader">
      <div className="panel-header-wrapper">
        <div className="container">
          <span className="header">{props.headerText}</span>

          <i
            className={`fa fa-${props.iconClass}`}
            aria-hidden="true"
            onClick={props.convHandler}
          ></i>
        </div>
      </div>

      <div className="panel-search">
        <div className="container">
          <div className="input-wrapper">
            <i className="fa fa-search" aria-hidden="true"></i>

            <input type="text" placeholder={props.placeholderText} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PanelHeader

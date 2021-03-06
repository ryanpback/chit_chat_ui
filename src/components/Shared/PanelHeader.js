import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const PanelHeader = props => {
  const searchRef = useRef(null)
  useEffect(() => {
    searchRef.current.focus()
  })

  return (
    <div className="PanelHeader">
      <div className="panel-header-wrapper">
        <div className="container">
          <span className="header">{props.headerText}</span>

          <i
            className={`fa fa-${props.faClass}`}
            aria-hidden="true"
            onClick={props.convHandler}
          ></i>
        </div>
      </div>

      <div className="panel-search">
        <div className="container">
          <div className="input-wrapper">
            <i className="fa fa-search" aria-hidden="true"></i>

            <input
              ref={searchRef}
              value={props.searchString}
              onChange={e => {
                props.searchHandler(e)
              }}
              type="text"
              placeholder={props.placeholderText}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

PanelHeader.propTypes = {
  headerText: PropTypes.string,
  faClass: PropTypes.string,
  convHandler: PropTypes.func
}

export default PanelHeader

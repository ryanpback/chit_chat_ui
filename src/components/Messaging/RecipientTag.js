import React from 'react'

const RecipientTag = ({ user, removeRecipientHandler }) => {
  return (
    <div className="RecipientTag">
      <div className="recipient-tag-wrapper">
        <div className="user-tag-image">
          <img src="/logo192.png" alt="" />
        </div>
        <div className="user-tag-name">
          <span>{user.name}</span>
        </div>
        <div
          className="remove-recipient"
          onClick={() => removeRecipientHandler(user)}
        >
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}

export default RecipientTag

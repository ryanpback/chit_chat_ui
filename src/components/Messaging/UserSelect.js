import React from 'react'

const UserSelect = ({ user, addRecipientHandler }) => {
  return (
    <div
      className="UserSelect"
      onClick={() => {
        addRecipientHandler(user)
      }}
      tabIndex="0"
    >
      <div className="user-select-wrapper container">
        <div className="user-image">
          <img src="/logo192.png" alt="" />
        </div>
        <div className="user-info">
          <span className="user-select-name">
            {user.name} ({user.userName})
          </span>
          <span className="user-select-email">{user.email}</span>
        </div>
      </div>
    </div>
  )
}

export default UserSelect

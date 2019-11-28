import React from 'react'
import RecipientTag from './RecipientTag'

const Recipients = ({ recipients }) => {
  return (
    <div className="Recipients">
      <div className="container">
        <div className="recipients-header">
          <span className="header">Recipients</span>

          <button className="btn start-conversation">Let's Chat</button>
        </div>
      </div>

      <div className="recipients-list">
        <div className="container list">
          {recipients.map(u => (
            <RecipientTag key={u.email} user={u} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Recipients

import React from 'react'
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Messenger = () => {
  return (
    <div>
        <MessengerCustomerChat
            pageId="<YOUR_PAGE_ID>"
            appId="<YOUR_APP_ID>"
        />
  </div>
  )
}

export default Messenger
const messages = ['React', 'Re: React', 'Re:Re: React', "Wardha"];
const newMessages = ['MCA','BCA'];

function Mess() {
  return (
    <>
    <Mailbox unreadMessages={messages}
     unreadNewMessages={newMessages} />
    </>
  );
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  const unreadNewMessages = props.unreadNewMessages;
 
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
      {unreadNewMessages.length > 0 &&
        <h2>
          You have {unreadNewMessages.length} unreadNewMessages messages.
        </h2>
      }
    </div>
  );
}
export default Mess;
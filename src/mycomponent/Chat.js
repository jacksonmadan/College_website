// Chat.js
import React, { useState } from 'react';
import { Segment, Header, Comment, Form, Button } from 'semantic-ui-react';
import './Chat.css'; // Import the CSS file for styling
import Button23 from '../mycomponent/Button';

const Chat = () => {
  const [messages, setMessages] = useState([]); // State to hold chat messages
  const [inputText, setInputText] = useState(''); // State to hold input text

  const handleSendMessage = () => {
    if (inputText.trim() === '') return; // Prevent sending empty messages

    const newMessage = {
      author: 'User',
      content: inputText,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, newMessage]); // Add new message to state
    setInputText(''); // Clear input field
  };

  return (
    <>
    <Segment className="chat-container">
      <Header as="h3" className="chat-header">
        Chat
      </Header>
      <Comment.Group className="chat-messages">
        {messages.map((msg, index) => (
          <Comment key={index}>
            <Comment.Content>
              <Comment.Author as="a">{msg.author}</Comment.Author>
              <Comment.Metadata>
                <div>{msg.timestamp}</div>
              </Comment.Metadata>
              <Comment.Text>{msg.content}</Comment.Text>
            </Comment.Content>
          </Comment>
        ))}
      </Comment.Group>
      <Form className="chat-input">
        <Form.TextArea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <Button content="Send" labelPosition="left" icon="send" onClick={handleSendMessage} />
      </Form>
    </Segment>
    <Button23/>
    </>
  );
};

export default Chat;

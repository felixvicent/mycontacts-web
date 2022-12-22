import { useEffect, useState, useCallback } from 'react';

import { ToastMessage } from '../ToastMessage';
import { Container } from './styles';

import { toastEventManager } from '../../../utils/toast';

export function ToastContainer() {
  const [messages, setMessages] = useState([]);
  const [pendingRemovalMessagesId, setPendingRemovalMessagesId] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text, duration },
      ]);
    }
    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, []);

  const handleRemoveMessage = useCallback((id) => {
    setPendingRemovalMessagesId((prevState) => [...prevState, id]);
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          onRemoveMessage={handleRemoveMessage}
          key={message.id}
          message={message}
          isLeaving={pendingRemovalMessagesId.includes(message.id)}
        />
      ))}
    </Container>
  );
}

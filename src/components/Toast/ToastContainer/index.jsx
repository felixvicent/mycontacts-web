import { useEffect } from 'react';

import { ToastMessage } from '../ToastMessage';
import { Container } from './styles';

import { toastEventManager } from '../../../utils/toast';
import useAnimatedList from '../../../hooks/useAnimatedList';

export function ToastContainer() {
  const {
    pendingRemovalItemsId,
    handleAnimationEnd,
    handleRemoveItem,
    items: messages,
    setItems: setMessages,
  } = useAnimatedList();

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
  }, [setMessages]);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          onRemoveMessage={handleRemoveItem}
          key={message.id}
          message={message}
          onAnimationEnd={handleAnimationEnd}
          isLeaving={pendingRemovalItemsId.includes(message.id)}
        />
      ))}
    </Container>
  );
}

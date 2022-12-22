import { useEffect } from 'react';

import ToastMessage from '../ToastMessage';
import { Container } from './styles';

import { toastEventManager } from '../../../utils/toast';
import useAnimatedList from '../../../hooks/useAnimatedList';

export function ToastContainer() {
  const {
    handleRemoveItem,
    setItems: setMessages,
    renderList,
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
      {renderList((message, { isLeaving, animatedRef }) => (
        <ToastMessage
          onRemoveMessage={handleRemoveItem}
          key={message.id}
          message={message}
          animatedRef={animatedRef}
          isLeaving={isLeaving}
        />
      ))}
    </Container>
  );
}

import { useCallback, useRef, useState, createRef } from 'react';

export default function useAnimatedList(initialValue = []) {
  const [items, setItems] = useState(initialValue);
  const [pendingRemovalItemsId, setPendingRemovalItemsId] = useState([]);

  const animatedRefs = useRef(new Map());

  const handleRemoveItem = useCallback((id) => {
    setPendingRemovalItemsId((prevState) => [...prevState, id]);
  }, []);

  // const handleAnimationEnd = useCallback((id) => {
  //   setItems((prevState) => prevState.filter((item) => item.id !== id));

  //   setPendingRemovalItemsId((prevState) =>
  //     prevState.filter((itemId) => itemId !== id),
  //   );
  // }, []);

  const getAnimatedRef = useCallback((itemId) => {
    let animatedRef = animatedRefs.current.get(itemId);

    if (!animatedRef) {
      animatedRef = createRef();
      animatedRefs.current.set(itemId, animatedRef);
    }

    return animatedRef;
  }, []);

  const renderList = useCallback(
    (renderItem) =>
      items.map((item) => {
        const isLeaving = pendingRemovalItemsId.includes(item.id);

        const animatedRef = getAnimatedRef(item.id);

        return renderItem(item, { isLeaving, animatedRef });
      }),
    [items, pendingRemovalItemsId, getAnimatedRef],
  );

  return {
    items,
    handleRemoveItem,
    renderList,
    setItems,
  };
}

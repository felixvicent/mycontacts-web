import PropTypes from 'prop-types';

import { Overlay } from './styles';

import { Spinner } from '../Spinner';
import { ReactPortal } from '../ReactPortal';
import useAnimatedUnmount from '../../hooks/useAnimatedUnmnount,';

export function Loader({ isLoading }) {
  const { animatedElementRef, shouldRender } = useAnimatedUnmount(isLoading);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay isLeaving={!isLoading} ref={animatedElementRef}>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export function ReactPortal({ containerId, children }) {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(children, container);
}

ReactPortal.propTypes = {
  children: PropTypes.node.isRequired,
  containerId: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';

import Button from '../Button';

import { Overlay, Container, Footer } from './styles';

export function Modal({ danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Título do modal</h1>
        <p>Corpo do modal</p>

        <Footer>
          <button className="cancel-button" type="button">
            Cancelar
          </button>
          <Button danger type="button">
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};

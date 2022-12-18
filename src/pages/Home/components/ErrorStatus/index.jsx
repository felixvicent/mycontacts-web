import PropTypes from 'prop-types';

import sad from '../../../../assets/images/sad.svg';

import { Button } from '../../../../components/Button';

import { Container } from './styles';

export function ErrorStatus({ onTryAgain }) {
  return (
    <Container>
      <img src={sad} alt="Sad Face" />
      <div className="details">
        <strong>Ocorreu um erro ao obter seus contatos</strong>
        <Button onClick={onTryAgain} type="button">
          Tentar novamente
        </Button>
      </div>
    </Container>
  );
}

ErrorStatus.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
};

import styled from 'styled-components';
import xxx from '../../assets/jug.svg';
import { H1, ButtonText } from '../styles/Text';

const Footer = () => {
  return (
    <Wrapper>
      <Xxx>
        <Jug src={xxx} alt='XXX' />
      </Xxx>
      <Text>Built by</Text>
      <Organization>Bootleggers</Organization>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 36px 0 48px;
  gap: 12px;
`;

const Text = styled(ButtonText)`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.8px;

  @media (min-width: 800px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const Organization = styled(H1)`
  font-size: 32px;

  @media (min-width: 800px) {
    font-size: 36px;
  }
`;

const Xxx = styled.div`
  display: grid;
  place-items: center;

  @media (min-width: 800px) {
    place-items: end;
  }
`;

const Jug = styled.img`
  height: 48px;

  @media (min-width: 800px) {
    height: 72px;
  }
`;

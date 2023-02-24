import styled from 'styled-components';
import { H1 } from '../styles/Text';

const Header = () => {
  return (
    <Wrapper>
      <Organization>Bootleggers</Organization>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  max-width: 996px;
  margin: 0 auto;
  padding: 36px 0;
  display: grid;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Organization = styled(H1)``;

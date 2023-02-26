import styled from 'styled-components';

import { MediumText } from '../styles/Text';

import baal from '../../assets/baal.svg';
import Basic from '../buttons/Basic';

const Governed = () => {
  return (
    <Section>
      <BaalWrapper>
        <Baal src={baal} alt='Baal' />
      </BaalWrapper>
      <Description>Governed by Moloch v3</Description>
      <ButtonWrapper>
        <Link href='https://admin.daohaus.fun/#/molochv3/0x64/0xe2f816d08c568a447d3804b265f1e277bc2c688d'>
          <Basic text='DAO' />
        </Link>
      </ButtonWrapper>
    </Section>
  );
};

export default Governed;

const Section = styled.section`
  position: relative;
  display: grid;
  padding-bottom: 144px;

  @media (min-width: 800px) {
    max-width: 996px;
    margin: 0 auto;
    width: 100%;
  }
`;

const BaalWrapper = styled.div`
  display: grid;
  place-items: center;
  padding-bottom: 36px;
`;

const Baal = styled.img`
  height: 200px;

  @media (min-width: 800px) {
    height: 200px;
  }
`;

const Description = styled(MediumText)`
  justify-self: center;
  padding-bottom: 36px;

  @media (min-width: 800px) {
    padding-bottom: 48px;
  }
`;

const ButtonWrapper = styled.div`
  justify-self: center;
`;

const Link = styled.a``;

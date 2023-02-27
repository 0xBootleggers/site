import styled from 'styled-components';

import { H2, MediumText } from '../styles/Text';

import Telegram from '../../assets/telegram.svg';

const Contact = () => {
  return (
    <Section>
      <TextWrapper>
        <Title>Let’s Run It</Title>
        <Description>
          Send a Telegram to let us know who told you about us. Introduce what
          you are working on to the group. We will start the formula.
        </Description>
      </TextWrapper>
      <IconWrapper>
        <Link href='https://t.me/+43wBiA-Q27oxOTAx'>
          <Logo src={Telegram} alt='Telegram' />
        </Link>
      </IconWrapper>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  margin-top: 564px;
  position: relative;
  @media (min-width: 800px) {
    max-width: 612px;
    margin: 0 auto;
    width: 100%;
    padding-bottom: 324px;
  }
`;

const TextWrapper = styled.div`
  padding: 0 12px;

  @media (min-width: 800px) {
    padding: 0 0 0 0;
    display: grid;
  }
`;

const Title = styled(H2)`
  margin-bottom: 36px;

  @media (min-width: 800px) {
    justify-self: center;
  }
`;

const Description = styled(MediumText)`
  margin-bottom: 396px;
  justify-self: center;

  @media (min-width: 800px) {
    margin-bottom: 48px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  display: grid;
  top: 4px;
  right: 32px;
  height: 36px;
  width: 36px;
  place-items: center;

  @media (min-width: 800px) {
    position: relative;
    margin: 0 auto;
    right: 0;
    top: 0;
    height: 96px;
    width: 96px;
  }
`;

const Link = styled.a``;

const Logo = styled.img`
  @media (min-width: 800px) {
    height: 96px;
    width: 96px;
  }
`;

import styled from 'styled-components';
import xxx from '../../assets/jug.svg';
import { H2, MediumText } from '../styles/Text';

function Hero() {
  return (
    <Section>
      <ContentWrapper>
        <Xxx>
          <Jug src={xxx} alt='XXX' />
        </Xxx>
        <TextWrapper>
          <Title>
            Hard-fighting, freedom-loving, fiercely independent, and faithful
          </Title>
          <Description>
            Distilling the spirit of community into tools for coordination.
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Section>
  );
}

export default Hero;

const Section = styled.section`
  overflow: hidden;
  margin: 36px 0 636px;

  @media (min-width: 800px) {
    margin: 0 0 240px;
    padding-top: 84px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 996px;
  margin: 0 auto;
  padding: 0 12px;
  display: grid;

  @media (min-width: 800px) {
    padding: 0 108px 0 0;
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
  height: 240px;

  @media (min-width: 800px) {
    height: 280px;
  }
`;

const TextWrapper = styled.div`
  @media (min-width: 800px) {
    position: absolute;
    width: 600px;
  }
`;

const Title = styled(H2)`
  margin-top: 84px;

  @media (min-width: 800px) {
    margin-top: 0;
  }
`;

const Description = styled(MediumText)`
  margin-top: 396px;

  @media (min-width: 800px) {
    margin-top: 24px;
  }
`;

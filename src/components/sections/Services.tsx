import styled from 'styled-components';

import { H2, MediumText } from '../styles/Text';

import Service from '../cards/Service';
import { services } from '../../data/servicesData';

const Services = () => {
  return (
    <Section>
      <TextWrapper>
        <Title>DAO Services</Title>
        <Description>We design, develop, and deploy custom DAOs</Description>
      </TextWrapper>
      <Cards>
        {services.map((service, index) => (
          <Service
            key={index}
            title={service.title}
            process={service.process}
          />
        ))}
      </Cards>
    </Section>
  );
};

export default Services;

const Section = styled.section`
  @media (min-width: 800px) {
    max-width: 996px;
    margin: 0 auto;
    width: 100%;
    padding-bottom: 120px;
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
    margin-bottom: 36px;
  }
`;

const Cards = styled.div`
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(324px, 1fr));
    gap: 12px;
    justify-content: space-between;
  }
`;

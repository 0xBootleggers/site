import styled from 'styled-components';

import { H3, MediumText } from '../styles/Text';

interface ServiceProps {
  title: string;
  process: string;
}

const Service = (props: ServiceProps) => {
  const { title, process } = props;
  return (
    <Card>
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{process}</Description>
      </TextWrapper>
    </Card>
  );
};

export default Service;

const Card = styled.div`
  position: relative;
  display: grid;
  padding: 0 12px 0;

  @media (min-width: 800px) {
    gap: 12px;
    max-width: 500px;
    padding: 24px;
    background-blend-mode: overlay;
    mix-blend-mode: normal;
    &,
    * {
      transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    :hover {
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.4);
    }
  }
`;

const TextWrapper = styled.div`
  margin-bottom: 72px;

  @media (min-width: 800px) {
    display: grid;
    gap: 12px;
    margin-bottom: 24px;
  }
`;

const Title = styled(H3)`
  max-width: 240px;
  padding-bottom: 32px;
`;

const Description = styled(MediumText)``;

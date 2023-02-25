import styled from 'styled-components';

import { ButtonText } from '../styles/Text';
import { themes } from '../styles/Color';

interface ButtonProps {
  text: string;
}

const Basic = (props: ButtonProps) => {
  const { text } = props;
  return (
    <Button>
      <Text>{text || 'Define Your Loyalties'}</Text>
    </Button>
  );
};

export default Basic;

const Button = styled.button`
  background: ${themes.dark.primary};
  height: 48px;
  width: 350px;
  padding: 0 60px;
  max-width: 425px;

  @media (min-width: 800px) {
    width: 425px;
    :hover {
      cursor: pointer;
    }
  }
`;

const Text = styled(ButtonText)`
  color: ${themes.dark.text2};
`;

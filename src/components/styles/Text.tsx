import styled from 'styled-components';
import { themes } from './Color';

export const H1 = styled.h1`
  font-family: 'WindSong', cursive;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
  color: ${themes.dark.text1};
`;

export const H2 = styled.h2`
  font-family: 'Stoke';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: ${themes.dark.text1};

  @media (min-width: 800px) {
    font-size: 48px;
    line-height: 60px;
  }
`;

export const MediumText = styled.p`
  font-family: 'Alegreya';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  color: ${themes.dark.text1};
`;

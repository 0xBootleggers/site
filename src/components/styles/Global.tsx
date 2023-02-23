import { createGlobalStyle } from 'styled-components';
import { themes } from './Color';

export const Styles = createGlobalStyle`
    body {
        background: ${themes.dark.backgroundColor};
    }
`;

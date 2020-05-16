import { createGlobalStyle } from "styled-components";
import colors from "./Colors";
import RobotoBlack from "../fonts/Roboto/Roboto-Black.ttf";
import RobotoBlackItalic from "../fonts/Roboto/Roboto-BlackItalic.ttf";
import RobotoBold from "../fonts/Roboto/Roboto-Bold.ttf";
import RobotoBoldItalic from "../fonts/Roboto/Roboto-BoldItalic.ttf";
import RobotoItalic from "../fonts/Roboto/Roboto-Italic.ttf";
import RobotoLight from "../fonts/Roboto/Roboto-Light.ttf";
import RobotoLightItalic from "../fonts/Roboto/Roboto-LightItalic.ttf";
import RobotoMedium from "../fonts/Roboto/Roboto-Medium.ttf";
import RobotoMediumItalic from "../fonts/Roboto/Roboto-MediumItalic.ttf";
import RobotoRegular from "../fonts/Roboto/Roboto-Regular.ttf";
import RobotoThin from "../fonts/Roboto/Roboto-Thin.ttf";
import RobotoThinItalic from "../fonts/Roboto/Roboto-ThinItalic.ttf";

export const GlobalStyle = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: -apple-system, 
                  BlinkMacSystemFont, 
                  "Segoe UI",
                  "Roboto", 
                  "Oxygen", 
                  "Ubuntu", 
                  "Cantarell", 
                  "Fira Sans", 
                  "Droid Sans",
                  "Helvetica Neue", 
                  sans-serif !important;
    font-size: 1rem;
    background-color: ${colors.white};
    color: ${colors.title};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Roboto-Black';
    src: url(${RobotoBlack});
  }

  @font-face {
    font-family: 'Roboto-BlackItalic';
    src: url(${RobotoBlackItalic});
  }

  @font-face {
    font-family: 'Roboto-Bold';
    src: url(${RobotoBold});
  }

  @font-face {
    font-family: 'Roboto-BoldItalic';
    src: url(${RobotoBoldItalic});
  }

  @font-face {
    font-family: 'Roboto-Italic';
    src: url(${RobotoItalic});
  }

  @font-face {
    font-family: 'Roboto-Light';
    src: url(${RobotoLight});
  }

  @font-face {
    font-family: 'Roboto-LightItalic';
    src: url(${RobotoLightItalic});
  }

  @font-face {
    font-family: 'Roboto-Medium';
    src: url(${RobotoMedium});
  }

  @font-face {
    font-family: 'Roboto-MediumItalic';
    src: url(${RobotoMediumItalic});
  }

  @font-face {
    font-family: 'Roboto-Regular';
    src: url(${RobotoRegular});
  }

  @font-face {
    font-family: 'Roboto-Thin';
    src: url(${RobotoThin});
  }

  @font-face {
    font-family: 'Roboto-ThinItalic';
    src: url(${RobotoThinItalic});
  }
`;

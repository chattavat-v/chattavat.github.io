import { createGlobalStyle } from "styled-components";
import RobotoBlack from "./Roboto-Black.ttf";
import RobotoBlackItalic from "./Roboto-BlackItalic.ttf";
import RobotoBold from "./Roboto-Bold.ttf";
import RobotoBoldItalic from "./Roboto-BoldItalic.ttf";
import RobotoItalic from "./Roboto-Italic.ttf";
import RobotoLight from "./Roboto-Light.ttf";
import RobotoLightItalic from "./Roboto-LightItalic.ttf";
import RobotoMedium from "./Roboto-Medium.ttf";
import RobotoMediumItalic from "./Roboto-MediumItalic.ttf";
import RobotoRegular from "./Roboto-Regular.ttf";
import RobotoThin from "./Roboto-Thin.ttf";
import RobotoThinItalic from "./Roboto-ThinItalic.ttf";

export default createGlobalStyle`
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

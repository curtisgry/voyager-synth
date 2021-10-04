import { createGlobalStyle } from 'styled-components';
import { black, darkGradient, teal } from './utilities';

const GlobalStyle = createGlobalStyle`

html {
  min-height: 100%; 
  width: 100vw;
overflow-x: hidden;
  position: relative;
}
@media (max-width: 1200px) {
             html {
               font-size: 10px;
             }
            }

            @media (max-width: 1200px) {
             html {
               font-size: 10px;
             }
            }
    body {
      ${darkGradient};
      
      height: 100%;

      overflow-x: hidden;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-family: 'Audiowide', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}




.App {
  text-align: center;
  position: relative;
  
}

.on {
  color: #2de2e6;
  box-shadow: 0 0 15px #f6019d;
  text-shadow: 0 0 15px #2de2e6;
  background: #920075;
  position: relative;

  span {
    color: #2de2e6;
  }

  &:before {
    content: '';
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
     border-radius:10px;
     background: #f706cf;
     transition: .2s;
     z-index: -1;
    transform: scale(1.1);
    box-shadow: 0 0 15px #f706cf;
    filter: blur(3px);
  }
}

.toggled {
  background-color: #791e94;
 
                text-shadow: 0 0 15px #2de2e6;
                color: ${teal};
                box-shadow: 0 0 30px ${teal};
                &:before {
                        content: '';
                       
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border-radius: 10px;
                        background: ${teal};
                        transition: 0.2s;
                        box-shadow: 0 0 15px ${teal};
                        filter: blur(3px);
                        z-index: -1;
                }
        }



}`;

export default GlobalStyle;

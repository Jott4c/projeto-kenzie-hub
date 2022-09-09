import styled, { keyframes } from "styled-components";

const zoomAnimation = keyframes`
   0% {
        scale: 0.1;
        opacity: 0.5;
     
    }

    97% {
      scale: 1.1;
    }
    
    100% {
       scale:1;
       opacity:1;
         }
`;

export const BackDrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(12, 12, 14, 0.9);
  z-index: 9;
  position: fixed;
  top: 0;
  animation-name: ${zoomAnimation};
  animation-duration: 0.8s;
`;

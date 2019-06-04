import styled from 'styled-components';

const Background = styled.div`
  background: #000 linear-gradient(to bottom, #fff 0%, #e6ffe6 100%) fixed;
  color: #fff;
  min-height: 100vh;
  overflow: hidden;
  position: relative;

  &:before {
    background: linear-gradient(to bottom, #000, #fff);
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0.4;
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(-40deg) scale(1.5) translate(0, 93%);
  }
`;

export default Background;

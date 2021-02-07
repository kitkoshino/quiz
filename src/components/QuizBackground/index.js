import styled from 'styled-components';

const QuizBackground = styled.div`
  width: 100%;
  background-position: 40% 100%;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: ${({ theme }) => theme.colors.mainBg};
    &:after {
      content: '';
      background-size: cover;
      background-position: center;
      background-image: linear-gradient(
          transparent,
          ${({ theme }) => theme.colors.mainBg}
        ),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: ${(props) => props.height};
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;

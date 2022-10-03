import styled from 'styled-components';

type Props = {
  disabled?: boolean;
};

const Button = styled.button<Props>`
  -webkit-appearance: initial;
  background-color: ${(props) => (props.disabled ? '#e4e4e4' : '#fff')} ;;
  border: 2px solid #e4e4e4;
  border-radius: 0.5rem;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)} ;
  padding: 0.5rem 1rem;
  position: relative;
  text-align: center;
  text-decoration: none;
`;

export default Button;

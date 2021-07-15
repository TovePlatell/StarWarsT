import styled from 'styled-components'

export const Button = styled.button`
  margin: 10px 0px;
  padding: 20px 30px;
  border: none;

  background-color: ${({ name }) => {
    if (name === 'showMore') {
      return '#4BB3FD'
    } else if (name === 'showLess') {
      return '#0496FF'
    } else {
      return '#027BCE'
    }
  }};

  color: white;
  border: none;
  text-transform: capitalize;

  &:hover {
    background-color: #00487c;
    cursor: pointer;
  }
`

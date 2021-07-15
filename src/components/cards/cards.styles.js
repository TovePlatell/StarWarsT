import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: #3e6680;
  width: 50%;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 0;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  &:hover {
    background-color: #00487c;
    cursor: pointer;
  }
`

export const NameContainer = styled.h2`
  color: #fff;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
`

export const InfoContainer = styled.div`
  padding-bottom: 10px;
  color: #fff;
  font-size: 18px;
`

export const ButtonsContainer = styled.div`
  position: fixed;
  left: 10%;
  top: 30%;
  display: flex;
  flex-direction: column;
`

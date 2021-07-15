import { useState } from 'react'
import { CardContainer, InfoContainer, NameContainer } from './cards.styles'

const Card = ({ character }) => {
  const [showMore, setShowMore] = useState({})
  return (
    <>
      {character.map((char, index) => {
        return (
          <CardContainer
            key={index}
            onClick={() =>
              setShowMore({ ...showMore, [index]: !showMore[index] })
            }
          >
            <NameContainer>{char.name}</NameContainer>
            {showMore[index] && (
              <InfoContainer>
                <p>Gender: {char.gender}</p>
                <p>Height: {char.height} cm</p>
                <p>Eye Color: {char.eye_color}</p>
                <p>Hair Color: {char.hair_color}</p>
                <p>Weight: {char.mass} kg</p>
              </InfoContainer>
            )}
          </CardContainer>
        )
      })}
    </>
  )
}
export default Card

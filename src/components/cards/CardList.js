import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import { ButtonsContainer } from './cards.styles'
import CustomButton from '../custom-button/CustomButton'

const CardList = () => {
  const page = useRef(1)
  const [pagination, setPagination] = useState(1)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchCharacter = async () => {
      await axios
        .get(`https://swapi.dev/api/people/?page=${page.current}`)
        .then(res => {
          setCharacters([...characters, res.data.results])
          page.current += 1
          if (!res.data.next) return
        })
    }
    fetchCharacter()
  }, [characters])

  const showMoreOrLess = ({ target }) => {
    const { name } = target

    if (name === 'showMore') {
      if (pagination === characters.length) return
      setPagination(pagination + 1)
    } else if (name === 'showLess') {
      if (pagination === 1) return
      setPagination(pagination - 1)
    } else {
      setPagination(characters.length)
    }
  }

  return (
    <div>
      {characters
        .filter((character, index) => index < pagination)
        .map((character, index) => (
          <Card key={index} character={character} />
        ))}
      <ButtonsContainer>
        <CustomButton name='showMore' onClick={showMoreOrLess}>
          Show 10 more
        </CustomButton>
        <CustomButton name='showLess' onClick={showMoreOrLess}>
          Show 10 less
        </CustomButton>
        <CustomButton name='showAll' onClick={showMoreOrLess}>
          Show all
        </CustomButton>
      </ButtonsContainer>
    </div>
  )
}

export default CardList

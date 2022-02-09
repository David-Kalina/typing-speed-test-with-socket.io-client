import { Flex } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { wordIndexAtom, wordOffsetAtom } from '../../store'
import { WordType } from '../../types'
import Character from '../Character'

function Index({ characters, id }: WordType) {
  const [wordIndex] = useAtom(wordIndexAtom)
  const [, setWordOffset] = useAtom(wordOffsetAtom)
  const ref = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      setWordOffset({
        top: ref.current.offsetTop,
        left: ref.current.offsetLeft,
      })
    }
  }, [wordIndex])

  const renderCharacters = characters.map(({ className, value, id, wordId, word }) => {
    return <Character id={id} word={word} wordId={wordId} key={id} className={className} value={value}></Character>
  })

  return (
    <Flex ref={wordIndex === id ? ref : undefined} m="0.25em" borderBottom="2px solid transparent" lineHeight="1em">
      {renderCharacters}
    </Flex>
  )
}

export default Index

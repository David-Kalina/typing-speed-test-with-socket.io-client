import { Box } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import React, { useEffect, useRef } from 'react'
import { caretPositionAtom, characterIndexAtom, mountCaretAtom, testStartedAtom } from '../../store'

function Index({ delay }: { delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [testStarted] = useAtom(testStartedAtom)
  const [{ top, left }] = useAtom(caretPositionAtom)
  const [, mountCaret] = useAtom(mountCaretAtom)

  useEffect(() => {
    mountCaret(ref.current as HTMLDivElement)
  }, [mountCaret])

  return (
    <Box
      ref={ref}
      position="absolute"
      h="1.15em"
      top={`${top - 2}px `}
      transition={`left ${delay}ms ease-in-out`}
      left={`${left - 2}px`}
      borderRadius="sm"
      width="0.1em"
      fontWeight="bold"
      bg="brand.200"
      className={testStarted ? 'caret' : 'blink'}
    />
  )
}

Index.displayName = 'Caret'

export default Index

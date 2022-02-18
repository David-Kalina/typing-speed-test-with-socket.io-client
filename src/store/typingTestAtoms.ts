import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { generateWords } from '../utils/generateWords'
import { characterIndexAtom } from './characterAtoms'
import { caretElementAtom, currentCharacterElementAtom, currentWordElementAtom } from './elementAtoms'
import { resultsAtom } from './resultsAtoms'
import { wordIndexAtom, wordsAtom } from './wordAtoms'

export const traversingExtraAtom = atom(false)

export const themeAtom = atomWithStorage<string>('theme', 'mountainHaze')

export const settingsOpenAtom = atom(false)

export const wordHeightAtom = atom<number>(0)

export const fontSizeAtom = atom<number>(2)

export const loadingAtom = atom<boolean>(true)

export const elapsedTimeAtom = atom<number>(0)

export const testStartedAtom = atom<boolean>(false)

export const testIdAtom = atom<string>(`${Date.now()}`)

export const resetAtom = atom(false)

export const setTestStartedAtom = atom(
  get => get(testStartedAtom),
  (get, set) => set(testStartedAtom, true)
)

export const testFinishedAtom = atom<boolean>(false)

export const testTimeAtom = atomWithStorage<number>('testTime', 15)

export const elapsed = atom<number>(0)

export const resetTypingTestAtom = atom(
  () => '',
  (get, set) => {
    set(characterIndexAtom, 0)
    set(wordIndexAtom, 0)
    set(wordsAtom, generateWords(100, 5))
    set(loadingAtom, true)
    set(testStartedAtom, false)
    set(testFinishedAtom, false)
    set(resultsAtom, [])
    set(elapsedTimeAtom, 0)
    set(currentCharacterElementAtom, null)
    set(currentWordElementAtom, null)
    set(caretElementAtom, null)
    set(testIdAtom, `${Date.now()}`)
  }
)

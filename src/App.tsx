import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Provider } from 'jotai'
import * as React from 'react'
import { ReactLocation, Router } from 'react-location'
import { routes } from './constants/routes'
import { AuthProvider } from './contexts/AuthContext'
import './styles.css'

const theme = extendTheme({
  colors: {
    mountainHaze: {
      100: '#c3ceda',
      200: '#738FA7',
      300: '#0C4160',
      400: '#071330',
      default: '#738FA7',
      correct: '#1a202c',
      incorrect: '#75172b',
      missed: '#738FA7',
      gradient: 'linear-gradient(to right, #c3ceda, #738FA7, #0C4160, #071330)',
    },
    warmSunset: {
      100: '#FD7F20',
      200: '#FC2E20',
      300: '#FDB750',
      400: '#010100',
      default: '#FDB750',
      correct: '#4d7077',
      incorrect: '#FC2E20',
      missed: '#FDB750',
      gradient: 'linear-gradient(to right, #FD7F20, #FC2E20, #FDB750, #010100)',
    },
    morningEspresso: {
      100: '#5C4E4E',
      200: '#988686',
      300: '#D1D0D0',
      400: '#000000',
      default: '#d1d0d0',
      correct: '#5c7b76',
      incorrect: '#ab5465',
      missed: '#d1d0d0',
      gradient: 'linear-gradient(to right, #5C4E4E, #988686, #D1D0D0, #000000)',
    },
    crackOfDawn: {
      100: '#001F3D',
      200: '#045174',
      300: '#D89C60',
      400: '#E87A00',
      default: '#E87A00',
      correct: '#fbbb7c',
      incorrect: '#d55757',
      missed: '#E87A00',
      gradient: 'linear-gradient(to right, #001F3D, #045174, #D89C60, #E87A00)',
    },
    steelFramework: {
      100: '#212223',
      200: '#C0C9D0',
      300: '#53565A',
      400: '#82858E',
      default: '#53565A',
      correct: '#82858E',
      incorrect: '#53565A',
      missed: '#53565A',
      gradient: 'linear-gradient(to right, #212223, #C0C9D0, #53565A, #82858E)',
    },
  },
})

const location = new ReactLocation()

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Provider>
        <AuthProvider>
          <Router routes={routes} location={location} />
        </AuthProvider>
      </Provider>
    </ChakraProvider>
  )
}

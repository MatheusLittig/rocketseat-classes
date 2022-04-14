import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    background: '#f2f3f5',
    text: '#666',
    grayLine: '#dcdde0',
    textHighLight: '#b3b9ff',
    title: '#2e384d',
    red: '#e83f5b',
    green: '#4cd62b',
    blue: '#5965e0',
    blueDark: '#4953b8',
    blueTwitter: '#2aa9e0'
  },
  fonts: {
    body: 'Inter, sans-serif, system.ui'
  },
  styles: {
    global: {
      body: {
        background: 'background',
        color: 'text'
      },
      'body, input, textarea, button': {
        font: 'body',
        fontWeight: 400,
        fontSize: 'md'
      },
      '@media(max-width: 1080px)': {
        fontSize: 'md'
      },
      '@media(max-width: 720px)': {
        fontSize: 'sm'
      },
      button: {
        cursor: 'pointer'
      },
      a: {
        color: 'inherit',
        textDecoration: 'none'
      }
    }
  }
})

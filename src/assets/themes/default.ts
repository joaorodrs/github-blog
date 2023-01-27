import { extendTheme } from '@chakra-ui/react'

/*
 * font-family: 'Baloo 2', cursive;
 * font-family: 'Roboto', sans-serif;
 */

export const defaultTheme = extendTheme({
  colors: {
    brand: {
      500: "#3294F8"
    },
    base: {
      input: '#040F1A',
      bg: '#071422',
      profile: "#0B1B2B",
      post: "#112131",
      border: "#1C2F41",
      label: '#3A536B',
      span: '#7B96B2',
      text: '#AFC2D4',
      subtitle: '#C4D4E3',
      title: '#E7EDF4',
    },
  },
  fonts: {
    body: "Nunito, sans-serif",
    heading: "Nunito, serif",
    mono: "monospace",
  },
})
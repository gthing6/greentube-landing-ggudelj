import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#E8F5E8',
      100: '#C1E4C1',
      200: '#9AD39A',
      300: '#73C173',
      400: '#4CB04C',
      500: '#259F25',
      600: '#1E7F1E',
      700: '#166016',
      800: '#0F400F',
      900: '#072007',
    },
    accent: {
      50: '#FFF5E6',
      100: '#FFE6B8',
      200: '#FFD68A',
      300: '#FFC75C',
      400: '#FFB82E',
      500: '#FFA900',
      600: '#CC8700',
      700: '#996500',
      800: '#664300',
      900: '#332200',
    },
  },
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
});

export default theme;
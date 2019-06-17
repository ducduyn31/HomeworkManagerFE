export const headerHeight = 70;

export const appColor = '#4caf50';

export const easing = 'cubic-bezier(0.35, 0.01, 0.77, 0.34);';

export default {
  breakpoints: {
    xs: 0,
    ix: 400,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1920,
  },
  palette: {
    primary: appColor,
    primaryLight: '#80e27e',
    primaryDark: '#087f23',
    secondary: '#f57f17',
    secondaryLight: '#ffb04c',
    secondaryDark: '#bc5100',
    overlay: '#252121',
  },
  textColor: {
    primary: '#000000',
    revertedPrimary: '#ffffff',
    secondary: '#000000',
  },
  button: {
    borderRadius: {
      xs: 4,
      lg: 28,
      xl: 32,
    },
    padding: {
      lg: [12, 28],
      xl: [14, 32],
    },
  },
};

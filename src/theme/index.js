const fontSize = Object.freeze({
  xs: 12,
  s: 14,
  m: 16,
  l: 20,
  xl: 24,
  xxl: 32,
});

const fontWeight = Object.freeze({
  regular: 500,
  medium: 600,
  bold: 700,
});

const color = Object.freeze({
  mainBlue: '#3563E9',
  skyBlue: '#54A6FF',
  pureWhite: '#FFFFFF',
  lightSteel: '#90A3BF',
  slateGray: '#596780',
  darkSlate: ' #1A202C',
  smoothBlack: '#13131399',
  deepBlack: '#131313',
  alertRed: '#ED3F3F',
  translucentGray: '#C3D4E966',
});

const spacing = Object.freeze({
  xxxs: 16,
  xxs: 20,
  xs: 24,
  s: 32,
  m: 36,
  l: 40,
  xl: 44,
  xxl: 48,
  xxxl: 60,
  xxxxl: 64,
});

const theme = Object.freeze({
  fontSize,
  fontWeight,
  color,
  spacing,
});

export { theme, fontSize, fontWeight, color, spacing };
export { GlobalStyle } from 'theme/GlobalStyle';

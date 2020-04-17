const app = {
  primary: '#0E4EF8',
  secondary: '#17233D',
};
const appText = {
  fontPrimary: '#8C8E90',
  fontSecondary: '#61C2E6',
};
const text = {
  textPrimary: '#222222',
  textSecondary: '#777777',
  headingPrimary: app.primary,
  headingSecondary: app.primary,
};
const borders = {border: '#D0D1D5'};

export default {...app, ...text, ...borders, ...appText};

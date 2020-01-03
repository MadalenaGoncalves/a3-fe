const BASE_FONT_SIZE = 16;

const toRem = (valueInPx) => `${valueInPx / BASE_FONT_SIZE}rem`;

// font sizes in px
const fontSizeDefinitions = [
  14,
  16,
  18,
  30,
  48
];

// spacing values in px
const spacingDefinitions = [
  2,
  4,
  5,
  6,
  8,
  10,
  12,
  13,
  14,
  15,
  16,
  18,
  20,
  22,
  24,
  28,
  30,
  32,
  40,
  50,
  60,
  70,
  96
];


// ------- FONTS -------
const fonts = {};
fonts.family = {};
fonts.family.primary = "'Open Sans', sans-serif";
fonts.family.secondary = "'Raleway', 'Open Sans', sans-serif";

fonts.weight = {}
fonts.weight.lighter = 200;
fonts.weight.light = 300;
fonts.weight.normal = 400;
fonts.weight.softbold = 500;
fonts.weight.semiboldbold = 600;
fonts.weight.bold = 700;

fonts.size = {}
fonts.size.base = BASE_FONT_SIZE;
fontSizeDefinitions.forEach(n => { fonts.size[`_${n}`] = toRem(n); });


// ------- SPACING in rem -------
const spacing = {};
// const spacing = toRem;
spacingDefinitions.forEach(n => { spacing[`_${n}`] = toRem(n); });
spacing.sectionVerticalSpacing = '4.5rem';
spacing.pageLayoutMargin = '7rem';


// ------- COLORS -------
const colors = {};
colors.primary = '#22313f';
colors.white = '#fff';
colors.black = '#000';
// colors.black = 'rgb(95, 93, 93)';
// colors.lightgray = '#edf0eb';
colors.gray = 'rgb(95, 93, 93)';
colors.lightgray = 'rgba(219, 214, 209, 0.4)';
// colors.menubar = 'rgba(255,255,255,0.5)';
colors.menubar = colors.white;
colors.footerBg = colors.primary;


export default {
  colors,
  fonts,
  spacing,
  toRem,
};

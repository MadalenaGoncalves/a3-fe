const BASE_FONT_SIZE = 14;

// font sizes in px
const fontSizeDefinitions = [
  12,
  14,
  16,
  18,
  22,
  28,
  30,
  32,
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
  96,
];

const toRem = (valueInPx) => `${valueInPx / BASE_FONT_SIZE}rem`;


// ------- FONTS -------
const fonts = {};
fonts.family = {};
fonts.family.primary = "'Open Sans', sans-serif";
fonts.family.secondary = "'Raleway', 'Open Sans', sans-serif";

fonts.weight = {}
fonts.weight.light = 200;
fonts.weight.normal = 400;
fonts.weight.bold = 700;

fonts.size = {}
fonts.size.base = BASE_FONT_SIZE;
// fontSizeDefinitions.forEach(n => { fonts.size[`_${n}`] = toRem(n); });
fontSizeDefinitions.forEach(n => { fonts.size[`_${n}`] = `${n}px`; });


// ------- SPACING in rem -------
const spacing = {};
// spacingDefinitions.forEach(n => { spacing[`_${n}`] = toRem(n); });
spacingDefinitions.forEach(n => { spacing[`_${n}`] = `${n}px`; });
spacing.sectionVerticalSpacing = '4.5rem';
spacing.pageLayoutMargin = '7rem';


// ------- COLORS -------
const colors = {};
colors.primary = '#22313f';
colors.white = '#fff';
colors.black = '#000';
colors.yellow = '#FFCC00';
colors.yellow1 = '#ffcc33';
colors.linkYellow = '#EFB31B';
colors.projekte = '#669999';
// colors.black = 'rgb(95, 93, 93)';
// colors.lightgray = '#edf0eb';
colors.gray = 'rgb(95, 93, 93)';
// colors.lightgray = 'rgba(219, 214, 209, 0.4)';
colors.linegray = 'rgba(219, 214, 209, 0.9)';
// colors.menubar = 'rgba(255,255,255,0.5)';
colors.menubar = colors.white;
colors.footerBg = colors.primary;


export default {
  colors,
  fonts,
  spacing,
  toRem,
};

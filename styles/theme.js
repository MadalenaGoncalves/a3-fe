const fonts = {};
fonts.family = {};
fonts.family.primary = "'Open Sans', sans-serif";
fonts.family.secondary = "'Raleway', 'Open Sans', sans-serif";

const colors = {};
colors.primary = '#22313f';
// colors.menubar = 'rgba(255,255,255,0.5)';
colors.white = '#fff';
colors.black = '#000';
// colors.black = 'rgb(95, 93, 93)';
// colors.lightgray = '#edf0eb';
colors.gray = 'rgb(95, 93, 93)';
colors.lightgray = 'rgba(219, 214, 209, 0.4)';

colors.menubar = colors.white;
colors.footerBg = colors.primary;

const spacing = {};
spacing.sectionVerticalSpacing = '4.5rem';
spacing.pageLayoutMargin = '7rem';


const media = {};

export default {
  colors,
  fonts,
  spacing,
};

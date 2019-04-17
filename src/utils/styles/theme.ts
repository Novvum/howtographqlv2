// Guide
// [C] means `Component`
// --> Comments marked with //// are top level categories
// --> No tag comments (//) are sub categories
// --> Inline comments are for description

// Q: What to not put here?
// A: Don't put a variable here, if it is only valid to be with
//    a specific component, like `buttonHeight` should be stored beside
//    the `Button` component since it's not useful if that button is not
//    present.

export default {
  //// Colors
  primary: '#0C344B',
  primaryDark1: '#082333',
  primaryLight1: '#3D5866',
  primaryLight2: '#8FA6B2',
  primaryLight3: '#CCD9DF',
  primaryLight4: '#EFF3F5',
  primaryLight5: '#F0F0F0',
  primaryLight6: '#F7F9FA',
  primaryLight7: '#EDF2F5',
  orange: '#FF8934',
  orangeLight1: '#FFF1BD',
  violet: '#AA0D95',
  violetLight1: '#F2CFED',
  green: '#15BD76',
  greenLight1: '#C2F0DC',
  blue: '#0F7AD8',
  blueLight1: '#C2DCF2',
  lightBlue: '#00CCE4',
  lightBlueLight1: '#B8EDF3',
  red: '#FF4F56',
  redLight1: '#FFDCDE',
  yellow: '#FFCC07',
  yellowLight1: '#FFF1BD',

  ///// Sizes
  // Font Sizes
  sizeHeroTitle: 48,
  sizeHeroSubtitle: 24,
  sizeSectionTitle: 32,
  sizeSectionSubtitle: 20,
  sizeFeatureTitle: 28,
  sizeFeatureDesc: 16,
  sizeBullet: 16,
  sizeParagraphTitle: 20,
  sizeParagraph: 16,
  sizeActions: 16 /* Buttons, links, nav items, etc */,
  sizeActionsSmall: 14,
  sizeCode: 12,
  // Radius
  radius: 6,
  radiusBig: 8,
  radiusSmall: 4,
  // [C] Container
  middleContainerWidth: 1200,
  middleContainerNarrowWidth: 1100,
  // [C] Nav
  navHeight: 40,
  // Spaces
  space8: 8,
  space12: 12,
  space16: 16,
  space24: 24,
  space32: 32,
  space40: 40,
  space64: 64,
  space128: 128,
  // Z Index
  diagonalBgZIndex: 1,
  getStartedCardZIndex: 5,
  worldMapZIndex: 1,
  overlayZIndex: 100,

  // Font Family Stacks
  fontStackMono:
    "SFMono-Regular, 'Roboto Mono', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
};

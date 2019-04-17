import {
  Colors,
  Sizes,
  ZIndex,
  Shorthands,
  EditorColors,
  Shape,
} from './index';
export interface ThemeInterface {
  mode: 'light' | 'dark';
  colors: Colors;
  sizes: Sizes;
  shape: Shape;
  shadows: any;
  zIndex: ZIndex;
  shorthands: Shorthands;
  transitions: Transitions;
  editorColors: EditorColors;
}

const whitePallet = {
  white: '#FFFFFF',
};

const blackPallet = {
  black: '#000000',
};

const yellowPallet = {
  gold: '#EED202',
};

const greenPallet = {
  meadow: '#21CB62',
};

const purplePallet = {
  royal: '#606DE5',
};

const bluePallet = {
  anakiwa: '#9FDDFF',
  onahau: '#D0EEFF',
  selago: '#F6F8FE',
};

const shadowPallet = {
  light: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  heavy:
    'box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;',
};

export const customColors = {
  ...whitePallet,
  ...bluePallet,
  ...blackPallet,
  ...yellowPallet,
  ...greenPallet,
  ...purplePallet,
  ...shadowPallet,
} as const;

// s- show, l - landscape, h - hide, p - portrait
const calculateHeight = (showFrame, isLandscape, sl, sp, hl, hp) => {
  let heightValue;

  if (showFrame && isLandscape) {
    heightValue = sl;
  } else if (showFrame && !isLandscape) {
    heightValue = sp;
  } else if (!showFrame && isLandscape) {
    heightValue = hl;
  } else if (!showFrame && !isLandscape) {
    heightValue = hp;
  }

  return {
    height: heightValue,
  };
};

export default calculateHeight;
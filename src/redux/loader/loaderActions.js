export const Type = {
  LOADER_ON: 'LOADER_ON',
  LOADER_OFF: 'LOADER_OFF',
};

export const loaderOn = () => ({
  type: Type.LOADER_ON,
});
export const loaderOff = () => ({
  type: Type.LOADER_OFF,
});

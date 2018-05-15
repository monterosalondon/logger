export const LEVELS = {
  WARN: 'warn',
  INFO: 'info',
  ERROR: 'error',
  DEBUG: 'debug',
  SILLY: 'silly',
  VERBOSE: 'verbose'
};

export const LEVELS_PRIORITIES = {
  [LEVELS.WARN]: 1,
  [LEVELS.INFO]: 2,
  [LEVELS.ERROR]: 0,
  [LEVELS.DEBUG]: 4,
  [LEVELS.SILLY]: 5,
  [LEVELS.VERBOSE]: 3
};

import colors from 'colors';

import LoggerCreator from './logger-creator';

colors.setTheme({
  info: 'green',
  warn: 'yellow',
  debug: 'blue',
  error: 'red',
  silly: 'magenta',
  verbose: 'cyan'
});

function logWithColors(level, message) {
  const func = console[level] || console.log;

  func(colors[level](message));
}

const loggerCreator = new LoggerCreator(logWithColors);

export { LEVELS } from './helpers';

export const setName = loggerCreator.setName.bind(loggerCreator);
export const setLevel = loggerCreator.setLevel.bind(loggerCreator);
export const getLogger = loggerCreator.getLogger.bind(loggerCreator);
export const setTransport = loggerCreator.setTransport.bind(loggerCreator);

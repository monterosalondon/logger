import { LEVELS, LEVELS_PRIORITIES } from './helpers';

export default class LoggerCreator {
  constructor(logWithColors) {
    this.name = 'base';
    this.level = LEVELS.INFO;
    this.transport = () => {};
    this.logWithColors = logWithColors;
  }

  getLogger(prefix) {
    const log = this._create(prefix);

    return {
      info: log(LEVELS.INFO),
      warn: log(LEVELS.WARN),
      error: log(LEVELS.ERROR),
      debug: log(LEVELS.DEBUG),
      silly: log(LEVELS.SILLY),
      verbose: log(LEVELS.VERBOSE),
    };
  }

  setLevel(level) {
    this.level = level;
  }

  setName(name) {
    this.name = name;
  }

  setTransport(transport = () => {}) {
    this.transport = transport;
  }

  _create(prefix) {
    return level => (message = '', ...splat) => {
      if (LEVELS_PRIORITIES[this.level] < LEVELS_PRIORITIES[level]) {
        return;
      }

      let splatIndex = 0;
      const messageWithSplat = message.replace(/%s|%j/g, type => {
        const arg = splat[splatIndex++];

        if (type === '%s') {
          return arg;
        }

        return JSON.stringify(arg);
      });

      const logStashFormat = {
        '@name': name,
        '@level': level,
        '@timestamp': new Date(),
        '@prefix': prefix,
        '@message': messageWithSplat,
        '@splat': splat,
      };

      this.transport(logStashFormat);

      this.logWithColors(level, JSON.stringify(logStashFormat));
    };
  }
}

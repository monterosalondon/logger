# MLogger [![Downloads](https://img.shields.io/npm/dm/@monterosa/logger.svg)](https://www.npmjs.com/package/@monterosa/logger) [![License](https://img.shields.io/npm/l/@monterosa/logger.svg)](https://github.com/monterosalondon/logger) [![ESLint code style](https://img.shields.io/badge/code_style-ESLint-4b33c3.svg)](https://github.com/eslint/eslint) [![GitHub stars](https://img.shields.io/github/stars/monterosalondon/logger.svg?style=social&label=Stars)](https://github.com/monterosalondon/logger)

> The colorful tool for the NodeJS and browsers logs

## Install

```
$ npm install @monterosa/logger
```

## Usage

```
import { LEVELS, setLevel, getLogger } from '@monterosa/logger';

setLevel(LEVELS.DEBUG); // LEVELS.INFO by default

const logger = getLogger('prefix');

logger.info("this is '%s' level", 'info'); // {"@level":"info","@timestamp":"2018-05-15T09:09:11.781Z","@prefix":"prefix","@message":"this is 'info' level","@splat":["info"]}

logger.warn("this is %j", { level: 'info' }); // {"@level":"warn","@timestamp":"2018-05-15T09:09:11.782Z","@prefix":"prefix","@message":"this is {\"level\":\"info\"}","@splat":[{"level":"info"}]}

logger.error("Fatal error %s", new Error('some error')); // {"@level":"error","@timestamp":"2018-05-15T09:09:11.782Z","@prefix":"prefix","@message":"Fatal error Error: some error","@splat":[{}]}

logger.debug("userName=%s, userData=%j", 'z4o4z', data); // {"@level":"error","@timestamp":"2018-05-15T09:09:11.782Z","@prefix":"prefix","@message":"userName=z4o4z, userData={...}","@splat":['z4o4z', {...}]}
```

## API

* [`LEVELS`](#levels)
* [`setLevel`](#setLevel)
* [`getLogger`](#getLogger)
* [`setTransport`](#setTransport)

### `LEVELS`

The map of available log levels.

```
LEVELS.ERROR // error
LEVELS.WARN // warn
LEVELS.INFO // info
LEVELS.DEBUG // debug
LEVELS.VERBOSE // verbose
LEVELS.SILLY // silly
```

### `setLevel`

The method to set log level. Gets level as an argument. By default level is `LEVELS.INFO`. Can be called in runtime.

```
setLevel(LEVELS.DEBUG);
```

### `getLogger`

The method gets some prefix and returns logger instance with methods below:

```
logger.error
logger.warn
logger.info
logger.debug
logger.verbose
logger.silly
```

The prefix will be added to the logs as `@prefix`, for the NodeJS applications we are recommending to use `__filename`(global variable) as a prefix for easy debugging and finding something in the logs

### `setTransport`

This method allows you set function which will be called before logging something in the console.

## Created by

* [Evgeny Zaytsev](https://github.com/z4o4z)

## License

MIT

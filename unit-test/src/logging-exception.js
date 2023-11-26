import { createLogger, transports } from "winston";

const path_log = './logs';

const logger = createLogger({
  level: 'debug',
  // handleExceptions: true,
  transports: [
    new transports.File({filename: `${path_log}/exception.log`, handleExceptions: true})
  ]
})

hello();
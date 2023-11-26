import { createLogger, transports } from "winston";

const path_log = './logs';

const logger = createLogger({
  level: 'debug',
  // handleExceptions: true,
  // handleRejections: true,
  transports: [
    new transports.File({
      filename: `${path_log}/exception.log`,
      handleExceptions: true,
      handleRejections: true
    })
  ]
})

async function callASync() {
  return Promise.reject('Ups');
}
callASync();
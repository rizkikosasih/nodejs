import { createLogger, format, transports } from "winston";
import { startCase } from "lodash";
import dailyRotateFile from 'winston-daily-rotate-file';
import moment from 'moment';
import 'moment/locale/id';
const { combine, printf } = format;
moment.locale('id')

test("Create new logger", () => {
  const path_log = './logs';
  const logger = createLogger({
    level: "info",
    transports: [
      new transports.Console({}),
      new dailyRotateFile({
        filename: `${path_log}/application-%DATE%.log`,
        datePattern: 'DD-MM-YYYY',
        level: 'error',
        zippedArchive: true,
        maxSize: '5m',
        maxFiles: '14d'
      }),
    ],
    format: combine(printf(({ message }) => {
      return `[${moment().format("dddd, Do MMMM YYYY, hh:mm:ss Z")}] ${message}`;
    }))
  });
  for (var i = 0; i < 100000; i++) {
    logger.error(startCase(`hello error ${i}`))
  }
});

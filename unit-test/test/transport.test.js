import {createLogger} from "winston";
import transportStream from 'winston-transport';
import { startCase } from "lodash";
import moment from 'moment';
import 'moment/locale/id';
moment.locale('id')

test("Create new logger with transport stream", () => {
  class myTransport extends transportStream {
    constructor(option) {
      super(option);
    }
    log(info, next) {
      console.info(`[${moment().format("dddd, Do MMMM YYYY, hh:mm:ss Z")}] ${info.message}`);
      next();
    }
  }

  const logger = createLogger({
    level: "info",
    transports: [
      new myTransport({}),
    ],
  });
  for (var i = 1; i <= 5; i++) {
    logger.error(startCase(`hello world ${i}`))
  }
});

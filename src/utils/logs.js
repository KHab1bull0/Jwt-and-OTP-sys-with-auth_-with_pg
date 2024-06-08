// import pkg from 'winston';
// import 'winston-mongodb'
// import dotenv from "dotenv";
// dotenv.config()

// const { createLogger, transports, format, all } = pkg;


// export const httpLogger = createLogger({
//     level: "http",
//     format: format.combine(
//         format.timestamp(),
//         format.simple(),
//         // format.json(),
//         // format.prettyPrint(),
//         // format.colorize({ all: true }),
//     ),
//     transports: [
//         // new transports.Console(),
//         // new transports.File({filename: 'application.log'}),
//         new transports.MongoDB({
//             level: "http",
//             db: process.env.DB_URI,
//             collection: "Http_logs",
//             options: { useUnifiedTopology: true }
//         })
//     ],

//     exceptionHandlers: [new transports.MongoDB({
//         level: "silly",
//         db: process.env.DB_URI,
//         collection: 'exceptionHandlers',
//         options: { useUnifiedTopology: true }
//     })],
//     rejectionHandlers: [new transports.MongoDB({
//         level: "silly",
//         db: process.env.DB_URI,
//         collection: 'rejectionHandlers',
//         options: { useUnifiedTopology: true }
//     })]

// });

// export const errorLogger = createLogger({
//     level: "error",
//     format: format.combine(
//         format.timestamp(),
//         format.simple(),
//         // format.json(),
//         // format.prettyPrint(),
//         // format.colorize({ all: true }),
//     ),
//     transports: [
//         // new transports.Console(),
//         // new transports.File({filename: 'application.log'}),
//         new transports.MongoDB({
//             level: "error",
//             db: process.env.DB_URI,
//             collection: "Error_logs",
//             options: { useUnifiedTopology: true }
//         })
//     ],
    
//     exceptionHandlers: [new transports.MongoDB({
//         level: "silly",
//         db: process.env.DB_URI,
//         collection: 'exceptionHandlers',
//         options: { useUnifiedTopology: true }
//     })],
//     rejectionHandlers: [new transports.MongoDB({
//         level: "silly",
//         db: process.env.DB_URI,
//         collection: 'rejectionHandlers',
//         options: { useUnifiedTopology: true }
//     })]
// })


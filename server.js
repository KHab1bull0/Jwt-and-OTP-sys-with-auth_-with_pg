import { app } from "./src/app.js";
import dotenv from 'dotenv';
// import { errorLogger } from "./src/utils/logs.js";

dotenv.config()



process.on('uncaughtException', (err) => {
    console.log(err);
    // errorLogger.error(err);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // errorLogger.error('Unhandled Rejection:', reason);
    process.exit(1);
});


// app.set('view engine', 'ejs');

// const users = [
//     {
//         name: "Ahmat",
//         age: 23
//     },{
//         name: "Dilshod",
//         age: 32
//     },{
//         name: "Olim",
//         age: 12
//     },{
//         name: "Odil",
//         age: 22
//     }
// ]

// app.get('/home', (req, res) => {
//     res.render('../pages/home', {
//         title: "Hello ejs",
//         users
//     });
// })

// app.get('/about', (req, res) => {
//     res.render('../pages/about', {
//         title: "Hello ejs",
//         users
//     });
// })

// app.get('/', (req, res) => {
//     res.render('index', {
//         title: "EJS dars",
//         users,
//     });
// })


const PORT = process.env.PORT

app.listen(PORT, (err) => {
    if (err) {
        console.log("Server error");
        console.log(err);
    };
    console.log(`Server is working on port : ${PORT}\n`);
});



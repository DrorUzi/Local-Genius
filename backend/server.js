const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const firebase = require("firebase/app");

const app = express()
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const authRoutes = require('./api/auth/auth.routes')
const userRoutes = require('./api/user/user.routes')
const reviewRoutes = require('./api/review/review.routes')
const bookingRoutes = require('./api/booking/booking.routes')
const chatRoutes = require('./api/chat/chat.routes')
const notifRoutes = require('./api/notif/notif.routes')
const connectSockets = require('./api/socket/socket.routes')


app.use(cookieParser())
app.use(bodyParser.json());
app.use(session({
    secret: 'walak walak999888',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))


if (process.env.NODE_ENV !== 'production') {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080'],
        credentials: true
    };
    app.use(cors(corsOptions));
}

// routes
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/review', reviewRoutes)
app.use('/api/booking', bookingRoutes)
app.use('/api/chat', chatRoutes)
app.use('/api/notif', notifRoutes)
connectSockets(io)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
}

const port = process.env.PORT || 3000;
http.listen(port, () => {
    console.log('Server is running on port: ' + port);
});

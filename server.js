// DEPENDENCIES
const express    = require('express');
const session    = require('express-session');
const mongoose   = require('mongoose');
const morgan     = require('morgan');
const cors 			 = require('cors');
const app        = express();
require('pretty-error').start();

// CONFIG
const PORT       = process.env.PORT || 3000;
const mongoURI   = process.env.MONGODB_URI || 'mongodb://localhost/dryhollow'
const secretSess = process.env.KICKASS || 'smokeweedeveryday'

// Connect to Mongo
mongoose.connect ( mongoURI );
const db = mongoose.connection;
db.on( 'error', ( err ) => console.log( err.message + ' is Mongod not running?' ));
db.on( 'connected', () => console.log( 'Mongo OK: ', mongoURI ));
db.on( 'disconnected', () => console.log( 'Mongo Disconnected' ));
mongoose.Promise = global.Promise;

// Controllers
// const infoObjectController = require( './controllers/infoObjectController' );
// const userController = require( './controllers/userController' );


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
// app.use('/angular/angular', express.static('node_modules/angular'));
// app.use('/angular/angular-route', express.static('node_modules/angular-route'));
// app.use('/angular/angular-aria', express.static('node_modules/angular-aria'));
// app.use('/angular/angular-animate', express.static('node_modules/angular-animate'));
// app.use('/angular/angular-messages', express.static('node_modules/angular-messages'));
// app.use('/angular/angular-material', express.static('node_modules/angular-material'));
// app.use('/angular/angular-sanitize', express.static('node_modules/angular-sanitize'));
app.use(morgan('dev'));
app.use(cors());
app.use(session({
	 secret: secretSess,
	 resave: false,
	 saveUninitialized: false,
   cookie: { secure: true, maxAge: 604800000 }
}));
// app.use('/object', infoObjectController);
// app.use('/user', userController);


app.get('/:whatever', (req, res) => res.redirect('/'))
app.get('/:whatever/:whatever', (req, res) => res.redirect('/'))

app.listen(PORT, () => {
   console.log('Server OK: ' + PORT);
});

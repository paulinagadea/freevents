require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/freevents`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Event, Service, Provider, Order, Review, User, Favorite } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

//Uno a Uno

//Uno a Muchos User

User.hasMany(Event);
Event.belongsTo(User);

User.hasMany(Provider);
Provider.belongsTo(User);

User.hasMany(Service);
Service.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Review);
Review.belongsTo(User);

User.hasMany(Favorite);
Favorite.belongsTo(User);

//Uno a Muchos Event, Provider, Service con Order

Event.hasMany(Order);
Order.belongsTo(Event);

Provider.hasMany(Order);
Order.belongsTo(Provider);

Service.hasMany(Order);
Order.belongsTo(Service);

//Uno a Muchos Provider

Provider.hasMany(Review);
Review.belongsTo(Provider);

Provider.hasMany(Favorite);
Favorite.belongsTo(Provider);


//Muchos a Muchos

Event.belongsToMany(Provider, { through: 'events_providers' });
Provider.belongsToMany(Event, { through: 'events_providers' });

Provider.belongsToMany(Service, { through: 'providers_services' });
Service.belongsToMany(Provider, { through: 'providers_services' });




module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};

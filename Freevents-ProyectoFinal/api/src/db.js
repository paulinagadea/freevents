require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {}
  }
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
const { Event, Service, Provider, Order, Review, Client, Favorite, Pack_services } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

//Uno a Uno

//Uno a Muchos User

Client.hasMany(Provider);
Provider.belongsTo(Client);

Client.hasMany(Order);
Order.belongsTo(Client);

Client.hasMany(Review);
Review.belongsTo(Client);

Client.hasMany(Favorite);
Favorite.belongsTo(Client);

//Uno a Muchos Event, Provider, Service con Order

Pack_services.hasMany(Order);
Order.belongsTo(Pack_services);

Provider.hasMany(Order);
Order.belongsTo(Provider);

//Uno a Muchos Provider

Provider.hasMany(Review);
Review.belongsTo(Provider);

Provider.hasMany(Favorite);
Favorite.belongsTo(Provider);

Provider.hasMany(Pack_services);  
Pack_services.belongsTo(Provider);

Event.hasMany(Review); 

Event.hasMany(Review);

Event.hasMany(Review);

Review.belongsTo(Event); 

//Muchos a Muchos

Provider.belongsToMany(Event, { through: 'providers_events' });
Event.belongsToMany(Provider, { through: 'providers_events' });

Pack_services.belongsToMany(Service, { through: 'pack_service_service' });
Service.belongsToMany(Pack_services, { through: 'pack_service_service' });

Pack_services.belongsToMany(Event, { through: 'pack_service_event' });
Event.belongsToMany(Pack_services, { through: 'pack_service_event' })

// Pack_services.belongsToMany(Provider, { through: 'pack_service_provider' });
// Provider.belongsToMany(Pack_services, { through: 'pack_service_provider' })






module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};

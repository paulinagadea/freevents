require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/test_db_g88r_iujt`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {}}
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
const { Category, Pack_Service, Provider, Order, Review, User, Favorite } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

//Uno a Uno

//Uno a Muchos User

// User.hasMany(Category, {as: "usuario_categorias", foreignKe: "usuario_categoriasId" });
// Category.belongsTo(User, {as: "categoria_usuarios"});

// User.hasMany(Provider, {as: "usuario_proveedores", foreignKe: "usuario_proveedoresId" });
// Provider.belongsTo(User, {as: "proveedor_usuarios"});

// User.hasMany(Pack_Service, {as: "usuario_servicios", foreignKe: "usuario_serviciosId" });
// Pack_Service.belongsTo(User, {as: "servicio_usuarios"});

// User.hasMany(Order, {as: "usuario_ordenes", foreignKe: "usuario_ordenesId" });
// Order.belongsTo(User, {as: "orden_usuarios"});

// User.hasMany(Review, {as: "usuario_calificaciónes", foreignKe: "usuario_calificaciónesId" });
// Review.belongsTo(User, {as: "calificación_usuarios"});

// User.hasMany(Favorite, {as: "usuario_favoritos", foreignKe: "usuario_favoritosId" });
// Favorite.belongsTo(User, {as: "favorito_usuarios"});

//Uno a Muchos Event, Provider, Service con Order

// Category.hasMany(Order, {as: "categoria_ordenes", foreignKe: "categoria_ordenesId" });
// Order.belongsTo(Category, {as: "orden_categorias"});

// Provider.hasMany(Order, {as: "proveedor_ordenes", foreignKe: "proveedor_ordenesId" });
// Order.belongsTo(Provider, {as: "orden_proveedores"});

// Pack_Service.hasMany(Order, {as: "pack_servicio_ordenes", foreignKe: "pack_servicio_ordenesId" });
// Order.belongsTo(Pack_Service,{as: "orden_pack_servicios"});

// //Uno a Muchos Provider

// Provider.hasMany(Review, {as: "proveedor_calificaciónes", foreignKe: "proveedor_calificaciónesId" });
// Review.belongsTo(Provider, {as: "calificación_proveedores"});

// Provider.hasMany(Favorite, {as: "proveedor_favoritos", foreignKe: "proveedor_favoritosId" });
// Favorite.belongsTo(Provider, {as: "favorito_proveedores"});


//Muchos a Muchos

Category.belongsToMany(Provider, { through: 'events_providers' });
Provider.belongsToMany(Category, { through: 'events_providers' });

Category.belongsToMany(Pack_Service, { through: 'providers_services' });
Pack_Service.belongsToMany(Category, { through: 'providers_services' });




module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};

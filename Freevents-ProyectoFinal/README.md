![Freevents](https://res.cloudinary.com/freevents/image/upload/v1665519693/Imagens/wccuneous3s7xsmopnkn.jpg)

# Individual Final - Freevents

<img height="150" src="https://res.cloudinary.com/freevents/image/upload/v1664336907/Imagens/foto-junta_oebqnh.jpg.png" />

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.


## Comenzando

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

- __Node__: 12.18.3 o mayor
- __NPM__: 6.14.16 o mayor

__ACLARACIÓN:__ Las dependencias actuales se encuentran en las versiones que venimos trabajando durante el bootcamp.

Versiones:

- __react__: 17.0.1
- __react-dom__: 17.0.1
- __react-router-dom__: 5.2.0
- __redux__: 4.0.5
- __react-redux__: 7.2.3


## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.


## Descripcion

La idea general es crear una aplicación web tipo Marketplace en la cual se puedan crear un evento festivo como: Matrimonio, Cumpleaños, 15 Años, Bautizos, Despedidas de Solter@s, Aniversarios, Baby Showers y Full Party, donde segun la necesidad del cliente podra seleccionar distintos paquetes que ofrecen diferentes proveedores con variedad de servicios. Por otro lado ofreceremos el registro de proveedores para publicar sus servicios armando diferentes paquetes que se ajusten a los diferentes eventos que el cliente desea organizar.


- Registrar Usuario
- Crear Perfil de Usuario
- Autentificar Registro de Usuario
- Buscar Paquetes
- Buscar Proveedores
- Filtrarlos / Ordenarlos
- Crear Pasarela de Pago
- Crear Panel de Admin
- Habilitar Baneo de Paquetes, Clientes y Proveedores por medio del panel de admin


#### Tecnologías Utilizadas

- [X] React
- [X] Redux
- [X] Express
- [X] Sequelize - Postgres
- [X] Auth0
- [X] MercadoPago
- [X] Material UI
- [X] MaterialTable


## Base de datos

El modelo de la base de datos posee las siguientes entidades:

ojo modificar........

- [X] Pokemon con las siguientes propiedades:
  - ID (Número de Pokemon) * : No puede ser un ID de un pokemon ya existente en la API pokeapi
  - Nombre *
  - Vida
  - Ataque
  - Defensa
  - Velocidad
  - Altura
  - Peso
- [X] Tipo con las siguientes propiedades:
  - ID
  - Nombre

La relación entre entidades son:



## Backend

Se desarrollo un servidor en Node/Express con las siguientes rutas:

__IMPORTANTE__: la base de datos que usamos en toda la aplicacion fue creada por nosotros sin uso de Apis externas.


ojo cambiar ........
- [X] __GET /pokemons__:
  - Obtener un listado de los pokemons desde pokeapi.
  - Debe devolver solo los datos necesarios para la ruta principal
- [X] __GET /pokemons/{idPokemon}__:
  - Obtener el detalle de un pokemon en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de pokemon
  - Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes
- [X] __GET /pokemons?name="..."__:
  - Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
  - Si no existe ningún pokemon mostrar un mensaje adecuado
- [X] __POST /pokemons__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
  - Crea un pokemon en la base de datos relacionado con sus tipos.
- [X] __GET /types__:
  - Obtener todos los tipos de pokemons posibles
  - En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

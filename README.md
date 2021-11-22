# Desafio!

## Descripción del desafio.

La idea es crear una comunicacion en tiempo real entre la base de datos y el front end, donde al cambiar los nombres en una tabla llamada `my_friends` se impriman los cambios en el front end.

Las herramientas a utilizar son

- Postgres.
- NodeJs/Express.
- React.
  - Material Ui.

## Inicializar el proyecto.

0. Antes que nada `yarn install`.

1. Levantar un servidor de postgres y correr el script que se ecuentra en el archivo `db.sql`.

2. Abrir una consola en la carpeta raiz y correr `yarn start`.

3. Una vez ambos proyectos esten levantados se debera configurar las variables de entorno si es que las hay en un archivo `.env` para que acepte la configuracion de postgres y proporcionar los datos que se usaron para crear el servidor y la base de datos. El proyecto deberia estar funcionando ahora.

## Introduccion al desafio.

Buscamos que cuando se haga alguna actualizacion en la tabla `my_friends`, se transmiten los datos hacia el front end en tiempo real y se muestran notificaciones con la informacion anterior y la informacion actual.

## Solucion

Primero configuramos un trigger desde la base de datos que cree registros en una tabla vacia con los datos nuevos y los datos viejos, luego configuramos un segundo trigger para que la base de datos envie un evento con la funcion `pg_notify` hacia el servidor.

Luego, en el backend, recibimos la señal con el modulo `pg`, abrimos una coneccion con el metodo `.connect()`, y mantenemos a la espera de nuevos eventos desde la base de datos con el metodo `.query()`.

Para comunicar el backend y el front utilizamos `socket.io` que nos permite mantener la comunicacion en tiempo real configurando el servidor con el modulo `http` y lo configuramos en el puerto 5000(puerto del backend).

En el frontend, se uso `create-react-app` y `@mui/material` para crear los componentes y el modulo `socket.io-client` para comunicar ambos servidores. Luego utilizamos 'react hooks' para crear un estado que se modifique con cada dato enviado.

## Dependencias

Para este proyecto se utilizo:

##### `pg` para la comunicacion en tiempo real con la base de datos

##### `express` backend framework

##### `babel` para soportar convenciones de ECS6 del backend

##### `http` para levantar un servidor para los websockets

##### `socket.io` para la comuniacion en tiempo real del frontend y el backend

##### `material ui && create-react-app` para la creacion del front end y los componentes

##### `react` frontend framework

##### `sequelize` para el modelado de la base de datos

##### `concurrently` para levantar el proyecto con una sola instancia de `npm start`

## Errores, problemas y mejoras

- [ ] Un controlador para el modelo y no se configuraron endpoints para hacer las actualizaciones de la base de datos desde el navegador.

- [x] ~~El comportamiento es un poco inestable cuando lleva largos periodos de tiempo inactivo, un testing podria ayudar a mejorar problemas de comportamiento.~~
      **Este comportamiento parece haberse estabilizado y quizas haya sido debido al testing.**

## Conclusiones

Aprendí muchisimo de este proyecto, fue altamente gratificante, enriquecedor y apasionante.

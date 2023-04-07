# Descripcion de la app
Cine+ es la herramienta perfecta para los amantes del cine.
La app te ofrece información detallada sobre películas, te muestra dónde verlas en el cine más cercano, ofreciéndote descuentos y promociones en la compra de entradas.
De cada película vas a poder ver su sinopsis, valoración, en que plataforma de streaming poder verla y comentarios de otros usuarios acerca de la película, además que poder comprar entradas para verla en el cine, si es que se encuentra en la cartelera. 

# Información sobre configuraciones 
Para descargar las configuraciones básicas para realizar las iteraciones del proyecto primero comenzamos descargando Node.js en nuestra computadora Ingresando a https://nodejs.org/es y descargando la versión actual.
Luego creamos una carpeta y abrimos la terminal dentro de la misma en nuestro editor de texto (En este caso usamos Visual Studio Code). 
Una vez en la terminal parados en la carpeta del proyecto vamos a comenzar el proyecto Node. Para esto escribimos:
**npm init -y**
Ahora vamos a instalar módulos necesarios para la creación de este proyecto (Por ahora descargamos los mínimos necesarios, después a medida que los necesitemos iremos descargando más)
Empezamos descargando Express.js.

**npm i express**

Luego nos metemos en la carpeta “Package.json” y debajo de “main”: “index.js”, vamos a copiar esto 
**“type”: “module”,** Esto sirve para luego en los archivos .js podamos usar import para importar los módulos que requiramos. 
Luego iremos a la terminar de nuevo e instalaremos el modulo nodemon, para que cuando hagamos un cambio no se tenga que cerrar el servidor y abrir de nuevo, sino que con nodemon se carga al instante que guardas el código en VSC.

**npm i nodemon -D**

Para ejecutarlo, vamos a la carpeta “Package.json” y lo agregamos como un script (borrando antes el test) poniéndolo adentro del objeto de la siguiente manera:

**“dev”: “nodemon index.js”**

Por último, creamos un archivo index.js y dentro de el colocamos:

import express from ‘express’

const app = express()

app.listen(3000) 


Para levantar el server, vamos a la consola y ponemos npm run dev y al ingresar al puerto 3000 de nuestro navegador buscando http://localhost:3000/, ahí va a estar la página (Sin nada ya que no tenemos por ahora archivos html con texto adentro ni nada por el estilo).



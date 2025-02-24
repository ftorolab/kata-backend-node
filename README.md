# kata-backend-node

Este proyecto es una API RESTful construida con Node.js y Express para gestionar películas, salas de cine y reservas de asientos. 

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
node-express-api
├── src
│   ├── controllers          # Controladores para manejar la lógica de las rutas
│   │   ├── moviesController.ts
│   │   ├── roomsController.ts
│   │   └── reservationsController.ts
│   ├── routes               # Rutas de la API
│   │   ├── moviesRoutes.ts
│   │   ├── roomsRoutes.ts
│   │   └── reservationsRoutes.ts
│   ├── services             # Servicios que contienen la lógica de negocio
│   │   ├── movieService.ts
│   │   ├── roomService.ts
│   │   └── reservationService.ts
│   ├── app.ts               # Punto de entrada de la aplicación
│   └── server.ts            # Archivo para iniciar el servidor
├── package.json             # Configuración de npm
├── tsconfig.json            # Configuración de TypeScript
└── README.md                # Documentación del proyecto
```

## Funcionalidades

- **Registrar películas**: Permite agregar nuevas películas con su título, género, duración y clasificación.
- **Registrar salas**: Permite agregar nuevas salas con su nombre y capacidad.
- **Reservar asientos**: Permite realizar reservas de asientos para una película en una sala específica en un horario determinado.
- **Listar**: Permite listar todas las películas, salas y reservas existentes.

## Instalación

1. Clona el repositorio:
   ```
   git clone git@github.com:ftorolab/kata-backend-node.git
   ```
2. Navega al directorio del proyecto:
   ```
   cd kata-backend-node
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

Para iniciar el servidor, ejecuta el siguiente comando:

```
npm start
```

El servidor escuchará en el puerto especificado en `src/server.ts`. Puedes realizar solicitudes a la API utilizando herramientas como Postman o cURL.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.
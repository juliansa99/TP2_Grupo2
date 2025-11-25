# Sistema de Reservas de Pilates – Backend

Este proyecto implementa una API REST para la gestión de usuarios, clases y reservas. Está desarrollado con Node.js, Express, Sequelize y MySQL.

---

## Requisitos previos

Para ejecutar el proyecto se requiere:

- Node.js  
- MySQL Server  
- Postman o Thunder Client para pruebas  

---

## Configuración del entorno

Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```

DB_NAME=tp2_pilates
DB_USER=root
DB_PASSWORD=TU_PASSWORD
DB_HOST=localhost
DB_DIALECT=mysql

````

---

## Creación de la Base de Datos

En MySQL Workbench ejecutar:

```sql
CREATE DATABASE tp2_pilates;
USE tp2_pilates;
````

Las tablas se generan automáticamente a partir de los modelos definidos en Sequelize.

---

## Modelos del Sistema

### Usuario

* id (PK)
* nombre
* email (único)
* telefono
* isAdmin (booleano)

### Clase

* id (PK)
* nombre
* fecha (YYYY-MM-DD)
* hora
* capacidad

### Reserva

* id (PK)
* idUsuario (FK)
* idClase (FK)
* estado (confirmada | cancelada)

### Relaciones

* Un Usuario tiene muchas Reservas
* Una Clase tiene muchas Reservas
* Una Reserva pertenece a un Usuario y a una Clase

---

## Middleware de Administrador

Las operaciones de creación, modificación y eliminación de usuarios y clases requieren un parámetro `adminId` en la URL.

El middleware valida:

* que el usuario exista
* que tenga `isAdmin = true`

---

## Ejecución del Servidor

Instalar dependencias:

```
npm install
```

Iniciar el servidor:

```
npm start
```

La API queda disponible en:

```
http://localhost:3000
```

---

## Endpoints

### Usuarios

**Crear usuario (requiere admin)**

```
POST /usuarios/:adminId
```

Body:

```json
{
  "nombre": "Admin",
  "email": "admin@test.com",
  "telefono": "123456",
  "isAdmin": true
}
```

**Listar usuarios (admin)**

```
GET /usuarios/:adminId
```

**Obtener usuario por ID (admin)**

```
GET /usuarios/:id/:adminId
```

**Eliminar usuario (admin)**

```
DELETE /usuarios/:id/:adminId
```

**Eliminar todos los usuarios (admin)**

```
DELETE /usuarios/:adminId
```

---

### Clases

**Listar clases (público)**

```
GET /clases
```

**Obtener clase por ID (público)**

```
GET /clases/:id
```

**Crear clase (admin)**

```
POST /clases/:adminId
```

Body:

```json
{
  "nombre": "Pilates Básico",
  "fecha": "2025-11-25",
  "hora": "18:00",
  "capacidad": 10
}
```

**Actualizar clase (admin)**

```
PUT /clases/:id/:adminId
```

**Eliminar clase (admin)**

```
DELETE /clases/:id/:adminId
```







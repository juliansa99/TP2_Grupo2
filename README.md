# 🧘‍♀️ TP2 – Sistema de Reservas de Clases de Pilates

Este proyecto es una API REST creada con **Node.js**, **Express** y **MySQL**.  
Permite gestionar:

- Usuarios que reservan clases
- Clases de pilates con cupos limitados
- Reservas realizadas por los usuarios

El sistema sigue una arquitectura modular con controladores, servicios, rutas y middlewares.

---

## 🏗️ Tecnologías utilizadas

- Node.js
- Express
- MySQL / Sequelize
- Dotenv
- Middlewares personalizados

---

# 🧩 Entidades principales y sus relaciones

### 👤 **Usuario**
- nombre  
- email  
- teléfono  
- Tiene muchas **Reservas**

### 🧘‍♀️ **Clase**
- nombre  
- día  
- hora  
- capacidad  
- Tiene muchas **Reservas**

### 📅 **Reserva**
- idUsuario  
- idClase  
- estado ("confirmada")  
- Pertenece a un **Usuario**
- Pertenece a una **Clase**

1. Instalar dependencias:

```bash
npm install

DB_NAME=nombre_base
DB_USER=usuario
DB_PASSWORD=contraseña
DB_HOST=localhost
DB_DIALECT=mysql

node index.js
Crear usuario – POST /usuarios
{
  "nombre": "Julian",
  "email": "julian@mail.com",
  "telefono": "1155555555"
}

Listar usuarios – GET /usuarios

Obtener usuario por ID – GET /usuarios/1

Eliminar usuario – DELETE /usuarios/1

Crear clase – POST /clases

{
  "nombre": "Pilates Lunes",
  "dia": "Lunes",
  "hora": "18:00",
  "capacidad": 10
}


Listar clases – GET /clases

Obtener clase – GET /clases/1

Actualizar clase – PUT /clases/1

Eliminar clase – DELETE /clases/1

Crear reserva – POST /reservas

{
  "idUsuario": 1,
  "idClase": 1
}


Respuestas posibles:

{ "mensaje": "Reserva confirmada" }


o:

{ "error": "SIN_CUPO" }

Estructura del proyecto
connection/    -> conexión a MySQL
models/        -> modelos Sequelize
services/      -> lógica de negocio
controllers/   -> manejo de requests
routes/        -> rutas Express
middlewares/   -> logger y manejo de errores
index.js       -> punto de entrada principal

👥 Integrantes

Dylan Sosa 
Agustina Kraemer 
Guada
Julián Saal 


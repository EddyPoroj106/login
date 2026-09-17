# Login con React y Django

Sistema de autenticación con backend en Django (DRF + Token Auth) y frontend en React (Vite).

## Backend

```
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
source venv/bin/activate     # Mac/Linux
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

El servidor queda en `http://127.0.0.1:8000`.

Endpoints:
- `POST /api/register/` → `{ username, email, password }`
- `POST /api/login/` → `{ username, password }`
- `GET /api/profile/` → requiere header `Authorization: Token <token>`

## Frontend

```
cd frontend
npm install
npm run dev
```

Queda disponible en `http://localhost:5173`. Ya está configurado con CORS para hablar con el backend en el puerto 8000.

## Notas para el video

- Muestra la estructura del proyecto Django (carpeta `accounts`: models de usuario, serializers, views, urls).
- Explica los componentes de React (`Login.jsx`, `Register.jsx`, `App.jsx`) y cómo manejan el estado con `useState`.
- Haz una demo: registro de un usuario nuevo, login exitoso, y un intento de login con contraseña incorrecta para mostrar el manejo de errores.

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

Queda disponible en `http://localhost:5173`.

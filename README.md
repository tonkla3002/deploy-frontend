# frontend (Next.js)

## Develop
```bash
npm install && npm run dev                # http://localhost:3000 (API_URL=http://localhost:4000)
```

## Deploy (Docker Compose)
```bash
docker network create app-net             # once per host, shared with backend
cp .env.example .env                      # then edit
docker compose up -d --build
```

Update: `git pull && docker compose up -d --build`

Env: `API_URL` (server-side backend URL, default `http://backend:4000` over app-net), `FRONTEND_PORT` (host port, default 3000).
# deploy-frontend

# Project installation

## Quick start (Docker, recommended)

### Prerequisites
- Docker 20.10+ and Docker Compose
- Check: `docker --version && docker compose version`

### Start

```bash
# 1. Run all services
docker compose up -d --build

# 2. Run migrations
docker compose exec backend bundle exec rails db:migrate

# 3. Check status
docker compose ps
```

### Access
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:3000
- **PostgreSQL:** localhost:5432

---

## Usefull scripts

```bash
# Management
docker compose up -d          # Run daemon
docker compose down           # Stop
docker compose restart        # Restart
docker compose logs -f        # Logs from all services

# Backend
docker compose exec backend bundle exec rails db:migrate    # Run migrations 
docker compose exec backend bundle exec rails console       # Start rails console
docker compose exec backend bundle exec rspec               # Run specs

# Logs
docker compose logs -f backend      # Backend logs
docker compose logs -f frontend     # Frontend logs
```

---

## Local start (without Docker)

### Prerequisites
- Ruby 3.4.7
- PostgreSQL (running locally)
- Node.js and npm

### Configuration

**1. Database:** Set environment variables or edit `backend/config/database.yml`:
```bash
export POSTGRES_USER=postgres
export POSTGRES_PASSWORD=postgres
```
Or edit `database.yml` development section with your PostgreSQL credentials.

**2. Frontend proxy:** Update `frontend/vite.config.js`:
```javascript
proxy: {
  '/api': {
    target: 'http://localhost:3000',  // Change from 'http://backend:3000'
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, ''),
  },
}
```

**3. CORS:** Already configured for `http://localhost:5173` by default. No changes needed.

### Start

**Backend:**
```bash
cd backend
bundle install
rails db:create db:migrate
rails server
```

**Frontend (new terminal):**
```bash
cd frontend
npm install
npm run dev
```

**Access:**
- Frontend: http://localhost:5173
- Backend: http://localhost:3000


---

## Problems

### Migration error
```bash
docker compose exec backend bundle exec rails db:migrate
```

---

## Technologies

- **Backend:** Ruby 3.4.7, Rails 7.1.2, PostgreSQL, Puma
- **Frontend:** React 18.3.1, Vite 6.0.5, Axios

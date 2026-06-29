
## 🚀 What to Work on Next (Priority Order)

### 1. Clean Up Your README
Your `README.md` has merge conflict markers (`<<<<<<< Updated upstream`, `=======`, `>>>>>>> Stashed changes`). Fix that first so it's readable.

### 2. Update to Prisma 7 (Follow the Example)
The professor's example uses Prisma 7 correctly. Your repo has `prisma.config.ts` but the `schema.prisma` still has the old `url` field.

**What to do:**
- Remove `url = env("DATABASE_URL")` from `schema.prisma`
- Move the connection URL to `prisma.config.ts` (already there, just verify)
- Install `@prisma/adapter-pg`
- Update `db.ts` to use the adapter

### 3. Generate Prisma Client
```bash
cd ~/Documents/code/TTRP2026/scattergories-personal
yarn generate
```

### 4. Implement Routes
Add the following endpoints (copy from the example):
- `POST /games` – create a game with a room code
- `GET /games` – list all games
- `POST /answers` – submit an answer

### 5. Test with Insomnia
Import the `insomnia_collection.json` from the professor's example (or recreate it) and test your endpoints.

---

## 📋 Quick Setup Commands (Based on Example)

```bash
cd ~/Documents/code/TTRP2026/scattergories-personal

# 1. Install Prisma adapter
yarn add @prisma/adapter-pg

# 2. Generate Prisma client
yarn generate

# 3. Build TypeScript
yarn build

# 4. Run the server
yarn start
```

---

## 🧪 Verify Your Routes

Once the server is running:

```bash
# Create a game
curl -X POST http://localhost:3000/games \
  -H 'Content-Type: application/json' \
  -d '{"roomCode":"TEST01"}'

# List games
curl http://localhost:3000/games

# Submit an answer
curl -X POST http://localhost:3000/answers \
  -H 'Content-Type: application/json' \
  -d '{"roomCode":"TEST01","username":"sam","answer":"Bear"}'
```

---

## 📊 Summary of Where You Are

| Task | Status |
|------|--------|
| README cleanup | ⏳ Needs fixing |
| Prisma 7 migration | ⏳ Needs updating |
| Routes implementation | ⏳ Needs adding |
| Testing with Insomnia | ⏳ Can do after routes |

---

Let me know which part you want to tackle first. I'd recommend starting with **README cleanup**, then **Prisma 7 migration** (since the example repo gives you a clear reference).

----


Got it — you're sticking with Prisma 7.8.0, so the setup steps need to reflect that.

Here’s the updated guide for your classmate.

---

# 🚀 Quick Start Guide – Scattergories (Personal Repo)

## 1. Clone the Repo

```bash
git clone git@github.com:JulioAAlvarez/scattergories-personal.git
cd scattergories-personal
```

If they don’t have SSH set up, use HTTPS instead:

```bash
git clone https://github.com/JulioAAlvarez/scattergories-personal.git
```

---

## 2. Install Dependencies

```bash
yarn install
```

If `yarn` isn’t available, run:

```bash
corepack enable
```

---

## 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

If there’s no `.env.example`, create one manually:

```bash
# Database
DATABASE_URL="postgresql://postgres:tester@localhost:5432/postgres"

# # Server
# PORT=3000

```

Replace `your_password_here` with the actual PostgreSQL password.

---

## 4. Create the Database

```bash
createdb scattergories_db
```

If `createdb` isn’t found, run:

```bash
sudo -u postgres createdb scattergories_db
```

---

## 5. Run Prisma Setup (Prisma 7)

Since the repo uses **Prisma 7.8.0**, the `prisma` command is available through `yarn` or `npx`.

```bash
# Generate Prisma Client
yarn prisma generate

# Push the schema to the database
yarn prisma db push
```

If `yarn prisma` doesn’t work, use `npx`:

```bash
npx prisma generate
npx prisma db push
```

---

## 6. Start the Server

```bash
yarn dev
```

The server should start at `http://localhost:3000`.

---

## 7. Test It Works

```bash
curl http://localhost:3000
```

Or open `http://localhost:3000` in a browser. You should see a response from the server.

---

## 8. Optional: Use ngrok (for Multi-User Testing)

If you want to share your local server with others:

```bash
ngrok http 3000
```

Share the `https://...ngrok.io` URL.

---

## 📋 Quick Checklist

| Step | Status |
|------|--------|
| Cloned repo | ✅ |
| `yarn install` | ✅ |
| `.env` file created | ✅ |
| Database created | ✅ |
| `prisma generate` | ✅ |
| `prisma db push` | ✅ |
| Server running | ✅ |

---

## 🛠️ Troubleshooting

| Issue | Fix |
|-------|-----|
| `yarn: command not found` | Run `corepack enable` |
| `prisma: command not found` | Use `npx prisma ...` instead |
| `password authentication failed` | Check `.env` DATABASE_URL password |
| `database "scattergories_db" does not exist` | Run `createdb scattergories_db` |
| `PORT already in use` | Change port in `.env` or kill the process using `lsof -i :3000` |

---

Let me know if they hit any other errors — I can help you walk them through it.
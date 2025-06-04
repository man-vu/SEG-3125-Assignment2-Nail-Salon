# Nail Salon Backend Server

This folder contains an Express.js server using Prisma ORM and JWT authentication.

## Setup

1. Install dependencies (requires internet access):
   ```bash
   cd server
   npm install
   ```
2. Create the SQLite database using Prisma:
   ```bash
   npx prisma db push
   node prisma/seed.js
   ```
3. Start the server:
   ```bash
   npm start
   ```

The server runs on port `3001` by default.

## MSSQL Database

If you prefer to use Microsoft SQL Server, run the SQL script at `server/mssql/schema.sql`:

```bash
sqlcmd -S <your-server> -i server/mssql/schema.sql
```

This creates the same tables as the Prisma schema and inserts sample data for
designers, service categories and services.

## Project Structure

- `routes/` express route modules
- `services/` application logic
- `models/` database access using Prisma
- `middleware/` authentication helpers

All API endpoints are mounted under `/api`.

### Transactions

Financial operations are stored in a `Transaction` table. Routes are available under `/api/transactions` to create and list user transactions.

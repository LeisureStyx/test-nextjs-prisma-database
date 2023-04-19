# test-nextjs-prisma-database
This project is for my own education, using Prisma and PostgreSQL.

**Note: There some files that are built by default installation of NextJS App that havent been deleted.**

## :mortar_board: Main objective in this project:
Build an NextJS Application, when client send an GET request at `/users` , response `200 OK` with all the data from database on PostgreSQL. The data will be free as I wanted, for this purpose, it will consists of; `id` , `name` , `email` , `createAt` , and `updatedAt`.

## :hammer_and_wrench: Installation
Follow these instructions to install this project on your computer:
### 1. Clone this repository:
```bash
git clone https://github.com/LeisureStyx/test-nextjs-prisma-database.git
```

### 2. Navigate to the project directory:
```bash
cd project-directory-name # For example, cd D:/Projects/test-nextjs-database
```
*Or run a terminal(for example Git Bash) on the project directory by right clicking -> Git Bash Here*

### 3. Install dependecies:
```bash
npm install
```

## :rocket: Run & Test :test_tube:
Once the dependecies are installed, follow these instructions to run and test this project:

### 1. Setting up your database:
- Copy the .env.example file and rename it to .env.
- Replace the placeholders in the .env file with your actual database credentials.
    - In your .env, it should contain DATABASE_URL=
        ```
        "postgresql://username:password@localhost:5432/testdb?schema=public"
        ```
        Changed username, password, port if you choose different port on installation of PostgreSQL(5432 by default), and "testdb" to your actual database credentials.
- Open up your terminal in your project directory and type:
```
npx prisma db push
```
Wait for the terminal done with pushing the schema to the database, should more or less:
```
Environment variables loaded from *project-directory*/.env 
Prisma schema loaded from prisma/schema.prisma

🚀  Your database is now in sync with your schema. Done in 2.10s
```

- Manual add records/data to the database by using Prisma Studio:
```
npx prisma studio
```

Wait for a moment and you will see in your terminal:
```
Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma
Prisma Studio is up on http://localhost:5555
```
And it will open automatically in your browser. If not, you open it manually: `localhost:5555`.

Select User model, and begin add records as much as you want(I tested this with 3 id). `id` will be autoincrement, means that it will automatically insert a Int number(start at 1), `name` and `email` self-explainatory, just note that `email` have to be unique, and for `createdAt` will be automatically insert the date that you create this record.

![image](https://user-images.githubusercontent.com/129574206/233072372-5d148cea-8bfe-41f8-b910-625326255ba3.png)


### 2. :rocket: Run the local web/development server:
```bash
npm run dev
```
Wait a few seconds; it will be ready when you see the following output by default in your terminal:
```bash
> optional-project@0.1.0 dev
> next dev

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
info  - Loaded env from *project-directory*/.env
event - compiled client and server successfully in 4.9s (172 modules)
wait  - compiling...
event - compiled successfully in 8s (138 modules)
```

### 3. See if its actually worked:
You can see if this project works by going to `localhost:3000` and `localhost:3000/users` , additionally you can check `localhost:3000/api/database` to see if your data is actually taken from your database into JSON.

![image](https://user-images.githubusercontent.com/129574206/233072622-f97ef16d-e372-49ed-8d54-96d517fd9d98.png)
![image](https://user-images.githubusercontent.com/129574206/233072687-572b26e5-1a34-4d99-af01-e7880e1ea345.png)

You can also click "Customers" for going to `localhost:3000/users`, and "Test" for going back to the root or `localhost:3000`

You can check if response code is `200 OK` in Postman including the data from database.

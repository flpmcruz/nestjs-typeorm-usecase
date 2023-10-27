# To run in development mode

1. Install dependencies run command: `npm install`
2. Clone .env.example to .env and fill it with your data
3. Up local db with docker locally: `docker-compose up -d`
4. Run seed `http://localhost:3000/api/v1/seed`

- Endpoits:
  GET http://localhost:3000/api/v1/seed
  GET http://localhost:3000/api/v1/activities
  GET http://localhost:3000/api/v1/activities/:id
  POST http://localhost:3000/api/v1/activities
  PUT http://localhost:3000/api/v1/activities/:id
  DELETE http://localhost:3000/api/v1/activities/:id

- Repository:
  https://github.com/flpmcruz/nestjs-typeorm-usecase.git

# To run with docker

```
docker-compose up -d
```

# To build docker image

```
docker build -t nestjs-backend .

```

TODO:

- [ ] Add unit tests
- [ ] Add integration tests
- [ ] Add swagger

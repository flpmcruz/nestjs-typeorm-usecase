# To run in development mode

1. Install dependencies run command: `npm install`
2. Clone .env.example to .env and fill it with your data
3. Up local db with docker locally: `docker-compose up -d db`

https://github.com/flpmcruz/nestjs-typeorm-usecase.git

# To run with docker
```
docker-compose up -d
```

# To build docker image and push to registry
```
docker build -t nestjs-backend .

```

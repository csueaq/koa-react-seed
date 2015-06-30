# koa-react-seed
koa react serverside rendering with redis and mongo, dockerized with compose.yaml

# usage :

install docker and docker-compose

docker build -t koa-react .

docker-compose up

create a collection called "user" and insert the following data to mongodb :


{
    "role" : "admin",
    "name" : "YOUR_NAME"
}

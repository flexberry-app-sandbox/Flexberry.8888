docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 8888-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t 8888-java/app ../../..

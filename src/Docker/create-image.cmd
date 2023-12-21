docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 8888/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t 8888/app ../..

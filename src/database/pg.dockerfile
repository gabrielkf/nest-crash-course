FROM postgres:14-alpine

ENV POSTGRES_PASSWORD nest
ENV POSTGRES_USER nest
ENV POSTGRES_DB ingredients

EXPOSE 5432
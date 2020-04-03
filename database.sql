-- name of database "weekend-to-do-app"

-- create table "tasks"
CREATE TABLE "tasks" (
"id" SERIAL PRIMARY KEY,
"task" VARCHAR(250) NOT NULL,
"completed" BOOLEAN NOT NULL DEFAULT false
);
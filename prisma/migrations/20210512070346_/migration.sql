/*
  Warnings:

  - A unique constraint covering the columns `[auth0_user_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User.auth0_user_id_unique" ON "User"("auth0_user_id");

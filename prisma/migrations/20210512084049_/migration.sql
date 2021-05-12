/*
  Warnings:

  - The primary key for the `CategoriesOnFoods` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `CategoriesOnFoods` table. All the data in the column will be lost.
  - You are about to drop the column `food_id` on the `CategoriesOnFoods` table. All the data in the column will be lost.
  - You are about to drop the column `fridge_id` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Fridge` table. All the data in the column will be lost.
  - You are about to drop the column `foodId` on the `Kind` table. All the data in the column will be lost.
  - The primary key for the `KindsOnFoods` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `kind_id` on the `KindsOnFoods` table. All the data in the column will be lost.
  - You are about to drop the column `food_id` on the `KindsOnFoods` table. All the data in the column will be lost.
  - You are about to drop the column `auth0_user_id` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Fridge` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[auth0UserId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoryId` to the `CategoriesOnFoods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foodId` to the `CategoriesOnFoods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fridgeId` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Fridge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kindId` to the `KindsOnFoods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foodId` to the `KindsOnFoods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `auth0UserId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CategoriesOnFoods" DROP CONSTRAINT "CategoriesOnFoods_category_id_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnFoods" DROP CONSTRAINT "CategoriesOnFoods_food_id_fkey";

-- DropForeignKey
ALTER TABLE "Food" DROP CONSTRAINT "Food_fridge_id_fkey";

-- DropForeignKey
ALTER TABLE "Fridge" DROP CONSTRAINT "Fridge_user_id_fkey";

-- DropForeignKey
ALTER TABLE "KindsOnFoods" DROP CONSTRAINT "KindsOnFoods_food_id_fkey";

-- DropForeignKey
ALTER TABLE "KindsOnFoods" DROP CONSTRAINT "KindsOnFoods_kind_id_fkey";

-- DropIndex
DROP INDEX "Fridge_user_id_unique";

-- DropIndex
DROP INDEX "User.auth0_user_id_unique";

-- AlterTable
ALTER TABLE "CategoriesOnFoods" DROP CONSTRAINT "CategoriesOnFoods_pkey",
DROP COLUMN "category_id",
DROP COLUMN "food_id",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "foodId" TEXT NOT NULL,
ADD PRIMARY KEY ("foodId", "categoryId");

-- AlterTable
ALTER TABLE "Food" DROP COLUMN "fridge_id",
ADD COLUMN     "fridgeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Fridge" DROP COLUMN "user_id",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Kind" DROP COLUMN "foodId";

-- AlterTable
ALTER TABLE "KindsOnFoods" DROP CONSTRAINT "KindsOnFoods_pkey",
DROP COLUMN "kind_id",
DROP COLUMN "food_id",
ADD COLUMN     "kindId" TEXT NOT NULL,
ADD COLUMN     "foodId" TEXT NOT NULL,
ADD PRIMARY KEY ("foodId", "kindId");

-- AlterTable
ALTER TABLE "User" DROP COLUMN "auth0_user_id",
ADD COLUMN     "auth0UserId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Fridge_userId_unique" ON "Fridge"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User.auth0UserId_unique" ON "User"("auth0UserId");

-- AddForeignKey
ALTER TABLE "CategoriesOnFoods" ADD FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnFoods" ADD FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Food" ADD FOREIGN KEY ("fridgeId") REFERENCES "Fridge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fridge" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KindsOnFoods" ADD FOREIGN KEY ("kindId") REFERENCES "Kind"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KindsOnFoods" ADD FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE CASCADE ON UPDATE CASCADE;

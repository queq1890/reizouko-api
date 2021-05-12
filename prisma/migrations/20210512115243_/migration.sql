-- CreateEnum
CREATE TYPE "FoodStatus" AS ENUM ('STOCKED', 'USED');

-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "status" "FoodStatus" NOT NULL DEFAULT E'STOCKED';

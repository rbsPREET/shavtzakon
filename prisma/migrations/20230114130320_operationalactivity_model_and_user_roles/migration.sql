-- CreateEnum
CREATE TYPE "UserRoles" AS ENUM ('Admin', 'Solider');

-- CreateEnum
CREATE TYPE "Activity" AS ENUM ('Emon', 'KavHir');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRoles" NOT NULL DEFAULT 'Solider';

-- CreateTable
CREATE TABLE "OperationalActivity" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "activityStartDate" TIMESTAMP(3) NOT NULL,
    "activityEndDate" TIMESTAMP(3) NOT NULL,
    "activityType" "Activity" NOT NULL DEFAULT 'Emon',

    CONSTRAINT "OperationalActivity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OperationalActivity_code_key" ON "OperationalActivity"("code");

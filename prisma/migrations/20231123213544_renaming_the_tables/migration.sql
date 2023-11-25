/*
  Warnings:

  - You are about to drop the `available_time` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "state" AS ENUM ('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO');

-- CreateEnum
CREATE TYPE "weekday" AS ENUM ('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY');

-- DropForeignKey
ALTER TABLE "available_time" DROP CONSTRAINT "available_time_user_id_fkey";

-- DropTable
DROP TABLE "available_time";

-- DropTable
DROP TABLE "user";

-- DropEnum
DROP TYPE "State";

-- DropEnum
DROP TYPE "Weekday";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "telephone" TEXT[],
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" "state" NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "knowledges" TEXT[],

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "available_times" (
    "id" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "week_day" "weekday" NOT NULL,
    "time_start" TIMESTAMP(3) NOT NULL,
    "time_end" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "available_times_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "available_times" ADD CONSTRAINT "available_times_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

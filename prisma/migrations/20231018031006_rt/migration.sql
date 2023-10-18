/*
  Warnings:

  - Added the required column `location` to the `service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "service" ADD COLUMN     "location" TEXT NOT NULL;

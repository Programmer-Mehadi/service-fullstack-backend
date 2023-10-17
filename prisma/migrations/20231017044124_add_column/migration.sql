/*
  Warnings:

  - Added the required column `features` to the `service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "service" ADD COLUMN     "features" TEXT NOT NULL;

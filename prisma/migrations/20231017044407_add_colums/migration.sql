/*
  Warnings:

  - The `publicationDate` column on the `service` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "service" DROP COLUMN "publicationDate",
ADD COLUMN     "publicationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

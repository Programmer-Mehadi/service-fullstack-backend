/*
  Warnings:

  - You are about to drop the column `rating` on the `feedback` table. All the data in the column will be lost.
  - Added the required column `experience` to the `feedback` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "feedback" DROP COLUMN "rating",
ADD COLUMN     "experience" INTEGER NOT NULL;

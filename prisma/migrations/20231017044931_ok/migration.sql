/*
  Warnings:

  - Added the required column `authorID` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "category" ADD COLUMN     "authorID" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_authorID_fkey" FOREIGN KEY ("authorID") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

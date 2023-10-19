/*
  Warnings:

  - You are about to drop the column `servicedata` on the `booking` table. All the data in the column will be lost.
  - Added the required column `date` to the `booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceId` to the `booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "booking" DROP COLUMN "servicedata",
ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "price" TEXT NOT NULL,
ADD COLUMN     "serviceId" TEXT NOT NULL,
ADD COLUMN     "time" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Cars` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Cars` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Cars` table. All the data in the column will be lost.
  - Added the required column `locationId` to the `Cars` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentMode" AS ENUM ('UPI', 'CASH');

-- AlterTable
ALTER TABLE "Cars" DROP COLUMN "createdAt",
DROP COLUMN "location",
DROP COLUMN "updatedAt",
ADD COLUMN     "locationId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Parking" (
    "TicketId" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "logDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entrytime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "exitTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paymentmode" "PaymentMode" NOT NULL DEFAULT 'UPI',
    "duration" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "locationId" INTEGER NOT NULL,

    CONSTRAINT "Parking_pkey" PRIMARY KEY ("TicketId")
);

-- CreateTable
CREATE TABLE "Location" (
    "locationId" SERIAL NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("locationId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Parking_carId_key" ON "Parking"("carId");

-- AddForeignKey
ALTER TABLE "Parking" ADD CONSTRAINT "Parking_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("locationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cars" ADD CONSTRAINT "Cars_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("locationId") ON DELETE RESTRICT ON UPDATE CASCADE;

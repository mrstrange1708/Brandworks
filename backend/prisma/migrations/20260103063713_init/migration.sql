-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID');

-- CreateEnum
CREATE TYPE "ParkingStatus" AS ENUM ('Parked', 'Retirved', 'Retriveing');

-- CreateTable
CREATE TABLE "Cars" (
    "carId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "entryPoint" TEXT NOT NULL,
    "payments" INTEGER NOT NULL,
    "valent" TEXT NOT NULL,
    "customers" TEXT NOT NULL,
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "parkingStatus" "ParkingStatus" NOT NULL DEFAULT 'Parked',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cars_pkey" PRIMARY KEY ("carId")
);

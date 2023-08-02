/*
  Warnings:

  - You are about to drop the `OrderItems` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `OrderItems` DROP FOREIGN KEY `OrderItems_orderId_fkey`;

-- DropTable
DROP TABLE `OrderItems`;

-- CreateTable
CREATE TABLE `orderItems` (
    `id` VARCHAR(191) NOT NULL,
    `itemType` VARCHAR(191) NOT NULL,
    `orderId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `OrderItems_orderId_fkey`(`orderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `orderItems` ADD CONSTRAINT `orderItems_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

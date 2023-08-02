-- AlterTable
ALTER TABLE `order_status` ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `roles` ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true;

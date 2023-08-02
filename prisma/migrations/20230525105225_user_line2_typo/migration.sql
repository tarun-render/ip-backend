/*
  Warnings:

  - You are about to drop the column `address_ine2` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `address_ine2`,
    ADD COLUMN `address_line2` VARCHAR(191) NULL;

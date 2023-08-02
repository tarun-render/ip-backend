/*
  Warnings:

  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `emailConfirmed` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - Added the required column `activete_at` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address_ine2` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address_line1` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avatar` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country_code` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `extra_config` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `geo_location` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `landmark` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo_url` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remember_token` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `two_factor_code` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_att` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipcode` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `createdAt`,
    DROP COLUMN `emailConfirmed`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `activete_at` DATETIME(3) NOT NULL,
    ADD COLUMN `address_ine2` VARCHAR(191) NOT NULL,
    ADD COLUMN `address_line1` VARCHAR(191) NOT NULL,
    ADD COLUMN `avatar` VARCHAR(191) NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `country` VARCHAR(191) NOT NULL,
    ADD COLUMN `country_code` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `email_confirmed` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `extra_config` VARCHAR(191) NOT NULL,
    ADD COLUMN `geo_location` VARCHAR(191) NOT NULL,
    ADD COLUMN `is_active` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `landmark` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `photo_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `remember_token` VARCHAR(191) NOT NULL,
    ADD COLUMN `state` VARCHAR(191) NOT NULL,
    ADD COLUMN `two_factor_code` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_att` DATETIME(3) NOT NULL,
    ADD COLUMN `zipcode` VARCHAR(191) NOT NULL;

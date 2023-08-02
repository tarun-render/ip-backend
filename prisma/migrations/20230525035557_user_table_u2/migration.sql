/*
  Warnings:

  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.
  - Added the required column `first_name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Made the column `created_at` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_active` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_att` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `username`,
    ADD COLUMN `first_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `last_name` VARCHAR(191) NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `is_active` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `updated_att` DATETIME(3) NOT NULL;

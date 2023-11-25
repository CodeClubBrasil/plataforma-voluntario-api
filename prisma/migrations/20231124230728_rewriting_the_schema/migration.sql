-- DropForeignKey
ALTER TABLE "available_times" DROP CONSTRAINT "available_times_user_id_fkey";

-- AddForeignKey
ALTER TABLE "available_times" ADD CONSTRAINT "available_times_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

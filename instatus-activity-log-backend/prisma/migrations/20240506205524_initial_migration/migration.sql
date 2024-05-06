-- CreateTable
CREATE TABLE "ActivityLog" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "actor_id" TEXT NOT NULL,
    "actor_name" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "target_id" TEXT NOT NULL,
    "target_name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ActivityLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventAction" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "object" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "activity_id" INTEGER NOT NULL,

    CONSTRAINT "EventAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventMetadata" (
    "id" SERIAL NOT NULL,
    "redirect" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "x_request_id" TEXT NOT NULL,
    "activity_id" INTEGER NOT NULL,

    CONSTRAINT "EventMetadata_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ActivityLog_uuid_key" ON "ActivityLog"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "EventAction_uuid_key" ON "EventAction"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "EventAction_activity_id_key" ON "EventAction"("activity_id");

-- CreateIndex
CREATE UNIQUE INDEX "EventMetadata_activity_id_key" ON "EventMetadata"("activity_id");

-- AddForeignKey
ALTER TABLE "EventAction" ADD CONSTRAINT "EventAction_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "ActivityLog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventMetadata" ADD CONSTRAINT "EventMetadata_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "ActivityLog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

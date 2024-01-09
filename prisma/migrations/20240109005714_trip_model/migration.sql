-- CreateTable
CREATE TABLE "Trip" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "locationDescription" TEXT NOT NULL DEFAULT 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    "description" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "imagesUrl" TEXT[],
    "highlights" TEXT[],
    "maxGuests" INTEGER NOT NULL,
    "countryCode" TEXT NOT NULL,
    "recommended" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);

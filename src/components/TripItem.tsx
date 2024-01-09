import { Trip } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TripItemProps {
  trip: Trip;
}

function TripItem({ trip }: TripItemProps) {
  return (
    <Link href={`/trips/${trip.id}`}>
      <div className="flex flex-col">
        <div className="relative h-[280px] w-[280px]">
          <Image
            src={trip.coverImage}
            fill
            className="rounded-lg shadow-md"
            alt={trip.name}
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <h3 className="text-primaryDarker font-medium font-sm mt-2">
          {trip.name}
        </h3>
        <div className="flex items-center gap-1 my-1">
          <p className="text-xs text-grayPrimary">{trip.location}</p>
        </div>
      </div>
    </Link>
  );
}

export default TripItem;

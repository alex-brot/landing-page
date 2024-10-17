import { env } from "@/utils/env";
import { Item } from "@/types/Item";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getCorrectAssetPath } from "@/utils/image";

function ItemCard({
  item,
  position,
}: {
  item: Item;
  position: "first" | "last" | "middle";
}) {
  return (
    <div className="item-card w-full relative">
      {position === "first" && (
        <div className="overlap-left absolute left-0 top-0 md:w-24 md:h-full w-full h-20 md:bg-gradient-to-l bg-gradient-to-t from-transparent to-primary-lightest"></div>
      )}
      <div className="image-wrapper relative  aspect-square m-1">
        <Image
          src={getCorrectAssetPath(item.image)}
          alt={item.name}
          fill
          className="rounded-lg -z-10"
          style={{ objectFit: "cover" }}
        />
        <Link
          href={env.SHOP_URL}
          className="absolute cursor-pointer top-0 right-0 bg-green text-white rounded-bl-lg rounded-tr-lg p-0.5 px-1.5"
        >
          Kaufen
        </Link>
      </div>
      <h4 className="font-serif font-semibold text-lg text-center">
        {item.name}
      </h4>
      <p className="text-center">{item.description}</p>
      {position === "last" && (
        <div className="overlap-right absolute right-0 md:top-0 bottom-0 md:w-24 md:h-full w-full h-32 md:bg-gradient-to-r bg-gradient-to-b from-transparent to-primary-lightest"></div>
      )}
    </div>
  );
}

export default ItemCard;

import React from "react";
import ItemCard from "../item-card";
import Link from "next/link";
import { env } from "@/utils/env";
import { items } from "@/data/static";

function ItemsSection() {
  return (
    <section id="items" className="bg-primary-lightest text-neutral-900">
      <div className="container flex flex-col justify-center items-center">
        <div className="h-16"></div>
        <h2 className="text-5xl font-bold text-center mb-8 mt-18">
          Unsere Produkte
        </h2>
        <div className="grid grid-cols-1 z-40 md:grid-cols-4 sm:grid-cols-2 gap-6 relative justify-between items-center w-full xs:w-3/4 md:w-full mb-4">
          {items.map((item, index) => (
            <ItemCard
              item={item}
              key={item.id}
              position={
                index === 0
                  ? "first"
                  : index === items.length - 1
                  ? "last"
                  : "middle"
              }
            />
          ))}
        </div>
        <div className="mb-16">
          <Link href={env.SHOP_URL} className="underline">
            mehr ansehen...
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ItemsSection;

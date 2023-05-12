import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getDiscountedPricePercentage } from "@/utils/helper";
const ProductCard = ({ data: { attributes: p, id } }) => {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer rounded-2xl "
    >
      <Image
        src={p.thumbnail.data.attributes.url}
        alt={p.name}
        width={500}
        height={500}
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="txet-lg font-medium">{p.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8377;{p.price}</p>
          {p.original_price && (
            <>
              <p className="text-base font-medium line-through">
                &#8377;{p.original_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscountedPricePercentage(p.original_price, p.price)}% Off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

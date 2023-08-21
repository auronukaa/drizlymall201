"use client";

import Image from "next/image";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./icon-button";
import useCart from "@/hooks/use-cart";

const ProductCard = ({ data }) => {
  const router = useRouter();
  const cart = useCart();

  const onAddToCart = (e) => {
    e.stopPropagation();
    const qty = 1;
    const type = data?.attributes?.sub_categories?.data[0]?.attributes?.title;
    cart.addToCart(data, qty, type);
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/produktet/${data?.attributes.uid}`, undefined, {
      scroll: true,
    });
  };

  return (
    <div
      className="bg-white z-5 group cursor-pointer rounded-xl border p-3 space-y-4 hover:shadow-md ease-in-out duration-200"
      onClick={(e) => handleClick(e)}
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={
            process.env.NEXT_PUBLIC_IMAGES_URL +
            data?.attributes?.image?.data?.attributes?.url
          }
          fill
          alt="Image"
          className="aspect-square object-contain rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex items-center justify-center">
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4  justify-end">
        <div>
          <p className="font-semibold text-base mb-1 w-full ">
            {data?.attributes?.title}
          </p>
          <p className="text-sm text-gray-500">
            {data?.attributes?.categories?.data[0]?.attributes?.title}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Currency
            value={
              data?.attributes?.Discount
                ? data?.attributes?.priceDiscount
                : data?.attributes?.price
            }
            price={data?.attributes?.price}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

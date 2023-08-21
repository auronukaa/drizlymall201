"use client";

import { Minus, Plus, ShoppingCart } from "lucide-react";

import { v4 as uuidv4 } from "uuid";
import Currency from "./ui/currency";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useCheckout } from "@/hooks/use-checkout";
import { Button } from "./ui/button";

const Info = ({ data }) => {
  const subCat = data?.attributes?.sub_categories?.data[0]?.attributes?.title;
  const [type, setType] = useState(subCat);
  const [qty, setQty] = useState(1);

  const cart = useCart();
  const checkout = useCheckout();
  const router = useRouter();
  const uuid = uuidv4();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onAddToCart = () => {
    cart.addToCart(data, qty, type);
  };

  const onCheckout = () => {
    checkout.removeCheckout();
    checkout.checkoutItem(data, qty, type);
    router.push(`/checkout/${data.attributes.title}/${uuid}`);
  };
  return (
    <div className="flex flex-col">
      {/* titulli */}
      <h1 className="text-3xl font-bold text-gray-900">
        {data?.attributes?.title}
      </h1>
      <div className="mt-3 items-end justify-between">
        {/* qmimi */}
        <div className="text-2xl text-gray-900">
          <Currency
            value={
              data?.attributes?.Discount
                ? data?.attributes?.priceDiscount
                : data?.attributes?.price
            }
            price={data.attributes.price}
            discount={data.attributes.discountPercentage}
          />
        </div>
      </div>
      {type && (
        <div className="flex items-center my-5 sm:my-7">
          <h1 className="text-gray-800 mr-2 text-sm">Lloji</h1>
          <hr className="w-full" />
        </div>
      )}
      {/* subCats */}
      <div className="grid grid-cols-1">
        {type && (
          <div className="flex flex-col gap-y-6 my-5 sm:my-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2">
              {data?.attributes?.sub_categories?.data.map((item) => (
                <Button
                  key={item?.id}
                  className={cn(
                    "rounded-md !text-sm text-gray-800 p-2 bg-white border border-gray-300",
                    type === item?.attributes?.title && "text-white bg-black"
                  )}
                  onClick={() => setType(item?.attributes?.title)}
                >
                  {item?.attributes?.title}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center my-3 sm:my-5">
        <h1 className="text-gray-800 mr-2 text-sm">Sasia</h1>
        <hr className="w-full" />
      </div>

      <p className="mt-3 mb-2 text-xs text-neutral-500">
        Disponueshmëria e produktit :{" "}
        <span className="font-bold text-xs text-black">
          {data?.attributes?.stock}
        </span>
      </p>
      <div className="flex items-center w-full justify-center sm:justify-start mb-5">
        <button
          className="bg-transparent border border-gray-300 h-10 w-full flex items-center sm:w-fit px-4 rounded-tl-md rounded-bl-md"
          type="button"
          onClick={() => setQty(qty - 1)}
        >
          <Minus size={15} className="w-full" />
        </button>
        <input
          className="bg-transparent border-y border-gray-300 h-10 text-center w-full sm:w-[15%]"
          value={
            qty > data?.attributes?.stock
              ? setQty(qty - 1)
              : qty < 1
              ? setQty(1)
              : qty
          }
        />

        <button
          className="bg-transparent border border-gray-300 h-10 w-full flex items-center sm:w-fit px-4 rounded-tr-md rounded-br-md"
          type="button"
          onClick={() => setQty(qty + 1)}
        >
          <Plus size={15} className="w-full" />
        </button>
      </div>

      <div className="flex items-center my-3 sm:my-5">
        <h1 className="text-gray-800 mr-2 text-sm">Pagesa</h1>
        <hr className="w-full" />
      </div>

      <div className="mt-3 flex flex-col sm:flex-row items-center gap-x-3 gap-y-6">
        <button
          onClick={onCheckout}
          className="flex rounded-md bg-orange-600 border-transparent px-5 z-1 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold
          hover:opacity-75 transition w-full justify-center text-lg sm:w-auto items-center gap-x-2 "
        >
          Blej menjëherë
        </button>
        <button
          className="flex text-lg items-center gap-x-2 bg-transparent border-2 w-full border-black justify-center sm:w-auto rounded-md px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-semibold
          hover:opacity-75 hover:bg-black hover:text-white transition"
          onClick={onAddToCart}
        >
          Shto në shportë
          <ShoppingCart />
        </button>
      </div>
      <p className="mt-4 rounded-md w-full sm:w-[395px] text-xs sm:text-sm text-center text-neutral-500 gap-x-2 sm:gap-x-4 border border-gray-300 p-2 sm:p-4">
        <div>
          <span>Koha e arritjes së produktit në Kosovë :</span>
          <span className="font-bold text-black mr-4"> 24h</span>
          <span className="border-r-2 border-gray-300 mr-4 hidden sm:block" />
          <br className="block sm:hidden" />
          <span>Shqipëri dhe Maqedoni :</span>
          <span className="font-bold text-black"> 72h</span>
        </div>
      </p>
      <div className="mt-10 flex items-center gap-x-3">
        <p className="whitespace-pre-wrap">{data?.attributes?.description}</p>
      </div>
    </div>
  );
};

export default Info;

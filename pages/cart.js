import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "./../components/Wrapper";
import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";
import { makePaymentRequest } from "@/utils/api";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const cart = () => {
  const [loading, setLoading] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const subTotal = useMemo(() => {
    return cartItems.reduce((total, val) => total + val.attributes.price, 0);
  }, [cartItems]);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      const res = await makePaymentRequest("/api/orders", {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId: res.stripeSession.id,
      });
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {cartItems.length > 0 && (
          <>
            {/* Heading and Paragraph Start */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>
            {/* Heading and Paragraph end */}

            {/* Cart Content start */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              {/* Cart Items Start */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>

                {cartItems.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </div>

              {/* Cart Items end */}

              {/* Summary Start */}

              <div className="flex-[1]">
                <div className="text-lg font-bold">Summary</div>
                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      Subtotal
                    </div>

                    <div className="text-md md:text-lg font-medium text-black">
                      &#8377;{subTotal}
                    </div>
                  </div>

                  <div className="text-sm md:text-md py-5 border-t mt-5">
                    The subtotal reflects total price of your order,including
                    duties and taxes before any applicable discounts. It does
                    not include delivery cost and international transaction fees
                    .
                  </div>
                </div>
                {/* buttton start*/}
                <button
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3
                      hover:opacity-75 flex items-center gap-2 justify-center"
                  onClick={handlePayment}
                >
                  Checkout
                  {loading && <img src="/spinner.svg" alt="" />}
                </button>
                {/* buttton end*/}
              </div>
              {/* Summary end */}
            </div>
            {/* Cart Content end */}
          </>
        )}

        {/* This is empty Cart  */}
        {cartItems.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <Image
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
              alt="cartImage"
            />
            <span className="text-xl font-bold "> Your Cart is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top Categories
            </span>
            <Link
              href="/"
              className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default cart;

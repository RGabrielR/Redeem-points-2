import Image from "next/image";
import React, { useRef } from "react";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";
import Swal from "sweetalert2";

const ProductsDisplay = ({ products, points, redeemProduct }) => {
  
    const buttonRef = useRef();

  const redeemAlert = (id) => {
    redeemProduct(id);
    Swal.fire("Congratulations!", "You redeem a product, enjoy!", "success");
  };

  if (!products) return "loading...";

  return (
    <>
      <div className="grid gap-4 grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3  lg:grid-cols-2 md:grid-cols-2 justify-items-center">
        {products.map((product, key) => {
          const { img, name, _id, cost } = product;
          return (
            <div key={key} className="product-card flex flex-col">
              <Image src={img.url} width="300" height="200" loading="lazy" />
              <div className="title-card">{name}</div>
              <div className="flex flex-row justify-center mt-2">
                <p className="points-amount">{cost}</p>
                <p className="pts pl-2">PTS.</p>
              </div>
              <div className="flex flex-row justify-around my-4">
                {points > cost ? (
                  <>
                    <div ref={buttonRef} ripple="light">
                      <i className="fas fa-thumbs-up fa-3x secondary-fill"></i>
                    </div>
                    <Tooltips
                      placement="top"
                      ref={buttonRef}
                      className="can-purchase-text"
                    >
                      <TooltipsContent>
                        *You have enough points to redeem this product
                      </TooltipsContent>
                    </Tooltips>
                    <i
                      onClick={() => redeemAlert(_id)}
                      className="fas fa-dolly fa-3x primary-fill pointer"
                      ref={buttonRef}
                    ></i>
                    <Tooltips
                      placement="top"
                      ref={buttonRef}
                      className="can-purchase-text"
                    >
                      <TooltipsContent> Redeem! </TooltipsContent>
                    </Tooltips>
                  </>
                ) : (
                  <>
                    <div ref={buttonRef} ripple="light">
                      <i className="fas fa-thumbs-down fa-3x primary-fill"></i>
                    </div>
                    <Tooltips
                      placement="top"
                      ref={buttonRef}
                      className="can-purchase-text"
                    >
                      <TooltipsContent>
                        *You need {cost - points} points to redeem this product
                      </TooltipsContent>
                    </Tooltips>

                    <i
                      className="fas fa-dolly fa-3x black-fill"
                      ref={buttonRef}
                    ></i>
                    <Tooltips
                      placement="top"
                      ref={buttonRef}
                      className="can-purchase-text"
                    >
                      <TooltipsContent> Cant Redeem! </TooltipsContent>
                    </Tooltips>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsDisplay;

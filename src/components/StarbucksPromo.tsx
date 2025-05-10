import React from "react";
import { ShoppingBag } from "lucide-react";

const StarbucksPromo: React.FC = () => {
  return (
    <div className="bg-[#1b254b] rounded-xl p-4 w-full text-white flex flex-col justify-between h-full">
      <div className="rounded-lg overflow-hidden mb-3">
        <img
          src="https://images.squarespace-cdn.com/content/v1/65babde7b040c54dd531a876/adaa1908-fa98-454e-b285-d3e327b58bea/Starbucks-Brasil-revoluciona-seu-programa-fidelidade-931x700.jpeg"
          alt="Starbucks"
          className="w-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="text-base font-semibold">Starbucks</h3>
        <div className="flex items-center text-sm text-gray-300 mt-1 gap-2">
          <ShoppingBag size={14} />
          10% cashback & off
        </div>
      </div>
    </div>
  );
};

export default StarbucksPromo;

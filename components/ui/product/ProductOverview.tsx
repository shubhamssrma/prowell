import { useAppSelector } from "@/store/hooks";
import { Leaf } from "lucide-react";

export function ProductOverview() {
  const { productDetails } = useAppSelector(state => state.productReducer)

  return (
    <section className="bg-green-50/50 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <div className="flex justify-center mb-6">
          <Leaf className="w-12 h-12 text-green-600" />
        </div>

        <h2 className="text-3xl font-bold text-gray-900">
          Product Overview
        </h2>

        <p className="mt-6 text-gray-700 leading-relaxed">
          {productDetails?.productOverview}
        </p>

      </div>
    </section>
  );
}

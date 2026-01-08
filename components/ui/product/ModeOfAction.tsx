import { useAppSelector } from "@/store/hooks";
import { Activity } from "lucide-react";

export function ModeOfAction() {
  const { productDetails } = useAppSelector(state => state.productReducer)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <Activity className="w-12 h-12 text-green-600 mx-auto" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Mode of Action
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card  */}
          {
            productDetails?.modeOfAction.map((mode, i) => {
              return (
                <div key={i} className="border rounded-2xl p-8 bg-gray-50">
                  <h3 className="font-semibold text-green-700">
                    {mode.title}
                  </h3>
                  <p className="mt-4 text-sm text-gray-600">
                    {mode.description}
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}

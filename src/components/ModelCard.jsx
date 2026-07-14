import { useState } from "react";

const ModelCard = ({model}) => {
      const [isSubscribed, setIsSubscribed] = useState(false)

      const handleSubscription = () =>{
        setIsSubscribed(true)
      }
    return (
        <div
            key={model.id}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
          >
            <div className="flex justify-center mb-5">
              <img className="w-28 h-28 object-contain" src={model.image} />
            </div>

            <div className="space-y-3 text-center">
              <h3 className="text-2xl font-bold">{model.title}</h3>

              <p className="text-gray-500 text-sm whitespace-pre-line">
                {model.description}
              </p>

              <div className="text-2xl font-bold text-red-500">
                ${model.price}
                <span className="text-base text-gray-500 font-normal">
                  / Month
                </span>
              </div>

              <button onClick={handleSubscription } className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl ">
                {isSubscribed ? "Subscribed" : "Subscribe Now"}
              </button>
            </div>
          </div>
    );
};

export default ModelCard;
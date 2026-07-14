import { use } from "react";
import ModelCard from "./ModelCard";

const Models = ({ modelsPromise, carts, setCarts }) => {
  const models = use(modelsPromise);
  return (
    <div className=" py-20">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Choose Your AI Model</h2>
        <p className="text-2xl ">
          One subscription gives you access to all frontier AI models
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
        {models.map((model) => (
          <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts} />
        ))}
      </div>
    </div>
  );
};

export default Models;

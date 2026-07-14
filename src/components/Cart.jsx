// const Cart = ({ carts }) => {
//   console.log(carts);
//   return (
//     <div>
//       <h2 className="font-bold text-3xl ">Your Carts</h2>
//       <div className="space-y-5 mt-5 p-10">
//         {carts.map((item) => (
//           <div
//             className="flex items-center justify-between border rounded-lg p-3 mb-5 "
//             key={item.id}
//           >
//             <div className="flex items-center gap-3 ">
//               <div>
//                 <img
//                   className="h-20 w-20 object-contain"
//                   src={item.image}
//                   alt=""
//                 />
//               </div>
//               <div>
//                 <h2 className="text-xl font-bold">{item.title}</h2>
//               </div>
//             </div>

//             <div className="text-3xl font-bold ">${item.price} / Month</div>
//           </div>
//         ))}
//       </div>

//       {/* Total */}

//       <div className="flex justify-between bg-black text-white p-5 m-5 rounded-lg text-3xl">
//         <div>Total</div>
//         <div>0</div>
//       </div>
//     </div>
//   );
// };

// export default Cart;






const Cart = ({ carts }) => {
  console.log(carts);
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-2xl shadow-sm mt-8">
      {/* Header */}
      <h2 className="font-extrabold text-4xl text-gray-800 mb-6 border-b pb-4">
        Your Cart <span className="text-xl font-medium text-gray-500">({carts.length} items)</span>
      </h2>

      {/* Cart Items List */}
      <div className="space-y-4">
        {carts.map((item) => (
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between border border-gray-200 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 gap-4"
            key={item.id}
          >
            {/* Left Side: Image and Details */}
            <div className="flex items-center gap-4 flex-1">
              <div className="bg-gray-100 p-2 rounded-lg flex-shrink-0">
                <img
                  className="h-20 w-20 object-contain mix-blend-multiply"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                {/* Description added below the title */}
                <p className="text-sm text-gray-500 line-clamp-2 max-w-md">
                  {item.description || "No description available."}
                </p>
              </div>
            </div>

            {/* Right Side: Price */}
            <div className="text-2xl font-black text-emerald-600 sm:text-right whitespace-nowrap">
              ${item.price} <span className="text-sm font-normal text-gray-400">/ Month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="flex justify-between items-center bg-gray-900 text-white p-5 mt-8 rounded-xl shadow-lg">
        <div className="text-xl font-medium text-gray-400">Total Price</div>
        <div className="text-3xl font-black text-emerald-400">
          ${carts.reduce((total, item) => total + item.price, 0)} 
          <span className="text-sm font-normal text-gray-400 ml-1">/ Month</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
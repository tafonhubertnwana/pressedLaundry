import React from 'react'

const Tops = () => {
  const items = [
    { category: "T-SHIRTS", count: 500 },
    { category: "SHIRTS (SHORT SLEEVED)", count: 500 },
    { category: "SHIRTS (LONG SLEEVED)", count: 600 },
    { category: "BLOUSES", count: 400 },
    { category: "JERSEY TOPS", count: 300 },
    { category: "JACKETS", count: 700 },
    { category: "PULLOVERS", count: 700 }
  ];

  return (
    <div className="w-[50%] m-auto">
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="bg-slate-400 text-white p-2 
            ">Items</th>
            <th className="bg-slate-400 text-white p-2 
            ">Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-slate-400 text-white" : "bg-slate-100"}
            >
              <td className="p-2">{item.category}</td>
              <td className="p-2">{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tops;

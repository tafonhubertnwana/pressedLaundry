import React from 'react'

const Bottoms = () => {
  const items = [
    { category: "TROUSERS", count: 600 },
    { category: "JEANS", count: 700 },
    { category: "LEGGINGS", count: 400 },
    { category: "SHORT", count: 400 },
    { category: "JERSEY SHORTS", count: 300 }
  ];

  return (
    <div className="w-[50%] m-auto">
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="bg-slate-600 text-white p-2 rounded-full">Items</th>
            <th className="bg-slate-600 text-white p-2 rounded-full">Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-slate-600 text-white" : "bg-slate-200"}
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

export default Bottoms;

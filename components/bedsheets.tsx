import React from 'react';

const Bedsheets = () => {
  const items = [
    { category: "SINGLE SHEET", count: 600 },
    { category: "PILLOW CASE", count: 200 },
    { category: "BEDSHEET SET (1 SHEET 2 PILLOW CASES)", count: 1000 },
    { category: "BEDSHEET SET (2 SHEET 2 PILLOW CASES)", count: 2000 },
    { category: "DOUVERTS", count: 4500 },
    { category: "BLANKETS", count: 5000 }
  ];

  return (
    <div className="w-full md:w-[75%] m-auto">
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="bg-slate-400 text-white p-2 ">Items</th>
            <th className="bg-slate-400 text-white p-2 ">Amount</th>
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

export default Bedsheets;

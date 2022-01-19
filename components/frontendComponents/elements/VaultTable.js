import React, { useState, useEffect } from "react";

const VaultTable = ({ redeemHistory }) => {
  const [tableElements, setTableElements] = useState(vault);

  useEffect(() => {
    setTableElements(vault);
  }, []);

  const group = (arr) => {
    const reduced = arr.reduce((acc, curr, i) => {
      const { name, cost } = curr;
      const ID = curr.productId;
      acc[ID] = acc[ID] || 0;
      acc[ID]++;
      return acc;
    }, {});
    return Object.getOwnPropertyNames(reduced).map((prop) => ({
      id: prop,
      count: reduced[prop],
    }));
  };

  const grouped = group(redeemHistory);

  const vault = grouped.map((idOfProduct) => {
    const { id, count } = idOfProduct;
    const vaultObj = redeemHistory.find((a) => a.productId === id);
    const { name, cost } = vaultObj;
    return { name, cost, count };
  });

  const sortBy = (e) => {
    switch (e) {
      case "count":
        const sortedByCount = [...tableElements].sort(
          (a, b) => b.count - a.count
        );
        setTableElements(sortedByCount);
        break;
      case "cost":
        const orderByCost = [...tableElements].sort((a, b) => b.cost - a.cost);
        return setTableElements(orderByCost);
        break;
      default:
        return tableElements;
    }
  };

  if (!tableElements) return "loading...";

  return (
    <>
      <div className="flex flex-col justify-center pt-5  mb-20">
        <table>
          <thead>
            <tr>
              <th onClick={() => sortBy("count")} className="border-right">
                Quantities
              </th>
              <th className="border-right">Name</th>
              <th onClick={() => sortBy("cost")}>Point value</th>
            </tr>
          </thead>
          <tbody>
            {tableElements.map((product, key) => {
              const { cost, name, count } = product;
              return (
                <tr key={key}>
                  <td className="border-right">
                    <span>{count}</span>
                  </td>
                  <td className="border-right">
                    <span>{name}</span>
                  </td>
                  <td>
                    <span>{cost}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default VaultTable;

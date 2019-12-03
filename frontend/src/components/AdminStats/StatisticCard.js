import React from "react";

function StatisticCard({ name, value }) {
  return (
    <div className="flex flex-col align-center justify-center p-6 min-w-32 rounded overflow-hidden shadow-md bg-white mx-4">
      <span className="text-4xl font-light text-center">{value}</span>
      <span className="text-sm uppercase text-center">{name}</span>
    </div>
  );
}

export default StatisticCard;

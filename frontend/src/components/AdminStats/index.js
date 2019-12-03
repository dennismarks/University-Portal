import React, { useContext } from "react";

import StatisticCard from "./StatisticCard";

const AdminStats = ({ numUsers, numCourses }) => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h1 className="font-semibold text-3xl text-gray-700 text-center mb-6">
          Site Statistics
        </h1>
        <div className="flex flex-row justify-center">
          <StatisticCard name="Users" value={numUsers} />
          <StatisticCard name="Courses" value={numCourses} />
        </div>
      </div>
    </section>
  );
};

export default AdminStats;

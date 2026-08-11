import React from "react";
import StatsCard from "../../components/statscard";

const Statistics = () => {
  return (
    <section className="bg-white py-4 sm:-py-20 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          <StatsCard end={5000} suffix="+" title="Students Trained" />
          <StatsCard end={1000} suffix="+" title="Job Placement" />
          <StatsCard end={50} suffix="+" title="Corporate Clients" />
          <StatsCard end={10} suffix="+" title="Professional Courses" />
        </div>
      </div>
    </section>
  );
};

export default Statistics;

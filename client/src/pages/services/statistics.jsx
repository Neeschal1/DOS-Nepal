import React from 'react'
import StatsCard from "../../components/statscard";

const Statistics = ({ service }) => {
  const stats = service?.stats; 
  if (!stats) return null; 

  return (
    <section className="bg-white py-4 sm:-py-20 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          <StatsCard end={stats['students']} suffix="+" title="Students" />
          <StatsCard end={stats['mentors']} suffix="+" title="Mentors" />
          <StatsCard end={stats['successRate']} suffix="%" title="Success Rate" />
          <StatsCard end={stats['batches']} suffix="+" title="Batches" />
        </div>
      </div>
    </section>
  );
}

export default Statistics
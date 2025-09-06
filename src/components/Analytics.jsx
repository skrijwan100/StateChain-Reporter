import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CompanySlide from "./CompanySlide";

export default function Analytics() {
  // Carousel
  const slides = [
    "https://cdn.vectorstock.com/i/500p/00/95/trade-checkmark-business-logo-vector-22320095.jpg",
    "https://img.freepik.com/premium-photo/business-down-arrow_698953-2565.jpg?semt=ais_hybrid&w=740",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Charts data
  const pieData = [
    { name: "Development", value: 400 },
    { name: "Marketing", value: 300 },
    { name: "Operations", value: 200 },
  ];

  const lineData = [
    { month: "Jan", cost: 200 },
    { month: "Feb", cost: 300 },
    { month: "Mar", cost: 250 },
    { month: "Apr", cost: 400 },
  ];

  const barData = [
    { metric: "Efficiency", score: 85 },
    { metric: "ROI", score: 75 },
    { metric: "Satisfaction", score: 90 },
  ];

      useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Navbar />

     
      <section className="bg-slate-800 rounded-2xl shadow-lg max-w-4xl mx-auto mt-10 p-6">
        <h2 className="text-xl font-bold text-white mb-2">💰 Estimate Your Budget</h2>
        <p className="text-gray-400 mb-4">
          Send us your requirements and get a cost estimate instantly.
        </p>
        <form className="space-y-4">
          <select className="w-full p-3 rounded-xl bg-slate-900 text-gray-400">
            <option>Project Type</option>
            <option>Web App</option>
            <option>Mobile App</option>
            <option>Dashboard</option>
          </select>
          <input
            type="text"
            placeholder="Estimated Duration"
            className="w-full p-3 rounded-xl bg-slate-900 text-gray-400"
          />
          <select className="w-full p-3 rounded-xl bg-slate-900 text-gray-400">
            <option>Team Size Needed</option>
            <option>1-5</option>
            <option>6-10</option>
            <option>10+</option>
          </select>
          <input
            type="range"
            min="1000"
            max="10000"
            className="w-full"
          />
          <button
            type="submit"
            className="bg-teal-500 px-6 py-2 rounded-xl font-semibold text-white"
          >
            Submit Estimate
          </button>
        </form>
      </section>

      {/* Analysis Section */}
      <section className="max-w-6xl mx-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pie Chart */}
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-bold text-white mb-3">Cost Analysis</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" fill="#14b8a6" label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-bold text-white mb-3">Timeline Analysis</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineData}>
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line type="monotone" dataKey="cost" stroke="#14b8a6" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-bold text-white mb-3">Performance Metrics</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <XAxis dataKey="metric" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="score" fill="#14b8a6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <CompanySlide />

      {/* Footer */}
      <Footer />
    </div>
  );
}
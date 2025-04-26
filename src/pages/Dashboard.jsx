import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="text-lg mb-8">Welcome to your Slinkr Toolkit!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/message-rewriter" className="bg-gray-800 p-4 rounded hover:bg-gray-700">
          🔁 Message Rewriter
        </Link>
        <Link to="/stealth-post" className="bg-gray-800 p-4 rounded hover:bg-gray-700">
          🥷 Stealth Post Tool
        </Link>
        <Link to="/karma-farmer" className="bg-gray-800 p-4 rounded hover:bg-gray-700">
          📈 Karma Farmer
        </Link>
        <Link to="/inbox-manager" className="bg-gray-800 p-4 rounded hover:bg-gray-700">
          📥 Inbox Manager
        </Link>
        <Link to="/subreddit-checker" className="bg-gray-800 p-4 rounded hover:bg-gray-700">
          🛡️ Subreddit Safety Checker
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

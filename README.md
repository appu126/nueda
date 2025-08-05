import React, { useState, useEffect } from "react";
import "../styles.css";

export default function Landing() {
  const [selectedDate, setSelectedDate] = useState("");

  function useAnimatedNumber(target, duration = 1000) {
    const [value, setValue] = useState(0);
    useEffect(() => {
      let start = 0;
      const increment = target / (duration / 10);
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setValue(parseFloat(start.toFixed(2)));
      }, 10);
      return () => clearInterval(interval);
    }, [target]);
    return value;
  }

  function FlashCard({ title, value, icon }) {
    const animatedVal = useAnimatedNumber(value);
    const color = value >= 0 ? "green" : "red";
    return (
      <div className="card animated-card">
        <h3>{icon} {title}</h3>
        <p className={`amount-${color}`}>₹ {animatedVal.toLocaleString()}</p>
      </div>
    );
  }

  return (
    <div className="landing-wrapper">
      <div className="top-bar">
        <h1>📊 Portfolio Manager</h1>
        <input
          type="date"
          className="calendar-input"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          title="Select date"
        />
      </div>

      <section className="summary-cards">
        {/* Emoji Placeholder Static Cards */}
        <div className="card net-worth">
          <h3>🧮 Net Worth</h3>
          <p>₹ <span className="amount-blue">1500000.00</span></p>
          <small>{selectedDate ? `As of ${selectedDate}` : "Choose a date 📅"}</small>
        </div>

        <div className="card profit-loss">
          <h3>📉 Profit & Loss</h3>
          <p>Profit: <span className="amount-green">₹ 23900.00</span></p>
          <p>Loss: <span className="amount-red">₹ 1256.00</span></p>
        </div>

        <div className="card cash-bank">
          <h3>🏦 Cash in Bank</h3>
          <p>₹ <span className="amount-blue">17000.00</span></p>
          <small>Only linked balances</small>
        </div>

        {/* Animated FlashCards */}
        <FlashCard title="Intra" value={5023.25} icon="📈" />
        <FlashCard title="Gold" value={-1234.55} icon="🪙" />
        <FlashCard title="U.S." value={12990.00} icon="💵" />
      </section>
    </div>
  );
}

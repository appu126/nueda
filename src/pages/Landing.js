
import react from 'react';

export default function Landing() {
    return (
      <div className="landing-wrapper">
        <header className="header">
          <span className="emoji-icon">👤</span>
          <div>
            <h2>Jaya Vashistha</h2>
            <p>Pune, Maharashtra</p>
          </div>
          <div className="live-time">Live 15:11:23</div>
          <button className="watchlist-btn">+ Watchlist</button>
        </header>
  
        <section className="summary-cards">
          <div className="card net-worth">
            <h3>Net Worth</h3>
            <p>₹ <span className="amount-blue">1500000.00</span></p>
            <small>as of 01 Aug 2025</small>
          </div>
  
          <div className="card profit-loss">
            <h3>Profit & Loss</h3>
            <p>Net Profit: <span className="amount-green">₹ 23900.00</span></p>
            <p>Loss: <span className="amount-red">₹ 1256.00</span></p>
          </div>
  
          <div className="card cash-bank">
            <h3>Cash in Bank</h3>
            <p>₹ <span className="amount-blue">17000.00</span></p>
            <small>Only linked cyber-safe balance is shown</small>
          </div>
        </section>
  
        <nav className="investment-tabs">
          {["Intra", "Gold", "Invest", "Crypto", "USDT", "MTF", "SIP", "US Market"].map((item) => (
            <button key={item} className="tab-btn">{item}</button>
          ))}
        </nav>
  
        <section className="dashboard">
          <div className="calendar">
            <h3>📅 Trader's Calendar</h3>
            <table>
              <thead>
                <tr>
                  {["S", "M", "T", "W", "T", "F", "S"].map(day => (
                    <th key={day}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Mock data */}
                {[...Array(5)].map((_, rowIdx) => (
                  <tr key={rowIdx}>
                    {[...Array(7)].map((_, colIdx) => {
                      const date = rowIdx * 7 + colIdx + 1;
                      const status = date % 5 === 0 ? "loss" : date % 3 === 0 ? "profit" : "neutral";
                      return (
                        <td key={colIdx}>
                          <div className={`calendar-date ${status}`}>{date <= 31 ? date : ""}</div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="calendar-legend">
              <span className="dot profit"></span> Profit Day
              <span className="dot loss"></span> Loss Day
              <span className="dot neutral"></span> Neutral
            </div>
          </div>
  
          <div className="investments">
            <h3>💰 Investment on This App</h3>
            <div className="investment-card">
              <div className="investment-header">
                <span>🪙 Gold</span>
                <span>₹ 1500000.00</span>
              </div>
              <div className="investment-bar gold"></div>
              <p>Zero brokerage, zero AMC. Invest in Gold.</p>
            </div>
  
            <div className="investment-card">
              <div className="investment-header">
                <span>📈 Invest</span>
                <span>₹ 17000.00</span>
              </div>
              <div className="investment-bar invest"></div>
              <p>Invest your money with zero brokerage, zero AMC.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  
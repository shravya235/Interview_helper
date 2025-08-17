import React from 'react';
import { X, Github, Linkedin } from 'lucide-react';

export default function InterviewPrepzDashboard() {
  return (
    <div className="dashboard-container">
      {/* Close button */}

      {/* Header with buttons */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">Welcome, Yeah!</h1>
        <div className="dashboard-button-group">
          <button className="dashboard-btn">New session</button>
          <button className="dashboard-btn">View all session</button>
        </div>
      </div>

      {/* Main content grid */}
      <div className="dashboard-grid">
        {/* Profile Card */}
        <div className="dashboard-card">
          <div className="profile-header">
            <div className="profile-content">
              <div className="profile-avatar">
                <div className="profile-avatar-inner">
                  👤
                </div>
              </div>
              <div className="profile-text">
                <h2 className="profile-title">We did it guys</h2>
                <p className="profile-desc">
                  I'm planning to do work in the same company but i dont have the<br />
                  CGPA to attend the placement 😢
                </p>
              </div>
            </div>
            <button className="profile-view-btn">View</button>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-link">
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a href="#" className="social-link">
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Usage & Credits Card */}
        <div className="dashboard-card">
          <h3 className="usage-header">Usage & Credits</h3>
          
          <div className="usage-top">
            <div>
              <div className="usage-number">4</div>
              <div className="usage-label">Remaining Interviews</div>
            </div>
            
            {/* Chart representation */}
            <div className="chart-container">
              <div className="chart-bar chart-bar-gray" style={{height: '30%'}}></div>
              <div className="chart-bar chart-bar-gray" style={{height: '45%'}}></div>
              <div className="chart-bar chart-bar-gray" style={{height: '60%'}}></div>
              <div className="chart-bar chart-bar-gray" style={{height: '35%'}}></div>
              <div className="chart-bar chart-bar-gray" style={{height: '50%'}}></div>
              <div className="chart-bar chart-bar-gray" style={{height: '70%'}}></div>
              <div className="chart-bar chart-bar-blue" style={{height: '40%'}}></div>
            </div>
          </div>
          
          <div className="usage-bottom">
            <div>
              <div className="total-number">8</div>
              <div className="usage-label">Total Interviews</div>
            </div>
            <div className="date-section">
              <div className="date-main">Aug 15, 2025</div>
              <div className="date-label">Last Prep Date</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Interview Prep Sessions Table */}
      <div className="table-container">
        <h3 className="table-header">Recent Interview Prep Sessions</h3>
        
        <table className="table">
          <thead>
            <tr className="table-header-row">
              <th className="table-header-cell">Company</th>
              <th className="table-header-cell">Role</th>
              <th className="table-header-cell">Date</th>
              <th className="table-header-cell">Status</th>
              <th className="table-header-cell-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((row) => (
              <tr key={row} className="table-row">
                <td className="table-cell"></td>
                <td className="table-cell"></td>
                <td className="table-cell"></td>
                <td className="table-cell"></td>
                <td className="table-cell-right">
                  <button className="table-view-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
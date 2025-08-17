import React from 'react';
import { X, Github, Linkedin } from 'lucide-react';

export default function InterviewPrepDashboard() {
  return (
    <div className="min-h-screen bg-purple-200 p-4 font-sans">

      {/* Header with buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h1 className="text-xl font-medium text-gray-700">Welcome, Yeah!</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors">
            New session
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors">
            View all session
          </button>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Profile Card */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-16 h-16 bg-purple-100 border-4 border-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm">
                  👤
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">We did it guys</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  I'm planning to do work in the same company but i dont have the<br />
                  CGPA to attend the placement 😢
                </p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600 text-sm transition-colors flex-shrink-0">
              View
            </button>
          </div>
          
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors">
              <Github size={16} />
              <span className="text-sm">GitHub</span>
            </a>
            <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors">
              <Linkedin size={16} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Usage & Credits Card */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h3 className="text-sm text-gray-600 mb-4">Usage & Credits</h3>
          
          <div className="flex justify-between items-end mb-6">
            <div>
              <div className="text-3xl font-bold text-gray-800 leading-none">4</div>
              <div className="text-sm text-gray-600 mt-1">Remaining Interviews</div>
            </div>
            
            {/* Chart representation */}
            <div className="flex items-end gap-1 h-16">
              <div className="w-4 bg-gray-300 rounded-sm" style={{height: '30%'}}></div>
              <div className="w-4 bg-gray-300 rounded-sm" style={{height: '45%'}}></div>
              <div className="w-4 bg-gray-300 rounded-sm" style={{height: '60%'}}></div>
              <div className="w-4 bg-gray-300 rounded-sm" style={{height: '35%'}}></div>
              <div className="w-4 bg-gray-300 rounded-sm" style={{height: '50%'}}></div>
              <div className="w-4 bg-gray-300 rounded-sm" style={{height: '70%'}}></div>
              <div className="w-4 bg-blue-200 rounded-sm" style={{height: '40%'}}></div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <div className="text-2xl font-bold text-gray-800 leading-none">8</div>
              <div className="text-sm text-gray-600 mt-1">Total Interviews</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-gray-800 leading-none">Aug 15, 2025</div>
              <div className="text-sm text-gray-500 mt-0.5">Last Prep Date</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Interview Prep Sessions Table */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-base font-medium text-gray-800">Recent Interview Prep Sessions</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-4 text-sm font-medium text-red-600">Company</th>
                <th className="text-left p-4 text-sm font-medium text-red-600">Role</th>
                <th className="text-left p-4 text-sm font-medium text-red-600">Date</th>
                <th className="text-left p-4 text-sm font-medium text-red-600">Status</th>
                <th className="text-right p-4 text-sm font-medium text-red-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((row) => (
                <tr key={row} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="p-4 text-sm text-gray-600"></td>
                  <td className="p-4 text-sm text-gray-600"></td>
                  <td className="p-4 text-sm text-gray-600"></td>
                  <td className="p-4 text-sm text-gray-600"></td>
                  <td className="p-4 text-right">
                    <button className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded bg-white hover:bg-gray-50 transition-colors">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
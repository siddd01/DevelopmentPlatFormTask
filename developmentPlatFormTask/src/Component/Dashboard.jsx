import { Calendar, CheckCircle, Clock, Phone } from "lucide-react";
import herald from "../assets/herald.png";
const Dashboard = () => {
  const leaveRequest = [
    { id: 1, date: "10 Dec, 2025", reason: "Personal Leave", type: "Family Event", Module: "High Performance Computing", class: "Workshop", submittedDate: "1st Dec, 2025", status: "Submitted" },
    { id: 2, date: "10 Dec, 2025", reason: "Personal Leave", type: "Family Event", Module: "High Performance Computing", class: "Workshop", submittedDate: "1st Dec, 2025", status: "Submitted" },
    { id: 3, date: "10 Dec, 2025 - 22nd Dec, 2025", reason: "Personal Leave", type: "Family Event", Module: "High Performance Computing", class: "Workshop", submittedDate: "1st Dec, 2025", status: "Submitted" },
    { id: 4, date: "10 Dec, 2025", reason: "Personal Leave", type: "Family Event", Module: "High Performance Computing", class: "Workshop", submittedDate: "1st Dec, 2025", status: "Submitted" },
    { id: 5, date: "10 Dec, 2025", reason: "Personal Leave", type: "Family Event", Module: "High Performance Computing", class: "Workshop", submittedDate: "1st Dec, 2025", status: "Submitted" },
  ];

  const getStatusColor = (id) => {
    if (id === 1) return "bg-yellow-400";
    if (id === 3) return "bg-red-500";
    if ([2, 4, 5].includes(id)) return "bg-green-500";
    return "bg-gray-300";
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="bg-[#3D3D3D] text-white p-4 flex items-center justify-between px-10">
        <div className="flex items-center gap-10">
          <img src={herald} alt="Logo" className="h-10" />
          <div className="flex gap-6 font-semibold text-gray-300">
            <p className="hover:text-white cursor-pointer transition">Home</p>
            <p className="hover:text-white cursor-pointer transition">Calendar</p>
            <p className="hover:text-white cursor-pointer transition">History</p>
          </div>
        </div>
        <button className="bg-[#77C144] hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition text-lg">
          Apply Request
        </button>
      </nav>

      {/* Main Content Area: Using a 5-column grid to get 40/60 split (2 cols / 3 cols) */}
      <div className="max-w-8xl mx-auto p-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
        
        {/* Left Section (40%) */}
        <div className="lg:col-span-2 flex flex-col justify-between py-10">
          <div>
            <p className="text-gray-500 text-xl mb-4">
              Manage attendance, late slips, and leave requests in one place.
            </p>
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              Welcome back, <br />
              <span className="text-green-600">Jeeshnu Maharjan!</span>
            </h1>
          </div>
          <div className="h-32">
           
          </div>
        </div>

        {/* Right Section (60%) */}
        <div className="lg:col-span-3 space-y-8">
          
          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Adjusted Leave Request Card */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <p className="text-xs text-gray-500 uppercase font-bold mb-3 tracking-wider">Leave Request</p>
              <div className="flex items-center justify-between">
                <Calendar className="text-blue-500 w-10 h-10" />
                <p className="text-3xl font-bold">4</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <p className="text-xs text-gray-500 uppercase font-bold mb-3 tracking-wider">Late Slips</p>
              <div className="flex items-center justify-between">
                <Phone className="text-orange-500 w-10 h-10" />
                <p className="text-3xl font-bold">1</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <p className="text-xs text-gray-500 uppercase font-bold mb-3 tracking-wider">Attendance</p>
              <div className="flex items-center justify-between">
                <CheckCircle className="text-green-500 w-10 h-10" />
                <p className="text-3xl font-bold">0</p>
              </div>
            </div>
          </div>

          {/* Recent Requests List */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="p-8 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Recent Requests</h2>
                <p className="text-sm text-gray-400">Showing 5 of 12</p>
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 text-gray-600">
                <Clock size={18} /> Nov-Dec 2025
              </div>
            </div>

            <hr className="mx-8 border-gray-100" />

            <div className="p-6 space-y-2">
              {leaveRequest.map((request) => (
                <div key={request.id} className="flex items-center justify-between hover:bg-gray-50 p-4 rounded-xl transition group">
                  
                  <div className="flex items-center gap-6">
                    {/* Status Line and Date Layout */}
                    <div className="flex items-center gap-3 w-32">
                      <div className={`w-1.5 h-12 rounded-full ${getStatusColor(request.id)}`}></div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase leading-tight">
                        {request.date.split(',')[0]} <br/> {request.date.split(',')[1] || ''}
                      </p>
                    </div>
                
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{request.reason}</h3>
                      <p className="text-sm text-gray-500 font-medium">{request.type}</p>
                    </div>
                  </div>

                  <div className="hidden md:block text-left px-4">
                    <p className="text-sm font-bold text-gray-700">{request.Module}</p>
                    <p className="text-xs text-gray-400 font-medium">{request.class}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] uppercase font-bold text-gray-400">Submitted</p>
                    <p className="text-sm font-bold text-gray-600">{request.submittedDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
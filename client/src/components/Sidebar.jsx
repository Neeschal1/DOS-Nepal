import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Fonts from "../utils/fontsconfig";
import { useAuth } from "../context/AuthContext";
import {
  MdDashboard,
  MdMenuBook,
  MdQuiz,
  MdPerson,
  MdLogout,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { Badge } from "./texts";

const DOMAIN_COLORS = {
  German: "german",
  Korean: "korean",
  Accounting: "accounting",
  Computer: "computer",
};

const navItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard size={20} />,
    exact: true,
  },
  {
    label: "My Resources",
    path: "/dashboard/resources",
    icon: <MdMenuBook size={20} />,
  },
  {
    label: "Mock Tests",
    path: "/dashboard/mock-tests",
    icon: <MdQuiz size={20} />,
  },
  {
    label: "My Profile",
    path: "/dashboard/profile",
    icon: <MdPerson size={20} />,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const domain = user?.profile?.domain || "German";
  const badgeVariant = DOMAIN_COLORS[domain] || "default";
  const fullName = user
    ? `${user.first_name} ${user.last_name}`
    : "Student";
  const initials = fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const isActive = (item) => {
    if (item.exact) return location.pathname === item.path;
    return location.pathname.startsWith(item.path);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo + Brand */}
      <div className="flex items-center gap-3 px-5 py-6 border-b border-gray-100">
        <div className="w-9 h-9 bg-[#FF090C] rounded-xl flex items-center justify-center">
          <FaGraduationCap size={20} color="white" />
        </div>
        <div>
          <p style={Fonts.poppins.bold} className="text-sm text-gray-900 leading-none">
            DOS Nepal
          </p>
          <p style={Fonts.poppins.regular} className="text-xs text-gray-400 mt-0.5">
            Student Portal
          </p>
        </div>
      </div>

      {/* User Info */}
      <div className="px-4 py-4 border-b border-gray-100">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
          {user?.profile?.profile_picture ? (
            <img
              src={user.profile.profile_picture}
              alt={fullName}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF090C] to-orange-400 flex items-center justify-center">
              <span style={Fonts.poppins.bold} className="text-white text-sm">
                {initials}
              </span>
            </div>
          )}
          <div className="min-w-0 flex-1">
            <p
              style={Fonts.poppins.semiBold}
              className="text-sm text-gray-900 truncate leading-none"
            >
              {fullName}
            </p>
            <div className="mt-1">
              <Badge variant={badgeVariant} className="text-xs">
                {domain} {domain === "German" || domain === "Korean" ? "Language" : "Training"}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setMobileOpen(false)}
            className={`
              flex items-center gap-3 px-4 py-3 rounded-xl
              transition-all duration-200 group
              ${isActive(item)
                ? "bg-[#FF090C] text-white shadow-sm shadow-red-200"
                : "text-gray-600 hover:bg-red-50 hover:text-[#FF090C]"
              }
            `}
          >
            <span className={`${isActive(item) ? "text-white" : "text-gray-400 group-hover:text-[#FF090C]"} transition-colors`}>
              {item.icon}
            </span>
            <span style={Fonts.poppins.medium} className="text-sm">
              {item.label}
            </span>
            {isActive(item) && (
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />
            )}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="
            flex items-center gap-3 w-full px-4 py-3 rounded-xl
            text-gray-500 hover:bg-red-50 hover:text-red-500
            transition-all duration-200 cursor-pointer group
          "
        >
          <MdLogout size={20} className="group-hover:text-red-500 transition-colors" />
          <span style={Fonts.poppins.medium} className="text-sm">
            Logout
          </span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 h-screen bg-white border-r border-gray-100 shadow-sm flex-shrink-0 sticky top-0">
        <SidebarContent />
      </aside>

      {/* Mobile hamburger button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center border border-gray-100"
      >
        <MdMenu size={20} color="#FF090C" />
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`
          lg:hidden fixed left-0 top-0 h-full w-64 bg-white z-50
          shadow-xl transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          <MdClose size={18} color="#6b7280" />
        </button>
        <SidebarContent />
      </aside>
    </>
  );
};

export default Sidebar;

import React from "react";
import Sidebar from "./Sidebar";
import Fonts from "../utils/fontsconfig";
import { useAuth } from "../context/AuthContext";
import { MdNotifications } from "react-icons/md";
import { Badge } from "./texts";

const DOMAIN_COLORS = {
  German: "german",
  Korean: "korean",
  Accounting: "accounting",
  Computer: "computer",
};

/**
 * DashboardLayout – Wraps all student dashboard pages.
 * Renders the left sidebar and top header bar, with main content in the right area.
 */
const DashboardLayout = ({ children, title = "", subtitle = "" }) => {
  const { user } = useAuth();
  const domain = user?.profile?.domain || "";
  const badgeVariant = DOMAIN_COLORS[domain] || "default";

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top header */}
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between flex-shrink-0 shadow-sm">
          <div className="pl-10 lg:pl-0">
            {title && (
              <h1
                style={Fonts.poppins.semiBold}
                className="text-lg text-gray-900 leading-tight"
              >
                {title}
              </h1>
            )}
            {subtitle && (
              <p style={Fonts.poppins.regular} className="text-xs text-gray-400 mt-0.5">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Notification bell */}
            <button className="w-9 h-9 rounded-xl border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors relative">
              <MdNotifications size={18} color="#6b7280" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FF090C] rounded-full" />
            </button>

            {/* Domain badge */}
            {domain && (
              <Badge variant={badgeVariant} className="hidden sm:inline-flex">
                {domain} {domain === "German" || domain === "Korean" ? "Language" : "Training"}
              </Badge>
            )}
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

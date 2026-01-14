"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  LogOut,
  HandCoins,
  Wallet,
  CircleQuestionMark,
  CircleDollarSign,
  UserPlus,
  ClipboardPen,
  Headset,
  ChevronDown, ChevronUp
} from "lucide-react";
// import { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";
// import { logoutUser } from "@/store/slices/registrationSlice";
// import { useAppDispatch } from "@/store/hooks";
import React, { useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { logoutUser } from "@/store/slices/authSlice";

export type MenuItem = {
  title: string;
  icon: LucideIcon;
  href: string;
  badge?: string | number | null;
};

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
    badge: null,
  },
  {
    title: "Product Management",
    icon: HandCoins,
    href: "/admin/product-management",
    badge: "24",
  },
  {
    title: "CMS",
    icon: ClipboardPen,
    href: "/admin/cms",
  },
  // {
  //   title: "Notifications & Alerts",
  //   icon: CircleQuestionMark,
  //   href: "/account/alerts",
  //   badge: null,
  // },
  // {
  //   title: "Team Management",
  //   icon: Users,
  //   href: "/account/team-management",
  //   badge: "3",
  // },
  // {
  //   title: "Commission & Earnings",
  //   icon: CircleDollarSign,
  //   href: "/account/earnings",
  //   badge: null,
  // },
  // {
  //   title: "Subscription Management",
  //   icon: UserPlus,
  //   href: "/account/subscription-management",
  //   badge: null,
  // },
  // {
  //   title: "Marketing Materials",
  //   icon: ClipboardPen,
  //   href: "/account/marketing-materials",
  //   badge: null,
  // },
  // {
  //   title: "Support & Helpdesk",
  //   icon: Headset,
  //   href: "/account/support",
  //   badge: null,
  // },
];

const cmsSubMenu = [
  { title: "Blog Management", href: "/admin/cms/blog-management" },
  { title: "Gallary Management", href: "/admin/cms/gallary-management" },
];

const productSubMenu = [
  { title: "All Products", href: "/admin/product-management" },
  { title: "Product Species", href: "/admin/product-management/species" },
  { title: "Product Categories", href: "/admin/product-management/categories" },
  { title: "Product Applications", href: "/admin/product-management/applications" },
  { title: "Regions", href: "/admin/product-management/regions" },
];

const bottomMenuItems: MenuItem[] = []
//  [
//   {
//     title: "Settings",
//     icon: Settings,
//     href: "/admin/settings",
//   },
//   {
//     title: "Help & Support",
//     icon: HelpCircle,
//     href: "/admin/support",
//   },
// ];

export default function AdminSidebar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch()
  const [leadsOpen, setLeadsOpen] = useState(
    pathname.startsWith("/admin/cms")
  );

  const [productOpen, setProductOpen] = useState(
    pathname.startsWith("/admin/product-management")
  );

  // console.log(leadsOpen)
  const router = useRouter()

  const onUserLogout = () => {
    dispatch(logoutUser())
    router.replace('/login')
  }
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-gray-200">
        <Link href="/admin/login" className="flex items-center gap-2">
          {/* <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#321765] to-[#BD2F9A] flex items-center justify-center">
            <span className="text-white font-bold text-sm">R1</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-[#321765] to-[#BD2F9A] bg-clip-text text-transparent">
            Real1Connect
          </span> */}
          <img src="/images/logo.png" alt="" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.href);

            return (
              <React.Fragment key={item.title}>
                {item.title === "CMS" ? (
                  <div key="cms">
                    <button
                      onClick={() => setLeadsOpen(!leadsOpen)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all group ${pathname.startsWith("/admin/cms")
                        ? "bg-gradient-to-r from-cyan-500 to-green-500 text-white shadow-md"
                        : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <HandCoins size={20} />
                        <span className="text-sm font-medium">{item.title}</span>
                      </div>
                      {leadsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>

                    {leadsOpen && (
                      <div className="mt-1 ml-9 space-y-1">
                        {cmsSubMenu.map((sub) => {
                          const isActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`block px-3 py-2 rounded-md text-sm transition ${isActive
                                ? "bg-green-100 text-green-700 font-medium"
                                : "text-gray-600 hover:bg-green-50 hover:text-green-700"
                                }`}
                            >
                              {sub.title}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : item.title === "Product Management" ? (
                  <div key="product-management">
                    <button
                      onClick={() => setProductOpen(!productOpen)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all group ${pathname.startsWith("/admin/product-management")
                        ? "bg-gradient-to-r from-cyan-500 to-green-500 text-white shadow-md"
                        : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <HandCoins size={20} />
                        <span className="text-sm font-medium">{item.title}</span>
                      </div>
                      {productOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>

                    {productOpen && (
                      <div className="mt-1 ml-9 space-y-1">
                        {productSubMenu.map((sub) => {
                          const isActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`block px-3 py-2 rounded-md text-sm transition ${isActive
                                ? "bg-green-100 text-green-700 font-medium"
                                : "text-gray-600 hover:bg-green-50 hover:text-green-700"
                                }`}
                            >
                              {sub.title}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) :
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-all group ${isActive
                      ? "bg-gradient-to-br from-cyan-500 to-green-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={20}
                        className={
                          isActive
                            ? "text-white"
                            : "text-gray-500 group-hover:text-green-600"
                        }
                      />
                      <span className="text-sm font-medium">{item.title}</span>
                    </div>
                    {item.badge && (
                      <span
                        className={`px-2 py-0.5 text-xs font-semibold rounded-full ${isActive
                          ? "bg-white/20 text-white"
                          : "bg-green-100 text-green-700"
                          }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                }
              </React.Fragment>
            );
          }
          )
          }
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-gray-200" />

        {/* Bottom Menu */}
        <div className="space-y-1">
          {bottomMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group ${isActive
                  ? "bg-gradient-to-r from-[#321765] to-[#BD2F9A] text-white"
                  : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                  }`}
              >
                <Icon
                  size={20}
                  className={
                    isActive
                      ? "text-white"
                      : "text-gray-500 group-hover:text-purple-600"
                  }
                />
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <Link className={`flex items-center gap-3 hover:bg-green-50 w-full p-1 rounded-sm`} href='/admin/profile'>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-100 to-green-100 flex items-center justify-center">
              <span className="text-green-700 font-semibold text-sm">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">
                John Doe
              </p>
              <p className="text-xs text-gray-500 truncate">Verified User</p>
            </div>
          </Link>
          <button onClick={onUserLogout} className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}

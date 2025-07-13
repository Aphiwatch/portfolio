// components/Sidebar.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>('about');

  const menuItems = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Project', href: '#project', id: 'project' },
    { name: 'Blog', href: '#blog', id: 'blog' },
  ];

  // ฟังก์ชันสำหรับจัดการเมื่อคลิกเมนู
  const handleClick = (sectionId: string) => {
    setActiveSection(sectionId);
    // Optional: สำหรับ smooth scroll (Next.js Link to hash จะทำ smooth scroll ให้โดย default)
    // const section = document.getElementById(sectionId);
    // section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-background text-gray-400 hidden md:hidden sm:hidden lg:block">
      <ul>
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <li key={item.id} className="mb-4">
              <Link
                href={item.href}
                onClick={() => handleClick(item.id)} // เมื่อคลิก ให้ตั้งค่า activeSection
                className="group flex items-center"
              >
                {/* แถบสีม่วงด้านหน้า (Indicator) */}
                <span
                  className={`
                    w-1 h-6 rounded-sm mr-3 transition-colors duration-200
                    ${isActive ? 'bg-primary' : 'bg-transparent group-hover:bg-gray-600'}
                  `}
                ></span>

                {/* ข้อความเมนู */}
                <span
                  className={`
                    text-lg font-medium transition-colors duration-200
                    ${isActive ? 'text-gray-50' : 'text-gray-400 group-hover:text-gray-200'}
                  `}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
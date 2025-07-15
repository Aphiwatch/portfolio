// components/Sidebar.tsx
'use client';

import { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>('about');

  const menuItems = [
    { name: 'About', href: 'about', id: 'about' },
    { name: 'Experience', href: 'experience', id: 'experience' },
    { name: 'Project', href: 'project', id: 'project' },
    { name: 'Blog', href: 'blog', id: 'blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = 100;

      for (let i = menuItems.length - 1; i >= 0; i--) {
        const item = menuItems[i];
        const section = document.getElementById(item.id);

        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= scrollOffset && rect.bottom >= scrollOffset) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuItems]);

  return (
    <nav className="bg-background text-gray-400 hidden md:hidden sm:hidden lg:block">
      <ul>
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <li key={item.id} className="mb-4">
              <ScrollLink
                to={item.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive={(to) => setActiveSection(to)}
                className="group flex items-center cursor-pointer"
              >
                {/* Indicator */}
                <span
                  className={`
                    w-1 h-6 rounded-sm mr-3 transition-colors duration-200
                    ${isActive ? 'bg-primary' : 'bg-transparent group-hover:bg-gray-600'}
                  `}
                ></span>
                {/* text */}
                <span
                  className={`
                    text-lg font-medium transition-colors duration-200
                    ${isActive ? 'text-gray-50' : 'text-gray-400 group-hover:text-gray-200'}
                  `}
                >
                  {item.name}
                </span>
              </ScrollLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
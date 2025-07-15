'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import data from "@/data/data.json";
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Type Definition สำหรับ ProjectItem แต่ละรายการใน Array 'project'
interface ProjectItem {
  id: string;
  name: string;
  description: string;
  role: string;
  duration: string; 
  stack: { iconName: string; name: string }[];
  preview_image: string[];
  repository: string;
  demo: string;
}

// Type สำหรับโครงสร้างรวมทั้งหมดของ data.json
interface FullDataStructure {
  project: ProjectItem[]; // นี่คือส่วนที่จะนำมาใช้ในตาราง
}

export default function ProjectTable() {
  const [projects] = useState<ProjectItem[]>((data as FullDataStructure).project);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 10; // จำนวน Project ที่จะแสดงต่อหน้า

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

  // คำนวณจำนวนหน้าทั้งหมด
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  // ฟังก์ชันสำหรับเปลี่ยนหน้า
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (projects.length === 0) {
    return <div className="text-center p-8 text-lg text-white">No projects found.</div>;
  }

  return (
    <div className="container mx-auto max-w-7xl">
      <div>
        {/* ปรับใช้ Tailwind CSS คลาสสำหรับ Table */}
        <table className="mt-12 w-full border-collapse text-left">
          {/* ส่วนหัวของตาราง */}
          <thead>
            <tr className="text-gray-400">
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Duration</th>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
              <th className="py-4 px-6 text-sm font-semibold text-slate-200">Description</th>
              <th className="py-4 px-6 pr-8 text-sm font-semibold text-slate-200">Role</th>
              <th className="py-4 px-6 pr-8 text-sm font-semibold text-slate-200">Tools</th>
              <th className="py-4 px-6 pr-8 text-sm font-semibold text-slate-200">Demo</th>
              <th className="py-4 px-6 pr-8 text-sm font-semibold text-slate-200">Repository</th>
            </tr>
          </thead>
          {/* ส่วนเนื้อหาของตาราง */}
          <tbody>
            {currentProjects.map((project) => (
              // ใช้ project.id เป็น key เพื่อประสิทธิภาพที่ดีกว่า (ถ้ามี id ที่ไม่ซ้ำกัน)
              <tr key={project.id} className="border-b border-slate-300/10 last:border-none">
                <td className="py-4 pr-4 align-top text-sm text-gray-500">{project.duration}</td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug">
                  {/* สีของชื่อโปรเจกต์ ปรับให้เข้ากับดีไซน์ (เช่น text-purple-400) */}
                  <span className="font-semibold text-lg text-text-default">{project.name}</span>
                </td>
                <td className="px-6 py-4 text-gray-500">{project.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{project.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tool, idx) => (
                      // ปรับใช้ Tailwind CSS คลาสสำหรับ Badge
                      <span key={idx} className="flex items-center bg-purple-950 text-primary px-4 py-2 rounded-md text-sm">
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {project.demo && project.demo !== '' ? (
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      View Demo
                    </Link>
                  ) : (
                    <span className="text-gray-500">N/A</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {project.repository && project.repository !== '' ? (
                    <Link href={project.repository} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-whites">
                      <FaGithub className="text-2xl flex justify-center items-center" />
                    </Link>
                  ) : (
                    <span className="text-gray-500">N/A</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ส่วน Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          {/* ปรับใช้ Tailwind CSS คลาสสำหรับปุ่ม Pagination */}
          <div className="flex space-x-2">
            <button
              className="px-4 py-2 text-white rounded-lg hover:text-purple-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft />
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg ${currentPage === index + 1 ? 'bg-purple-950 text-primary px-4 py-2 rounded-md' : 'text-text-default hover:text-purple-700 cursor-pointer'}`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="px-4 py-2 text-white rounded-lg hover:text-purple-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
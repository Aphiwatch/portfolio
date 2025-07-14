// utils/iconMap.ts
import {
  SiNextdotjs,
  SiTailwindcss,
  SiGo,
  SiFlutter,
  SiPostgresql,
} from 'react-icons/si';

import {
  FaGolang,
  FaPython,
  FaHtml5,
  FaCss3,
  FaJs,
  // ... import icons อื่นๆ ที่คุณใช้
} from "react-icons/fa6"; 
// หรือจาก react-icons/io, md, fi, etc.

// กำหนด type สำหรับ icon component
type IconComponent = React.ElementType;

// สร้าง Map ของชื่อ icon กับ icon component จริง
export const iconMap: Record<string, IconComponent> = {
  SiNextdotjs: SiNextdotjs,
  SiTailwindcss: SiTailwindcss,
  SiGo: SiGo,
  SiFlutter: SiFlutter,
  SiPostgresql: SiPostgresql,
  FaGolang: FaGolang,
  FaPython: FaPython,
  FaHtml5: FaHtml5,
  FaCss3: FaCss3,
  FaJs: FaJs,
  // ... เพิ่ม icons อื่นๆ ที่คุณต้องการใช้
};

// ฟังก์ชันสำหรับดึง Icon Component จากชื่อ
export function getIconComponent(iconName: string): IconComponent | undefined {
  return iconMap[iconName];
}
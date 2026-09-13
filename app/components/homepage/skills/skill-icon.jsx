// @flow strict
import React from 'react';
import {
  SiFlutter,
  SiDart,
  SiSwift,
  SiFirebase,
  SiXcode,
  SiAndroidstudio,
  SiGoogleplay,
  SiAppstore,
  SiGithub,
  SiCocoapods,
  SiSqlite,
  SiApple,
  SiReactivex,
  SiGithubactions,
  SiHive,
} from 'react-icons/si';
import {
  FaFolderOpen,
  FaMusic,
  FaKey,
  FaFireAlt,
  FaDatabase,
  FaImage,
  FaMapMarkedAlt,
  FaBolt,
} from 'react-icons/fa';
import {
  TbDeviceMobile,
  TbLayersIntersect,
  TbLayersLinked,
  TbArrowsExchange,
  TbHierarchy2,
  TbChecklist,
  TbComponents,
  TbLayersSubtract,
  TbHierarchy,
  TbShieldCheck,
  TbApi,
  TbTestPipe,
  TbCode,
} from 'react-icons/tb';
import { MdAnimation } from 'react-icons/md';

function SkillIcon({ skill, size = 44 }) {
  const normalized = skill?.toLowerCase().trim();

  switch (normalized) {
    case 'flutter':
      return <SiFlutter size={size} className="text-[#02569B] group-hover:text-[#47C5FB] transition-colors duration-300" />;
    case 'dart':
      return <SiDart size={size} className="text-[#0175C2] group-hover:text-[#00B4AB] transition-colors duration-300" />;
    case 'bloc':
      return <TbLayersIntersect size={size} className="text-[#60A5FA] group-hover:text-[#93C5FD] transition-colors duration-300" />;
    case 'provider':
      return <TbLayersLinked size={size} className="text-[#38BDF8] group-hover:text-[#7DD3FC] transition-colors duration-300" />;
    case 'getx':
      return <FaBolt size={size} className="text-[#A855F7] group-hover:text-[#C084FC] transition-colors duration-300" />;
    case 'dio':
      return <TbArrowsExchange size={size} className="text-[#06B6D4] group-hover:text-[#67E8F9] transition-colors duration-300" />;
    case 'hive':
      return <SiHive size={size} className="text-[#F59E0B] group-hover:text-[#FBBF24] transition-colors duration-300" />;
    case 'clean architecture':
      return <TbHierarchy2 size={size} className="text-[#10B981] group-hover:text-[#34D399] transition-colors duration-300" />;
    case 'swift':
      return <SiSwift size={size} className="text-[#F05138] group-hover:text-[#FB923C] transition-colors duration-300" />;
    case 'swiftui':
      return <SiSwift size={size} className="text-[#0071E3] group-hover:text-[#38BDF8] transition-colors duration-300" />;
    case 'uikit (xib)':
    case 'uikit':
      return <TbDeviceMobile size={size} className="text-[#3B82F6] group-hover:text-[#60A5FA] transition-colors duration-300" />;
    case 'ios app':
      return <SiApple size={size} className="text-[#F1F5F9] group-hover:text-white transition-colors duration-300" />;
    case 'coredata':
      return <SiSqlite size={size} className="text-[#0284C7] group-hover:text-[#38BDF8] transition-colors duration-300" />;
    case 'userdefaults':
      return <FaDatabase size={size} className="text-[#94A3B8] group-hover:text-[#CBD5E1] transition-colors duration-300" />;
    case 'filemanager':
      return <FaFolderOpen size={size} className="text-[#F59E0B] group-hover:text-[#FCD34D] transition-colors duration-300" />;
    case 'animations':
      return <MdAnimation size={size} className="text-[#EC4899] group-hover:text-[#F472B6] transition-colors duration-300" />;
    case 'combine':
      return <SiReactivex size={size} className="text-[#EF4444] group-hover:text-[#F87171] transition-colors duration-300" />;
    case 'cocoapods':
      return <SiCocoapods size={size} className="text-[#EE3322] group-hover:text-[#F87171] transition-colors duration-300" />;
    case 'alamofire':
      return <FaFireAlt size={size} className="text-[#F97316] group-hover:text-[#FB923C] transition-colors duration-300" />;
    case 'firebase':
      return <SiFirebase size={size} className="text-[#FFA611] group-hover:text-[#FCD34D] transition-colors duration-300" />;
    case 'mapkit':
      return <FaMapMarkedAlt size={size} className="text-[#10B981] group-hover:text-[#34D399] transition-colors duration-300" />;
    case 'sdwebimage':
      return <FaImage size={size} className="text-[#06B6D4] group-hover:text-[#22D3EE] transition-colors duration-300" />;
    case 'audioplayer':
      return <FaMusic size={size} className="text-[#A855F7] group-hover:text-[#C084FC] transition-colors duration-300" />;
    case 'keychain':
      return <FaKey size={size} className="text-[#EAB308] group-hover:text-[#FDE047] transition-colors duration-300" />;
    case 'rest api':
      return <TbApi size={size} className="text-[#14B8A6] group-hover:text-[#2DD4BF] transition-colors duration-300" />;
    case 'github':
      return <SiGithub size={size} className="text-[#F8FAFC] group-hover:text-white transition-colors duration-300" />;
    case 'ui testing':
      return <TbTestPipe size={size} className="text-[#F43F5E] group-hover:text-[#FB7185] transition-colors duration-300" />;
    case 'unit testing':
      return <TbChecklist size={size} className="text-[#10B981] group-hover:text-[#34D399] transition-colors duration-300" />;
    case 'mvc':
      return <TbComponents size={size} className="text-[#3B82F6] group-hover:text-[#60A5FA] transition-colors duration-300" />;
    case 'mvvm':
      return <TbLayersSubtract size={size} className="text-[#8B5CF6] group-hover:text-[#A78BFA] transition-colors duration-300" />;
    case 'mvp':
      return <TbHierarchy size={size} className="text-[#EC4899] group-hover:text-[#F472B6] transition-colors duration-300" />;
    case 'viper':
      return <TbShieldCheck size={size} className="text-[#06B6D4] group-hover:text-[#38BDF8] transition-colors duration-300" />;
    case 'xcode':
      return <SiXcode size={size} className="text-[#1575F9] group-hover:text-[#60A5FA] transition-colors duration-300" />;
    case 'android studio':
      return <SiAndroidstudio size={size} className="text-[#3DDC84] group-hover:text-[#6EE7B7] transition-colors duration-300" />;
    case 'ci/cd':
      return <SiGithubactions size={size} className="text-[#2088FF] group-hover:text-[#60A5FA] transition-colors duration-300" />;
    case 'app store':
      return <SiAppstore size={size} className="text-[#007AFF] group-hover:text-[#38BDF8] transition-colors duration-300" />;
    case 'google play':
      return <SiGoogleplay size={size} className="text-[#00E676] group-hover:text-[#4ADE80] transition-colors duration-300" />;
    default:
      return <TbCode size={size} className="text-[#A78BFA] group-hover:text-[#C4B5FD] transition-colors duration-300" />;
  }
}

export default SkillIcon;

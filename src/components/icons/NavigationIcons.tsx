import React from 'react';

// Home Icon
export const HomeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 1.5L2 6.5V14.5H6V10.5H10V14.5H14V6.5L8 1.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Recently Viewed Icon (Apps/Grid)
export const AppsIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

// Analytics Icon (Chart/Graph)
export const AnalyticsIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 14V10M6 14V6M10 14V8M14 14V4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="2" cy="10" r="1" fill="currentColor"/>
    <circle cx="6" cy="6" r="1" fill="currentColor"/>
    <circle cx="10" cy="8" r="1" fill="currentColor"/>
    <circle cx="14" cy="4" r="1" fill="currentColor"/>
  </svg>
);

// Observability Icon (Eye/Glasses)
export const ObservabilityIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 8C1 8 3.5 3 8 3C12.5 3 15 8 15 8C15 8 12.5 13 8 13C3.5 13 1 8 1 8Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle
      cx="8"
      cy="8"
      r="2.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

// Security Icon (Shield)
export const SecurityIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 1.5L3 3.5V8C3 11.5 8 14.5 8 14.5C8 14.5 13 11.5 13 8V3.5L8 1.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M6 8L7.5 9.5L10.5 6.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Configure Icon (Gear/Settings)
export const ConfigureIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M12.93 6.5C12.83 6.18 12.69 5.87 12.51 5.58L13.5 4.58C13.89 4.19 13.89 3.56 13.5 3.17L12.83 2.5C12.44 2.11 11.81 2.11 11.42 2.5L10.42 3.49C10.13 3.31 9.82 3.17 9.5 3.07V1.5C9.5 0.95 9.05 0.5 8.5 0.5H7.5C6.95 0.5 6.5 0.95 6.5 1.5V3.07C6.18 3.17 5.87 3.31 5.58 3.49L4.58 2.5C4.19 2.11 3.56 2.11 3.17 2.5L2.5 3.17C2.11 3.56 2.11 4.19 2.5 4.58L3.49 5.58C3.31 5.87 3.17 6.18 3.07 6.5H1.5C0.95 6.5 0.5 6.95 0.5 7.5V8.5C0.5 9.05 0.95 9.5 1.5 9.5H3.07C3.17 9.82 3.31 10.13 3.49 10.42L2.5 11.42C2.11 11.81 2.11 12.44 2.5 12.83L3.17 13.5C3.56 13.89 4.19 13.89 4.58 13.5L5.58 12.51C5.87 12.69 6.18 12.83 6.5 12.93V14.5C6.5 15.05 6.95 15.5 7.5 15.5H8.5C9.05 15.5 9.5 15.05 9.5 14.5V12.93C9.82 12.83 10.13 12.69 10.42 12.51L11.42 13.5C11.81 13.89 12.44 13.89 12.83 13.5L13.5 12.83C13.89 12.44 13.89 11.81 13.5 11.42L12.51 10.42C12.69 10.13 12.83 9.82 12.93 9.5H14.5C15.05 9.5 15.5 9.05 15.5 8.5V7.5C15.5 6.95 15.05 6.5 14.5 6.5H12.93Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Management Icon (User)
export const ManagementIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="8"
      cy="5"
      r="3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M2 14C2 11.79 4.69 10 8 10C11.31 10 14 11.79 14 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Chevron Down Icon for expandable sections
export const ChevronDownIcon: React.FC<{ className?: string; isExpanded?: boolean }> = ({ 
  className = "w-3 h-3", 
  isExpanded = false 
}) => (
  <svg 
    className={`${className} transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
    viewBox="0 0 12 12" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 4.5L6 7.5L9 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Menu Toggle Icon
export const MenuToggleIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 4L10 8L6 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
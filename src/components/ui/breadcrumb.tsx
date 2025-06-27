import React from "react";
import { cn } from "../../lib/utils";

interface BreadcrumbProps {
  className?: string;
  children: React.ReactNode;
}

interface BreadcrumbItemProps {
  className?: string;
  children: React.ReactNode;
  isActive?: boolean;
}

interface BreadcrumbSeparatorProps {
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ className, children }) => (
  <nav className={cn("flex items-center", className)} aria-label="Breadcrumb">
    <ol className="flex items-center">
      {children}
    </ol>
  </nav>
);

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ 
  className, 
  children, 
  isActive = false 
}) => (
  <li className={cn("flex items-center", className)}>
    <span 
      className={cn(
        "font-XS-paragraph-semibold text-[length:var(--XS-paragraph-semibold-font-size)] tracking-[var(--XS-paragraph-semibold-letter-spacing)] leading-[var(--XS-paragraph-semibold-line-height)] whitespace-nowrap",
        isActive 
          ? "text-buttonstextnormalsecondary bg-buttonsbackgroundnormaldefaultprimary px-2 py-1 rounded-none" 
          : "text-text-subdued-euitextsubduedcolor bg-buttons-background-normal-default-text px-2 py-1 rounded-[6px_0px_0px_6px]"
      )}
    >
      {children}
    </span>
  </li>
);

export const BreadcrumbSeparator: React.FC<BreadcrumbSeparatorProps> = ({ className }) => (
  <li className={cn("flex items-center", className)}>
    <svg 
      width="12" 
      height="24" 
      viewBox="0 0 12 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="text-buttons-background-normal-default-text"
    >
      <path 
        d="M0 0L12 12L0 24V0Z" 
        fill="currentColor"
      />
    </svg>
  </li>
);
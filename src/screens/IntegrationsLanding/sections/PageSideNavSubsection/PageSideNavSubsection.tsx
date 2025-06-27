import React, { useState } from "react";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import {
  HomeIcon,
  AppsIcon,
  AnalyticsIcon,
  ObservabilityIcon,
  SecurityIcon,
  ConfigureIcon,
  ManagementIcon,
  ChevronDownIcon,
  MenuToggleIcon,
} from "../../../../components/icons/NavigationIcons";

export const PageSideNavSubsection = (): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "analytics",
    "observability", 
    "security",
    "configure",
    "management"
  ]);

  // Navigation data structure for main sections
  const navigationSections = [
    {
      id: "recently-viewed",
      icon: <AppsIcon className="w-4 h-4 text-coreempty-euicoloremptyshade flex-shrink-0" />,
      title: "Recently Viewed",
      expandable: false,
    },
    {
      id: "analytics",
      icon: <AnalyticsIcon className="w-4 h-4 text-coreempty-euicoloremptyshade flex-shrink-0" />,
      title: "Analytics",
      expandable: true,
      items: [
        "Overview",
        "Discover",
        "Dashboards",
        "Alerts",
        "Anomaly Detection",
      ],
    },
    {
      id: "observability",
      icon: <ObservabilityIcon className="w-4 h-4 text-coreempty-euicoloremptyshade flex-shrink-0" />,
      title: "Observability",
      expandable: true,
      items: ["Overview", "Visualization", "Dashboards", "Analytics"],
    },
    {
      id: "security",
      icon: <SecurityIcon className="w-4 h-4 text-coreempty-euicoloremptyshade flex-shrink-0" />,
      title: "Security",
      expandable: true,
      items: ["Overview", "Dashboards"],
    },
    {
      id: "configure",
      icon: <ConfigureIcon className="w-4 h-4 text-coreempty-euicoloremptyshade flex-shrink-0" />,
      title: "Configure",
      expandable: true,
      items: [
        "Configure",
        "Query Workbench",
        "Stack Management",
        "Integrations",
      ],
      activeItem: "Integrations",
    },
  ];

  // Management section data
  const managementSection = {
    id: "management",
    icon: <ManagementIcon className="w-4 h-4 text-coreempty-euicoloremptyshade flex-shrink-0" />,
    title: "Management",
    expandable: true,
    items: ["Data Connection", "Users", "Roles", "Logout"],
  };

  const toggleSection = (sectionId: string) => {
    if (isCollapsed) return; // Don't expand sections when collapsed
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav 
      className={`
        flex flex-col bg-[#1d1e24] text-coreempty-euicoloremptyshade
        transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-16' : 'w-64'}
        relative h-screen
      `}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Toggle Button - positioned above logo with center alignment */}
      <button
        onClick={toggleSidebar}
        className={`
          absolute z-10 p-2 rounded-md
          bg-[#2a2d35] hover:bg-[#3a3d45] 
          text-coreempty-euicoloremptyshade hover:text-white
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1d1e24]
          ${isCollapsed ? 'top-3 left-1/2 transform -translate-x-1/2' : 'top-4 right-4'}
        `}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        aria-expanded={!isCollapsed}
      >
        <MenuToggleIcon 
          className={`
            w-4 h-4 transition-transform duration-200
            ${isCollapsed ? 'rotate-0' : 'rotate-180'}
          `} 
        />
      </button>

      <ScrollArea className="flex-1 h-full overflow-hidden">
        <div className={`
          flex flex-col gap-6 pb-6 transition-all duration-300 h-full
          ${isCollapsed ? 'px-0 pt-16' : 'px-6 pt-3'}
        `}>
          <div className="flex flex-col gap-4 flex-1 h-full">
            {/* Header with logo - positioned below toggle button when collapsed */}
            <div className={`
              flex items-center transition-all duration-300
              ${isCollapsed ? 'justify-center px-4' : 'justify-start px-0'}
            `}>
              <div className={`
                flex items-center transition-all duration-300 overflow-hidden
                ${isCollapsed ? 'w-8' : 'w-full'}
              `}>
                {isCollapsed ? (
                  <div 
                    className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold text-sm"
                    title="Elysium Analytics"
                  >
                    E
                  </div>
                ) : (
                  <img
                    className="h-[35px] w-auto object-contain"
                    alt="Elysium Analytics"
                    src="/elysium-analytics-logo.svg"
                    style={{ maxWidth: '160px' }}
                    onError={(e) => {
                      console.error('Logo failed to load:', e);
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'text-white font-bold text-lg';
                      fallback.textContent = 'Elysium Analytics';
                      target.parentNode?.appendChild(fallback);
                    }}
                  />
                )}
              </div>
            </div>

            {/* Home link */}
            <div 
              className={`
                flex items-center gap-2 py-2 cursor-pointer 
                hover:bg-[#2a2d35] rounded-md transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1d1e24]
                ${isCollapsed ? 'mx-4 px-0 justify-center' : 'mx-0 px-2 justify-start'}
              `}
              role="button"
              tabIndex={0}
              aria-label="Home"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  // Handle home navigation
                }
              }}
            >
              <HomeIcon className="w-4 h-4 text-coreempty-euicoloremptyshade flex-shrink-0" />
              <span 
                className={`
                  font-title-XX-small text-coreempty-euicoloremptyshade
                  transition-all duration-300 whitespace-nowrap
                  ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto'}
                `}
              >
                Home
              </span>
            </div>

            {/* Main navigation sections */}
            <div className="flex flex-col space-y-1 flex-1">
              {navigationSections.map((section) => (
                <div key={section.id} className="border-none">
                  <div 
                    className={`
                      flex items-center justify-between py-2 cursor-pointer 
                      hover:bg-[#2a2d35] rounded-md transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1d1e24]
                      ${isCollapsed ? 'mx-4 px-0' : 'mx-0 px-2'}
                    `}
                    onClick={() => section.expandable && toggleSection(section.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={section.title}
                    aria-expanded={section.expandable ? expandedSections.includes(section.id) : undefined}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        section.expandable && toggleSection(section.id);
                      }
                    }}
                    title={isCollapsed ? section.title : undefined}
                  >
                    <div className={`
                      flex items-center gap-2 flex-1 min-w-0
                      ${isCollapsed ? 'justify-center' : 'justify-start'}
                    `}>
                      {section.icon}
                      <span 
                        className={`
                          font-s-paragraph-regular text-coreempty-euicoloremptyshade
                          transition-all duration-300 whitespace-nowrap
                          ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto'}
                        `}
                      >
                        {section.title}
                      </span>
                    </div>
                    {section.expandable && !isCollapsed && (
                      <ChevronDownIcon 
                        className="w-3 h-3 text-coreempty-euicoloremptyshade flex-shrink-0" 
                        isExpanded={expandedSections.includes(section.id)}
                      />
                    )}
                  </div>

                  {/* Submenu items */}
                  {section.items && expandedSections.includes(section.id) && !isCollapsed && (
                    <div 
                      className="flex flex-col mt-1 overflow-hidden transition-all duration-300"
                      role="group"
                      aria-label={`${section.title} submenu`}
                    >
                      {section.items.map((item, itemIndex) => (
                        <div
                          key={`item-${section.id}-${itemIndex}`}
                          className="flex items-start gap-2 pl-2 cursor-pointer hover:bg-[#2a2d35] rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1d1e24]"
                          role="button"
                          tabIndex={0}
                          aria-label={item}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              // Handle item navigation
                            }
                          }}
                        >
                          <div className="relative self-stretch w-[5px]">
                            <div className="relative w-1 h-7">
                              <div className="absolute w-1 h-px top-3.5 left-0 bg-corelight-euicolorlightshade" />
                              <div className="h-7 absolute w-px top-0 left-0 bg-corelight-euicolorlightshade" />
                            </div>
                          </div>
                          <div className="flex flex-col pt-[3px] pb-1 flex-1 min-w-0">
                            <span
                              className={`
                                transition-colors duration-200 whitespace-nowrap overflow-hidden text-ellipsis
                                ${
                                  section.activeItem === item
                                    ? "font-bold text-textprimary-euicolorprimarytext underline"
                                    : "font-s-paragraph-regular text-coreempty-euicoloremptyshade"
                                }
                              `}
                            >
                              {item}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Management section - positioned at bottom */}
          <div className="flex flex-col mt-auto">
            <div className="border-none">
              <div 
                className={`
                  flex items-center justify-between py-2 cursor-pointer 
                  hover:bg-[#2a2d35] rounded-md transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1d1e24]
                  ${isCollapsed ? 'mx-4 px-0' : 'mx-0 px-2'}
                `}
                onClick={() => toggleSection(managementSection.id)}
                role="button"
                tabIndex={0}
                aria-label={managementSection.title}
                aria-expanded={expandedSections.includes(managementSection.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleSection(managementSection.id);
                  }
                }}
                title={isCollapsed ? managementSection.title : undefined}
              >
                <div className={`
                  flex items-center gap-2 flex-1 min-w-0
                  ${isCollapsed ? 'justify-center' : 'justify-start'}
                `}>
                  {managementSection.icon}
                  <span 
                    className={`
                      font-s-paragraph-regular text-coreempty-euicoloremptyshade
                      transition-all duration-300 whitespace-nowrap
                      ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto'}
                    `}
                  >
                    {managementSection.title}
                  </span>
                </div>
                {!isCollapsed && (
                  <ChevronDownIcon 
                    className="w-3 h-3 text-coreempty-euicoloremptyshade flex-shrink-0" 
                    isExpanded={expandedSections.includes(managementSection.id)}
                  />
                )}
              </div>

              {/* Management submenu */}
              {expandedSections.includes(managementSection.id) && !isCollapsed && (
                <div 
                  className="flex flex-col mt-1 overflow-hidden transition-all duration-300"
                  role="group"
                  aria-label={`${managementSection.title} submenu`}
                >
                  {managementSection.items.map((item, itemIndex) => (
                    <div
                      key={`management-item-${itemIndex}`}
                      className="flex items-start gap-2 pl-2 cursor-pointer hover:bg-[#2a2d35] rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1d1e24]"
                      role="button"
                      tabIndex={0}
                      aria-label={item}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          // Handle item navigation
                        }
                      }}
                    >
                      <div className="relative self-stretch w-[5px]">
                        <div className="relative w-1 h-7">
                          <div className="absolute w-1 h-px top-3.5 left-0 bg-corelight-euicolorlightshade" />
                          <div className="h-7 absolute w-px top-0 left-0 bg-corelight-euicolorlightshade" />
                        </div>
                      </div>
                      <div className="flex flex-col pt-[3px] pb-1 flex-1 min-w-0">
                        <span className="font-s-paragraph-regular text-coreempty-euicoloremptyshade whitespace-nowrap overflow-hidden text-ellipsis">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </ScrollArea>

      {/* Collapsed state tooltip overlay */}
      {isCollapsed && (
        <div className="absolute inset-0 pointer-events-none">
          {/* This div helps with hover tooltips in collapsed state */}
        </div>
      )}
    </nav>
  );
};
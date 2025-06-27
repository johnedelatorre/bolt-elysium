import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator } from "../../../../components/ui/breadcrumb";

export const PageBodySubsection = (): JSX.Element => {
  const [isInstalledToggled, setIsInstalledToggled] = useState(false);
  const [activeTab, setActiveTab] = useState("browse");
  const [alertsBreakdownExpanded, setAlertsBreakdownExpanded] = useState(true);
  const [alertsCombinedExpanded, setAlertsCombinedExpanded] = useState(true);
  const [selectedRows, setSelectedRows] = useState<number[]>([1, 2, 3]);
  const [selectAll, setSelectAll] = useState(false);

  // Featured integrations data
  const featuredIntegrations = [
    {
      title: "Web Crawler",
      description:
        "Add search to your website with the Enterprise Search Web Crawler",
      iconSrc: "/union-1.svg",
    },
    {
      title: "Elysium APM",
      description:
        "Monitor, detect and diagnose complex application performance issues",
      iconSrc: "/union-6.svg",
    },
    {
      title: "Endpoint and Cloud Security",
      description:
        "Protect your hosts and cloud workloads with threat prevention, detection and deep security data visibility",
      iconSrc: "/union.svg",
    },
  ];

  // Categories data with counts
  const categories = [
    { name: "All Categories", count: 300, isSelected: true },
    { name: "AWS", count: 10, isSelected: false },
    { name: "Azure", count: 3, isSelected: false },
    { name: "Cloud", count: 2, isSelected: false },
    { name: "Communications", count: 100, isSelected: false },
    { name: "Config Management", count: 111, isSelected: false },
    { name: "Containers", count: 45, isSelected: false },
    { name: "CRM", count: 100, isSelected: false },
    { name: "Database", count: 224, isSelected: false },
    { name: "Elastic Stack", count: 224, isSelected: false },
    { name: "Enterprise Search", count: 224, isSelected: false },
    { name: "File Storage", count: 224, isSelected: false },
    { name: "Geo", count: 224, isSelected: false },
    { name: "Google Cloud", count: 224, isSelected: false },
    { name: "Infrastructure", count: 224, isSelected: false },
    { name: "Kubernetes", count: 224, isSelected: false },
    { name: "Language Client", count: 224, isSelected: false },
    { name: "Message Broker", count: 224, isSelected: false },
    { name: "Microsoft 365", count: 224, isSelected: false },
    { name: "Monitoring", count: 224, isSelected: false },
    { name: "Operating Systems", count: 224, isSelected: false },
    { name: "Threat Intelligence", count: 224, isSelected: false },
    { name: "Upload a File", count: 224, isSelected: false },
    { name: "Web Server", count: 224, isSelected: false },
  ];

  // Integration cards data
  const integrationCards = [
    {
      title: "AWS EC2",
      description: "Collect logs from 1Password with Elastic Agent.",
      installedCount: 5,
      iconType: "aws",
    },
    {
      title: "Amazon Cloud",
      description: "Collect logs from 1Password with Elastic Agent.",
      installedCount: 5,
      iconType: "amazon",
    },
    {
      title: "Microsoft",
      description: "Collect logs from 1Password with Elastic Agent.",
      installedCount: 5,
      iconType: "microsoft",
    },
  ];

  // Create rows of integration cards for the grid view
  const integrationRows = Array(7).fill(integrationCards);

  // Manage tab data
  const alertsData = [
    {
      id: 1,
      description: "Analyze mock web traffic log data for Elastic's website",
      status: "Installed",
      category: "Security Data Analytics",
      lastUpdated: "Dec 17, 2020",
    },
    {
      id: 2,
      description: "Analyze mock web traffic log data for Elastic's website",
      status: "Installed",
      category: "Security Data Analytics",
      lastUpdated: "Dec 17, 2020",
    },
    {
      id: 3,
      description: "Analyze mock web traffic log data for Elastic's website",
      status: "Installed",
      category: "Security Data Analytics",
      lastUpdated: "Dec 17, 2020",
    },
    {
      id: 4,
      description: "Analyze mock web traffic log data for Elastic's website",
      status: "Installed",
      category: "Metrics",
      lastUpdated: "Dec 17, 2020",
    },
    {
      id: 5,
      description: "Analyze mock web traffic log data for Elastic's website",
      status: "Installed",
      category: "Analytics",
      lastUpdated: "Dec 17, 2020",
    },
    {
      id: 6,
      description: "Analyze mock web traffic log data for Elastic's website",
      status: "Installed",
      category: "Security Data Analytics",
      lastUpdated: "Dec 17, 2020",
    },
    {
      id: 7,
      description: "Analyze mock web traffic log data for Elastic's website",
      status: "Installed",
      category: "Security Data Analytics",
      lastUpdated: "Dec 17, 2020",
    },
    {
      id: 8,
      description: "Analyze mock web traffic log data for Elastic's website",
      status: "Installed",
      category: "Security Data Analytics",
      lastUpdated: "Dec 17, 2020",
    },
    {
      id: 9,
      description: "Analyze mock web traffic log data for Elastic's website",
      status: "Installed",
      category: "Security Data Analytics",
      lastUpdated: "Dec 17, 2020",
    },
    {
      id: 10,
      description: "Analyze mock web traffic log data for Elastic's website",
      status: "Installed",
      category: "Security Data Analytics",
      lastUpdated: "Dec 17, 2020",
    }
  ];

  // Line chart data
  const lineChartData = [
    { day: 'Mon', value: 1000, x: 80, y: 280 },
    { day: 'Tue', value: 3000, x: 180, y: 200 },
    { day: 'Wed', value: 8000, x: 280, y: 80 },
    { day: 'Thu', value: 2500, x: 380, y: 220 },
    { day: 'Fri', value: 1000, x: 480, y: 280 },
    { day: 'Sat', value: 8500, x: 580, y: 70 },
    { day: 'Sun', value: 3000, x: 680, y: 200 }
  ];

  // Bar chart data
  const barChartData = [
    { day: '14', income: 200, expense: 150 },
    { day: '15', income: 120, expense: 140 },
    { day: '16', income: 250, expense: 130 },
    { day: '17', income: 200, expense: 60 },
    { day: '18', income: 220, expense: 140 },
    { day: '19', income: 180, expense: 150 },
    { day: '20', income: 80, expense: 400 },
    { day: '21', income: 240, expense: 100 },
    { day: '22', income: 300, expense: 200 }
  ];

  const handleRowSelect = (id: number) => {
    setSelectedRows(prev => 
      prev.includes(id) 
        ? prev.filter(rowId => rowId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(alertsData.map(alert => alert.id));
    }
    setSelectAll(!selectAll);
  };

  const clearSelection = () => {
    setSelectedRows([]);
    setSelectAll(false);
  };

  return (
    <div className="flex flex-col flex-1 bg-[#19191a] h-screen overflow-hidden shadow-shadow-bottom-medium">
      {/* STICKY HEADER - Only this section is sticky */}
      <header className="sticky top-0 z-10 flex items-center justify-between p-2 w-full bg-[#19191a] shadow-shadow-bottom-small">
        <Breadcrumb className="inline-flex items-center">
          <BreadcrumbItem>
            Integrations
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem isActive>
            Browse Integrations
          </BreadcrumbItem>
        </Breadcrumb>

        <Button
          variant="default"
          className="h-8 bg-textprimary-euicolorprimarytext text-coreempty-euicoloremptyshade rounded"
        >
          <div className="w-4 h-4 mr-2">
            <img
              className="w-3.5 h-[13px] mt-[3px] ml-0.5"
              alt="Union"
              src="/union-7.svg"
            />
          </div>
          View Deployment Details
        </Button>
      </header>

      <Separator className="bg-[#303030]" />

      {/* SCROLLABLE CONTENT - Everything below the header scrolls */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-6 pt-6 pb-px px-6 w-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2.5">
              <h1 className="font-title-large text-core-lightest-euicolorlightestshade text-[length:var(--title-large-font-size)] tracking-[var(--title-large-letter-spacing)] leading-[var(--title-large-line-height)]">
                Integrations
              </h1>
            </div>

            <p className="font-m-paragraph-regular text-text-disabled-euicolordisabledtext text-[length:var(--m-paragraph-regular-font-size)] tracking-[var(--m-paragraph-regular-letter-spacing)] leading-[var(--m-paragraph-regular-line-height)]">
              Choose an integration to start collecting and analyzing your data.
            </p>
          </div>

          {/* Updated Tabs with proper styling */}
          <div className="w-full border-b border-[#303030]">
            <div className="flex">
              <button
                onClick={() => setActiveTab("browse")}
                className={`
                  relative px-4 py-3 font-medium text-sm transition-colors duration-200
                  ${activeTab === "browse" 
                    ? "text-[#0071c2] border-b-2 border-[#0071c2]" 
                    : "text-text-disabled-euicolordisabledtext hover:text-[#ffffff]"
                  }
                `}
              >
                Browse Integrations
              </button>
              <button
                onClick={() => setActiveTab("manage")}
                className={`
                  relative px-4 py-3 font-medium text-sm transition-colors duration-200
                  ${activeTab === "manage" 
                    ? "text-[#0071c2] border-b-2 border-[#0071c2]" 
                    : "text-text-disabled-euicolordisabledtext hover:text-[#ffffff]"
                  }
                `}
              >
                Manage
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "browse" && (
          <>
            <div className="p-6 w-full flex justify-between">
              {featuredIntegrations.map((integration, index) => (
                <Card
                  key={index}
                  className="w-[370px] bg-[#23262b] border-[#303030] shadow-shadow-bottom-medium"
                >
                  <CardContent className="p-4 flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center w-full rounded-[6px_6px_0px_0px]">
                      <div className="inline-flex items-center justify-center">
                        <div className="relative w-10 h-10">
                          <img
                            className="absolute w-[38px] h-[38px] top-0 left-0"
                            alt={integration.title}
                            src={integration.iconSrc}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-2 w-full">
                      <h3 className="font-title-small text-panelplain text-[length:var(--title-small-font-size)] text-center tracking-[var(--title-small-letter-spacing)] leading-[var(--title-small-line-height)]">
                        {integration.title}
                      </h3>

                      <p className="font-s-paragraph-regular text-panelplain text-[length:var(--s-paragraph-regular-font-size)] text-center tracking-[var(--s-paragraph-regular-letter-spacing)] leading-[var(--s-paragraph-regular-line-height)]">
                        {integration.description}
                      </p>
                    </div>

                    <Button className="w-full h-10 bg-coreterciary-euicolorterciary text-coreempty-euicoloremptyshade rounded-md">
                      Select
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex items-start gap-[50px] p-6 w-full">
              {/* Left sidebar with categories */}
              <div className="flex flex-col items-start flex-shrink-0">
                <div className="flex flex-col items-start gap-2">
                  {categories.map((category, index) => (
                    <div key={index} className="relative w-[200px] h-8">
                      <div className="relative h-8">
                        <Badge
                          className={`absolute top-1.5 right-0 ${category.isSelected ? "bg-coreprimary-euicolorprimary text-coreempty-euicoloremptyshade" : "bg-corelight-euicolorlightshade text-coreprimary-euicolorprimary"} px-1.5 py-0.5 rounded-[3px]`}
                        >
                          {category.count}
                        </Badge>

                        <div className="inline-flex items-center gap-2 absolute top-1.5 left-0">
                          <span
                            className={`${category.isSelected ? "font-s-paragraph-bold" : "font-s-paragraph-regular"} text-panelplain text-[length:var(--s-paragraph-${category.isSelected ? "bold" : "regular"}-font-size)] tracking-[var(--s-paragraph-${category.isSelected ? "bold" : "regular"}-letter-spacing)] leading-[var(--s-paragraph-${category.isSelected ? "bold" : "regular"}-line-height)] whitespace-nowrap`}
                          >
                            {category.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  <Separator className="w-[200px] my-3 bg-corelight-euicolorlightshade border-[#303030]" />

                  <div className="flex flex-col gap-1 w-[200px]">
                    <p className="font-normal text-panelplain text-sm">
                      <span className="text-[#ffffff] leading-6">
                        If an integration is available for{" "}
                      </span>
                      <span className="font-medium text-[#006aa2] text-xs leading-[18px] underline">
                        Elastic Agent and Beats
                      </span>
                      <span className="text-[#ffffff] leading-6">, show:</span>
                    </p>

                    <div className="flex flex-col gap-1 mt-1">
                      <div className="flex items-start gap-2">
                        <div className="pt-1">
                          <Checkbox
                            id="recommended"
                            className="w-4 h-4 bg-coreprimary-euicolorprimary rounded-lg"
                            checked
                          />
                        </div>
                        <label
                          htmlFor="recommended"
                          className="font-m-small-regular text-panelplain text-[length:var(--m-small-regular-font-size)] tracking-[var(--m-small-regular-letter-spacing)] leading-[var(--m-small-regular-line-height)]"
                        >
                          Recommended
                        </label>
                      </div>

                      <div className="flex items-start gap-2">
                        <div className="pt-1">
                          <Checkbox
                            id="agent-only"
                            className="w-4 h-4 bg-coreempty-euicoloremptyshade rounded-lg border-[#c9cbcd]"
                          />
                        </div>
                        <label
                          htmlFor="agent-only"
                          className="font-m-small-regular text-panelplain text-[length:var(--m-small-regular-font-size)] tracking-[var(--m-small-regular-letter-spacing)] leading-[var(--m-small-regular-line-height)]"
                        >
                          Elastic Agent Only
                        </label>
                      </div>

                      <div className="flex items-start gap-2">
                        <div className="pt-1">
                          <Checkbox
                            id="beats-only"
                            className="w-4 h-4 bg-coreempty-euicoloremptyshade rounded-lg border-[#c9cbcd]"
                          />
                        </div>
                        <label
                          htmlFor="beats-only"
                          className="font-m-small-regular text-panelplain text-[length:var(--m-small-regular-font-size)] tracking-[var(--m-small-regular-letter-spacing)] leading-[var(--m-small-regular-line-height)]"
                        >
                          Beats Only
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main content area with integration cards */}
              <div className="flex flex-col flex-1">
                {/* Search and filter controls */}
                <div className="flex items-center gap-4 pb-5">
                  <div className="relative flex-1 h-10">
                    <Input
                      className="h-10 bg-[#252526] border-[#1322951a] rounded-md pl-10"
                      placeholder="Search Dashboards"
                    />
                    <SearchIcon className="absolute left-3 top-3 w-4 h-4 text-text-disabled-euicolordisabledtext" />
                  </div>

                  <div className="flex items-center bg-[#252526] rounded-md border border-solid border-[#1322951a]">
                    <div className="flex items-center gap-2 px-2 py-0 bg-[#252526] shadow-filter-button-border-right">
                      <div className="w-4 h-4">
                        <img
                          className="w-3 h-3 mt-0.5 ml-0.5"
                          alt="Grid view"
                          src="/union-4.svg"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-s-paragraph-bold text-text-disabled-euicolordisabledtext text-[length:var(--s-paragraph-bold-font-size)] tracking-[var(--s-paragraph-bold-letter-spacing)] leading-[var(--s-paragraph-bold-line-height)] whitespace-nowrap">
                          Grid View
                        </span>
                        <Badge className="bg-coreterciary-euicolorterciary text-coreempty-euicoloremptyshade px-1 py-0 rounded-[3px]">
                          11
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-2 py-0 bg-[#252526] shadow-filter-button-border-right">
                      <div className="w-4 h-4">
                        <img
                          className="w-4 h-3 mt-0.5"
                          alt="List view"
                          src="/union-3.svg"
                        />
                      </div>
                      <span className="font-s-paragraph-regular text-text-disabled-euicolordisabledtext text-[length:var(--s-paragraph-regular-font-size)] tracking-[var(--s-paragraph-regular-letter-spacing)] leading-[var(--s-paragraph-regular-line-height)] whitespace-nowrap">
                        List View
                      </span>
                    </div>

                    <div className="flex items-center gap-2 px-2 py-0">
                      <div 
                        className="relative w-7 h-4 bg-coreterciary-euicolorterciary rounded-lg cursor-pointer"
                        onClick={() => setIsInstalledToggled(!isInstalledToggled)}
                      >
                        <div 
                          className={`absolute w-3.5 h-3.5 top-px bg-coreempty-euicoloremptyshade rounded-[7px] border border-solid border-[#006aa2] transition-all duration-200 ${
                            isInstalledToggled ? 'left-[13px]' : 'left-px'
                          }`}
                        ></div>
                      </div>
                      <span className="text-text-disabled-euicolordisabledtext text-sm whitespace-nowrap">
                        Installed
                      </span>
                    </div>
                  </div>
                </div>

                {/* Integration cards grid */}
                <div className="space-y-5">
                  {integrationRows.map((row, rowIndex) => (
                    <div
                      key={`row-${rowIndex}`}
                      className="flex items-start justify-between"
                    >
                      {row.map((card, cardIndex) => (
                        <Card
                          key={`card-${rowIndex}-${cardIndex}`}
                          className="w-[280px] bg-[#23262b] border-[#98a2b3] rounded-md"
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start gap-4">
                              {card.iconType === "aws" ? (
                                <div className="w-8 h-8 bg-[url(/icon.svg)] bg-[100%_100%]" />
                              ) : card.iconType === "amazon" ? (
                                <div className="flex w-8 h-[47px] items-center justify-center">
                                  <div className="w-[33px] h-12 bg-[url(/group.png)] bg-[100%_100%]">
                                    <img
                                      className="w-[30px] h-[45px] mt-px ml-px"
                                      alt="Group"
                                      src="/group-1.png"
                                    />
                                  </div>
                                </div>
                              ) : (
                                <div className="flex w-8 h-[47px] items-start justify-center">
                                  <img
                                    className="w-8 h-[36.06px]"
                                    alt="Group"
                                    src="/group-30.png"
                                  />
                                </div>
                              )}

                              <div className="flex flex-col gap-1.5 flex-1">
                                <h3
                                  className={`${card.iconType === "aws" ? "font-title-small text-[length:var(--title-small-font-size)]" : "font-bold text-[22px] tracking-[-1.00px]"} text-panelplain leading-8`}
                                >
                                  {card.title}
                                </h3>

                                <p
                                  className={`${card.iconType === "aws" ? "font-s-paragraph-regular text-[length:var(--s-paragraph-regular-font-size)] tracking-[var(--s-paragraph-regular-letter-spacing)]" : "font-normal text-sm tracking-[-1.00px]"} text-panelplain leading-[21px]`}
                                >
                                  {card.description}
                                </p>

                                <div className="flex items-center gap-1">
                                  <img className="w-4 h-4" alt="Dot" src="/dot.svg" />
                                  <span
                                    className={`text-panelplain text-xs ${card.iconType === "aws" ? "font-normal tracking-[0]" : "font-normal tracking-[-0.12px]"} leading-3`}
                                  >
                                    <span className="font-bold leading-[18px]">
                                      {card.installedCount}
                                    </span>
                                    <span
                                      className={`${card.iconType === "aws" ? "leading-[18px]" : "tracking-[0] leading-[0.1px]"}`}
                                    >
                                      {" "}
                                      Integrations Installed
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Manage Tab Content */}
        {activeTab === "manage" && (
          <div className="flex flex-col gap-6 p-6 w-full">
            {/* Alerts Breakdown Section */}
            <div className="bg-[#2a2d35] rounded-lg">
              {/* Section Header - Collapsible */}
              <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-[#323539] transition-colors"
                onClick={() => setAlertsBreakdownExpanded(!alertsBreakdownExpanded)}
              >
                <div className="flex items-center gap-2">
                  <svg 
                    className={`w-4 h-4 text-text-disabled-euicolordisabledtext transition-transform duration-200 ${
                      alertsBreakdownExpanded ? 'rotate-0' : '-rotate-90'
                    }`} 
                    viewBox="0 0 16 16" 
                    fill="currentColor"
                  >
                    <path d="M8 12L3 7L4.5 5.5L8 9L11.5 5.5L13 7L8 12Z"/>
                  </svg>
                  <h3 className="text-panelplain font-medium text-sm">Alerts Breakdown</h3>
                </div>
                <button className="text-[#0071c2] text-sm hover:underline">
                  Show alerts
                </button>
              </div>

              {/* Collapsible Content */}
              {alertsBreakdownExpanded && (
                <>
                  {/* Table Controls */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#323539] text-sm">
                    <div className="flex items-center gap-4 text-text-disabled-euicolordisabledtext">
                      <span className="text-[#0071c2]">Showing 1-10 of 15</span>
                      <span className="text-[#0071c2]">Dashboards</span>
                      <span className="text-[#0071c2]">{selectedRows.length} Selected</span>
                      <button 
                        className="text-[#ff6b6b] hover:underline"
                        onClick={clearSelection}
                      >
                        Clear selection
                      </button>
                    </div>
                  </div>

                  {/* Data Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-[#323539]">
                        <tr>
                          <th className="text-left p-3 text-xs font-medium text-text-disabled-euicolordisabledtext uppercase tracking-wider w-8">
                            <Checkbox 
                              className="w-4 h-4" 
                              checked={selectAll}
                              onChange={handleSelectAll}
                            />
                          </th>
                          <th className="text-left p-3 text-xs font-medium text-text-disabled-euicolordisabledtext uppercase tracking-wider">
                            Description
                          </th>
                          <th className="text-left p-3 text-xs font-medium text-text-disabled-euicolordisabledtext uppercase tracking-wider">
                            Status
                          </th>
                          <th className="text-left p-3 text-xs font-medium text-text-disabled-euicolordisabledtext uppercase tracking-wider">
                            Category
                          </th>
                          <th className="text-left p-3 text-xs font-medium text-text-disabled-euicolordisabledtext uppercase tracking-wider">
                            Last updated
                          </th>
                          <th className="text-left p-3 text-xs font-medium text-text-disabled-euicolordisabledtext uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-[#2a2d35] divide-y divide-[#404040]">
                        {alertsData.map((alert) => (
                          <tr key={alert.id} className="hover:bg-[#323539] transition-colors">
                            <td className="p-3">
                              <Checkbox 
                                className="w-4 h-4" 
                                checked={selectedRows.includes(alert.id)}
                                onChange={() => handleRowSelect(alert.id)}
                              />
                            </td>
                            <td className="p-3 text-sm text-panelplain max-w-xs">
                              {alert.description}
                            </td>
                            <td className="p-3">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-panelplain">{alert.status}</span>
                              </div>
                            </td>
                            <td className="p-3 text-sm text-panelplain">
                              {alert.category}
                            </td>
                            <td className="p-3 text-sm text-panelplain">
                              {alert.lastUpdated}
                            </td>
                            <td className="p-3">
                              <div className="flex items-center gap-2">
                                <button className="text-text-disabled-euicolordisabledtext hover:text-panelplain">
                                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8 3C4.5 3 1.73 5.11 1 8C1.73 10.89 4.5 13 8 13C11.5 13 14.27 10.89 15 8C14.27 5.11 11.5 3 8 3ZM8 11C6.34 11 5 9.66 5 8C5 6.34 6.34 5 8 5C9.66 5 11 6.34 11 8C11 9.66 9.66 11 8 11ZM8 6.5C7.17 6.5 6.5 7.17 6.5 8C6.5 8.83 7.17 9.5 8 9.5C8.83 9.5 9.5 8.83 9.5 8C9.5 7.17 8.83 6.5 8.5 6.5Z"/>
                                  </svg>
                                </button>
                                <button className="text-text-disabled-euicolordisabledtext hover:text-panelplain">
                                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8 4C8.55 4 9 3.55 9 3C9 2.45 8.55 2 8 2C7.45 2 7 2.45 7 3C7 3.55 7.45 4 8 4ZM8 6C7.45 6 7 6.45 7 7C7 7.55 7.45 8 8 8C8.55 8 9 7.55 9 7C9 6.45 8.55 6 8 6ZM8 10C7.45 10 7 10.45 7 11C7 11.55 7.45 12 8 12C8.55 12 9 11.55 9 11C9 10.45 8.55 10 8 10Z"/>
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="flex items-center justify-between p-4 bg-[#323539]">
                    <div className="text-sm text-text-disabled-euicolordisabledtext">
                      Rows per page: 10
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1 text-text-disabled-euicolordisabledtext hover:text-panelplain">
                        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M10 12L5 8L10 4V12Z"/>
                        </svg>
                      </button>
                      <div className="flex items-center gap-1">
                        <button className="px-2 py-1 text-sm text-text-disabled-euicolordisabledtext hover:text-panelplain">1</button>
                        <span className="px-2 py-1 text-sm text-text-disabled-euicolordisabledtext">...</span>
                        <button className="px-2 py-1 text-sm text-text-disabled-euicolordisabledtext hover:text-panelplain">15</button>
                        <button className="px-2 py-1 text-sm text-text-disabled-euicolordisabledtext hover:text-panelplain">16</button>
                        <button className="px-2 py-1 text-sm text-text-disabled-euicolordisabledtext hover:text-panelplain">17</button>
                        <button className="px-2 py-1 text-sm text-text-disabled-euicolordisabledtext hover:text-panelplain">18</button>
                        <button className="px-2 py-1 text-sm text-text-disabled-euicolordisabledtext hover:text-panelplain">19</button>
                        <button className="px-2 py-1 text-sm bg-[#0071c2] text-white rounded">20</button>
                      </div>
                      <button className="p-1 text-text-disabled-euicolordisabledtext hover:text-panelplain">
                        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M6 4L11 8L6 12V4Z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Combined Alerts Charts - Side by Side */}
            <div className="bg-[#2a2d35] rounded-lg">
              {/* Section Header - Collapsible */}
              <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-[#323539] transition-colors"
                onClick={() => setAlertsCombinedExpanded(!alertsCombinedExpanded)}
              >
                <div className="flex items-center gap-2">
                  <svg 
                    className={`w-4 h-4 text-text-disabled-euicolordisabledtext transition-transform duration-200 ${
                      alertsCombinedExpanded ? 'rotate-0' : '-rotate-90'
                    }`} 
                    viewBox="0 0 16 16" 
                    fill="currentColor"
                  >
                    <path d="M8 12L3 7L4.5 5.5L8 9L11.5 5.5L13 7L8 12Z"/>
                  </svg>
                  <h3 className="text-panelplain font-medium text-sm">Alerts</h3>
                </div>
                <button className="text-[#0071c2] text-sm hover:underline">
                  Show alerts
                </button>
              </div>

              {/* Collapsible Content */}
              {alertsCombinedExpanded && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-panelplain font-medium text-lg">Statistics</h4>
                    <div className="flex items-center gap-2 bg-[#1a1d23] border border-[#404040] rounded px-3 py-1">
                      <svg className="w-4 h-4 text-text-disabled-euicolordisabledtext" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M3 2V14H13V12H5V2H3ZM7 6V10H9V6H7ZM11 4V10H13V4H11Z"/>
                      </svg>
                      <span className="text-sm text-panelplain">14 Aug - 29 Aug</span>
                      <svg className="w-4 h-4 text-text-disabled-euicolordisabledtext" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M4 6L8 10L12 6H4Z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-green-500" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 2L10 6H14L11 9L12 14L8 11L4 14L5 9L2 6H6L8 2Z"/>
                      </svg>
                      <div>
                        <div className="text-2xl font-bold text-panelplain">9,500</div>
                        <div className="text-sm text-text-disabled-euicolordisabledtext">Income</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-red-500" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 14L6 10H2L5 7L4 2L8 5L12 2L11 7L14 10H10L8 14Z"/>
                      </svg>
                      <div>
                        <div className="text-2xl font-bold text-panelplain">1,400</div>
                        <div className="text-sm text-text-disabled-euicolordisabledtext">Expense</div>
                      </div>
                    </div>
                  </div>

                  {/* Side by Side Charts Container */}
                  <div className="flex gap-6">
                    {/* Line Chart - Left Side */}
                    <div className="flex-1 relative h-80 bg-[#1a1d23] rounded-lg overflow-hidden">
                      <svg 
                        className="absolute inset-0 w-full h-full" 
                        viewBox="0 0 500 320" 
                        preserveAspectRatio="xMidYMid meet"
                      >
                        {/* Background */}
                        <rect width="500" height="320" fill="#1a1d23" />
                        
                        {/* Grid lines - vertical */}
                        <g stroke="#404040" strokeWidth="1" opacity="0.3">
                          {[80, 140, 200, 260, 320, 380, 440].map((x, i) => (
                            <line key={i} x1={x} y1="40" x2={x} y2="280" />
                          ))}
                        </g>
                        
                        {/* Grid lines - horizontal */}
                        <g stroke="#404040" strokeWidth="1" opacity="0.3">
                          {[80, 120, 160, 200, 240, 280].map((y, i) => (
                            <line key={i} x1="60" y1={y} x2="460" y2={y} />
                          ))}
                        </g>

                        {/* Y-axis labels */}
                        <g fill="#666" fontSize="12" textAnchor="end">
                          <text x="55" y="85">10K</text>
                          <text x="55" y="125">5K</text>
                          <text x="55" y="165">2K</text>
                          <text x="55" y="205">1K</text>
                          <text x="55" y="285">0</text>
                        </g>

                        {/* Chart line - smooth curve */}
                        <path
                          d="M 80 240 Q 110 220 140 160 Q 170 100 200 120 Q 260 140 320 180 Q 350 220 380 240 Q 400 260 440 100 Q 450 80 460 160"
                          fill="none"
                          stroke="#0071c2"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        {/* Data points */}
                        <circle cx="80" cy="240" r="4" fill="#0071c2" stroke="#1a1d23" strokeWidth="2" />
                        <circle cx="140" cy="160" r="4" fill="#0071c2" stroke="#1a1d23" strokeWidth="2" />
                        <circle cx="200" cy="120" r="4" fill="#0071c2" stroke="#1a1d23" strokeWidth="2" />
                        <circle cx="320" cy="180" r="4" fill="#0071c2" stroke="#1a1d23" strokeWidth="2" />
                        <circle cx="380" cy="240" r="4" fill="#0071c2" stroke="#1a1d23" strokeWidth="2" />
                        <circle cx="440" cy="100" r="4" fill="#0071c2" stroke="#1a1d23" strokeWidth="2" />
                        <circle cx="460" cy="160" r="4" fill="#0071c2" stroke="#1a1d23" strokeWidth="2" />

                        {/* Tooltip on Thursday point */}
                        <g>
                          <rect 
                            x="270" 
                            y="120" 
                            width="100" 
                            height="50" 
                            fill="#2a2d35" 
                            rx="4" 
                            stroke="#404040" 
                            strokeWidth="1" 
                          />
                          
                          <text x="320" y="135" fill="#0071c2" fontSize="12" textAnchor="middle" fontWeight="bold">2,500</text>
                          <text x="320" y="150" fill="#ff6b6b" fontSize="12" textAnchor="middle" fontWeight="bold">1,200</text>
                          <text x="320" y="162" fill="#666" fontSize="10" textAnchor="middle">23 August, 2021</text>
                          
                          <line 
                            x1="320" 
                            y1="180" 
                            x2="320" 
                            y2="280" 
                            stroke="#666" 
                            strokeWidth="1" 
                            strokeDasharray="4,4" 
                          />
                        </g>

                        {/* X-axis labels */}
                        <g fill="#666" fontSize="12" textAnchor="middle">
                          <text x="80" y="305">Mon</text>
                          <text x="140" y="305">Tue</text>
                          <text x="200" y="305">Wed</text>
                          <text x="320" y="305">Thu</text>
                          <text x="380" y="305">Fri</text>
                          <text x="440" y="305">Sat</text>
                          <text x="460" y="305">Sun</text>
                        </g>
                      </svg>

                      {/* Legend - positioned in top right */}
                      <div className="absolute top-4 right-4 flex items-center gap-4 bg-[#2a2d35] px-3 py-2 rounded border border-[#404040]">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-panelplain font-medium">2,500</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-panelplain font-medium">1,200</span>
                        </div>
                      </div>
                    </div>

                    {/* Vertical Separator */}
                    <div className="w-px bg-[#404040] self-stretch"></div>

                    {/* Bar Chart - Right Side */}
                    <div className="flex-1 relative h-80 bg-[#1a1d23] rounded-lg overflow-hidden">
                      {/* Legend positioned in top right */}
                      <div className="absolute top-4 right-4 flex items-center gap-4 bg-[#2a2d35] px-3 py-2 rounded border border-[#404040]">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-[#0071c2] rounded-sm"></div>
                          <span className="text-sm text-panelplain">Income</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-[#ff8c42] rounded-sm"></div>
                          <span className="text-sm text-panelplain">Expense</span>
                        </div>
                      </div>

                      <svg 
                        className="absolute inset-0 w-full h-full" 
                        viewBox="0 0 500 320" 
                        preserveAspectRatio="xMidYMid meet"
                      >
                        {/* Background */}
                        <rect width="500" height="320" fill="#1a1d23" />
                        
                        {/* Grid lines - horizontal */}
                        <g stroke="#404040" strokeWidth="1" opacity="0.3">
                          {[60, 120, 180, 240, 280].map((y, i) => (
                            <line key={i} x1="60" y1={y} x2="460" y2={y} />
                          ))}
                        </g>

                        {/* Y-axis labels */}
                        <g fill="#666" fontSize="12" textAnchor="end">
                          <text x="55" y="65">500</text>
                          <text x="55" y="125">400</text>
                          <text x="55" y="185">300</text>
                          <text x="55" y="245">200</text>
                          <text x="55" y="285">0</text>
                        </g>

                        {/* Bar Chart Data */}
                        {barChartData.map((data, i) => {
                          const x = 80 + (i * 45);
                          const incomeHeight = (data.income / 500) * 220;
                          const expenseHeight = (data.expense / 500) * 220;
                          const barWidth = 25;
                          
                          return (
                            <g key={i}>
                              {/* Income bar (blue) */}
                              <rect
                                x={x - 12.5}
                                y={280 - incomeHeight}
                                width={barWidth}
                                height={incomeHeight}
                                fill="#0071c2"
                                rx="2"
                              />
                              {/* Expense bar (orange) */}
                              <rect
                                x={x - 12.5}
                                y={280 - incomeHeight - expenseHeight}
                                width={barWidth}
                                height={expenseHeight}
                                fill="#ff8c42"
                                rx="2"
                              />
                            </g>
                          );
                        })}

                        {/* Tooltip on day 16 */}
                        <g>
                          <rect 
                            x="170" 
                            y="80" 
                            width="100" 
                            height="50" 
                            fill="#2a2d35" 
                            rx="4" 
                            stroke="#404040" 
                            strokeWidth="1" 
                          />
                          
                          <text x="220" y="95" fill="#0071c2" fontSize="12" textAnchor="middle" fontWeight="bold">2,500</text>
                          <text x="220" y="110" fill="#ff8c42" fontSize="12" textAnchor="middle" fontWeight="bold">1,200</text>
                          <text x="220" y="122" fill="#666" fontSize="10" textAnchor="middle">23 August, 2021</text>
                        </g>

                        {/* X-axis labels */}
                        <g fill="#666" fontSize="12" textAnchor="middle">
                          {barChartData.map((data, i) => (
                            <text key={i} x={80 + (i * 45)} y="305">{data.day}</text>
                          ))}
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
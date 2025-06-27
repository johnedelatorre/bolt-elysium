import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Separator } from "../../../../components/ui/separator";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion";
import { LineChart } from "../../../../components/charts/LineChart";
import { BarChart } from "../../../../components/charts/BarChart";

export const PageBodySubsection = (): JSX.Element => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showInstalled, setShowInstalled] = useState(false);

  // Integration categories with counts
  const categories = [
    { name: "All Categories", count: 300 },
    { name: "AWS", count: 50 },
    { name: "Azure", count: 5 },
    { name: "Cloud", count: 8 },
    { name: "Communications", count: 100 },
    { name: "Config Management", count: 111 },
    { name: "Containers", count: 45 },
    { name: "CRM", count: 100 },
    { name: "Database", count: 234 },
    { name: "Elastic Stack", count: 234 },
    { name: "Enterprise Search", count: 234 },
    { name: "File Storage", count: 234 },
    { name: "Geo", count: 234 },
    { name: "Google Cloud", count: 234 },
    { name: "Infrastructure", count: 234 },
    { name: "Kubernetes", count: 234 },
    { name: "Language Client", count: 234 },
    { name: "Message Broker", count: 234 },
    { name: "Microsoft 365", count: 234 },
    { name: "Monitoring", count: 234 },
    { name: "Operating Systems", count: 234 },
    { name: "Threat Intelligence", count: 234 },
    { name: "Upload a File", count: 234 },
    { name: "Web Server", count: 234 },
  ];

  // Sample integration data
  const integrations = [
    {
      id: 1,
      name: "AWS EC2",
      description: "Collect logs from 1Password with Elastic Agent.",
      icon: "🔶",
      category: "AWS",
      installed: true,
      installCount: 5,
    },
    {
      id: 2,
      name: "Amazon Cloud",
      description: "Collect logs from 1Password with Elastic Agent.",
      icon: "☁️",
      category: "Cloud",
      installed: true,
      installCount: 5,
    },
    {
      id: 3,
      name: "Microsoft",
      description: "Collect logs from 1Password with Elastic Agent.",
      icon: "🪟",
      category: "Microsoft 365",
      installed: true,
      installCount: 5,
    },
    // Repeat pattern for more integrations
    ...Array.from({ length: 21 }, (_, i) => ({
      id: i + 4,
      name: i % 3 === 0 ? "AWS EC2" : i % 3 === 1 ? "Amazon Cloud" : "Microsoft",
      description: "Collect logs from 1Password with Elastic Agent.",
      icon: i % 3 === 0 ? "🔶" : i % 3 === 1 ? "☁️" : "🪟",
      category: i % 3 === 0 ? "AWS" : i % 3 === 1 ? "Cloud" : "Microsoft 365",
      installed: true,
      installCount: 5,
    })),
  ];

  // Line chart data
  const lineChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Income',
        data: [1000, 2500, 4000, 3500, 2000, 1000, 3500],
        borderColor: '#00a8ff',
        backgroundColor: 'rgba(0, 168, 255, 0.1)',
      },
      {
        label: 'Expense',
        data: [800, 1200, 1800, 1200, 800, 600, 1000],
        borderColor: '#ff6b35',
        backgroundColor: 'rgba(255, 107, 53, 0.1)',
      }
    ]
  };

  // Bar chart data
  const barChartData = {
    labels: ['14', '15', '16', '17', '18', '19', '20', '21', '22'],
    datasets: [
      {
        label: 'Income',
        data: [200, 150, 250, 200, 300, 180, 100, 250, 280],
        backgroundColor: '#00a8ff',
      },
      {
        label: 'Expense',
        data: [180, 120, 130, 80, 140, 160, 280, 120, 200],
        backgroundColor: '#ff6b35',
      }
    ]
  };

  return (
    <div className="flex flex-col flex-1 bg-[#19191a] h-screen overflow-hidden shadow-shadow-bottom-medium">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#19191a] border-b border-[#2a2d35]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-coreempty-euicoloremptyshade font-s-paragraph-regular">Home</span>
            <span className="text-corelight-euicolorlightshade">/</span>
            <span className="text-coreempty-euicoloremptyshade font-s-paragraph-regular">Configure</span>
            <span className="text-corelight-euicolorlightshade">/</span>
            <span className="text-textprimary-euicolorprimarytext font-s-paragraph-bold">Integrations</span>
          </div>
        </div>
        <Button 
          className="bg-textprimary-euicolorprimarytext hover:bg-blue-600 text-white px-4 py-2 h-8 text-sm font-medium rounded-md transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          View Deployment Details
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="flex flex-col gap-6 p-6 w-full">
          {/* Page Title */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-coreempty-euicoloremptyshade">Integrations</h1>
              <p className="text-text-subdued-euitextsubduedcolor mt-1">
                Choose an integration to start collecting and analyzing your data.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="browse" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-[#2a2d35] rounded-lg p-1">
              <TabsTrigger 
                value="browse" 
                className="data-[state=active]:bg-[#19191a] data-[state=active]:text-textprimary-euicolorprimarytext text-coreempty-euicoloremptyshade"
              >
                Browse integrations
              </TabsTrigger>
              <TabsTrigger 
                value="manage" 
                className="data-[state=active]:bg-[#19191a] data-[state=active]:text-textprimary-euicolorprimarytext text-coreempty-euicoloremptyshade"
              >
                Manage
              </TabsTrigger>
            </TabsList>

            {/* Browse Integrations Tab */}
            <TabsContent value="browse" className="space-y-6 mt-6">
              <div className="flex gap-6">
                {/* Left Sidebar - Categories */}
                <div className="w-80 flex-shrink-0">
                  <div className="bg-[#1d1e24] border border-[#2a2d35] rounded-lg p-4">
                    <h3 className="text-coreempty-euicoloremptyshade font-s-paragraph-bold mb-4">Categories</h3>
                    <ScrollArea className="h-96">
                      <div className="space-y-1">
                        {categories.map((category) => (
                          <div
                            key={category.name}
                            className="flex items-center justify-between py-2 px-2 hover:bg-[#2a2d35] rounded cursor-pointer transition-colors duration-200"
                          >
                            <span className="text-coreempty-euicoloremptyshade text-sm">
                              {category.name}
                            </span>
                            <Badge variant="secondary" className="bg-[#2a2d35] text-coreempty-euicoloremptyshade text-xs">
                              {category.count}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </div>

                {/* Right Content Area */}
                <div className="flex-1">
                  {/* Search and Filters */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-subdued-euitextsubduedcolor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                          type="text"
                          placeholder="Search Dashboards"
                          className="pl-10 pr-4 py-2 bg-[#2a2d35] border border-[#404040] rounded-md text-coreempty-euicoloremptyshade placeholder-text-subdued-euitextsubduedcolor focus:outline-none focus:ring-2 focus:ring-textprimary-euicolorprimarytext focus:border-transparent w-80"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {/* View Toggle */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`p-2 h-8 w-8 ${viewMode === 'grid' ? 'bg-[#2a2d35] text-textprimary-euicolorprimarytext' : 'text-coreempty-euicoloremptyshade hover:bg-[#2a2d35]'}`}
                          onClick={() => setViewMode('grid')}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="3" y="3" width="7" height="7" strokeWidth={2} />
                            <rect x="14" y="3" width="7" height="7" strokeWidth={2} />
                            <rect x="14" y="14" width="7" height="7" strokeWidth={2} />
                            <rect x="3" y="14" width="7" height="7" strokeWidth={2} />
                          </svg>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`p-2 h-8 w-8 ${viewMode === 'list' ? 'bg-[#2a2d35] text-textprimary-euicolorprimarytext' : 'text-coreempty-euicoloremptyshade hover:bg-[#2a2d35]'}`}
                          onClick={() => setViewMode('list')}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <line x1="8" y1="6" x2="21" y2="6" strokeWidth={2} />
                            <line x1="8" y1="12" x2="21" y2="12" strokeWidth={2} />
                            <line x1="8" y1="18" x2="21" y2="18" strokeWidth={2} />
                            <line x1="3" y1="6" x2="3.01" y2="6" strokeWidth={2} />
                            <line x1="3" y1="12" x2="3.01" y2="12" strokeWidth={2} />
                            <line x1="3" y1="18" x2="3.01" y2="18" strokeWidth={2} />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox 
                          id="installed"
                          checked={showInstalled}
                          onCheckedChange={setShowInstalled}
                          className="h-4 w-4"
                        />
                        <label htmlFor="installed" className="text-sm text-coreempty-euicoloremptyshade">
                          Installed
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Integration Cards Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {integrations.map((integration) => (
                      <div
                        key={integration.id}
                        className="bg-[#1d1e24] border border-[#2a2d35] rounded-lg p-4 hover:border-[#404040] transition-colors duration-200 cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#2a2d35] rounded-lg flex items-center justify-center text-lg">
                              {integration.icon}
                            </div>
                            <div>
                              <h4 className="text-coreempty-euicoloremptyshade font-s-paragraph-bold">
                                {integration.name}
                              </h4>
                            </div>
                          </div>
                        </div>
                        <p className="text-text-subdued-euitextsubduedcolor text-sm mb-4 line-clamp-2">
                          {integration.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <Button
                            size="sm"
                            className="bg-textprimary-euicolorprimarytext hover:bg-blue-600 text-white px-4 py-1 h-7 text-xs font-medium rounded-md transition-colors duration-200"
                          >
                            Select
                          </Button>
                          {integration.installed && (
                            <div className="flex items-center gap-1 text-xs">
                              <div className="w-2 h-2 bg-coresuccess-euicolorsuccess rounded-full"></div>
                              <span className="text-coresuccess-euicolorsuccess">
                                {integration.installCount} integrations installed
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Load More / Pagination */}
                  <div className="mt-8 text-center">
                    <p className="text-text-subdued-euitextsubduedcolor text-sm mb-4">
                      If an integration is available for <span className="text-textprimary-euicolorprimarytext">show:</span>
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-coresuccess-euicolorsuccess rounded-full"></div>
                        <span className="text-coreempty-euicoloremptyshade">Recommended</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#666] rounded-full"></div>
                        <span className="text-coreempty-euicoloremptyshade">Elastic Agent Only</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#666] rounded-full"></div>
                        <span className="text-coreempty-euicoloremptyshade">Beats Only</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Manage Tab */}
            <TabsContent value="manage" className="space-y-6 mt-6">
              {/* Alerts Breakdown Section */}
              <Accordion type="single" collapsible defaultValue="alerts-breakdown" className="w-full">
                <AccordionItem value="alerts-breakdown" className="border border-[#2a2d35] rounded-lg bg-[#1d1e24]">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-coreempty-euicoloremptyshade font-s-paragraph-bold">Alerts Breakdown</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-textprimary-euicolorprimarytext hover:text-blue-400 hover:bg-transparent p-0 h-auto font-normal"
                      >
                        Show alerts
                      </Button>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-4">
                    <div className="space-y-4">
                      {/* Selection Info */}
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-textprimary-euicolorprimarytext">Showing 1-10 of 15</span>
                        <span className="text-coreempty-euicoloremptyshade">Dashboards</span>
                        <span className="text-textprimary-euicolorprimarytext">3 Selected</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-textprimary-euicolorprimarytext hover:text-blue-400 hover:bg-transparent p-0 h-auto font-normal underline"
                        >
                          Clear selection
                        </Button>
                      </div>

                      {/* Data Table */}
                      <div className="border border-[#2a2d35] rounded-lg overflow-hidden">
                        {/* Table Header */}
                        <div className="bg-[#2a2d35] px-4 py-3 grid grid-cols-12 gap-4 items-center text-sm font-medium text-coreempty-euicoloremptyshade">
                          <div className="col-span-1">
                            <Checkbox className="h-4 w-4" />
                          </div>
                          <div className="col-span-5">DESCRIPTION</div>
                          <div className="col-span-2">STATUS</div>
                          <div className="col-span-2">CATEGORY</div>
                          <div className="col-span-1">LAST UPDATED</div>
                          <div className="col-span-1">ACTIONS</div>
                        </div>

                        {/* Table Body */}
                        <div className="divide-y divide-[#2a2d35]">
                          {Array.from({ length: 10 }).map((_, index) => (
                            <div
                              key={index}
                              className={`px-4 py-3 grid grid-cols-12 gap-4 items-center text-sm hover:bg-[#2a2d35] transition-colors duration-200 ${
                                index < 3 ? 'bg-[#2a2d35]' : 'bg-[#1d1e24]'
                              }`}
                            >
                              <div className="col-span-1">
                                <Checkbox 
                                  className="h-4 w-4" 
                                  defaultChecked={index < 3}
                                />
                              </div>
                              <div className="col-span-5 text-coreempty-euicoloremptyshade">
                                Analyze mock web traffic log data for Elastic's website
                              </div>
                              <div className="col-span-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-coresuccess-euicolorsuccess rounded-full"></div>
                                  <span className="text-coreempty-euicoloremptyshade">Installed</span>
                                </div>
                              </div>
                              <div className="col-span-2 text-coreempty-euicoloremptyshade">
                                {index < 3 ? 'Security Data Analytics' : index === 3 ? 'Metrics' : index === 4 ? 'Analytics' : 'Security Data Analytics'}
                              </div>
                              <div className="col-span-1 text-coreempty-euicoloremptyshade">
                                Dec 17, 2020
                              </div>
                              <div className="col-span-1">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-coreempty-euicoloremptyshade hover:text-white hover:bg-[#3a3d45] p-1 h-auto"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                  </svg>
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pagination */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-coreempty-euicoloremptyshade">
                          Rows per page: 10
                        </span>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-coreempty-euicoloremptyshade hover:text-white hover:bg-[#2a2d35] px-2 py-1 h-auto"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </Button>
                          {[1, '...', 15, 16, 17, 18, 19, 20].map((page, index) => (
                            <Button
                              key={index}
                              variant="ghost"
                              size="sm"
                              className={`px-2 py-1 h-auto text-sm ${
                                page === 20
                                  ? 'bg-textprimary-euicolorprimarytext text-white'
                                  : 'text-coreempty-euicoloremptyshade hover:text-white hover:bg-[#2a2d35]'
                              }`}
                            >
                              {page}
                            </Button>
                          ))}
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-coreempty-euicoloremptyshade hover:text-white hover:bg-[#2a2d35] px-2 py-1 h-auto"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Alerts Statistics Section */}
              <Accordion type="single" collapsible defaultValue="alerts-stats" className="w-full">
                <AccordionItem value="alerts-stats" className="border border-[#2a2d35] rounded-lg bg-[#1d1e24]">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-coreempty-euicoloremptyshade font-s-paragraph-bold">Alerts</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-textprimary-euicolorprimarytext hover:text-blue-400 hover:bg-transparent p-0 h-auto font-normal"
                      >
                        Show alerts
                      </Button>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-4">
                    <div className="space-y-6">
                      {/* Statistics Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-coreempty-euicoloremptyshade font-s-paragraph-bold">Statistics</h3>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-coreempty-euicoloremptyshade">📅 14 Aug - 29 Aug</span>
                        </div>
                      </div>

                      {/* KPI Cards */}
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-coresuccess-euicolorsuccess rounded-full"></div>
                            <span className="text-sm text-coreempty-euicoloremptyshade">Income</span>
                          </div>
                          <div className="text-2xl font-bold text-coreempty-euicoloremptyshade">9,500</div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-textaccent-euicoloraccenttext rounded-full"></div>
                            <span className="text-sm text-coreempty-euicoloremptyshade">Expense</span>
                          </div>
                          <div className="text-2xl font-bold text-coreempty-euicoloremptyshade">1,400</div>
                        </div>
                      </div>

                      {/* Line Chart */}
                      <div className="bg-[#2a2d35] rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-coresuccess-euicolorsuccess rounded-full"></div>
                              <span className="text-sm text-coreempty-euicoloremptyshade">2,500</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-textaccent-euicoloraccenttext rounded-full"></div>
                              <span className="text-sm text-coreempty-euicoloremptyshade">1,200</span>
                            </div>
                          </div>
                        </div>
                        <LineChart data={lineChartData} height={300} />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Bar Chart Section */}
              <Accordion type="single" collapsible defaultValue="bar-stats" className="w-full">
                <AccordionItem value="bar-stats" className="border border-[#2a2d35] rounded-lg bg-[#1d1e24]">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-coreempty-euicoloremptyshade font-s-paragraph-bold">Alerts</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-textprimary-euicolorprimarytext hover:text-blue-400 hover:bg-transparent p-0 h-auto font-normal"
                      >
                        Show alerts
                      </Button>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-4">
                    <div className="space-y-6">
                      {/* Statistics Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-coreempty-euicoloremptyshade font-s-paragraph-bold">Statistics</h3>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-textprimary-euicolorprimarytext rounded-full"></div>
                            <span className="text-sm text-coreempty-euicoloremptyshade">Income</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-textaccent-euicoloraccenttext rounded-full"></div>
                            <span className="text-sm text-coreempty-euicoloremptyshade">Expense</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-coreempty-euicoloremptyshade">📅 14 Aug - 29 Aug</span>
                          </div>
                        </div>
                      </div>

                      {/* Bar Chart */}
                      <div className="bg-[#2a2d35] rounded-lg p-4">
                        <BarChart data={barChartData} height={300} />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
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
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All Categories']);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showInstalled, setShowInstalled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Checkbox functionality for alerts breakdown
  const [selectedAlerts, setSelectedAlerts] = useState<number[]>([0, 1, 2]); // Initially select first 3
  const totalAlerts = 10;

  // Integration categories with counts - matching the design exactly
  const categories = [
    { name: "All Categories", count: 300, selected: true },
    { name: "AWS", count: 50, selected: false },
    { name: "Azure", count: 5, selected: false },
    { name: "Cloud", count: 8, selected: false },
    { name: "Communications", count: 100, selected: false },
    { name: "Config Management", count: 111, selected: false },
    { name: "Containers", count: 45, selected: false },
    { name: "CRM", count: 100, selected: false },
    { name: "Database", count: 234, selected: false },
    { name: "Elastic Stack", count: 234, selected: false },
    { name: "Enterprise Search", count: 234, selected: false },
    { name: "File Storage", count: 234, selected: false },
    { name: "Geo", count: 234, selected: false },
    { name: "Google Cloud", count: 234, selected: false },
    { name: "Infrastructure", count: 234, selected: false },
    { name: "Kubernetes", count: 234, selected: false },
    { name: "Language Client", count: 234, selected: false },
    { name: "Message Broker", count: 234, selected: false },
    { name: "Microsoft 365", count: 234, selected: false },
    { name: "Monitoring", count: 234, selected: false },
    { name: "Operating Systems", count: 234, selected: false },
    { name: "Threat Intelligence", count: 234, selected: false },
    { name: "Upload a File", count: 234, selected: false },
    { name: "Web Server", count: 234, selected: false },
  ];

  // Featured integrations at the top
  const featuredIntegrations = [
    {
      id: 1,
      name: "Web Crawler",
      description: "Add search to your website with the Enterprise Search Web Crawler",
      icon: "🌐",
      category: "Enterprise Search",
      featured: true,
    },
    {
      id: 2,
      name: "Elysium APM",
      description: "Monitor detect and diagnose complex application performance issues",
      icon: "📊",
      category: "Monitoring",
      featured: true,
    },
    {
      id: 3,
      name: "Endpoint and Cloud Security",
      description: "Protect your hosts and cloud workloads with threat prevention, detection and deep security data visibility",
      icon: "🛡️",
      category: "Security",
      featured: true,
    },
  ];

  // Regular integration cards - matching the design pattern
  const integrations = Array.from({ length: 24 }, (_, i) => {
    const patterns = [
      { name: "AWS EC2", icon: "🔶", category: "AWS", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5 },
      { name: "Amazon Cloud", icon: "☁️", category: "Cloud", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5 },
      { name: "Microsoft", icon: "🪟", category: "Microsoft 365", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5 },
    ];
    const pattern = patterns[i % 3];
    return {
      id: i + 4,
      ...pattern,
      installed: true,
    };
  });

  // Mock alert data
  const alertsData = Array.from({ length: totalAlerts }, (_, index) => ({
    id: index,
    description: "Analyze mock web traffic log data for Elastic's website",
    status: "Installed",
    category: index < 3 ? 'Security Data Analytics' : index === 3 ? 'Metrics' : index === 4 ? 'Analytics' : 'Security Data Analytics',
    lastUpdated: "Dec 17, 2020"
  }));

  // Checkbox handlers
  const handleSelectAll = () => {
    setSelectedAlerts(Array.from({ length: totalAlerts }, (_, i) => i));
  };

  const handleDeselectAll = () => {
    setSelectedAlerts([]);
  };

  const handleClearSelection = () => {
    setSelectedAlerts([]);
  };

  const handleIndividualSelect = (alertId: number, checked: boolean) => {
    if (checked) {
      setSelectedAlerts(prev => [...prev, alertId]);
    } else {
      setSelectedAlerts(prev => prev.filter(id => id !== alertId));
    }
  };

  const handleHeaderCheckbox = (checked: boolean) => {
    if (checked) {
      handleSelectAll();
    } else {
      handleDeselectAll();
    }
  };

  const isAllSelected = selectedAlerts.length === totalAlerts;
  const isIndeterminate = selectedAlerts.length > 0 && selectedAlerts.length < totalAlerts;

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
    <div className="flex flex-col flex-1 bg-[#19191a] h-screen overflow-hidden">
      {/* Header with Breadcrumbs */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#19191a] border-b border-[#2a2d35]">
        <div className="flex items-center gap-2">
          {/* Breadcrumb Pills */}
          <div className="flex items-center gap-1">
            <span className="bg-[#2a2d35] text-textprimary-euicolorprimarytext px-2 py-1 rounded text-xs font-medium">
              Integrations
            </span>
            <span className="bg-textprimary-euicolorprimarytext text-white px-2 py-1 rounded text-xs font-medium">
              Browse Integrations
            </span>
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
          {/* Page Title and Description */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-coreempty-euicoloremptyshade mb-2">Integrations</h1>
              <p className="text-text-subdued-euitextsubduedcolor">
                Choose an integration to start collecting and analyzing your data.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="browse" className="w-full">
            <TabsList className="bg-transparent border-b border-[#2a2d35] rounded-none p-0 h-auto">
              <TabsTrigger 
                value="browse" 
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-textprimary-euicolorprimarytext data-[state=active]:bg-transparent data-[state=active]:text-textprimary-euicolorprimarytext text-coreempty-euicoloremptyshade rounded-none px-4 py-3 font-medium"
              >
                Browse Integrations
              </TabsTrigger>
              <TabsTrigger 
                value="manage" 
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-textprimary-euicolorprimarytext data-[state=active]:bg-transparent data-[state=active]:text-textprimary-euicolorprimarytext text-coreempty-euicoloremptyshade rounded-none px-4 py-3 font-medium"
              >
                Manage
              </TabsTrigger>
            </TabsList>

            {/* Browse Integrations Tab */}
            <TabsContent value="browse" className="mt-6">
              <div className="flex gap-6">
                {/* Left Sidebar - Categories */}
                <div className="w-80 flex-shrink-0">
                  <div className="space-y-4">
                    {/* Search */}
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-subdued-euitextsubduedcolor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Search Dashboards"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-[#2a2d35] border border-[#404040] rounded-md text-coreempty-euicoloremptyshade placeholder-text-subdued-euitextsubduedcolor focus:outline-none focus:ring-2 focus:ring-textprimary-euicolorprimarytext focus:border-transparent"
                      />
                    </div>

                    {/* Categories List */}
                    <div className="bg-[#1d1e24] border border-[#2a2d35] rounded-lg overflow-hidden">
                      <ScrollArea className="h-[600px]">
                        <div className="p-0">
                          {categories.map((category, index) => (
                            <div
                              key={category.name}
                              className={`flex items-center justify-between py-3 px-4 hover:bg-[#2a2d35] cursor-pointer transition-colors duration-200 border-b border-[#2a2d35] last:border-b-0 ${
                                category.name === 'All Categories' ? 'bg-[#2a2d35] text-textprimary-euicolorprimarytext' : ''
                              }`}
                            >
                              <span className={`text-sm ${category.name === 'All Categories' ? 'text-textprimary-euicolorprimarytext font-medium' : 'text-coreempty-euicoloremptyshade'}`}>
                                {category.name}
                              </span>
                              <Badge variant="secondary" className="bg-[#404040] text-coreempty-euicoloremptyshade text-xs border-0 px-2 py-1 rounded-full">
                                {category.count}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                </div>

                {/* Right Content Area */}
                <div className="flex-1">
                  {/* Top Controls */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      {/* View Toggle */}
                      <div className="flex items-center gap-1 bg-[#2a2d35] rounded-md p-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`p-2 h-8 w-8 rounded ${viewMode === 'grid' ? 'bg-[#404040] text-textprimary-euicolorprimarytext' : 'text-coreempty-euicoloremptyshade hover:bg-[#404040]'}`}
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
                          className={`p-2 h-8 w-8 rounded ${viewMode === 'list' ? 'bg-[#404040] text-textprimary-euicolorprimarytext' : 'text-coreempty-euicoloremptyshade hover:bg-[#404040]'}`}
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
                      <span className="text-sm text-coreempty-euicoloremptyshade">Grid View</span>
                    </div>
                    <div className="flex items-center gap-4">
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

                  {/* Featured Integration Cards */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {featuredIntegrations.map((integration) => (
                      <div
                        key={integration.id}
                        className="bg-[#1d1e24] border border-[#2a2d35] rounded-lg p-6 hover:border-[#404040] transition-colors duration-200 cursor-pointer"
                      >
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-16 h-16 bg-[#2a2d35] rounded-lg flex items-center justify-center text-2xl">
                            {integration.icon}
                          </div>
                          <div>
                            <h4 className="text-coreempty-euicoloremptyshade font-bold text-lg mb-2">
                              {integration.name}
                            </h4>
                            <p className="text-text-subdued-euitextsubduedcolor text-sm leading-relaxed">
                              {integration.description}
                            </p>
                          </div>
                          <Button
                            className="bg-textprimary-euicolorprimarytext hover:bg-blue-600 text-white px-6 py-2 h-9 text-sm font-medium rounded-md transition-colors duration-200 w-full"
                          >
                            Select
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Regular Integration Cards Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {integrations.map((integration) => (
                      <div
                        key={integration.id}
                        className="bg-[#1d1e24] border border-[#2a2d35] rounded-lg p-4 hover:border-[#404040] transition-colors duration-200 cursor-pointer"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#2a2d35] rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                            {integration.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-coreempty-euicoloremptyshade font-bold text-sm mb-1">
                              {integration.name}
                            </h4>
                            <p className="text-text-subdued-euitextsubduedcolor text-xs leading-relaxed">
                              {integration.description}
                            </p>
                          </div>
                        </div>
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

                  {/* Bottom Legend */}
                  <div className="mt-8 pt-6 border-t border-[#2a2d35]">
                    <p className="text-text-subdued-euitextsubduedcolor text-sm mb-4">
                      If an integration is available for <span className="text-textprimary-euicolorprimarytext font-medium">show:</span>
                    </p>
                    <div className="flex items-center gap-8 text-sm">
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
              {/* Alerts Breakdown Section - Collapsible with Full Checkbox Functionality */}
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
                      {/* Selection Info and Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-textprimary-euicolorprimarytext">Showing 1-10 of 15</span>
                          <span className="text-coreempty-euicoloremptyshade">Dashboards</span>
                          <span className="text-textprimary-euicolorprimarytext">{selectedAlerts.length} Selected</span>
                          {selectedAlerts.length > 0 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-textprimary-euicolorprimarytext hover:text-blue-400 hover:bg-transparent p-0 h-auto font-normal underline"
                              onClick={handleClearSelection}
                            >
                              Clear selection
                            </Button>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-textprimary-euicolorprimarytext hover:text-blue-400 hover:bg-transparent px-2 py-1 h-auto font-normal text-xs"
                            onClick={handleSelectAll}
                          >
                            Select All
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-textprimary-euicolorprimarytext hover:text-blue-400 hover:bg-transparent px-2 py-1 h-auto font-normal text-xs"
                            onClick={handleDeselectAll}
                          >
                            Deselect All
                          </Button>
                        </div>
                      </div>

                      {/* Data Table */}
                      <div className="border border-[#2a2d35] rounded-lg overflow-hidden">
                        {/* Table Header */}
                        <div className="bg-[#2a2d35] px-4 py-3 grid grid-cols-12 gap-4 items-center text-sm font-medium text-coreempty-euicoloremptyshade">
                          <div className="col-span-1">
                            <Checkbox 
                              className="h-4 w-4" 
                              checked={isAllSelected}
                              onCheckedChange={handleHeaderCheckbox}
                              ref={(el) => {
                                if (el) {
                                  el.indeterminate = isIndeterminate;
                                }
                              }}
                            />
                          </div>
                          <div className="col-span-5">DESCRIPTION</div>
                          <div className="col-span-2">STATUS</div>
                          <div className="col-span-2">CATEGORY</div>
                          <div className="col-span-1">LAST UPDATED</div>
                          <div className="col-span-1">ACTIONS</div>
                        </div>

                        {/* Table Body */}
                        <div className="divide-y divide-[#2a2d35]">
                          {alertsData.map((alert, index) => (
                            <div
                              key={alert.id}
                              className={`px-4 py-3 grid grid-cols-12 gap-4 items-center text-sm hover:bg-[#2a2d35] transition-colors duration-200 ${
                                selectedAlerts.includes(alert.id) ? 'bg-[#2a2d35]' : 'bg-[#1d1e24]'
                              }`}
                            >
                              <div className="col-span-1">
                                <Checkbox 
                                  className="h-4 w-4" 
                                  checked={selectedAlerts.includes(alert.id)}
                                  onCheckedChange={(checked) => handleIndividualSelect(alert.id, checked as boolean)}
                                />
                              </div>
                              <div className="col-span-5 text-coreempty-euicoloremptyshade">
                                {alert.description}
                              </div>
                              <div className="col-span-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-coresuccess-euicolorsuccess rounded-full"></div>
                                  <span className="text-coreempty-euicoloremptyshade">{alert.status}</span>
                                </div>
                              </div>
                              <div className="col-span-2 text-coreempty-euicoloremptyshade">
                                {alert.category}
                              </div>
                              <div className="col-span-1 text-coreempty-euicoloremptyshade">
                                {alert.lastUpdated}
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

              {/* Alerts Statistics Section - Collapsible */}
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

              {/* Bar Chart Section - Collapsible */}
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
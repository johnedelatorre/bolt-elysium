import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { Separator } from "../../../../components/ui/separator";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { Checkbox } from "../../../../components/ui/checkbox";
import { BarChart } from "../../../../components/charts/BarChart";
import { LineChart } from "../../../../components/charts/LineChart";

export const PageBodySubsection = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Categories with counts
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

  // Filter categories based on search
  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Featured integrations
  const featuredIntegrations = [
    {
      id: "web-crawler",
      title: "Web Crawler",
      description: "Add search to your website with the Enterprise Search Web Crawler",
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#006AA2" opacity="0.2" />
            <path d="M12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6ZM12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z" fill="#006AA2"/>
            <path d="M12 15C14.67 15 20 16.33 20 19V20H4V19C4 16.33 9.33 15 12 15ZM12 16.9C9.03 16.9 5.9 18.36 5.9 19V18.1H18.1V19C18.1 18.36 14.97 16.9 12 16.9Z" fill="#006AA2"/>
          </svg>
        </div>
      )
    },
    {
      id: "elysium-apm",
      title: "Elysium APM",
      description: "Monitor detect and diagnose complex application performance issues",
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#006AA2" fillOpacity="0.2"/>
            <path d="M5 19H19V5H5V19ZM3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" fill="#006AA2"/>
            <path d="M11 7H13V17H11V7Z" fill="#006AA2"/>
            <path d="M15 10H17V17H15V10Z" fill="#006AA2"/>
            <path d="M7 13H9V17H7V13Z" fill="#006AA2"/>
          </svg>
        </div>
      )
    },
    {
      id: "endpoint-security",
      title: "Endpoint and Cloud Security",
      description: "Protect your hosts and cloud workloads with threat prevention, detection and deep security data visibility",
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#006AA2" fillOpacity="0.2"/>
            <path d="M12 3L4 6.5V12C4 16.5 7.5 20.75 12 22C16.5 20.75 20 16.5 20 12V6.5L12 3ZM18 12C18 15.64 15.27 19.12 12 20.38C8.73 19.12 6 15.64 6 12V7.79L12 5.11L18 7.79V12Z" fill="#006AA2"/>
            <path d="M9.5 12.8L7.5 10.8L6.1 12.2L9.5 15.6L17.5 7.6L16.1 6.2L9.5 12.8Z" fill="#006AA2"/>
          </svg>
        </div>
      )
    }
  ];

  // Sample data for charts
  const lineChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Income',
        data: [1000, 2000, 3000, 2500, 3500, 2800, 2000],
        borderColor: '#006AA2',
        backgroundColor: 'rgba(0, 106, 162, 0.1)',
      },
      {
        label: 'Expense',
        data: [800, 1200, 1800, 1500, 1000, 1300, 1100],
        borderColor: '#FF4560',
        backgroundColor: 'rgba(255, 69, 96, 0.1)',
      }
    ],
  };

  // Sample alerts data
  const alertsData = [
    { id: 1, description: "Analyze mock web traffic log data for Elastic's website", status: "Installed", category: "Security Data Analytics", lastUpdated: "Dec 17, 2020" },
    { id: 2, description: "Analyze mock web traffic log data for Elastic's website", status: "Installed", category: "Security Data Analytics", lastUpdated: "Dec 17, 2020" },
    { id: 3, description: "Analyze mock web traffic log data for Elastic's website", status: "Installed", category: "Security Data Analytics", lastUpdated: "Dec 17, 2020" },
    { id: 4, description: "Analyze mock web traffic log data for Elastic's website", status: "Installed", category: "Metrics", lastUpdated: "Dec 17, 2020" },
    { id: 5, description: "Analyze mock web traffic log data for Elastic's website", status: "Installed", category: "Analytics", lastUpdated: "Dec 17, 2020" },
    { id: 6, description: "Analyze mock web traffic log data for Elastic's website", status: "Installed", category: "Security Data Analytics", lastUpdated: "Dec 17, 2020" },
    { id: 7, description: "Analyze mock web traffic log data for Elastic's website", status: "Installed", category: "Security Data Analytics", lastUpdated: "Dec 17, 2020" },
    { id: 8, description: "Analyze mock web traffic log data for Elastic's website", status: "Installed", category: "Security Data Analytics", lastUpdated: "Dec 17, 2020" },
    { id: 9, description: "Analyze mock web traffic log data for Elastic's website", status: "Installed", category: "Security Data Analytics", lastUpdated: "Dec 17, 2020" },
    { id: 10, description: "Analyze mock web traffic log data for Elastic's website", status: "Installed", category: "Security Data Analytics", lastUpdated: "Dec 17, 2020" },
  ];

  // Statistics data
  const statistics = {
    income: {
      value: "9,500",
      label: "Income"
    },
    expense: {
      value: "1,400",
      label: "Expense"
    }
  };

  return (
    <div className="flex-1 overflow-auto bg-[#1a1d23] text-white h-screen">
      {/* Header with breadcrumbs */}
      <div className="bg-[#1d1e24] border-b border-[#303030] px-4 py-2 flex items-center">
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-400">Integrations</span>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400">Browse Integrations</span>
          <span className="text-gray-600">/</span>
          <span className="text-blue-400">Breadcrumb</span>
        </div>
        <div className="ml-auto flex space-x-4">
          <button className="px-3 py-1 text-sm text-gray-300 hover:text-white">Inspect</button>
          <button className="px-3 py-1 text-sm text-gray-300 hover:text-white">Add</button>
          <button className="px-3 py-1 text-sm text-gray-300 hover:text-white">Options</button>
          <button className="px-3 py-1 text-sm text-gray-300 hover:text-white">Share</button>
          <button className="px-3 py-1 text-sm text-gray-300 hover:text-white">Cancel</button>
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">Save changes</button>
        </div>
      </div>

      <div className="p-6 h-[calc(100%-48px)]">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <h1 className="text-2xl font-bold">Integrations</h1>
            <div className="ml-auto">
              <button className="px-4 py-2 bg-[#006AA2] text-white rounded-md hover:bg-[#005a8c] transition-colors">
                View Deployment Details
              </button>
            </div>
          </div>
          <p className="text-gray-400">Choose an integration to start collecting and analyzing your data.</p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="browse" className="h-[calc(100%-80px)]">
          <TabsList className="mb-4 border-b border-gray-700 w-full justify-start">
            <TabsTrigger value="browse" className="px-4 py-2 text-gray-300 data-[state=active]:text-[#006AA2] data-[state=active]:border-b-2 data-[state=active]:border-[#006AA2] rounded-none">
              Browse Integrations
            </TabsTrigger>
            <TabsTrigger value="manage" className="px-4 py-2 text-gray-300 data-[state=active]:text-[#006AA2] data-[state=active]:border-b-2 data-[state=active]:border-[#006AA2] rounded-none">
              Manage
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="browse" className="h-full overflow-hidden">
            <div className="flex flex-col h-full space-y-8">
              {/* Featured Integrations */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {featuredIntegrations.map((integration) => (
                  <div 
                    key={integration.id}
                    className="bg-[#23262B] border border-[#303030] rounded-md overflow-hidden"
                  >
                    <div className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 bg-[#1d1e24] rounded-md flex items-center justify-center">
                        {integration.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{integration.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{integration.description}</p>
                      <button className="w-full py-2 bg-[#006AA2] text-white rounded-md hover:bg-[#005a8c] transition-colors">
                        Select
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Search and Categories */}
              <div className="flex flex-col md:flex-row gap-4 h-[calc(100%-200px)]">
                {/* Categories */}
                <div className="w-full md:w-1/4 bg-[#1d1e24] rounded-md overflow-hidden h-full">
                  <div className="p-4 flex justify-between items-center">
                    <div className="relative w-full">
                      <input
                        type="text"
                        placeholder="Search categories..."
                        className="pl-10 pr-4 py-2 bg-[#2a2d35] border border-gray-700 rounded-md text-white w-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <svg 
                        className="absolute left-3 top-2.5 text-gray-400" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <ScrollArea className="h-[calc(100%-60px)]">
                    <div className="h-full">
                      {filteredCategories.map((category) => (
                        <div 
                          key={category.name}
                          className={`p-4 border-t border-gray-800 flex justify-between items-center hover:bg-[#2a2d35] cursor-pointer ${selectedCategory === category.name ? 'bg-[#2a2d35]' : ''}`}
                          onClick={() => setSelectedCategory(category.name)}
                        >
                          <h3 className={`${selectedCategory === category.name ? 'text-blue-400' : 'text-white'}`}>
                            {category.name}
                          </h3>
                          <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>

                {/* Main Content Area */}
                <div className="w-full md:w-3/4 h-full overflow-hidden">
                  <div className="h-full flex flex-col">
                    <div className="mb-4 flex justify-between items-center">
                      <div>
                        <h2 className="text-xl font-semibold">{selectedCategory}</h2>
                        <p className="text-gray-400">Showing integrations for {selectedCategory}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search Dashboards"
                            className="pl-10 pr-4 py-2 bg-[#2a2d35] border border-gray-700 rounded-md text-white w-64"
                          />
                          <svg 
                            className="absolute left-3 top-2.5 text-gray-400" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path 
                              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="flex items-center bg-[#2a2d35] rounded-md">
                          <button 
                            className={`p-2 ${viewMode === 'grid' ? 'bg-[#3a3d45] text-blue-400' : 'text-gray-400'} rounded-l-md`}
                            onClick={() => setViewMode('grid')}
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 3H10V10H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14 3H21V10H14V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M3 14H10V21H3V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14 14H21V21H14V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <button 
                            className={`p-2 ${viewMode === 'list' ? 'bg-[#3a3d45] text-blue-400' : 'text-gray-400'} rounded-r-md`}
                            onClick={() => setViewMode('list')}
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M3 6H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M3 12H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M3 18H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </div>
                        <button className="p-2 bg-[#2a2d35] text-gray-400 rounded-md">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    {/* Grid of integration cards */}
                    <ScrollArea className="h-full">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4">
                        {Array.from({ length: 15 }).map((_, index) => (
                          <div 
                            key={`integration-${index}`}
                            className="bg-[#23262B] border border-[#303030] rounded-md overflow-hidden"
                          >
                            <div className="p-4">
                              <div className="flex items-center mb-3">
                                <div className="w-10 h-10 bg-[#1d1e24] rounded-md flex items-center justify-center mr-3">
                                  {index % 3 === 0 ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M8.10938 11.9999L12 15.8905L15.8906 11.9999L12 8.10938L8.10938 11.9999Z" fill="#FF9900"/>
                                      <path d="M5.39062 11.9999L12 18.6093L18.6094 11.9999L12 5.39062L5.39062 11.9999Z" stroke="#FF9900" strokeWidth="1.5"/>
                                    </svg>
                                  ) : index % 3 === 1 ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M18.75 10.5C18.75 7.6005 16.3995 5.25 13.5 5.25C11.068 5.25 9.01351 6.8595 8.38701 9.0705C8.26051 9.0495 8.131 9.03 8 9.03C5.515 9.03 3.5 11.045 3.5 13.53C3.5 16.015 5.515 18.03 8 18.03H18.5C20.433 18.03 22 16.463 22 14.53C22 12.6425 20.5185 11.1175 18.6665 11.0255C18.7235 10.8575 18.75 10.6805 18.75 10.5Z" fill="#FF9900"/>
                                    </svg>
                                  ) : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.4 5H5V11.4H11.4V5Z" fill="#F25022"/>
                                      <path d="M11.4 12.6H5V19H11.4V12.6Z" fill="#00A4EF"/>
                                      <path d="M19 5H12.6V11.4H19V5Z" fill="#7FBA00"/>
                                      <path d="M19 12.6H12.6V19H19V12.6Z" fill="#FFB900"/>
                                    </svg>
                                  )}
                                </div>
                                <h3 className="text-lg font-semibold text-white">
                                  {index % 3 === 0 ? "AWS EC2" : index % 3 === 1 ? "Amazon Cloud" : "Microsoft"}
                                </h3>
                              </div>
                              <p className="text-gray-400 text-sm mb-2">
                                Collect logs from 1Password with Elastic Agent.
                              </p>
                              <div className="flex items-center text-xs text-green-400">
                                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                                <span>5 integrations installed</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="manage" className="h-full overflow-hidden">
            <div className="flex flex-col h-full space-y-6">
              {/* Alerts Section */}
              <div className="bg-[#23262B] border border-[#303030] rounded-md overflow-hidden">
                <div className="p-4 flex justify-between items-center border-b border-gray-800">
                  <div className="flex items-center">
                    <button className="mr-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <h3 className="font-semibold">Alerts</h3>
                  </div>
                  <button className="text-blue-400 text-sm">
                    Show alerts
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <div className="flex items-center">
                      <span className="text-gray-400">Showing 1-10 of 45</span>
                      <span className="mx-2 text-gray-500">|</span>
                      <button className="flex items-center text-blue-400">
                        <span>Dashboards</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                          <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <span className="mx-2 text-gray-500">|</span>
                      <button className="flex items-center text-blue-400">
                        <span>Select all (10)</span>
                      </button>
                    </div>
                    <button className="text-red-400">
                      Clear selection
                    </button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-gray-400 text-sm">
                          <th className="pb-2 font-normal w-8">
                            <div className="flex items-center justify-center">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                              </svg>
                            </div>
                          </th>
                          <th className="pb-2 font-normal">Description</th>
                          <th className="pb-2 font-normal">Status</th>
                          <th className="pb-2 font-normal">Category</th>
                          <th className="pb-2 font-normal">Last updated</th>
                          <th className="pb-2 font-normal">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {alertsData.map((alert, index) => (
                          <tr key={alert.id} className="border-t border-gray-800">
                            <td className="py-3">
                              <div className="flex items-center justify-center">
                                <Checkbox id={`alert-${alert.id}`} className="border-gray-600" checked={index < 3} />
                              </div>
                            </td>
                            <td className="py-3 text-sm">{alert.description}</td>
                            <td className="py-3">
                              <div className="flex items-center">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                <span className="text-sm">{alert.status}</span>
                              </div>
                            </td>
                            <td className="py-3 text-sm">{alert.category}</td>
                            <td className="py-3 text-sm">{alert.lastUpdated}</td>
                            <td className="py-3">
                              <button className="text-gray-400">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
                                  <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" fill="currentColor"/>
                                  <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" fill="currentColor"/>
                                </svg>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4 text-sm">
                    <div className="flex items-center">
                      <span className="text-gray-400">Rows per page: 10</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button className="p-1 text-gray-400">1</button>
                      <span className="text-gray-400">...</span>
                      <button className="p-1 text-gray-400">15</button>
                      <button className="p-1 text-gray-400">16</button>
                      <button className="p-1 text-gray-400">17</button>
                      <button className="p-1 text-gray-400">18</button>
                      <button className="p-1 text-gray-400">19</button>
                      <button className="p-1 bg-blue-500 text-white rounded">20</button>
                      <button className="p-1 text-gray-400">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Statistics Section */}
              <div className="bg-[#23262B] border border-[#303030] rounded-md overflow-hidden">
                <div className="p-4 flex justify-between items-center border-b border-gray-800">
                  <div className="flex items-center">
                    <button className="mr-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <h3 className="font-semibold">Statistics</h3>
                  </div>
                  <div className="flex items-center">
                    <button className="text-blue-400 text-sm mr-4">
                      Show alerts
                    </button>
                    <div className="flex items-center bg-[#2a2d35] rounded-md px-2 py-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                        <path d="M8 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 8H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-sm text-white">14 Aug - 29 Aug</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex mb-8">
                    <div className="flex items-center mr-8">
                      <div className="mr-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 19L12 5" stroke="#00C49A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5 12L19 12" stroke="#00C49A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{statistics.income.value}</div>
                        <div className="text-gray-400 text-sm">{statistics.income.label}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5L12 19" stroke="#FF4560" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M19 12L5 12" stroke="#FF4560" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{statistics.expense.value}</div>
                        <div className="text-gray-400 text-sm">{statistics.expense.label}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-64">
                    <LineChart data={lineChartData} />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
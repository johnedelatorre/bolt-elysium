import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { Separator } from "../../../../components/ui/separator";
import { ScrollArea } from "../../../../components/ui/scroll-area";

export const PageBodySubsection = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#006AA2" opacity="0.2" />
          <path d="M12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6ZM12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z" fill="#006AA2"/>
          <path d="M12 15C14.67 15 20 16.33 20 19V20H4V19C4 16.33 9.33 15 12 15ZM12 16.9C9.03 16.9 5.9 18.36 5.9 19V18.1H18.1V19C18.1 18.36 14.97 16.9 12 16.9Z" fill="#006AA2"/>
        </svg>
      )
    },
    {
      id: "elysium-apm",
      title: "Elysium APM",
      description: "Monitor detect and diagnose complex application performance issues",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#006AA2" fillOpacity="0.2"/>
          <path d="M5 19H19V5H5V19ZM3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" fill="#006AA2"/>
          <path d="M11 7H13V17H11V7Z" fill="#006AA2"/>
          <path d="M15 10H17V17H15V10Z" fill="#006AA2"/>
          <path d="M7 13H9V17H7V13Z" fill="#006AA2"/>
        </svg>
      )
    },
    {
      id: "endpoint-security",
      title: "Endpoint and Cloud Security",
      description: "Protect your hosts and cloud workloads with threat prevention, detection and deep security data visibility",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#006AA2" fillOpacity="0.2"/>
          <path d="M12 3L4 6.5V12C4 16.5 7.5 20.75 12 22C16.5 20.75 20 16.5 20 12V6.5L12 3ZM18 12C18 15.64 15.27 19.12 12 20.38C8.73 19.12 6 15.64 6 12V7.79L12 5.11L18 7.79V12Z" fill="#006AA2"/>
          <path d="M9.5 12.8L7.5 10.8L6.1 12.2L9.5 15.6L17.5 7.6L16.1 6.2L9.5 12.8Z" fill="#006AA2"/>
        </svg>
      )
    }
  ];

  return (
    <div className="flex-1 overflow-auto bg-[#1a1d23] text-white h-screen">
      <div className="p-6 h-full">
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
          <TabsList className="mb-4 border-b border-gray-700 w-full">
            <TabsTrigger value="browse" className="px-4 py-2 text-gray-300 data-[state=active]:text-[#006AA2] data-[state=active]:border-b-2 data-[state=active]:border-[#006AA2]">
              Browse Integrations
            </TabsTrigger>
            <TabsTrigger value="manage" className="px-4 py-2 text-gray-300 data-[state=active]:text-[#006AA2] data-[state=active]:border-b-2 data-[state=active]:border-[#006AA2]">
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
                    <div className="mb-4">
                      <h2 className="text-xl font-semibold">{selectedCategory}</h2>
                      <p className="text-gray-400">Showing integrations for {selectedCategory}</p>
                    </div>
                    
                    {/* Grid of integration cards */}
                    <ScrollArea className="h-full">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4">
                        {Array.from({ length: 20 }).map((_, index) => (
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
                                Collect logs and metrics from {index % 3 === 0 ? "AWS EC2" : index % 3 === 1 ? "Amazon Cloud" : "Microsoft"} services.
                              </p>
                              <div className="flex items-center text-xs text-green-400">
                                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                                <span>{5 + index} integrations installed</span>
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
          
          <TabsContent value="manage">
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">Manage your integrations</h3>
              <p className="text-gray-400">This tab would contain management features for your existing integrations.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
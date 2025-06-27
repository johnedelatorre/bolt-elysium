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

// Mock data for alerts
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

export const PageBodySubsection = (): JSX.Element => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  // Handle individual row selection
  const handleRowSelect = (rowId: number, checked: boolean) => {
    if (checked) {
      setSelectedRows(prev => [...prev, rowId]);
    } else {
      setSelectedRows(prev => prev.filter(id => id !== rowId));
    }
  };

  // Handle select all
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(alertsData.map(alert => alert.id));
    } else {
      setSelectedRows([]);
    }
  };

  // Check if all rows are selected
  const isAllSelected = selectedRows.length === alertsData.length && alertsData.length > 0;
  
  // Check if some but not all rows are selected (indeterminate state)
  const isIndeterminate = selectedRows.length > 0 && selectedRows.length < alertsData.length;

  // Clear selection
  const clearSelection = () => {
    setSelectedRows([]);
  };

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
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-4">
                  {/* Selection Info and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-textprimary-euicolorprimarytext">
                        Showing 1-10 of 15
                      </span>
                      <span className="text-coreempty-euicoloremptyshade">Dashboards</span>
                      <span className="text-textprimary-euicolorprimarytext">
                        {selectedRows.length} Selected
                      </span>
                      {selectedRows.length > 0 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={clearSelection}
                          className="text-textprimary-euicolorprimarytext hover:text-blue-400 hover:bg-transparent p-0 h-auto font-normal underline"
                        >
                          Clear selection
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Data Table */}
                  <div className="border border-[#2a2d35] rounded-lg overflow-hidden">
                    {/* Table Header */}
                    <div className="bg-[#2a2d35] px-4 py-3 grid grid-cols-12 gap-4 items-center text-sm font-medium text-coreempty-euicoloremptyshade">
                      <div className="col-span-1 flex items-center">
                        <Checkbox
                          checked={isAllSelected}
                          onCheckedChange={handleSelectAll}
                          className="data-[state=checked]:bg-textprimary-euicolorprimarytext data-[state=checked]:border-textprimary-euicolorprimarytext"
                          ref={(ref) => {
                            if (ref) {
                              ref.indeterminate = isIndeterminate;
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
                      {alertsData.map((alert) => (
                        <div
                          key={alert.id}
                          className={`px-4 py-3 grid grid-cols-12 gap-4 items-center text-sm hover:bg-[#2a2d35] transition-colors duration-200 ${
                            selectedRows.includes(alert.id) ? 'bg-[#2a2d35]' : 'bg-[#1d1e24]'
                          }`}
                        >
                          <div className="col-span-1 flex items-center">
                            <Checkbox
                              checked={selectedRows.includes(alert.id)}
                              onCheckedChange={(checked) => handleRowSelect(alert.id, checked as boolean)}
                              className="data-[state=checked]:bg-textprimary-euicolorprimarytext data-[state=checked]:border-textprimary-euicolorprimarytext"
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
                        &lt;
                      </Button>
                      {[1, 15, 16, 17, 18, 19, 20].map((page, index) => (
                        <Button
                          key={page}
                          variant="ghost"
                          size="sm"
                          className={`px-2 py-1 h-auto text-sm ${
                            page === 20
                              ? 'bg-textprimary-euicolorprimarytext text-white'
                              : 'text-coreempty-euicoloremptyshade hover:text-white hover:bg-[#2a2d35]'
                          }`}
                        >
                          {index === 1 ? '...' : page}
                        </Button>
                      ))}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-coreempty-euicoloremptyshade hover:text-white hover:bg-[#2a2d35] px-2 py-1 h-auto"
                      >
                        &gt;
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
              <AccordionContent className="px-4 pb-4">
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
              <AccordionContent className="px-4 pb-4">
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
        </div>
      </div>
    </div>
  );
};
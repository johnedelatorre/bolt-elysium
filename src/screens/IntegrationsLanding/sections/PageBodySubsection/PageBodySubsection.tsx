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

  return (
    <div className="flex flex-col flex-1 grow bg-[#19191a] h-screen overflow-hidden shadow-shadow-bottom-medium">
      <header className="flex items-center justify-between p-2 relative w-full bg-transparent shadow-shadow-bottom-small flex-shrink-0">
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

      <Separator className="bg-[#303030] flex-shrink-0" />

      <div className="flex flex-col gap-6 pt-6 pb-px px-6 w-full flex-shrink-0">
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

        <Tabs defaultValue="browse" className="w-full">
          <TabsList className="bg-transparent p-0 h-auto">
            <TabsTrigger
              value="browse"
              className="inline-flex items-center justify-center gap-2 pt-3 pb-[11px] px-1 bg-[#19191a] data-[state=active]:shadow-[inset_0px_-2px_0px_#0071c2] data-[state=active]:bg-[#19191a] rounded-none border-0"
            >
              <span className="font-m-heading-4 data-[state=active]:text-buttonstextnormalsecondary text-[length:var(--m-heading-4-font-size)] text-center tracking-[var(--m-heading-4-letter-spacing)] leading-[var(--m-heading-4-line-height)] whitespace-nowrap">
                Browse Integrations
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="manage"
              className="inline-flex items-center justify-center gap-2 px-1 py-3 rounded-none border-0"
            >
              <span className="font-m-heading-4 text-text-disabled-euicolordisabledtext text-[length:var(--m-heading-4-font-size)] text-center tracking-[var(--m-heading-4-letter-spacing)] leading-[var(--m-heading-4-line-height)] whitespace-nowrap">
                Manage
              </span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="p-6 w-full flex justify-between flex-shrink-0">
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

      <div className="flex flex-1 items-start gap-[50px] p-6 w-full overflow-y-auto">
        {/* Left sidebar with categories */}
        <div className="flex flex-col items-start flex-shrink-0">
          <div className="flex flex-col items-start gap-2">
            {categories.map((category, index) => (
              <div key={index} className="relative w-[200px] h-8">
                <div className="relative h-8">
                  <Badge
                    className={`absolute top-1.5 ${category.isSelected ? "bg-coreprimary-euicolorprimary text-coreempty-euicoloremptyshade" : "bg-corelight-euicolorlightshade text-coreprimary-euicolorprimary"} px-1.5 py-0.5 rounded-[3px]`}
                    style={{ right: category.isSelected ? "36px" : "20px" }}
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
        <div className="flex flex-col flex-1 min-h-0">
          {/* Search and filter controls */}
          <div className="flex items-center gap-4 pb-5 flex-shrink-0">
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

          {/* Integration cards grid - scrollable area */}
          <div className="flex-1 overflow-y-auto">
            {integrationRows.map((row, rowIndex) => (
              <div
                key={`row-${rowIndex}`}
                className="flex items-start justify-between pb-5"
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
    </div>
  );
};
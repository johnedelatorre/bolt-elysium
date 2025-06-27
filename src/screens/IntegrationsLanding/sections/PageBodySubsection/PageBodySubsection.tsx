import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { Separator } from "../../../../components/ui/separator";
import { Checkbox } from "../../../../components/ui/checkbox";
import { BarChart } from "../../../../components/charts/BarChart";
import { LineChart } from "../../../../components/charts/LineChart";

export const PageBodySubsection = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [installedOnly, setInstalledOnly] = useState(false);

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

  // Featured integrations
  const featuredIntegrations = [
    {
      id: "web-crawler",
      title: "Web Crawler",
      description: "Add search to your website with the Enterprise Search Web Crawler",
      icon: (
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35 10C44.935 10 53.066 17.7275 53.709 27.5H53.75V30H53.709C53.066 39.7725 44.935 47.5 35 47.5C25.065 47.5 16.934 39.7725 16.291 30H16.25V27.5H16.291C16.934 17.7275 25.065 10 35 10ZM30.654 40C31.865 43.0992 33.484 45 35 45C36.516 45 38.135 43.0992 39.346 40H30.654ZM23.274 40C25.128 41.9313 27.454 43.4057 30.066 44.2373C29.274 43.0759 28.575 41.6426 27.999 40H23.274ZM42.001 40C41.425 41.6426 40.726 43.0759 39.934 44.2373C42.546 43.4057 44.872 41.9313 46.726 40H42.001ZM18.797 30C19.006 32.7475 19.899 35.304 21.305 37.5H27.259C26.7 35.2351 26.352 32.6953 26.27 30H18.797ZM28.771 30C28.863 32.7669 29.257 35.3171 29.842 37.5H40.158C40.743 35.3171 41.137 32.7669 41.229 30H28.771ZM43.73 30C43.648 32.6953 43.3 35.2351 42.741 37.5H48.695C50.101 35.304 50.994 32.7475 51.203 30H43.73ZM21.305 20C19.899 22.196 19.006 24.7525 18.797 27.5H26.27C26.352 24.8047 26.7 22.2649 27.259 20H21.305ZM29.842 20C29.257 22.1829 28.863 24.7331 28.771 27.5H41.229C41.137 24.7331 40.743 22.1829 40.158 20H29.842ZM42.741 20C43.3 22.2649 43.648 24.8047 43.73 27.5H51.203C50.994 24.7525 50.101 22.196 48.695 20H42.741ZM30.066 13.2627C27.454 14.0943 25.128 15.5687 23.274 17.5H27.999C28.575 15.8574 29.274 14.4241 30.066 13.2627ZM35 12.5C33.484 12.5 31.865 14.4008 30.654 17.5H39.346C38.135 14.4008 36.516 12.5 35 12.5ZM39.934 13.2627C40.726 14.4241 41.425 15.8574 42.001 17.5H46.726C44.872 15.5687 42.546 14.0943 39.934 13.2627Z" fill="#006AA2"/>
        </svg>
      )
    },
    {
      id: "elysium-apm",
      title: "Elysium APM",
      description: "Monitor, detect and diagnose complex application performance issues",
      icon: (
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.75 12.5C36.44 12.5 37 13.0596 37 13.75V47.5H70.75C71.44 47.5 72 48.0596 72 48.75C72 49.4404 71.44 50 70.75 50H35.75C35.06 50 34.5 49.4404 34.5 48.75V13.75C34.5 13.0596 35.06 12.5 35.75 12.5ZM46.217 28.7715C46.844 29.3178 47.609 29.7098 48.452 29.8896L43.118 40.5586C42.809 41.1759 42.059 41.4266 41.441 41.1182C40.824 40.8095 40.573 40.0588 40.882 39.4414L46.217 28.7715ZM59.5 35C60.881 35 62 36.1193 62 37.5C62 38.8807 60.881 40 59.5 40C58.119 40 57 38.8807 57 37.5C57 36.1193 58.119 35 59.5 35ZM57.365 32.9775C56.597 33.341 55.935 33.8942 55.442 34.5771L51.512 29.5791C52.291 29.2364 52.965 28.7002 53.476 28.0322L57.365 32.9775ZM66.136 18.6982C66.754 19.261 67.514 19.671 68.355 19.8682L62.599 33.5762C61.948 33.0616 61.166 32.7049 60.312 32.5654L66.136 18.6982ZM49.5 22.5C50.881 22.5 52 23.6193 52 25C52 26.3807 50.881 27.5 49.5 27.5C48.119 27.5 47 26.3807 47 25C47 23.6193 48.119 22.5 49.5 22.5ZM69.5 12.5C70.881 12.5 72 13.6193 72 15C72 16.3807 70.881 17.5 69.5 17.5C68.119 17.5 67 16.3807 67 15C67 13.6193 68.119 12.5 69.5 12.5Z" fill="#006AA2"/>
        </svg>
      )
    },
    {
      id: "endpoint-security",
      title: "Endpoint and Cloud Security",
      description: "Protect your hosts and cloud workloads with threat prevention, detection and deep security data visibility",
      icon: (
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 30C32.65 30 35.2 31.0534 37.07 32.9287C38.95 34.8041 40 37.3478 40 40C40 42.6522 38.95 45.1959 37.07 47.0713C35.2 48.9465 32.65 50 30 50C27.35 49.9999 24.8 48.9464 22.93 47.0713C21.05 45.1959 20 42.6522 20 40C20 37.3478 21.05 34.8041 22.93 32.9287C24.8 31.0536 27.35 30.0001 30 30ZM15.67 13.0439C18.41 12.3451 21.28 12.3195 24.02 12.9687C26.77 13.618 29.32 14.923 31.46 16.7725L32.38 15.8574C32.49 15.738 32.63 15.6427 32.78 15.5771C32.93 15.5117 33.1 15.477 33.26 15.4756C33.43 15.4742 33.59 15.5065 33.75 15.5693C33.9 15.6322 34.04 15.7246 34.16 15.8418C34.28 15.9592 34.37 16.0993 34.43 16.2529C34.49 16.4063 34.53 16.5706 34.52 16.7363C34.52 16.9023 34.49 17.0672 34.42 17.2197C34.36 17.3721 34.26 17.5098 34.14 17.625L33.23 18.54C36.08 21.8225 37.5 25.9101 37.5 30C36.71 29.4076 35.85 28.9028 34.93 28.5078C34.63 25.4874 33.42 22.6295 31.45 20.3154L25.3 26.4648L22.42 29.3525C22.56 29.884 22.52 30.4477 22.31 30.9561C22.1 31.4645 21.73 31.8898 21.25 32.165C20.77 32.4402 20.22 32.5502 19.67 32.4785C19.13 32.4067 18.62 32.1567 18.23 31.7676C17.84 31.3785 17.59 30.8717 17.52 30.3262C17.45 29.7806 17.56 29.2266 17.84 28.75C18.11 28.2735 18.54 27.901 19.04 27.6904C19.55 27.4799 20.12 27.4426 20.65 27.585L22.54 25.6924C21.49 25.0746 20.25 24.8598 19.06 25.0889C17.86 25.3181 16.79 25.9757 16.05 26.9375C15.3 27.8995 14.93 29.1009 15.01 30.3154C15.09 31.5298 15.61 32.6747 16.47 33.5352C16.58 33.6513 16.67 33.7898 16.74 33.9414C16.8 34.0931 16.83 34.2558 16.83 34.4199C16.83 34.5841 16.8 34.7468 16.74 34.8984C16.67 35.05 16.58 35.1877 16.46 35.3037C16.35 35.4196 16.21 35.5115 16.06 35.5742C15.91 35.637 15.74 35.67 15.58 35.6699C15.42 35.6698 15.25 35.6371 15.1 35.5742C14.95 35.5113 14.81 35.4189 14.7 35.3027C13.36 33.9736 12.58 32.1913 12.5 30.3105C12.42 28.4299 13.05 26.5881 14.26 25.1504C15.48 23.7127 17.19 22.7842 19.06 22.5498C20.93 22.3156 22.81 22.7919 24.35 23.8848L26.13 22.0996C24.38 20.7348 22.22 19.9959 20 20C17.57 20.0084 15.23 20.9005 13.41 22.5098C11.59 24.1193 10.41 26.3366 10.11 28.7471C9.8 31.1574 10.39 33.5967 11.75 35.6094C13.11 37.622 15.15 39.0703 17.5 39.6846C17.48 40.5577 17.55 41.4312 17.71 42.29C15.84 41.9404 14.07 41.1674 12.54 40.0303C11.01 38.8929 9.77 37.4209 8.89 35.7275C8.02 34.0343 7.55 32.1641 7.51 30.2598C7.47 28.3552 7.86 26.4661 8.67 24.7383C9.47 23.0106 10.66 21.4892 12.14 20.29C13.62 19.0909 15.35 18.2457 17.21 17.8193C19.06 17.393 20.99 17.3967 22.85 17.8301C24.7 18.2635 26.43 19.1155 27.91 20.3203L29.69 18.5449C27.89 17.0273 25.76 15.953 23.48 15.4082C21.19 14.8634 18.81 14.863 16.52 15.4082C14.24 15.9534 12.11 17.0289 10.31 18.5469C8.52 20.0648 7.11 21.9833 6.19 24.1475C5.27 26.3118 4.88 28.6615 5.03 31.0068C5.19 33.3521 5.9 35.6275 7.1 37.6494C8.3 39.6712 9.95 41.3827 11.94 42.6465C13.92 43.9103 16.17 44.6909 18.51 44.9248C18.9 45.8395 19.4 46.7043 20 47.5C17.18 47.4996 14.39 46.8154 11.89 45.5059C9.39 44.1963 7.24 42.2999 5.63 39.9795C4.02 37.6591 2.99 34.9833 2.64 32.1807C2.29 29.3779 2.62 26.5315 3.61 23.8848C4.59 21.238 6.21 18.8693 8.31 16.9814C10.41 15.0938 12.94 13.7428 15.67 13.0439ZM35 36.248C34.84 36.2481 34.67 36.2799 34.52 36.3428C34.37 36.4058 34.23 36.4988 34.12 36.6152L28.75 41.9824L27.14 40.3652C26.9 40.1305 26.58 39.9983 26.25 39.998C25.92 39.9979 25.6 40.129 25.37 40.3633C25.13 40.5977 25 40.9163 25 41.248C25 41.5797 25.13 41.8981 25.37 42.1328L27.87 44.6328C27.98 44.7492 28.12 44.8413 28.27 44.9043C28.42 44.9672 28.59 45 28.75 45C28.91 45 29.08 44.9673 29.23 44.9043C29.38 44.8413 29.52 44.7492 29.64 44.6328L35.89 38.3828C36.12 38.1485 36.25 37.8304 36.25 37.499C36.25 37.1677 36.12 36.8496 35.89 36.6152C35.77 36.4988 35.63 36.4058 35.48 36.3428C35.33 36.2798 35.16 36.248 35 36.248Z" fill="#006AA2"/>
        </svg>
      )
    }
  ];

  // Integration cards data
  const integrationCards = [
    {
      id: "aws-ec2-1",
      title: "AWS EC2",
      description: "Collect logs from 1Password with Elastic Agent.",
      installCount: 5,
      logo: (
        <div className="flex items-center justify-center w-10 h-10 bg-[#232F3E] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.10938 11.9999L12 15.8905L15.8906 11.9999L12 8.10938L8.10938 11.9999Z" fill="#FF9900"/>
            <path d="M5.39062 11.9999L12 18.6093L18.6094 11.9999L12 5.39062L5.39062 11.9999Z" stroke="#FF9900" strokeWidth="1.5"/>
          </svg>
        </div>
      )
    },
    {
      id: "amazon-cloud-1",
      title: "Amazon Cloud",
      description: "Collect logs from 1Password with Elastic Agent.",
      installCount: 5,
      logo: (
        <div className="flex items-center justify-center w-10 h-10 bg-[#232F3E] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.75 10.5C18.75 7.6005 16.3995 5.25 13.5 5.25C11.068 5.25 9.01351 6.8595 8.38701 9.0705C8.26051 9.0495 8.131 9.03 8 9.03C5.515 9.03 3.5 11.045 3.5 13.53C3.5 16.015 5.515 18.03 8 18.03H18.5C20.433 18.03 22 16.463 22 14.53C22 12.6425 20.5185 11.1175 18.6665 11.0255C18.7235 10.8575 18.75 10.6805 18.75 10.5Z" fill="#FF9900"/>
          </svg>
        </div>
      )
    },
    {
      id: "microsoft-1",
      title: "Microsoft",
      description: "Collect logs from 1Password with Elastic Agent.",
      installCount: 5,
      logo: (
        <div className="flex items-center justify-center w-10 h-10 bg-[#00A4EF] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4 5H5V11.4H11.4V5Z" fill="#F25022"/>
            <path d="M11.4 12.6H5V19H11.4V12.6Z" fill="#00A4EF"/>
            <path d="M19 5H12.6V11.4H19V5Z" fill="#7FBA00"/>
            <path d="M19 12.6H12.6V19H19V12.6Z" fill="#FFB900"/>
          </svg>
        </div>
      )
    },
    {
      id: "aws-ec2-2",
      title: "AWS EC2",
      description: "Collect logs from 1Password with Elastic Agent.",
      installCount: 5,
      logo: (
        <div className="flex items-center justify-center w-10 h-10 bg-[#232F3E] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.10938 11.9999L12 15.8905L15.8906 11.9999L12 8.10938L8.10938 11.9999Z" fill="#FF9900"/>
            <path d="M5.39062 11.9999L12 18.6093L18.6094 11.9999L12 5.39062L5.39062 11.9999Z" stroke="#FF9900" strokeWidth="1.5"/>
          </svg>
        </div>
      )
    },
    {
      id: "amazon-cloud-2",
      title: "Amazon Cloud",
      description: "Collect logs from 1Password with Elastic Agent.",
      installCount: 5,
      logo: (
        <div className="flex items-center justify-center w-10 h-10 bg-[#232F3E] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.75 10.5C18.75 7.6005 16.3995 5.25 13.5 5.25C11.068 5.25 9.01351 6.8595 8.38701 9.0705C8.26051 9.0495 8.131 9.03 8 9.03C5.515 9.03 3.5 11.045 3.5 13.53C3.5 16.015 5.515 18.03 8 18.03H18.5C20.433 18.03 22 16.463 22 14.53C22 12.6425 20.5185 11.1175 18.6665 11.0255C18.7235 10.8575 18.75 10.6805 18.75 10.5Z" fill="#FF9900"/>
          </svg>
        </div>
      )
    },
    {
      id: "microsoft-2",
      title: "Microsoft",
      description: "Collect logs from 1Password with Elastic Agent.",
      installCount: 5,
      logo: (
        <div className="flex items-center justify-center w-10 h-10 bg-[#00A4EF] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4 5H5V11.4H11.4V5Z" fill="#F25022"/>
            <path d="M11.4 12.6H5V19H11.4V12.6Z" fill="#00A4EF"/>
            <path d="M19 5H12.6V11.4H19V5Z" fill="#7FBA00"/>
            <path d="M19 12.6H12.6V19H19V12.6Z" fill="#FFB900"/>
          </svg>
        </div>
      )
    },
    {
      id: "aws-ec2-3",
      title: "AWS EC2",
      description: "Collect logs from 1Password with Elastic Agent.",
      installCount: 5,
      logo: (
        <div className="flex items-center justify-center w-10 h-10 bg-[#232F3E] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.10938 11.9999L12 15.8905L15.8906 11.9999L12 8.10938L8.10938 11.9999Z" fill="#FF9900"/>
            <path d="M5.39062 11.9999L12 18.6093L18.6094 11.9999L12 5.39062L5.39062 11.9999Z" stroke="#FF9900" strokeWidth="1.5"/>
          </svg>
        </div>
      )
    },
    {
      id: "amazon-cloud-3",
      title: "Amazon Cloud",
      description: "Collect logs from 1Password with Elastic Agent.",
      installCount: 5,
      logo: (
        <div className="flex items-center justify-center w-10 h-10 bg-[#232F3E] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.75 10.5C18.75 7.6005 16.3995 5.25 13.5 5.25C11.068 5.25 9.01351 6.8595 8.38701 9.0705C8.26051 9.0495 8.131 9.03 8 9.03C5.515 9.03 3.5 11.045 3.5 13.53C3.5 16.015 5.515 18.03 8 18.03H18.5C20.433 18.03 22 16.463 22 14.53C22 12.6425 20.5185 11.1175 18.6665 11.0255C18.7235 10.8575 18.75 10.6805 18.75 10.5Z" fill="#FF9900"/>
          </svg>
        </div>
      )
    },
    {
      id: "microsoft-3",
      title: "Microsoft",
      description: "Collect logs from 1Password with Elastic Agent.",
      installCount: 5,
      logo: (
        <div className="flex items-center justify-center w-10 h-10 bg-[#00A4EF] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4 5H5V11.4H11.4V5Z" fill="#F25022"/>
            <path d="M11.4 12.6H5V19H11.4V12.6Z" fill="#00A4EF"/>
            <path d="M19 5H12.6V11.4H19V5Z" fill="#7FBA00"/>
            <path d="M19 12.6H12.6V19H19V12.6Z" fill="#FFB900"/>
          </svg>
        </div>
      )
    },
    {
      id: "aws-ec2-4",
      title: "AWS EC2",
      description: "Collect logs from 1Password with Elastic Agent.",
      installCount: 5,
      logo: (
        <div className="flex items-center justify-center w-10 h-10 bg-[#232F3E] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.10938 11.9999L12 15.8905L15.8906 11.9999L12 8.10938L8.10938 11.9999Z" fill="#FF9900"/>
            <path d="M5.39062 11.9999L12 18.6093L18.6094 11.9999L12 5.39062L5.39062 11.9999Z" stroke="#FF9900" strokeWidth="1.5"/>
          </svg>
        </div>
      )
    },
    {
      id: "amazon-cloud-4",
      title: "Amazon Cloud",
      description: "Collect logs from 1Password with Elastic Agent.",
      installCount: 5,
      logo: (
        <div className="flex items-center justify-center w-10 h-10 bg-[#232F3E] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.75 10.5C18.75 7.6005 16.3995 5.25 13.5 5.25C11.068 5.25 9.01351 6.8595 8.38701 9.0705C8.26051 9.0495 8.131 9.03 8 9.03C5.515 9.03 3.5 11.045 3.5 13.53C3.5 16.015 5.515 18.03 8 18.03H18.5C20.433 18.03 22 16.463 22 14.53C22 12.6425 20.5185 11.1175 18.6665 11.0255C18.7235 10.8575 18.75 10.6805 18.75 10.5Z" fill="#FF9900"/>
          </svg>
        </div>
      )
    },
    {
      id: "microsoft-4",
      title: "Microsoft",
      description: "Collect logs from 1Password with Elastic Agent.",
      installCount: 5,
      logo: (
        <div className="flex items-center justify-center w-10 h-10 bg-[#00A4EF] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4 5H5V11.4H11.4V5Z" fill="#F25022"/>
            <path d="M11.4 12.6H5V19H11.4V12.6Z" fill="#00A4EF"/>
            <path d="M19 5H12.6V11.4H19V5Z" fill="#7FBA00"/>
            <path d="M19 12.6H12.6V19H19V12.6Z" fill="#FFB900"/>
          </svg>
        </div>
      )
    },
    {
      id: "aws-ec2-5",
      title: "AWS EC2",
      description: "Collect logs from 1Password with Elastic Agent.",
      installCount: 5,
      logo: (
        <div className="flex items-center justify-center w-10 h-10 bg-[#232F3E] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.10938 11.9999L12 15.8905L15.8906 11.9999L12 8.10938L8.10938 11.9999Z" fill="#FF9900"/>
            <path d="M5.39062 11.9999L12 18.6093L18.6094 11.9999L12 5.39062L5.39062 11.9999Z" stroke="#FF9900" strokeWidth="1.5"/>
          </svg>
        </div>
      )
    },
    {
      id: "amazon-cloud-5",
      title: "Amazon Cloud",
      description: "Collect logs from 1Password with Elastic Agent.",
      installCount: 5,
      logo: (
        <div className="flex items-center justify-center w-10 h-10 bg-[#232F3E] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.75 10.5C18.75 7.6005 16.3995 5.25 13.5 5.25C11.068 5.25 9.01351 6.8595 8.38701 9.0705C8.26051 9.0495 8.131 9.03 8 9.03C5.515 9.03 3.5 11.045 3.5 13.53C3.5 16.015 5.515 18.03 8 18.03H18.5C20.433 18.03 22 16.463 22 14.53C22 12.6425 20.5185 11.1175 18.6665 11.0255C18.7235 10.8575 18.75 10.6805 18.75 10.5Z" fill="#FF9900"/>
          </svg>
        </div>
      )
    },
    {
      id: "microsoft-5",
      title: "Microsoft",
      description: "Collect logs from 1Password with Elastic Agent.",
      installCount: 5,
      logo: (
        <div className="flex items-center justify-center w-10 h-10 bg-[#00A4EF] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4 5H5V11.4H11.4V5Z" fill="#F25022"/>
            <path d="M11.4 12.6H5V19H11.4V12.6Z" fill="#00A4EF"/>
            <path d="M19 5H12.6V11.4H19V5Z" fill="#7FBA00"/>
            <path d="M19 12.6H12.6V19H19V12.6Z" fill="#FFB900"/>
          </svg>
        </div>
      )
    },
    {
      id: "aws-ec2-6",
      title: "AWS EC2",
      description: "Collect logs from 1Password with Elastic Agent.",
      installCount: 5,
      logo: (
        <div className="flex items-center justify-center w-10 h-10 bg-[#232F3E] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.10938 11.9999L12 15.8905L15.8906 11.9999L12 8.10938L8.10938 11.9999Z" fill="#FF9900"/>
            <path d="M5.39062 11.9999L12 18.6093L18.6094 11.9999L12 5.39062L5.39062 11.9999Z" stroke="#FF9900" strokeWidth="1.5"/>
          </svg>
        </div>
      )
    },
    {
      id: "amazon-cloud-6",
      title: "Amazon Cloud",
      description: "Collect logs from 1Password with Elastic Agent.",
      installCount: 5,
      logo: (
        <div className="flex items-center justify-center w-10 h-10 bg-[#232F3E] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.75 10.5C18.75 7.6005 16.3995 5.25 13.5 5.25C11.068 5.25 9.01351 6.8595 8.38701 9.0705C8.26051 9.0495 8.131 9.03 8 9.03C5.515 9.03 3.5 11.045 3.5 13.53C3.5 16.015 5.515 18.03 8 18.03H18.5C20.433 18.03 22 16.463 22 14.53C22 12.6425 20.5185 11.1175 18.6665 11.0255C18.7235 10.8575 18.75 10.6805 18.75 10.5Z" fill="#FF9900"/>
          </svg>
        </div>
      )
    },
    {
      id: "microsoft-6",
      title: "Microsoft",
      description: "Collect logs from 1Password with Elastic Agent.",
      installCount: 5,
      logo: (
        <div className="flex items-center justify-center w-10 h-10 bg-[#00A4EF] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4 5H5V11.4H11.4V5Z" fill="#F25022"/>
            <path d="M11.4 12.6H5V19H11.4V12.6Z" fill="#00A4EF"/>
            <path d="M19 5H12.6V11.4H19V5Z" fill="#7FBA00"/>
            <path d="M19 12.6H12.6V19H19V12.6Z" fill="#FFB900"/>
          </svg>
        </div>
      )
    },
    {
      id: "aws-ec2-7",
      title: "AWS EC2",
      description: "Collect logs from 1Password with Elastic Agent.",
      installCount: 5,
      logo: (
        <div className="flex items-center justify-center w-10 h-10 bg-[#232F3E] rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.10938 11.9999L12 15.8905L15.8906 11.9999L12 8.10938L8.10938 11.9999Z" fill="#FF9900"/>
            <path d="M5.39062 11.9999L12 18.6093L18.6094 11.9999L12 5.39062L5.39062 11.9999Z" stroke="#FF9900" strokeWidth="1.5"/>
          </svg>
        </div>
      )
    }
  ];

  // Filter integrations based on search query
  const filteredIntegrations = integrationCards.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          card.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // If no categories are selected or "All Categories" is selected, show all
    const matchesCategory = selectedCategories.length === 0 || 
                           selectedCategories.includes("All Categories");
    
    // If installedOnly is true, only show cards with installCount > 0
    const matchesInstalled = !installedOnly || card.installCount > 0;
    
    return matchesSearch && matchesCategory && matchesInstalled;
  });

  // Function to handle category selection
  const handleCategorySelect = (category: string) => {
    if (category === "All Categories") {
      setSelectedCategories(["All Categories"]);
    } else {
      const newSelectedCategories = [...selectedCategories];
      
      // If "All Categories" is selected and we're selecting another category, remove "All Categories"
      if (newSelectedCategories.includes("All Categories")) {
        newSelectedCategories.splice(newSelectedCategories.indexOf("All Categories"), 1);
      }
      
      // Toggle the selected category
      if (newSelectedCategories.includes(category)) {
        newSelectedCategories.splice(newSelectedCategories.indexOf(category), 1);
      } else {
        newSelectedCategories.push(category);
      }
      
      setSelectedCategories(newSelectedCategories);
    }
  };

  // Sample data for charts
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Alerts',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: '#006AA2',
      }
    ],
  };

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Alerts Trend',
        data: [33, 53, 85, 41, 44, 65],
        borderColor: '#006AA2',
        backgroundColor: 'rgba(0, 106, 162, 0.1)',
      }
    ],
  };

  return (
    <div className="flex-1 overflow-auto bg-[#1a1d23] text-white">
      <div className="p-6">
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
        <Tabs defaultValue="browse" className="mb-8">
          <TabsList className="mb-4 border-b border-gray-700 w-full">
            <TabsTrigger value="browse" className="px-4 py-2 text-gray-300 data-[state=active]:text-[#006AA2] data-[state=active]:border-b-2 data-[state=active]:border-[#006AA2]">
              Browse Integrations
            </TabsTrigger>
            <TabsTrigger value="manage" className="px-4 py-2 text-gray-300 data-[state=active]:text-[#006AA2] data-[state=active]:border-b-2 data-[state=active]:border-[#006AA2]">
              Manage
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="browse" className="space-y-8">
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

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Categories */}
              <div className="w-full md:w-1/4 bg-[#1d1e24] rounded-md overflow-hidden">
                <div className="p-4 flex justify-between items-center">
                  <h3 className="text-blue-400 font-medium">All Categories</h3>
                  <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full">
                    {categories[0].count}
                  </span>
                </div>
                <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
                  {categories.slice(1).map((category) => (
                    <div 
                      key={category.name}
                      className="p-4 border-t border-gray-800 flex justify-between items-center hover:bg-[#2a2d35] cursor-pointer"
                      onClick={() => handleCategorySelect(category.name)}
                    >
                      <h3 className="text-white">{category.name}</h3>
                      <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integration Cards */}
              <div className="w-full md:w-3/4">
                <div className="mb-4 flex justify-between items-center">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Dashboards"
                      className="pl-10 pr-4 py-2 bg-[#2a2d35] border border-gray-700 rounded-md text-white w-full md:w-80"
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
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">Grid View</span>
                      <button 
                        className={`p-1 rounded ${viewMode === 'grid' ? 'bg-gray-700' : 'bg-transparent'}`}
                        onClick={() => setViewMode('grid')}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 3H10V10H3V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 3H21V10H14V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 14H10V21H3V14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 14H21V21H14V14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">List View</span>
                      <button 
                        className={`p-1 rounded ${viewMode === 'list' ? 'bg-gray-700' : 'bg-transparent'}`}
                        onClick={() => setViewMode('list')}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 6H3.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 12H3.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 18H3.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">Installed</span>
                      <Checkbox 
                        id="installed" 
                        checked={installedOnly}
                        onCheckedChange={(checked) => setInstalledOnly(checked as boolean)}
                      />
                    </div>
                  </div>
                </div>

                {/* Integration Cards Grid */}
                <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'} gap-4`}>
                  {filteredIntegrations.map((card) => (
                    <div 
                      key={card.id}
                      className="bg-[#23262B] border border-[#303030] rounded-md overflow-hidden"
                    >
                      <div className={`p-4 ${viewMode === 'list' ? 'flex items-center' : ''}`}>
                        <div className={`${viewMode === 'list' ? 'mr-4' : 'mb-4'}`}>
                          {card.logo}
                        </div>
                        <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                          <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                          <p className="text-gray-400 text-sm mb-2">{card.description}</p>
                          <div className="flex items-center text-xs text-green-400">
                            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                            <span>{card.installCount} integrations installed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
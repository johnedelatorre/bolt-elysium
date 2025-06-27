import React, { useState, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Separator } from "../../../../components/ui/separator";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion";
import { LineChart } from "../../../../components/charts/LineChart";
import { BarChart } from "../../../../components/charts/BarChart";
import { ChevronDownIcon } from "../../../../components/icons/NavigationIcons";

export const PageBodySubsection = (): JSX.Element => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All Categories']);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showInstalled, setShowInstalled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Checkbox functionality for alerts breakdown
  const [selectedAlerts, setSelectedAlerts] = useState<number[]>([0, 1, 2]); // Initially select first 3
  const totalAlerts = 10;

  // Accordion state for manage sections
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'alerts-breakdown', 
    'alerts-stats', 
    'bar-stats'
  ]);

  // Integration categories with counts - Extended list with 40+ categories
  const allCategories = [
    { name: "All Categories", count: 1250, selected: true },
    { name: "AWS", count: 85, selected: false },
    { name: "Azure", count: 42, selected: false },
    { name: "Cloud", count: 67, selected: false },
    { name: "Communications", count: 156, selected: false },
    { name: "Config Management", count: 89, selected: false },
    { name: "Containers", count: 73, selected: false },
    { name: "CRM", count: 124, selected: false },
    { name: "Database", count: 198, selected: false },
    { name: "Elastic Stack", count: 145, selected: false },
    { name: "Enterprise Search", count: 78, selected: false },
    { name: "File Storage", count: 92, selected: false },
    { name: "Geo", count: 34, selected: false },
    { name: "Google Cloud", count: 56, selected: false },
    { name: "Infrastructure", count: 167, selected: false },
    { name: "Kubernetes", count: 89, selected: false },
    { name: "Language Client", count: 45, selected: false },
    { name: "Message Broker", count: 67, selected: false },
    { name: "Microsoft 365", count: 134, selected: false },
    { name: "Monitoring", count: 203, selected: false },
    { name: "Operating Systems", count: 112, selected: false },
    { name: "Threat Intelligence", count: 87, selected: false },
    { name: "Upload a File", count: 23, selected: false },
    { name: "Web Server", count: 156, selected: false },
    { name: "Analytics", count: 178, selected: false },
    { name: "API Management", count: 94, selected: false },
    { name: "Application Performance", count: 67, selected: false },
    { name: "Backup & Recovery", count: 45, selected: false },
    { name: "Business Intelligence", count: 89, selected: false },
    { name: "CI/CD", count: 123, selected: false },
    { name: "Content Management", count: 56, selected: false },
    { name: "Data Integration", count: 134, selected: false },
    { name: "DevOps", count: 167, selected: false },
    { name: "E-commerce", count: 78, selected: false },
    { name: "Email Services", count: 92, selected: false },
    { name: "Finance", count: 67, selected: false },
    { name: "Healthcare", count: 45, selected: false },
    { name: "Identity Management", count: 89, selected: false },
    { name: "IoT", count: 56, selected: false },
    { name: "Load Balancing", count: 34, selected: false },
    { name: "Machine Learning", count: 123, selected: false },
    { name: "Network Security", count: 156, selected: false },
    { name: "Notification Services", count: 78, selected: false },
    { name: "Project Management", count: 92, selected: false },
    { name: "Quality Assurance", count: 45, selected: false },
    { name: "Real-time Analytics", count: 67, selected: false },
    { name: "Social Media", count: 89, selected: false },
    { name: "Storage Solutions", count: 134, selected: false },
    { name: "Testing Tools", count: 56, selected: false },
    { name: "Version Control", count: 78, selected: false },
    { name: "Workflow Automation", count: 123, selected: false }
  ];

  // Filter categories based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return allCategories;
    }
    return allCategories.filter(category =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Featured integrations at the top - exactly as shown in design
  const featuredIntegrations = [
    {
      id: 1,
      name: "Web Crawler",
      description: "Add search to your website with the Enterprise Search Web Crawler",
      icon: "🌐",
      iconSvg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.75 0C30.685 0 38.816 7.7275 39.459 17.5H39.5V20H39.459C38.816 29.7725 30.685 37.5 20.75 37.5C10.815 37.5 2.684 29.7725 2.041 20H2V17.5H2.041C2.684 7.7275 10.815 0 20.75 0ZM16.404 30C17.615 33.0992 19.234 35 20.75 35C22.266 35 23.885 33.0992 25.096 30H16.404ZM9.024 30C10.878 31.9313 13.204 33.4057 15.816 34.2373C15.024 33.0759 14.325 31.6426 13.749 30H9.024ZM27.751 30C27.175 31.6426 26.476 33.0759 25.684 34.2373C28.296 33.4057 30.622 31.9313 32.476 30H27.751ZM4.547 20C4.756 22.7475 5.649 25.304 7.055 27.5H13.009C12.45 25.2351 12.102 22.6953 12.02 20H4.547ZM14.521 20C14.613 22.7669 15.007 25.3171 15.592 27.5H25.908C26.493 25.3171 26.887 22.7669 26.979 20H14.521ZM29.48 20C29.398 22.6953 29.05 25.2351 28.491 27.5H34.445C35.851 25.304 36.744 22.7475 36.953 20H29.48ZM7.055 10C5.649 12.196 4.756 14.7525 4.547 17.5H12.02C12.102 14.8047 12.45 12.2649 13.009 10H7.055ZM15.592 10C15.007 12.1829 14.613 14.7331 14.521 17.5H26.979C26.887 14.7331 26.493 12.1829 25.908 10H15.592ZM28.491 10C29.05 12.2649 29.398 14.8047 29.48 17.5H36.953C36.744 14.7525 35.851 12.196 34.445 10H28.491ZM15.816 3.2627C13.204 4.0943 10.878 5.5687 9.024 7.5H13.749C14.325 5.8574 15.024 4.4241 15.816 3.2627ZM20.75 2.5C19.234 2.5 17.615 4.4008 16.404 7.5H25.096C23.885 4.4008 22.266 2.5 20.75 2.5ZM25.684 3.2627C26.476 4.4241 27.175 5.8574 27.751 7.5H32.476C30.622 5.5687 28.296 4.0943 25.684 3.2627Z" fill="#006AA2"/>
        </svg>
      ),
      category: "Enterprise Search",
      featured: true,
    },
    {
      id: 2,
      name: "Elysium APM",
      description: "Monitor detect and diagnose complex application performance issues",
      icon: "📊",
      iconSvg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.75 2.5C36.44 2.5 37 3.0596 37 3.75V37.5H30.75C31.44 37.5 32 38.0596 32 38.75C32 39.4404 31.44 40 30.75 40H35.75C35.06 40 34.5 39.4404 34.5 38.75V3.75C34.5 3.0596 35.06 2.5 35.75 2.5ZM16.217 18.7715C16.844 19.3178 17.609 19.7098 18.452 19.8896L13.118 30.5586C12.809 31.1759 12.059 31.4266 11.441 31.1182C10.824 30.8095 10.573 30.0588 10.882 29.4414L16.217 18.7715ZM29.5 25C30.881 25 32 26.1193 32 27.5C32 28.8807 30.881 30 29.5 30C28.119 30 27 28.8807 27 27.5C27 26.1193 28.119 25 29.5 25ZM27.365 22.9775C26.597 23.341 25.935 23.8942 25.442 24.5771L21.512 19.5791C22.291 19.2364 22.965 18.7002 23.476 18.0322L27.365 22.9775ZM36.136 8.6982C36.754 9.261 37.514 9.671 38.355 9.8682L32.599 23.5762C31.948 23.0616 31.166 22.7049 30.312 22.5654L36.136 8.6982ZM19.5 12.5C20.881 12.5 22 13.6193 22 15C22 16.3807 20.881 17.5 19.5 17.5C18.119 17.5 17 16.3807 17 15C17 13.6193 18.119 12.5 19.5 12.5ZM39.5 2.5C40.881 2.5 42 3.6193 42 5C42 6.3807 40.881 7.5 39.5 7.5C38.119 7.5 37 6.3807 37 5C37 3.6193 38.119 2.5 39.5 2.5Z" fill="#006AA2"/>
        </svg>
      ),
      category: "Monitoring",
      featured: true,
    },
    {
      id: 3,
      name: "Endpoint and Cloud Security",
      description: "Protect your hosts and cloud workloads with threat prevention, detection and deep security data visibility",
      icon: "🛡️",
      iconSvg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0C22.6522 0 25.1957 1.05357 27.0711 2.92893C28.9464 4.8043 30 7.34784 30 10C30 12.6522 28.9464 15.1957 27.0711 17.0711C25.1957 18.9464 22.6522 20 20 20C17.3478 19.9999 14.8043 18.9464 12.9289 17.0711C11.0536 15.1957 10 12.6522 10 10C10 7.34784 11.0536 4.8043 12.9289 2.92893C14.8043 1.05357 17.3478 0 20 0ZM5.67188 -16.9561C8.41406 -17.6549 11.2812 -17.6805 14.0234 -17.0313C16.7656 -16.382 19.3203 -15.077 21.4609 -13.2275L22.3828 -14.1426C22.4922 -14.262 22.6328 -14.3573 22.7891 -14.4229C22.9453 -14.4883 23.1133 -14.523 23.2812 -14.5244C23.4492 -14.5258 23.6172 -14.4935 23.7734 -14.4307C23.9297 -14.3678 24.0703 -14.2754 24.1875 -14.1582C24.3047 -14.0408 24.3984 -13.9007 24.4609 -13.7471C24.5234 -13.5937 24.5547 -13.4294 24.5547 -13.2637C24.5547 -13.0977 24.5234 -12.9328 24.4531 -12.7803C24.3828 -12.6279 24.2812 -12.4902 24.1562 -12.375L23.2344 -11.46C26.0859 -8.17749 27.5 -4.08987 27.5 0C26.7109 -0.592407 25.8516 -1.09717 24.9375 -1.49219C24.6328 -4.51257 23.4219 -7.37048 21.4531 -9.68457L15.3047 -3.53516L12.4219 -0.647461C12.5625 -0.115967 12.5234 0.447693 12.3125 0.956055C12.1016 1.46442 11.7344 1.88977 11.2578 2.16504C10.7812 2.4403 10.2266 2.55029 9.67969 2.47852C9.13281 2.40674 8.62109 2.15674 8.23438 1.76758C7.84766 1.37842 7.59375 0.871643 7.51562 0.326172C7.4375 -0.219299 7.55078 -0.773438 7.83203 -1.25C8.11328 -1.72656 8.53516 -2.09912 9.04688 -2.30957C9.55859 -2.52002 10.1172 -2.55737 10.6484 -2.41504L12.5391 -4.30762C11.4922 -4.92542 10.2539 -5.14014 9.05859 -4.91113C7.86328 -4.68213 6.78516 -4.02429 6.05078 -3.0625C5.31641 -2.10071 4.92578 -0.899414 5.00781 0.315429C5.08984 1.53027 5.61328 2.67468 6.46875 3.53516C6.58203 3.65131 6.67578 3.78979 6.74219 3.94141C6.80859 4.09302 6.84766 4.25586 6.84766 4.41992C6.84766 4.58398 6.80859 4.74683 6.74219 4.89844C6.67578 5.05005 6.58203 5.18774 6.46484 5.30371C6.34766 5.41968 6.20703 5.51147 6.05469 5.57422C5.90234 5.63696 5.74219 5.66992 5.58203 5.66992C5.42188 5.66992 5.26172 5.63696 5.10938 5.57422C4.95703 5.51147 4.81641 5.41895 4.69922 5.30273C3.35938 3.97363 2.57812 2.19128 2.5 0.310547C2.42188 -1.57019 3.04688 -3.41187 4.25781 -4.84961C5.46875 -6.28735 7.1875 -7.21582 9.05859 -7.45019C10.9297 -7.68457 12.8125 -7.20813 14.3516 -6.11523L16.1328 -7.90039C14.3828 -9.26514 12.2266 -10.0041 10 -10C7.57031 -9.99158 5.23047 -9.09949 3.41016 -7.49023C1.58984 -5.88074 0.414062 -3.66345 0.105469 -1.25293C-0.203125 1.15759 0.390625 3.59668 1.75 5.60938C3.10938 7.62207 5.14844 9.07031 7.5 9.68457C7.48438 10.5577 7.55469 11.4312 7.70703 12.29C5.83594 11.9404 4.07031 11.1674 2.53906 10.0303C1.00781 8.89294 -0.226562 7.42089 -1.10547 5.72754C-1.98438 4.03418 -2.45312 2.16406 -2.49219 0.259766C-2.53125 -1.64453 -2.14062 -3.53394 -1.32812 -5.26172C-0.515625 -6.98926 0.664062 -8.51074 2.14062 -9.70996C3.61719 -10.9091 5.35156 -11.7543 7.20703 -12.1807C9.0625 -12.607 10.9922 -12.6033 12.8477 -12.1699C14.7031 -11.7365 16.4297 -10.8845 17.9062 -9.67969L19.6875 -11.4551C17.8906 -12.9727 15.7578 -14.047 13.4766 -14.5918C11.1953 -15.1366 8.8125 -15.137 6.53125 -14.5918C4.25 -14.0466 2.11719 -12.9711 0.3125 -11.4531C-1.49219 -9.93518 -2.89062 -8.01672 -3.80859 -5.85254C-4.72656 -3.68823 -5.11719 -1.33838 -4.96875 1.00684C-4.82031 3.35205 -4.10156 5.62744 -2.89844 7.64941C-1.69531 9.67114 -0.0507812 11.3827 1.9375 12.6465C3.92578 13.9103 6.17188 14.6909 8.51562 14.9248C8.90625 15.8395 9.39844 16.7043 10 17.5C7.17969 17.4996 4.39062 16.8154 1.89062 15.5059C-0.609375 14.1963 -2.76562 12.2999 -4.36719 9.97949C-5.96875 7.65912 -7 4.98334 -7.35938 2.18066C-7.71875 -0.622071 -7.38281 -3.46851 -6.39062 -6.11523C-5.39844 -8.76196 -3.78906 -11.1307 -1.6875 -13.0186C0.414062 -14.9062 2.9375 -16.2572 5.67188 -16.9561ZM25 26.248C24.8359 26.2481 24.6719 26.2799 24.5156 26.3428C24.3594 26.4058 24.2188 26.4988 24.1172 26.6152L18.75 31.9824L17.1406 30.3652C16.9062 30.1305 16.5859 29.9983 16.25 29.998C15.9141 29.9979 15.5938 30.129 15.3672 30.3633C15.1328 30.5977 15 30.9163 15 31.248C15 31.5797 15.1328 31.8981 15.3672 32.1328L17.8672 34.6328C17.9766 34.7492 18.1172 34.8413 18.2734 34.9043C18.4297 34.9672 18.5938 35 18.75 35C18.9062 35 19.0703 34.9673 19.2266 34.9043C19.3828 34.8413 19.5234 34.7492 19.6328 34.6328L25.8828 28.3828C26.1172 28.1485 26.25 27.8304 26.25 27.499C26.25 27.1677 26.1172 26.8496 25.8828 26.6152C25.7734 26.4988 25.6328 26.4058 25.4766 26.3428C25.3203 26.2798 25.1562 26.248 25 26.248Z" fill="#006AA2"/>
        </svg>
      ),
      category: "Security",
      featured: true,
    },
  ];

  // Regular integration cards - matching the exact pattern from design
  const integrations = [
    // Row 1
    { id: 4, name: "AWS EC2", icon: "🔶", category: "AWS", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    { id: 5, name: "Amazon Cloud", icon: "☁️", category: "Cloud", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    { id: 6, name: "Microsoft", icon: "🪟", category: "Microsoft 365", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    // Row 2
    { id: 7, name: "AWS EC2", icon: "🔶", category: "AWS", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    { id: 8, name: "Amazon Cloud", icon: "☁️", category: "Cloud", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    { id: 9, name: "Microsoft", icon: "🪟", category: "Microsoft 365", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    // Row 3
    { id: 10, name: "AWS EC2", icon: "🔶", category: "AWS", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    { id: 11, name: "Amazon Cloud", icon: "☁️", category: "Cloud", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    { id: 12, name: "Microsoft", icon: "🪟", category: "Microsoft 365", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    // Row 4
    { id: 13, name: "AWS EC2", icon: "🔶", category: "AWS", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    { id: 14, name: "Amazon Cloud", icon: "☁️", category: "Cloud", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    { id: 15, name: "Microsoft", icon: "🪟", category: "Microsoft 365", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    // Row 5
    { id: 16, name: "AWS EC2", icon: "🔶", category: "AWS", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    { id: 17, name: "Amazon Cloud", icon: "☁️", category: "Cloud", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    { id: 18, name: "Microsoft", icon: "🪟", category: "Microsoft 365", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    // Row 6
    { id: 19, name: "AWS EC2", icon: "🔶", category: "AWS", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    { id: 20, name: "Amazon Cloud", icon: "☁️", category: "Cloud", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    { id: 21, name: "Microsoft", icon: "🪟", category: "Microsoft 365", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    // Row 7
    { id: 22, name: "AWS EC2", icon: "🔶", category: "AWS", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    { id: 23, name: "Amazon Cloud", icon: "☁️", category: "Cloud", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
    { id: 24, name: "Microsoft", icon: "🪟", category: "Microsoft 365", description: "Collect logs from 1Password with Elastic Agent.", installCount: 5, installed: true },
  ];

  // Mock alert data
  const alertsData = Array.from({ length: totalAlerts }, (_, index) => ({
    id: index,
    description: "Analyze mock web traffic log data for Elastic's website",
    status: "Installed",
    category: index < 3 ? 'Security Data Analytics' : index === 3 ? 'Metrics' : index === 4 ? 'Analytics' : 'Security Data Analytics',
    lastUpdated: "Dec 17, 2020"
  }));

  // Checkbox handlers - Fixed functionality
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

  // Accordion toggle handler
  const toggleAccordionSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
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
              <div className="flex gap-6 h-full">
                {/* Left Sidebar - Categories - Extended to full height */}
                <div className="w-80 flex-shrink-0 h-full">
                  <div className="space-y-4 h-full flex flex-col">
                    {/* Search */}
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-subdued-euitextsubduedcolor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Search Categories"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-[#2a2d35] border border-[#404040] rounded-md text-coreempty-euicoloremptyshade placeholder-text-subdued-euitextsubduedcolor focus:outline-none focus:ring-2 focus:ring-textprimary-euicolorprimarytext focus:border-transparent"
                      />
                    </div>

                    {/* Categories List - Extended to full height */}
                    <div className="bg-[#1d1e24] border border-[#2a2d35] rounded-lg overflow-hidden flex-1">
                      <ScrollArea className="h-full">
                        <div className="p-0">
                          {filteredCategories.length > 0 ? (
                            filteredCategories.map((category, index) => (
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
                            ))
                          ) : (
                            <div className="py-8 px-4 text-center">
                              <p className="text-text-subdued-euitextsubduedcolor text-sm">
                                No categories found matching "{searchQuery}"
                              </p>
                            </div>
                          )}
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

                  {/* Featured Integration Cards - Top 3 Large Cards */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {featuredIntegrations.map((integration) => (
                      <div
                        key={integration.id}
                        className="bg-[#1d1e24] border border-[#2a2d35] rounded-lg p-6 hover:border-[#404040] transition-colors duration-200 cursor-pointer"
                      >
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-16 h-16 bg-[#2a2d35] rounded-lg flex items-center justify-center text-2xl">
                            {integration.iconSvg}
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

                  {/* Regular Integration Cards Grid - 3 columns, 7 rows */}
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
              <div className="border border-[#2a2d35] rounded-lg bg-[#1d1e24]">
                <div 
                  className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-[#2a2d35] transition-colors duration-200"
                  onClick={() => toggleAccordionSection('alerts-breakdown')}
                >
                  <div className="flex items-center gap-3">
                    <ChevronDownIcon 
                      className="w-4 h-4 text-coreempty-euicoloremptyshade transition-transform duration-200" 
                      isExpanded={expandedSections.includes('alerts-breakdown')}
                    />
                    <span className="text-coreempty-euicoloremptyshade font-s-paragraph-bold">Alerts Breakdown</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-textprimary-euicolorprimarytext hover:text-blue-400 hover:bg-transparent p-0 h-auto font-normal"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Show alerts
                  </Button>
                </div>
                
                {expandedSections.includes('alerts-breakdown') && (
                  <div className="p-4 border-t border-[#2a2d35]">
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
                              {...(isIndeterminate && { 'data-indeterminate': true })}
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
                              className={`px-4 py-3 grid grid-cols-12 gap-4 items-center text-sm hover:bg-[#2a2d35] transition-colors duration-200 cursor-pointer ${
                                selectedAlerts.includes(alert.id) ? 'bg-[#2a2d35] border-l-2 border-l-textprimary-euicolorprimarytext' : 'bg-[#1d1e24]'
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
                  </div>
                )}
              </div>

              {/* Alerts Statistics Section - Collapsible */}
              <div className="border border-[#2a2d35] rounded-lg bg-[#1d1e24]">
                <div 
                  className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-[#2a2d35] transition-colors duration-200"
                  onClick={() => toggleAccordionSection('alerts-stats')}
                >
                  <div className="flex items-center gap-3">
                    <ChevronDownIcon 
                      className="w-4 h-4 text-coreempty-euicoloremptyshade transition-transform duration-200" 
                      isExpanded={expandedSections.includes('alerts-stats')}
                    />
                    <span className="text-coreempty-euicoloremptyshade font-s-paragraph-bold">Alerts</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-textprimary-euicolorprimarytext hover:text-blue-400 hover:bg-transparent p-0 h-auto font-normal"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Show alerts
                  </Button>
                </div>
                
                {expandedSections.includes('alerts-stats') && (
                  <div className="p-4 border-t border-[#2a2d35]">
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
                  </div>
                )}
              </div>

              {/* Bar Chart Section - Collapsible */}
              <div className="border border-[#2a2d35] rounded-lg bg-[#1d1e24]">
                <div 
                  className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-[#2a2d35] transition-colors duration-200"
                  onClick={() => toggleAccordionSection('bar-stats')}
                >
                  <div className="flex items-center gap-3">
                    <ChevronDownIcon 
                      className="w-4 h-4 text-coreempty-euicoloremptyshade transition-transform duration-200" 
                      isExpanded={expandedSections.includes('bar-stats')}
                    />
                    <span className="text-coreempty-euicoloremptyshade font-s-paragraph-bold">Alerts</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-textprimary-euicolorprimarytext hover:text-blue-400 hover:bg-transparent p-0 h-auto font-normal"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Show alerts
                  </Button>
                </div>
                
                {expandedSections.includes('bar-stats') && (
                  <div className="p-4 border-t border-[#2a2d35]">
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
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
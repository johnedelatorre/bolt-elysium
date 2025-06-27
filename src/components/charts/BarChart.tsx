import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor?: string;
      borderWidth?: number;
    }[];
  };
  height?: number;
}

export const BarChart: React.FC<BarChartProps> = ({ data, height = 320 }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // We'll handle legend externally
      },
      tooltip: {
        backgroundColor: '#2a2d35',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#404040',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          title: function(context: TooltipItem<'bar'>[]) {
            const dataIndex = context[0].dataIndex;
            return `23 August, 2021`; // Static date for demo
          },
          label: function(context: TooltipItem<'bar'>) {
            const value = context.parsed.y;
            const label = context.dataset.label;
            return `${label}: ${value.toLocaleString()}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#666666',
          font: {
            size: 12,
          }
        },
        border: {
          display: false,
        }
      },
      y: {
        grid: {
          color: '#404040',
          lineWidth: 1,
        },
        ticks: {
          color: '#666666',
          font: {
            size: 12,
          },
          callback: function(value: any) {
            return value;
          }
        },
        border: {
          display: false,
        }
      }
    },
    elements: {
      bar: {
        borderRadius: 2,
        borderSkipped: false,
      }
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    }
  };

  return (
    <div style={{ height: `${height}px` }} className="relative">
      <Bar data={data} options={options} />
    </div>
  );
};
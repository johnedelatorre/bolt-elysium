import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
  height?: number;
}

export const LineChart: React.FC<LineChartProps> = ({ data, height = 320 }) => {
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
          title: function(context: TooltipItem<'line'>[]) {
            const dataIndex = context[0].dataIndex;
            return `23 August, 2021`; // Static date for demo
          },
          label: function(context: TooltipItem<'line'>) {
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
          color: '#404040',
          lineWidth: 1,
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
            if (value >= 1000) {
              return (value / 1000) + 'K';
            }
            return value;
          }
        },
        border: {
          display: false,
        }
      }
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6,
        borderWidth: 2,
        backgroundColor: '#1a1d23',
      },
      line: {
        tension: 0.4, // Smooth curves
        borderWidth: 3,
      }
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    }
  };

  return (
    <div style={{ height: `${height}px` }} className="relative">
      <Line data={data} options={options} />
    </div>
  );
};
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registre os componentes do Chart.js que você vai usar
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart: React.FC = () => {
  // Dados do gráfico
  const data = {
    labels: ['Outubro', 'Novembro', 'Dezembro'], // Meses ou outros rótulos do eixo X
    datasets: [
      {
        label: 'Grass',
        data: [3, 13, 25], // Dados para o gráfico
        borderColor: '#000000', // Cor da linha
        backgroundColor: 'rgb(0, 255, 8)', // Cor de fundo (se houver)
        fill: true, // Se o gráfico será preenchido com a cor de fundo
      },
    ],
  };

  // Opções do gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Isso assegura que o gráfico se ajustará proporcionalmente
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem: any) {
            const value = tooltipItem.raw;
            return 'Grass R$' + value.toLocaleString();
          }
        }
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: '(2024)', // Título do eixo X
        },
      },
      y: {
        title: {
          display: true,
          text: 'Valor por moeda', // Título do eixo Y
        },
        min: 0, // Valor mínimo do eixo Y
        ticks: {
          callback: function(value: number) {
            return 'R$' + value.toLocaleString();
          }
        }
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;

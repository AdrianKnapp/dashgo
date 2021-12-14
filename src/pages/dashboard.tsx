import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import dynamic from 'next/dynamic';
import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';

const Charts = dynamic(() => import('react-apexcharts'), { ssr: false });

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '01/01/2020', 
      '01/02/2020', 
      '01/03/2020', 
      '01/04/2020', 
      '01/05/2020', 
      '01/06/2020', 
      '01/07/2020'
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.2,
    }
  }
};

const series = [
  {
    name: 'series-1',
    data: [31, 40, 28, 51, 42, 109, 100],
  },
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Charts
              options={options}
              series={series}
              type="area"
              height={160} 
            />
          </Box>
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Charts
              options={options}
              series={series}
              type="area"
              height={160} 
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
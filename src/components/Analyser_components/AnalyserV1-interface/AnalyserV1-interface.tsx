import * as React from 'react';
import { extendTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import ReadmeContent from './ReadMe';
import InputContent from './InputsContent';
import { AnalyserV1Styles } from "../../../styles/AnalyserV1-Styles/styled";
import { Results } from './AnalyserV1-results/Results';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Itens',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'API',
  },
  {
    segment: 'integrations',
    title: 'ReadMe',
    icon: <LayersIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { 
    light: true,
  },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}


export default function AnalyserGrid() {

  const router = useDemoRouter('/dashboard');

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      branding={{
        title: 'Analyser',
        logo: '',
      }}
      
      >
      <AnalyserV1Styles>
        <DashboardLayout>
          <PageContainer >
            {router.pathname === '/integrations' ? (
              <ReadmeContent /> ) : (
            <Grid container spacing={3}>
              <Grid size={0} />
              <InputContent />
              <Results />
            </Grid>
              )}
          </PageContainer>
        </DashboardLayout>
      </AnalyserV1Styles>
    </AppProvider>
  );
}

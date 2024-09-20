'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

import { DashboardContent } from 'src/layouts/dashboard';
import { SeoIllustration } from 'src/assets/illustrations';
import { _appAuthors, _appRelated, _appFeatured, _appInvoices, _appInstalled } from 'src/_mock';

import { svgColorClasses } from 'src/components/svg-color';

import { useMockedUser } from 'src/auth/hooks';

import { AppWidget } from '../app-widget';
import { AppWelcome } from '../app-welcome';
import { AppNewInvoice } from '../app-new-invoice';
import { AppTopAuthors } from '../app-top-authors';
import { AppTopRelated } from '../app-top-related';
import { AppAreaInstalled } from '../app-area-installed';
import { AppWidgetSummary } from '../app-widget-summary';
import { AppCurrentDownload } from '../app-current-download';
import { AppTopInstalledCountries } from '../app-top-installed-countries';

// ----------------------------------------------------------------------

export function OverviewAppView() {
  const { user } = useMockedUser();

  const theme = useTheme();

  return (
    <DashboardContent maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <AppWelcome
            title={`Welcome back to Palato Venue Dashboard 👋 \n ${user?.displayName}`}
            description="Manage your restaurant's bookings, offers, and customer interactions from your venue dashboard. Keep track of the latest updates or create new offers for your customers."
            img={<SeoIllustration hideBackground />}
            action={
              <Button variant="contained" color="primary">
                Go to Dashboard
              </Button>
            }
          />
        </Grid>

        {/* Commented out AppFeatured but keeping layout intact */}
        <Grid xs={12} md={4}>
          {/* <AppFeatured list={_appFeatured} /> */}
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'white',
            }}
          >
            {/* <p>Featured content placeholder</p> */}
          </Box>
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Total active bookings"
            percent={2.6}
            total={18765}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [15, 18, 12, 51, 68, 11, 39, 37],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Total offers created"
            percent={0.2}
            total={4876}
            chart={{
              colors: [theme.vars.palette.info.main],
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [20, 41, 63, 33, 28, 35, 50, 46],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Total reservations"
            percent={-0.1}
            total={678}
            chart={{
              colors: [theme.vars.palette.error.main],
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [18, 19, 31, 8, 16, 37, 12, 33],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentDownload
            title="Reservations by device"
            subheader="Booked via various devices"
            chart={{
              series: [
                { label: 'Mac', value: 12244 },
                { label: 'Windows', value: 53345 },
                { label: 'iOS', value: 44313 },
                { label: 'Android', value: 78343 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppAreaInstalled
            title="Most Orders by UAE Area"
            subheader="(+43%) increase in orders compared to last year"
            chart={{
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              series: [
                {
                  name: '2022',
                  data: [
                    { name: 'Dubai', data: [35, 40, 38, 45, 50, 55, 60, 62, 58, 55, 65, 70] },
                    { name: 'Abu Dhabi', data: [28, 30, 32, 35, 38, 40, 42, 45, 48, 50, 53, 55] },
                    { name: 'Sharjah', data: [15, 18, 20, 22, 25, 28, 30, 32, 35, 38, 40, 42] },
                    { name: 'Al Ain', data: [10, 12, 15, 18, 20, 22, 25, 28, 30, 32, 35, 38] },
                    { name: 'Ajman', data: [5, 8, 10, 12, 15, 18, 20, 22, 25, 28, 30, 32] },
                  ],
                },
                {
                  name: '2023',
                  data: [
                    { name: 'Dubai', data: [40, 42, 45, 50, 55, 60, 65, 68, 70, 75, 78, 80] },
                    { name: 'Abu Dhabi', data: [35, 38, 40, 42, 45, 50, 53, 55, 58, 60, 65, 68] },
                    { name: 'Sharjah', data: [18, 20, 22, 25, 28, 30, 35, 38, 40, 42, 45, 48] },
                    { name: 'Al Ain', data: [12, 15, 18, 20, 22, 25, 28, 30, 32, 35, 38, 40] },
                    { name: 'Ajman', data: [8, 10, 12, 15, 18, 20, 22, 25, 28, 30, 32, 35] },
                  ],
                },
                {
                  name: '2024',
                  data: [
                    { name: 'Dubai', data: [50, 55, 60, 65, 68, 70, 72, 75, 78, 80, 85, 90] },
                    { name: 'Abu Dhabi', data: [45, 48, 50, 53, 55, 58, 60, 62, 65, 68, 70, 75] },
                    { name: 'Sharjah', data: [20, 22, 25, 28, 30, 35, 38, 40, 42, 45, 48, 50] },
                    { name: 'Al Ain', data: [15, 18, 20, 22, 25, 28, 30, 32, 35, 38, 40, 45] },
                    { name: 'Ajman', data: [10, 12, 15, 18, 20, 22, 25, 28, 30, 32, 35, 38] },
                  ],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} lg={8}>
          <AppNewInvoice
            title="New payments and invoices"
            tableData={_appInvoices}
            headLabel={[
              { id: 'id', label: 'Invoice ID' },
              { id: 'category', label: 'Category' },
              { id: 'price', label: 'Price' },
              { id: 'status', label: 'Status' },
              { id: '' },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
            <AppWidget
              title="Customer conversions"
              total={38566}
              icon="solar:user-rounded-bold"
              chart={{ series: 48 }}
            />

            <AppWidget
              title="Active offers"
              total={55566}
              icon="fluent:mail-24-filled"
              chart={{
                series: 75,
                colors: [theme.vars.palette.info.light, theme.vars.palette.info.main],
              }}
              sx={{ bgcolor: 'info.dark', [`& .${svgColorClasses.root}`]: { color: 'info.light' } }}
            />
          </Box>
        </Grid>
      </Grid>
    </DashboardContent>
  );
}

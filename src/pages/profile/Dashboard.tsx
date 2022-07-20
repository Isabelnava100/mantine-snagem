import React from 'react';
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';
import { FeaturesImages } from './components/WelcomeBanner';
import { NavbarSimpleColored } from './components/Navbar';

const PRIMARY_COL_HEIGHT = 300;

export function DashboardProfileGrid() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <NavbarSimpleColored/>
    // <Container my="md">
    //   <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
    //     <FeaturesImages supTitle={'Edit Profile'} description={'Welcome back!'} data={[]}/>
    //     {/* <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} /> */}
    //     <Grid gutter="md">
    //       <Grid.Col>
    //         <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
    //       </Grid.Col>
    //       <Grid.Col span={6}>
    //         <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
    //       </Grid.Col>
    //       <Grid.Col span={6}>
    //         <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
    //       </Grid.Col>
    //     </Grid>
    //   </SimpleGrid>
    // </Container>
  );
}
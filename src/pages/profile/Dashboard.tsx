import React from 'react';
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';
import { FeaturesImages } from './components/WelcomeBanner';
import { NavbarSimpleColored } from './components/Navbar';
import { CharactersPreview } from './components/CharactersPreview';

const PRIMARY_COL_HEIGHT = 300;

export function DashboardProfileGrid() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <div className='profileDashboard'>
    <NavbarSimpleColored/>
    <Container my="md">
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <FeaturesImages supTitle={'This is your snag 2.2'} description={'Ready to roll?'} data={[]}/>
        {/* <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} /> */}
        <Grid gutter="md">
          <Grid.Col>
            <CharactersPreview data={[]}/>
            {/* <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} /> */}
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
    </div>
  );
}
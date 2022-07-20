import React from 'react';
import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col } from '@mantine/core';
import { Link, useParams } from 'react-router-dom';


const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.sm * 2}px ${theme.spacing.sm}px`,
    
    [theme.fn.smallerThan('sm')]: {
        textAlign:'center',
      },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

export function FeaturesTitle() {
  const { classes } = useStyles();
  const { id } = useParams();

  return (
    <div className={classes.wrapper}>
      <Grid gutter={20} >
        <Col span={12} sm={9}>
          <Title className={classes.title} order={2}>
          TM - A Mauv-olent Presence in the Bright City
          </Title>
          <Text color="dimmed">
          Representatives from the Hoenn government have requested Team Snagem's assistance in investigating and dismantling an underground gang they believe to be trading in Shadow Pokemon.
          </Text>

        </Col>
        <Col span={12} sm={2}>
       
        <Button
            variant="gradient"
            gradient={{ deg: 133, from: 'grape', to: 'violet' }}
            size="lg"
            radius="md"
            mt="xl"
            component={Link} to={`/forum/thread/${id}/post`}
          >
            Make a New Post
          </Button>
        </Col>
      </Grid>
    </div>
  );
}
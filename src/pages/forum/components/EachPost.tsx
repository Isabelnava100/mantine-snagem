import React from 'react';
import { createStyles, Card, Image, Avatar, Text, Group, Badge } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    margin:'20 0',
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));

interface ArticleCardVerticalProps {
  image: string;
  category: string;
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}

export function ArticleCardVertical({
  image,
  category,
  title,
  date,
  author,
}: ArticleCardVerticalProps) {
  const { classes } = useStyles();
  return (
    <Card withBorder radius="md" p={0} className={classes.card} mt={12} mb={12}>
      <Group noWrap spacing={0}>
        <Image src={image} height={140} width={140} />
        <div className={classes.body}>
            <Text color="dimmed" weight={700} size="xs"
            dangerouslySetInnerHTML={{ __html: category }}>
         </Text>
          <Text className={classes.title} mt="xs" mb="md">
            {title}
          </Text>
          <Group noWrap spacing="xs">
            <Group spacing="xs" noWrap>
              <Avatar size={20} src={author.avatar} />
              <Text size="xs">{author.name}</Text>
            </Group>
            <Text size="xs" color="dimmed">
              •
            </Text>
            <Text size="xs" color="dimmed">
              {date}
            </Text>
            
      <Badge  variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
      Test  </Badge>
          </Group>
        </div>
      </Group>
    </Card>
  );
}
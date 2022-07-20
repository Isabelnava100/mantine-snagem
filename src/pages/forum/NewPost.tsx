
import { RichTextEditor } from '@mantine/rte';
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Group,
  Container,
  createStyles,
  Anchor,
} from '@mantine/core';
import { useState } from 'react';
import { ButtonProgress } from './components/LoadingButton';
import { useParams } from 'react-router-dom';
import { Select,SimpleGrid } from '@mantine/core';

const data = [
  { value: '1', label: 'Main Forums testing, something super long like a team names of many pokes' },
  { value: '2', label: 'Side Roleplay' },
  { value: '3', label: 'Master Mission' },
  { value: '4', label: 'Quests' },
  { value: '7', label: 'Events' },
  { value: '8', label: 'Private' },
  { value: '9', label: 'Archived' },
];

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  return {
    wrapper: {
      display: 'flex',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: 4,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    form: {
      boxSizing: 'border-box',
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.sm * 2,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.sm,
        paddingLeft: theme.spacing.sm,
      },
    },

    fields: {
      marginTop: -12,
    },

    fieldInput: {
      flex: 1,

      '& + &': {
        marginLeft: theme.spacing.sm,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: 'flex',

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    contacts: {
      boxSizing: 'border-box',
      position: 'relative',
      borderRadius: theme.radius.lg - 2,
      background: theme.fn.linearGradient(45, '#4338ca','#6b21a8',),
      padding: theme.spacing.xl,
      flex: '0 0 280px',
      marginBottom:'20px',
      marginTop:'20px',

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        marginTop:0,
        paddingLeft: theme.spacing.sm,
      },
    },

    title: {
      marginBottom: theme.spacing.xl,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },
    title2: {
      marginBottom: theme.spacing.sm,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

export function NewPost() {  
  const { id } = useParams();
  const { classes } = useStyles();
  const [valuepost, changePost] = useState('');
  const [valueforum, setValue] = useState<string | null>(id?id:'0');
  return (
    <Container size="lg" style={{marginTop:20,paddingBottom:100}}>
       <form onSubmit={(event) => event.preventDefault()}>
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>

       <div className={classes.form} >
          <Text size="lg" weight={700} className={classes.title}>
            Make a Post on Title
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            <Select
            data={data} mb="md"
            label="Post As"
            placeholder="Choose your character "
            required
          />
             <Select
            data={data} mb="md"
            label="With"
            placeholder="Choose your team "
            required
          />
            </SimpleGrid>
          <Text size="sm" style={{ marginTop:10 }}>Your Message 
          <span aria-hidden="true" style={{color:'#ff6b6b'}}> *</span>
          </Text>
            <RichTextEditor value={valuepost} onChange={changePost} style={{ height: 480,marginTop:10 }} sticky={false} />

            <Group position="right" mt="md">
              <ButtonProgress/>
            </Group>
          </div>
          </div>
      </div>
    </Paper>
    </form>
    </Container>
  );
}
import React, { useState } from 'react';
import { createStyles, Navbar, Group, Code } from '@mantine/core';
import {
  Users,
  Paperclip,
  Bookmarks,
  Adjustments,
  History,
  Badge,
  Box,
  Settings,
  Logout,
} from 'tabler-icons-react';


const useStyles = createStyles((theme, _params, getRef) => {
  
const c1=theme.fn.linearGradient(360, '#4338ca','#6b21a8');
const c2=theme.colors[theme.primaryColor][9];
const c3='#1E1E1E';

  return {
    navbar: {
      background: c1,
      width:200,
      height:'calc(100vh - 60px)',
      [theme.fn.smallerThan('sm')]:{
        height:'auto',
      width:80,
      }
    },

    version: {
      backgroundColor:c2,
      color: theme.white,
      fontWeight: 700,
    },

    header: {
      color:c3,
      fontWeight:'bold',
      letterSpacing:1,
      paddingBottom: theme.spacing.sm,
      marginBottom: theme.spacing.sm * 1.5,
      borderBottom: `2px solid ${c3}`,
      [theme.fn.smallerThan('sm')]:{
        flexDirection:'column'
      }
    },

    footer: {
      paddingTop: theme.spacing.sm,
      marginTop: theme.spacing.sm,
      borderTop: `2px solid ${c3}`,
    },

   names:{
      [theme.fn.smallerThan('sm')]:{
       display:'none',
      }
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.white,
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: c2,
      },
    },

    linkIcon: {
      
      color: theme.white,
      opacity: 0.75,
      marginRight: theme.spacing.sm,
      [theme.fn.smallerThan('sm')]:{
        marginRight: 0,
      }
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: c3,
      },
    },
  };
});

const data = [
  { link: '', label: 'Characters', icon: Users },
  { link: '', label: 'Missions', icon: Paperclip },
  { link: '', label: 'Badges', icon: Badge },
  { link: '', label: 'Inventory', icon: Box },
  { link: '', label: 'History', icon: History },
  { link: '', label: 'Bookmarks', icon: Bookmarks },
  { link: '', label: 'Admin', icon: Adjustments },
];

export function NavbarSimpleColored() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} />
      <span className={classes.names}>{item.label}</span>
    </a>
  ));

  return (
    <Navbar height={700} p="md" className={classes.navbar}>
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          SNAG
          <Code className={classes.version}>v2.2</Code>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <Settings className={classes.linkIcon} />
          <span className={classes.names}>Settings</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <Logout className={classes.linkIcon} />
          <span className={classes.names}>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
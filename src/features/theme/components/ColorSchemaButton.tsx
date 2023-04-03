import React from 'react';
import { useState } from 'react';
import { useMantineColorScheme } from '@mantine/core';
import { createStyles } from '@mantine/core';
import { Within } from '@theme-toggles/react';
import '@theme-toggles/react/css/Within.css';

const useStyles = createStyles((theme) => ({
  toggleColorSchemaBtn: {
    display: 'flex',
    fontSize: 36,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.orange[5]
        : theme.colors.indigo[5],
  },
}));

const ColorSchemaButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const [isToggled, setToggle] = useState(!dark);
  const { classes } = useStyles();

  return (
    <Within
      className={classes.toggleColorSchemaBtn}
      toggled={isToggled}
      toggle={setToggle}
      duration={750}
      onToggle={() => toggleColorScheme()}
    />
  );
};

export default ColorSchemaButton;

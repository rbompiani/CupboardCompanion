import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const setPercent = [
  {
    value: 40,
    label: '40%',
  },
  {
    value: 30,
    label: '30%',
  },
  {
    value: 20,
    label: '20%',
  },
  {
    value: 10,
    label: '10%',
  },
];

export default function TextFields() {
  const classes = useStyles();

//   key and values of our state
  const [values, setValues] = React.useState({
    item: '',
    description: '',
    startWeight: null,
    reminder: null,
    email: null
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">

        {/* this is where the item name is input */}
      <TextField
        id="item-name"
        label="Item name"
        className={classes.textField}
        value={values.item}
        onChange={handleChange('name')}
        margin="normal"
      />
      
        {/* this is the decription box */}
      <TextField
        id="description"
        label="Description"
        className={clsx(classes.textField, classes.dense)}
        value={values.description}
        onChange={handleChange('description')}
        margin="dense"
      />

      {/* this is where they will set there starting weight */}
      <TextField
        id="starting-weight"
        label="Starting Weight"
        value={values.startWeight}
        onChange={handleChange('Weight')}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />

      {/* This is the reminder percentage selector */}

      <TextField
        id="reminder-percentage"
        select
        label="Remind me at"
        className={classes.textField}
        value={values.reminder}
        onChange={handleChange('reminder')}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
      >
        {setPercent.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>

      <TextField
        id="email"
        label="Email"
        className={classes.textField}
        value={values.email}
        onChange={handleChange('email')}
        margin="normal"
      />

    </form>
  );
}
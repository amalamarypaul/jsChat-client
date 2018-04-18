import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Header from './Header';

const styles = {
  root: {
     backgroundColor:'#1cd18d',
  },

};
const Main = (props) => {
      const { classes } = props;
      return (
        <div className={classes.root}>
          <Header />
        </div>
      )

}


export default withStyles(styles)(Main);

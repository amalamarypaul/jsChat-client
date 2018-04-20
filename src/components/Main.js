import React from 'react';
import { withStyles } from 'material-ui/styles';
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

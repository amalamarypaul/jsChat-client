import React, {Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import { Link , withRouter } from 'react-router-dom';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Auth from '../Auth';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class Header extends Component{

  handleLogout = () =>{
  Auth.deauthenticateUser();
    this.props.history.push('/');
  }
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>

            <Typography variant="title" color="inherit" className={classes.flex}>
              <Link to='/'>MESSAGE BOARD</Link>
            </Typography>
            {Auth.isUserAuthenticated() ? (
             <div className="top-bar-right">
               <Button color="inherit" onClick={this.handleLogout}>Log out</Button>
             </div>
             ) : (
               <div className="top-bar-right">
                 <Link to='/'><Button color="inherit">Login</Button></Link>
                 <Link to='/Signup'><Button color="inherit">Signup</Button></Link>
               </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Header));

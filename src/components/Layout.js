import React from 'react';
import {Outlet,useNavigate, useLocation} from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PregnantWomanIcon from '@material-ui/icons/PregnantWoman';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import NotesIcon from '@material-ui/icons/Notes';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width:drawerWidth
      },
      drawerPaper:{
        width:drawerWidth
      },
      root:{
        display:'flex'
      },
      icon:{
        color:'#800000'
      },
      active:{
        backgroundColor:'#f4f4f4'
      },
      appbar:{
        width:`calc(100% - 240px)`
      },
      toolbarSpace:theme.mixins.toolbar,
      avatar:{
        MarginLeft:theme.spacing(2)
      },
      right:{
        marginLeft: 'auto',
        marginRight: 0,
        display:'flex'
      }
  }));
const Layout = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div className={classes.root}>
            {/* app bar */}
            <AppBar className={classes.appbar}>
                <Toolbar>

                    <Avatar  src="logo.jpg"/>
                    <Typography variant='h4'>
                        FetaLife
                    </Typography>
                    <div className={classes.right}>
                        <Typography variant='h6'>
                            Majasto's Wife
                        </Typography>
                        <Avatar className={classes.avatar}  src="preglad.png"/>
                    </div>
                </Toolbar>
            </AppBar>
            {/* sidedraw */}
            <Drawer
            className={classes.drawer} 
            variant="permanent"
            anchor='left'
            classes={{paper:classes.drawerPaper}}
            >
                <Typography variant='h5'>
                    Pregnancy Monitor
                </Typography >
                {/* list menu */}
                <List>
                    <ListItem button onClick={()=>{navigate('/monitor')}} className={location.pathname=='/monitor'?classes.active:null}>
                        <ListItemIcon><PregnantWomanIcon fontSize="large" className={classes.icon}/></ListItemIcon>
                        <ListItemText>Monitor</ListItemText>
                    </ListItem>
                    <ListItem button onClick={()=>{navigate('/tips')}} className={location.pathname=='/tips'?classes.active:null}>
                        <ListItemIcon><MenuBookIcon fontSize="large" className={classes.icon}/></ListItemIcon>
                        <ListItemText>Health Tip</ListItemText>
                    </ListItem>
                    <ListItem button onClick={()=>{navigate('/articles')}} className={location.pathname=='/articles'?classes.active:null}>
                        <ListItemIcon><NotesIcon fontSize="large" className={classes.icon}/></ListItemIcon>
                        <ListItemText>Articles on Pregnancy</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <div className={classes.main}>
                <div className={classes.toolbarSpace}>
                </div>
                <Outlet/>
            </div>
         
        </div>
    );
};

export default Layout;
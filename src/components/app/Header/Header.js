import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/CloseRounded';
import MinimizeIcon from '@material-ui/icons/RemoveRounded';
import MaximizeIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import { TEXT } from '../../../constants/style'
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		padding: theme.spacing(1),
		flexGrow: 1,
		textAlign: 'center',
		overflow: 'hidden',
		whiteSpace: 'noWrap',
		textOverflow: 'ellipsis',
		...TEXT
	},
	appBar: {
		backgroundColor: '#3b3b3b',
		borderTop: '1px solid black',
		borderLeft: '1px solid black',
		borderRight: '1px solid black',
		borderTopLeftRadius: '1em',
		borderTopRightRadius: '1em',
	},
	toolbar: {
		padding: theme.spacing(0)
	},
	btn: {
		// padding: theme.spacing(1),
		color: 'white',
		backgroundColor: '#646464',
		borderRadius: '.5em',
		margin: theme.spacing(1),
		border: '1px solid #818181',
		'&:hover': {
			backgroundColor: '#717171'
		}

	},
	btnClose: {
		backgroundColor: '#FF6F61',
		color: 'white',
		padding: theme.spacing(0),
		fontWeight: 'bold',
		margin: '0 .5em 0 0',
		'&:hover': {
			backgroundColor: '#FF6F61',
			color: '#0000008a',
		}
	},
	btnMaximize: {
		backgroundColor: '#88B04B',
		color: 'white',
		padding: theme.spacing(0),
		margin: '0 .5em 0 0',
		'&:hover': {
			backgroundColor: '#88B04B',
			color: '#0000008a',
		}
	},
	btnMinimize: {
		backgroundColor: 'darkorange',
		color: 'white',
		padding: theme.spacing(0),
		margin: '0 .5em 0 0',
		'&:hover': {
			backgroundColor: 'darkorange',
			color: '#0000008a',
		}
	},
	icon: {
		fontSize: '1.1rem',
		padding: theme.spacing(.5)
	}
}));

const Header = props => {
	const classes = useStyles();

	const getClientOS = () => {
		return navigator.platform.replace(/\s/g, '_').toLowerCase();
	};

	const handleBtnClick = click => {
		props.callback(click);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<Typography variant="h6" className={classes.title}>
						{getClientOS() + "@hamzaanas.codes"}
					</Typography>
					<Button variant="contained" className={classes.btn} disableElevation href='https://hamzaanas.codes/resume'>
						GUI
					</Button>
					<IconButton size="small" className={classes.btnMinimize} onClick={() => handleBtnClick("toggleMin")}>
						<MinimizeIcon className={classes.icon} />
					</IconButton>
					<IconButton size="small" className={classes.btnMaximize} onClick={() => handleBtnClick("toggleMax")}>
						<MaximizeIcon className={classes.icon} />
					</IconButton>
					<IconButton size="small" className={classes.btnClose} onClick={() => handleBtnClick("toggleX")}>
						<CloseIcon className={classes.icon} />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;

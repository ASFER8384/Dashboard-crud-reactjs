import React from 'react'
import "./Notify.css"
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        Width: 300,
        // height: 300,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));


export default function Notify() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const styles = {
        display: "flex",
        gap: "20px"
    }

  return (
    <div className='one'>
    <Badge
        sx={{ cursor: "pointer" }}
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick} badgeContent={4} color="primary">
        <NotificationsNoneIcon color="action" />
    </Badge>
    <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
    >
        <div className='Mes'>
            <h4>
                Alert Center
            </h4>
        </div>
        <div className='ul-menu'>
            <img className='img-mes' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-kknwCT9P0dA8v__jFaz1g4xQdkrBNIK9g&usqp=CAU" alt="" />
            <div className='message-head'>
            <span className='date-alert'>december 7,2017</span>
                <h4 >
                    A new report is ready to download
                </h4>
            </div>
        </div>
        <div className='ul-menu'>
            <img className='img-mes' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-kknwCT9P0dA8v__jFaz1g4xQdkrBNIK9g&usqp=CAU" alt="" />
            <div className='message-head'>
            <span className='date-alert'>december 7,2017</span>
                <h5 >
                    $290.00 deposited in you account... 
                </h5>
            </div>



        </div>
        <div className='ul-menu'>
            <img className='img-mes' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-kknwCT9P0dA8v__jFaz1g4xQdkrBNIK9g&usqp=CAU" alt="" />
            <div className='message-head'>
                <span className='date-alert'>december 7,2017</span>
                <h5 >
                    Spending alert... 
                </h5>

            </div>



        </div>
        <div className='Mes-fot'>
            <h6>
              Show All Alert
            </h6>
        </div>
    </StyledMenu>
</div>
  )
}

import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from  "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";

function  Header() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.pmg"
                    alt=""
                />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder = 'Search Facebook' 
                    type="text" />
                </div>
            </div>

            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon frontSize="large"  />
                </div>
                <div className="header__option">
                    <FlagIcon frontSize="large"  />
                </div>
                <div className="header__option">
                    <SubscriptionsIcon frontSize="large"  />
                </div>
                <div className="header__option">
                    <StorefrontIcon frontSize="large"  />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon frontSize="large"  />
                </div>
            </div>

            < div className="header__right">
                <div  className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default Header;

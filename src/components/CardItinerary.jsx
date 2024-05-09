import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import itinerariesActions from "../redux/actions/itinerariesActions";
import { useEffect } from "react";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Comments from '../components/Comments'
import '../styles/detailPages.css'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
}));

function CardItinerary({itinerary, cityid}) {
    let [likes, setLikes] = useState()
    let [reload, setReload] = useState(false)
    const [expanded, setExpanded] = React.useState(false);

const handleExpandClick = () => {
    setExpanded(!expanded);
};

    let emoji = "💵"

    const dispatch = useDispatch()

    const user = useSelector(store => store.userReducers.user)

    async function likeDislike() {
        likes = await dispatch(itinerariesActions.like(itinerary._id))
        setReload(!reload)
        setLikes(likes)
    }

    useEffect(() => {
        dispatch(itinerariesActions.findTinFromCity(cityid))
    })

    return(
                    <div className="itinerary">
                        <div className="itinerary-container">
                            <div className="userimage-container">
                                <img src={itinerary.userimage} className="userimage" alt="userimage" />
                                <p>{itinerary.username}</p>
                            </div>

                            <div className="itinerary-body">
                                <h1 className="itinerary-title">{itinerary.itineraryname}</h1>
                                <p>{emoji.repeat(itinerary.price)}</p>
                                <p>{itinerary.hashtags}</p>
                                <p>{itinerary.time}</p>

                                <div>
                                    {user ? 
                                    (<div onClick={likeDislike}> 
                                        {itinerary.likes.includes(user.id) ? <span><FavoriteIcon/></span> : <span><FavoriteBorderIcon/></span>}
                                    </div>) : <span><FavoriteBorderIcon/></span>}
                                    <p>{itinerary.likes.length}</p>
                                </div>

                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                    >
                                    <ExpandCircleDownIcon sx={{ color: "white" }} fontSize="medium"/>
                                </ExpandMore>
                            </div>
                        </div>

                            <div>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <div className="activities" >
                                    {itinerary.activities.length > 0 ?
                                    itinerary.activities.map(activities=>(
                                        <div key={activities._id} className="activity-box-photo">
                                            <p className="activity-title">{activities.activity}</p>
                                            <img src={activities.activityphoto} alt={activities._id} className="activity-photo" />
                                        </div>
                                    )) : <h1>No activities available!</h1>}
                                    </div>
                                </Collapse>
                            </div>
                            <div className="comment-container">
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                {
                                    itinerary.activities.length>0?
                                    <Comments itinerary={itinerary} cityid={cityid}/>
                                    :
                                    <div></div>
                                }
                                </Collapse>
                            </div>
                    </div>
    )
}
export default CardItinerary
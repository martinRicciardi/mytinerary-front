import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import itinerariesActions from "../redux/actions/itinerariesActions";
import commentsActions from "../redux/actions/commentsActions"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';

import "../styles/Comments.css"

import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from '@mui/icons-material/Edit'

function Comments ({itinerary, cityid}){
    // const [comments, setComments] = useState([])
    const [inputText, setInputText] = useState("") 
    const [modifyComment, setModifyComment] = useState("") 
    const [reload, setReload] = useState()
    
    const dispatch = useDispatch()

    const user = useSelector(store => store.userReducers.user)

    // comment functions

    async function addComment(){
        const commentData = {
            itineraryId: itinerary._id,
            comments:{
                comment: inputText,
                userID: user.id
            }
        }
        await dispatch(commentsActions.addComment(commentData))
        setInputText("")
        setReload(!reload)
    }

    async function modifyComments(comments){
        const commentData = {
            commentId: comments._id,
            comment: modifyComment
        }
        await dispatch(commentsActions.modifyComment(commentData))
        setReload(!reload)
        setInputText("")
    }

    async function deleteComment(comments){
        await dispatch(commentsActions.deleteComment(comments._id))
        setReload(!reload)
    }


    useEffect(() => {
        dispatch(itinerariesActions.findTinFromCity(cityid))
    }, [reload])
    // console.log(itinerary)
    return(
        <>
                {
                    user==null?
                    <h2>Go to sign in for comment about the itineraries!</h2>:
                    <h1>Comments!</h1>
                }
        {itinerary.comments.length>0?
            user==null?
                    itinerary.comments.map(comments=>(
                        <div className="public-comment-container" key={comments._id}>
                            <div className="comment-container">
                                <div className="comment-data">
                                    <Avatar src={comments?.userID?.photo} alt={comments?.userID?.fullname}/>
                                    <p className="user-email">{comments?.userID?.email}</p>
                                </div>
                                <p className="comment-text">{comments.comment}</p>
                                <p className="comment-text">{new Date(comments.date).toUTCString()}</p>
                            </div>
                        </div>)) :
                        itinerary.comments.map(comments=>(
                            user.id == comments.userID._id?(
                        <div className="public-comment-container" key={comments._id}>
                            <div className="comment-container">
                                <div className="comment-data">
                                    <Avatar src={comments?.userID?.photo} alt={comments?.userID?.fullname}/>
                                    <p className="user-email">{comments?.userID?.email}</p>
                                </div>
                                <div className="comment">
                                    <div className="comments-modify">
                                        <TextField className="input-modify-text" fullWidth placeholder="Change your comment!" id="fullWidth"  onChange={(event) => setModifyComment(event.target.value)} defaultValue={comments.comment}/>
                                        <div className="comment-button">
                                            <DeleteIcon  id={comments._id} onClick={() => deleteComment(comments)} />
                                            <EditIcon  id={comments._id} onClick={() => modifyComments(comments)} />
                                        </div>
                                    </div>
                                </div>
                                <p className="comment-text">{new Date(comments.date).toUTCString()}</p>
                            </div>
                        </div>) :
                        (<div className="public-comment-container" key={comments._id}>
                            <div className="comment-container">
                                <div className="comment-data">
                                    <Avatar src={comments?.userID?.photo} alt={comments?.userID?.fullname}/>
                                    <p className="user-email">{comments?.userID?.email}</p>
                                </div>
                                <p className="comment-text">{comments.comment}</p>
                                <p className="comment-text">{new Date(comments.date).toUTCString()}</p>
                            </div>
                        </div>))):
                            <div className="no-comment-text">
                                <h2>There are no commentaries, be the first</h2>
                            </div>
                        }
                <div className="input-container">
                    <Box className="send-comment">
                        <TextField className="input-text" fullWidth placeholder="Comment!" id="fullWidth" onChange={(event) => setInputText(event.target.value)} value={inputText}/>
                        <SendIcon onClick={addComment}/>
                    </Box>
                </div>
        </>
    )
}
export default Comments
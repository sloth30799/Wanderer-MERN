import React, { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import {
  IconButton,
  Card,
  CardActions,
  CardMedia,
  CardHeader,
  CardContent,
  Avatar,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import { fromNowFormat } from "../utils/formats"
import { fetchPost, postDelete, postLike } from "../api"
import PostSkeleton from "../components/utils/PostSkeleton"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../services/store"
import { useDispatch } from "react-redux"
import { deleteBackpackingContent } from "../services/features/profile/profileSlice"

const Post = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  const navigate = useNavigate()
  const { id } = useParams()

  const [post, setPost] = useState()

  useEffect(() => {
    const getPost = async () => {
      const data = await fetchPost(id)
      setPost(data.post)
    }
    getPost()
  }, [])

  if (post === undefined) return <PostSkeleton />
  else if (post === null) return <h2>Post not found!</h2>

  const handleLike = async () => {
    const data = await postLike(post._id)
    setPost({ ...post, likes: data.data })
  }

  const handleDelete = async () => {
    const data = await postDelete(post._id) // api call
    dispatch(deleteBackpackingContent({ category: "blogs", id: post._id }))
    navigate(-1)
    return data
  }

  return (
    <div className="flex flex-col gap-3">
      <Link
        to="/profile/post"
        relative="path"
        className="no-underline text-black"
      >
        &larr; <span>Back to Blogs</span>
      </Link>
      <Card className="shadow-none">
        <CardHeader
          avatar={
            <Avatar className="bg-scarletRed" aria-label="recipe">
              W
            </Avatar>
          }
          title={post.title}
          subheader={fromNowFormat(post.createdAt)}
        />
        <CardMedia component="img" image={post.image} alt={post.title} />
        <CardContent>
          <p className="font-body">{post.caption}</p>
        </CardContent>
        <CardActions className="flex justify-between">
          <div className="flex place-items-center gap-2">
            <IconButton aria-label="add to favorites" onClick={handleLike}>
              <ThumbUpIcon className="text-black" />
            </IconButton>
            <span className="text-xl">{post.likes}</span>
          </div>
          {post.user === user._id && (
            <IconButton aria-label="delete" onClick={handleDelete}>
              <DeleteIcon className="text-black" />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </div>
  )
}

export default Post

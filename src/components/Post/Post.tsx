import React, { FC } from 'react';
import { IPost } from '../../interfaces/Posts';
import Button from '../../UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import './Post.css';

interface PostProps {
  post: IPost;
  number: number;
  removePost: (post: IPost) => void;
}

const Post = ({ post, number, removePost }: PostProps) => {
  const { body, title, id } = post;
  const navigate = useNavigate();

  return (
    <div className='Post' data-testid='Post'>
      <div className='post__ccontent'>
        <strong>
          {number}. {title || 'Some title'}
        </strong>
        <div>{body || 'Some body'}</div>
      </div>
      <Button onClick={() => navigate(`/posts/${id}`)}>Open</Button>
      <Button onClick={() => removePost(post)}>Remove</Button>
    </div>
  );
};

export default Post;

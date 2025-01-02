"use client"
import React, { useState, useEffect } from 'react';

const CommentSec = () => {
  const [comments, setComments] = useState<{ username: string, comment: string }[]>([]);
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Save comments to localStorage whenever the comments state changes
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  }, [comments]);

  const handleAddComment = () => {
    if (username && comment) {
      const newComment = { username, comment };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setUsername('');
      setComment('');
    }
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 py-10">
      <div className="w-full max-w-lg p-6 bg-gray-400 shadow-xl rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-blue-800 mb-5">Comment Section</h2>
        
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter Your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        
        <div className="mb-6">
          <textarea
            placeholder="Write Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        
        <button
          onClick={handleAddComment}
          className="w-full bg-blue-800 text-white p-3 rounded-md hover:bg-blue-600 transition-all"
        >
          Post Comment
        </button>
      </div>

      <div className="w-full max-w-lg mt-10">
        <h3 className="text-xl font-semibold text-center text-blue-800 mb-4">Comments</h3>
        <div className="space-y-4">
          {comments.map((commentData, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 rounded-lg shadow-md hover:bg-gray-100 transition-all"
              style={{ animation: 'fadeIn 1s ease-in-out' }}
            >
              <div className="flex justify-between items-center">
                <p className="font-bold text-blue-500">{commentData.username}:</p>
                <button
                  onClick={() => handleDeleteComment(index)}
                  className="text-red-500 hover:text-red-700 transition-all"
                >
                  Delete
                </button>
              </div>
              <p className="mt-2 text-gray-800">{commentData.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommentSec;

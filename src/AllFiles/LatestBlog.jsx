import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './card';

const LatestBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedTag, setSelectedTag] = useState('');
    const [sortOrder, setSortOrder] = useState('latest');

    useEffect(() => {
        axios.get('./data.json')
            .then(res => {
                setBlogs(res.data);
            })
            .catch(err => {
                console.log("Error Fetching Data: ", err);
            });
    }, []);

    const uniqueTags = [...new Set(blogs.flatMap(blog => blog.tags))];

    const filteredBlogs = blogs
        .filter(blog => (selectedTag ? blog.tags.includes(selectedTag) : true))
        .sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return sortOrder === 'latest' ? dateB - dateA : dateA - dateB;
        });

    return (
        <>
            <nav id='latest' className='p-4 flex justify-between items-center mt-20'>
                <h1 className='text-5xl font-semibold !font-["Major_Mono_Display"] mb-4'>Latest Blogs</h1>


                <div className='mb-4'>
                    <select
                        onChange={(e) => setSortOrder(e.target.value)}
                        className='p-2 hover:border-white hover:bg-gray-800 hover:text-white border rounded'
                    >
                        <option value="latest">Latest First</option>
                        <option value="oldest">Oldest First</option>
                    </select>
                </div>
            </nav>
            <div className='mb-4 flex flex-wrap gap-2'>
                {uniqueTags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-3 py-1 rounded-sm text-gray-800  ${selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-100'
                            }`}
                    >
                        #{tag}
                    </button>
                ))}
                {selectedTag && (
                    <button
                        onClick={() => setSelectedTag('')}
                        className='ml-2 text-red-400 '
                    >
                        Clear Tag
                    </button>
                )}
            </div>

            <div className='flex flex-wrap gap-6 '>
                {filteredBlogs.map(blog => (
                    <Card blog={blog} index={blog.id} />
                ))}
            </div>
        </>
    );
};

export default LatestBlog;

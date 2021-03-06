import React from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost';
import Sidebar from '../../components/Sidebar';
// import Card from '../../components/UI/Card';

const Post = (props) => {
    return (
        <section className='container'>
            <BlogPost {...props}/>
            <Sidebar />
        </section>
    );
}

export default Post; 

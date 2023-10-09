import React from 'react'
import { Blogdata } from './Data';
import '../../App.css'
export const Blogs = () => {
    const memoizedBlogData = React.useMemo(() => Blogdata, []);
    return (
        <div className='Blogs'>
            <div className="wrappers">
                <div className="Flexbox">
                    <h1>Study Techniques and Blogs</h1>
                    <div className="Topics">
                        {memoizedBlogData.map((blog) => (
                            <div className="content" key={blog.id}>
                                <div className="left">
                                    <div className="title">{blog.title}</div>
                                    <div className="desc">{blog.desc}</div>
                                    <div className="detail">{blog.date} - <a href={blog.url}>Read More</a></div>
                                </div>
                                <img src={blog.image} width={125} height={125} alt="blogs.images" />
                            </div>
                        ))}
                    </div>
                </div>
                <a className='a' href="https://preciseblogs.pages.dev">Articles and Blogs</a>
            </div>
        </div>
    )
}

import React from 'react';
import abc from '../images/abc.jpg';
import blog01 from '../images/blog01.jpg'
import blog02 from '../images/blog02.jpg'
import blog03 from '../images/blog03.jpg'
import Footer from './Footer';
import '../Css/Blogs.css';

const Blogs = () => {
    return (
        <section id="blog">
            <div className="blog-heading">
                <span>Monthly Posts</span>
                <h3>Company Blog</h3>
            </div>
            <div className="blog-container">
                <div className="blog-box">
                    <div className="blog-img">
                        <img src={abc} alt="blog" />
                    </div>
                    <div className="blog-text">
                        <span>18 Sep 2021 / Web</span>
                        <a href="#" className="blog-title">What is Blog 01 about ?</a>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <a href="#" className="blog-title">Read More</a>
                    </div>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src={blog01} alt="blog" />
                    </div>
                    <div className="blog-text">
                        <span>18 Sep 2021 / Web</span>
                        <a href="#" className="blog-title">What is Blog 02 about ?</a>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <a href="#" className="blog-title">Read More</a>
                    </div>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src={blog02} alt="blog" />
                    </div>
                    <div className="blog-text">
                        <span>18 Sep 2021 / Web</span>
                        <a href="#" className="blog-title">What is Blog 03 about ?</a>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <a href="#" className="blog-title">Read More</a>
                    </div>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src={blog03} alt="blog" />
                    </div>
                    <div className="blog-text">
                        <span>18 Sep 2021 / Web</span>
                        <a href="#" className="blog-title">What is Blog 04 about ?</a>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <a href="#" className="blog-title">Read More</a>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Blogs;

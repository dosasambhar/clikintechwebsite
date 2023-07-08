import React from 'react';
import "./BlogMangement.css";
import  blogmangement  from "../../res/BlogMangementImages/blogmangement.png";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'; 
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';

import image from '../../res/blogimages/blog.png';
import likeimage from '../../res/blogimages/like.png';
import shareimage from '../../res/blogimages/share.png';
import '@fortawesome/fontawesome-free/css/all.min.css'

function BlogMangement() {

   const cardData = [
      {
        title: 'The Ultimate Guide To SEO Success in 2023',
        text: 'Stay ahead of the competition with SEO strategies which will improve your website ranking and organic traffic.',
        image: image,
      },
      {
        title: 'Mastering Social Media Analytics: Measuring Success',
        text: 'Learn how to effectively measure and optimize your social media marketing strategies.',
        image: image,
      },
      {
        title: 'Unleashing The Potential Of Data-Driven marketing',
        text: 'Discover the strategies and tools to harness the power of data to limitness possibilities of data-driven marketing.',
        image: image,
      }
    ];

  return (
    <div>
        <div className='blogmangement'>
             <div className='container blogmangement1'>
                  <div>
                     <h4 className='blogmangementh4'>Blog Management</h4>
                     {/* <p className='blogmangementp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p> */}
                  </div>
                  <div>
                      <img className='blogmangementimage' src={blogmangement} alt="" />
                  </div>
             </div>
        </div>
        <div className='blogmangement2'>
           <div className='blogmangement3'>
              <div className='blogmangement4'>
                 <p className='blogmangementp1'>Amount of Blogs</p>
                 <p className='blogmangementp2'>0</p>
              </div>
              <div className='blogmangement4'>
                 <p className='blogmangementp1'>Amount Published</p>
                 <p className='blogmangementp2'>0</p>
              </div>
              <div className='blogmangement4'>
                 <p className='blogmangementp1'>Total Drafts</p>
                 <p className='blogmangementp2'>0</p>
              </div>
           </div>
           <div className='blogmangement5'>
              <div className='blogmangement6'>
                    <p className='blogmangementp3'>Quick action</p>
                    <button className='blogmangementbutton'>Create new blog</button>
              </div>
           </div>
        </div>
        <div className='blogmangement7'>
           <div className='blogmangement8'>
            <h4 className='blogmangementh41'>Blogs</h4>
            <hr className='blogmangementhr'></hr>
           </div>
        </div>
        <div className='blogmangement9'>
             <div className='blogmangement10'>
              <div className='blogmangement11'>
                <p className='blogmangementp4'>Published (0)</p>
                <hr className='blogmangementpublishline'></hr>
              </div>
              <div className='blogmangement12'>Draft (0)</div>
             </div>
             <div className='blogmangement13'>
                <div className='blogmangement14'>
                    <FormatListBulletedIcon className='blogmangementicon1' sx={{ fontSize: 27 }} />
                </div>
                <div className='blogmangement15'>
                   <AppsIcon className='blogmangementicon2' sx={{ fontSize: 27 }} />
                </div>
                <div className='blogmangement16'>
                    <SearchIcon  className='blogmangementicon3' sx={{ fontSize: 21 }}/>
                    <input type="text" className='blogmangementinput' placeholder='serach'/>
                </div>
             </div>
        </div>
        {/* <div className='blogmangement17'>
            <div className='blogmangement18'>
              <p className='blogmangementp5'>Create Your First Blog</p>
              <button className='blogmangementbutton1'>Create Blog</button>
            </div>
        </div> */}

<div className="row">
        {cardData.map((card) => (
          <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center" key={card.id}>
            <div className="my-card">
              <img src={card.image} className="my-card-image" alt="Card" />
              <div className="my-card-body">
                <h5 className="my-card-title">{card.title}</h5>
                <p className="my-card-text">{card.text}</p>
                <div className='blogmangementflex'>
                <button className='blogmangementcardbuttonedit'>Edit</button>
                <button className='blogmangementcardbuttondelete'>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default BlogMangement
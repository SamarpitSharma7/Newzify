import React from 'react';

const NewsItem =(props)=> {
   
  
    let { title, description,imageUrl,newsUrl,author,date } = props;
    return (
      <div >
        <div className="card" >
          <img src={!imageUrl?"https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1403395616/image_1403395616.jpg?io=getty-c-w750":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {date}</small></p>

            <a href={newsUrl} target='_blank'  rel="noopener noreferrer"className="btn btn-primary">
              Read more 
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;

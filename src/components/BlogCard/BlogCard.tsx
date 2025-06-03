import './BlogCard.css';

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  excerpt: string;
}

const BlogCard = ({ image, date, title, excerpt }: BlogCardProps) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image-wrapper">
        <img
          src={image}
          alt={title}
          className="blog-card-image"
          loading="lazy"
        />
        <div className="blog-card-date">
          {date}
        </div>
      </div>
      
      <div className="blog-card-content">
        <h3 className="blog-card-title">
          <a href="#">{title}</a>
        </h3>
        <p className="blog-card-excerpt">{excerpt}</p>
        <a href="#" className="blog-card-read-more">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;

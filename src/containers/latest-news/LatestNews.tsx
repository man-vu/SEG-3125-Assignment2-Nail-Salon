// LatestNews.tsx
import BlogCard from '../../components/BlogCard/BlogCard';
import { Button } from '../../components/ui/button';
import { latestNewsContent } from '@/data/content';
import './LatestNews.css';

const LatestNews = () => {
  const { heading, subheading, cta, blogPosts } = latestNewsContent;

  return (
    <section className="latest-news">
      <div className="container">
        <div className="latest-news-header">
          <h2>{heading}</h2>
          <div className="underline"></div>
          <p>{subheading}</p>
        </div>

        <div className="latest-news-grid">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              date={post.date}
              title={post.title}
              excerpt={post.excerpt}
            />
          ))}
        </div>

        <div className="latest-news-button">
          <Button className="cta-button">{cta}</Button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

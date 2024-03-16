import classes from '../../styles/components/NewsItem.module.scss';
import { Link } from 'react-router-dom';

export default function NewsItem({ data }) {
  return (
    <div className={classes.newsItemContainer}>
      <div className={classes.imageContainer}>
        <img loading='lazy' src={data.smallImage} alt="news" />
      </div>
      <div className={classes.newsContent}>
        <div>
          <strong>{data.title}</strong>
          <p className={classes.text}>{data.content}</p>
        </div>
        <div className={classes.NewsFooter}>
          <span>{data.date}</span>
          <Link to={`/news-view-more/${data._id}`}>VIEW MORE</Link>
        </div>
      </div>
    </div>
  );
}

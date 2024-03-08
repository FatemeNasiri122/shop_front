import Grid from '@mui/material/Grid';
import classes from '../styles/components/NewsItem.module.scss';
import { Link } from 'react-router-dom';

export default function NewsItem({ data }) {
  return (
    <Grid container marginTop="20px">
      <Grid item xs={12} display={{ md: 'none' }}>
        <div className={classes.imageContainer}>
          <img src={data.smallImage} alt="news" />
        </div>
      </Grid>
      <Grid item md={3} display={{ xs: 'none', md: 'block' }}>
        <div className={classes.imageContainer}>
          <img src={data.smallImage} alt="news" />
        </div>
      </Grid>
      <Grid item sm={12} md={8} marginLeft="8px">
        <div className={classes.NewsContent}>
          <strong>{data.title}</strong>
          <p className={classes.text}>{data.content}</p>
        </div>
        <div className={classes.NewsFooter}>
          <span>{data.date}</span>
          <Link to={`/news-view-more/${data._id}`}>VIEW MORE</Link>
        </div>
      </Grid>
    </Grid>
  );
}

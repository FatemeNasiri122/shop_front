import classes from '../styles/components/NewsViewMore.module.scss';
import { Link, useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Breadcrumbs } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { singleNews } from '../api/news';
import LoadingState from '../components/helper/LoadingState.jsx';
import EmptyState from '../components/helper/EmptyState.jsx';

const NewsViewMore = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['single-news'],
    queryFn: async () => singleNews(id)
  });

  if (isLoading) {
    return <LoadingState />;
  }
  if (isError) {
    return <EmptyState data="news" />;
  }

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" className="breadCrumLink">
          home
        </Link>
        <Link to="/news" className="breadCrumLink">
          News
        </Link>
        <span className="breadCrumText">{data?.title}</span>
      </Breadcrumbs>
      <div className={classes.newsContainer}>
        <h1 className={classes.title}>{data?.title}</h1>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.menImageContainer}>
              <img src={data?.bigImage} alt="" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <p className={classes.NewsContent}>{data?.content}</p>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.tagsContainer}>
              <div className={classes.tagActive}>KEYWORDS</div>
              {data?.keywords.map((keyword) => (
                <div key={keyword} className={classes.tag}>
                  {keyword}
                </div>
              ))}
            </div>
          </Grid>
          <Grid item xs={12}>
            <span>{data?.date}</span>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default NewsViewMore;

import NewsItem from '../components/news/NewsItem.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getNews } from '../api/news';
import { Breadcrumbs } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import LoadingState from '../components/helper/LoadingState.jsx';
import EmptyState from '../components/helper/EmptyState.jsx';
const News = () => {
  const [paginate, setPaginate] = useState(1);

  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: ['news', paginate],
    queryFn: () => getNews(paginate)
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
        <span className="breadCrumText">News </span>
      </Breadcrumbs>
      {data.news.length === 0 ? (
        <EmptyState data="news" />
      ) : (
        <>
          {data?.news?.map((data) => (
            <NewsItem data={data} key={data._id} />
          ))}
          <div className="paginationContainer">
            <Pagination
              count={isSuccess && Math.ceil(data?.totalNewsNumber / 4)}
              shape="rounded"
              page={paginate}
              color="primary"
              onChange={(event, value) => setPaginate(value)}
            />
          </div>
        </>
      )}
    </>
  );
};

export default News;

import NewsItem from '../components/NewsItem';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import EmptyState from '../components/EmptyState';
import { getNews } from '../api/news';
import { Breadcrumbs } from '@mui/material';
import LoadingState from '../components/LoadingState';
import { Link } from 'react-router-dom';

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
        <Link to="/" className='breadCrumLink'>home</Link>
        <span className='breadCrumText'>News </span>
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

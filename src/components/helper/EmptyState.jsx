import emptyStateImage from '/assets/img/no-data.svg';
import Class from '../../styles/components/EmptyState.module.scss';

const EmptyState = ({ data }) => {
  return (
    <div className={Class.errorContainer}>
      <div>
        <img loading='lazy' src={emptyStateImage} alt="no data" />
        <p>no {data} found</p>
      </div>
    </div>
  );
};

export default EmptyState;

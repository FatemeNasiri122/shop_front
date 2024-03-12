import classes from '../../styles/components/PreLoading.module.scss';

const ProLoading = () => {
  return (
    <div className={classes.PreContainer}>
      <div>
        <h2 className={classes.loadingTxt}>loading</h2>
        <div className={classes.dotContainer}>
          <span className={classes.loadingCircle}></span>
          <span className={classes.loadingCircle}></span>
          <span className={classes.loadingCircle}></span>
        </div>
      </div>
    </div>
  );
};

export default ProLoading;

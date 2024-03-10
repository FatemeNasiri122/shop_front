import men from '/assets/img/man-svgrepo-com.svg';
import women from '/assets/img/woman-with-skirt-svgrepo-com.svg';
import sneakers from '/assets/img/sneakers-sneaker-svgrepo-com.svg';
import shoes from '/assets/img/shoes-14-svgrepo-com.svg';
import classes from '../styles/components/ProductCategories.module.scss';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
  return (
    <div className={classes.categoriesContainer}>
      <h1 className={classes.title}>product categories</h1>
      <div className={classes.categoryContainer}>
        <Link to="/products/men" className={classes.category}>
          <span className={classes.categoryImgContainer}>
            <img src={men} alt="men" />
          </span>
          <span>men</span>
        </Link>
        <Link to="/products/women" className={classes.category}>
          <span className={classes.categoryImgContainer}>
            <img src={women} alt="women" />
          </span>
          <span>women</span>
        </Link>
        <Link to="/products/sneakers" className={classes.category}>
          <span className={classes.categoryImgContainer}>
            <img src={sneakers} alt="sneakers" />
          </span>
          <span>sneakers</span>
        </Link>
        <Link to="/products/shoes" className={classes.category}>
          <span className={classes.categoryImgContainer}>
            <img src={shoes} alt="shoes" />
          </span>
          <span>shoes</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCategories;

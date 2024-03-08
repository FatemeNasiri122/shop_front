import classes from '../styles/components/Product.module.scss';
import { Link } from 'react-router-dom';
import img from '../assets/img/product.png';

const Product = ({ data }) => {
  return (
    <Link to={`/product/${data._id}`}>
      <div className={classes.content}>
        <img loading="lazy" src={data.image} alt="product" />
        <div className={classes.colorContainer}>
          {data.colors.map((color) =>
            color === 'blackAndWhite' ? (
              <span
                key={color}
                className={classes.circle}
                style={{
                  background: 'linear-gradient(to right,white 0%,white 50%, black 50%,black 100%)'
                }}
              ></span>
            ) : (
              <span
                key={color}
                className={classes.circle}
                style={{ backgroundColor: color }}
              ></span>
            )
          )}
        </div>
        <p className={classes.name}>{data.name}</p>
        <p className={classes.price}>${data.price}</p>
        <div className={classes.sizes}>
          {data.size.map((s, i) => {
            return (
              <div className={classes.size} key={i}>
                {s}
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default Product;

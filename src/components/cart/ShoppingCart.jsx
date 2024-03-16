import classes from '../../styles/components/ShoppingCart.module.scss';
import Grid from '@mui/material/Grid';
import AddToCart from './AddToCart.jsx';
import { useState } from 'react';

const ShoppingCart = ({ data }) => {
  const [isAlreadyAdded, setIsAlreadyAdded] = useState(true);

  return (
    <div className={classes.shoppingCartContainer}>
      <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Grid item xs={12} sm={2} sx={{ display: 'flex', justifyContent: 'center' }}>
          <div className={classes.imgDesktop}>
            <img loading='lazy' className={classes.image} src={data.product.image} alt="product" />
          </div>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <div className={classes.text}>
            <p>
              <strong>name: </strong>
              {data.product.name}
            </p>
            <p>
              <strong>code: </strong>
              {data.product.code}
            </p>
            <p>
              <strong>color: </strong>
              {data.selectedColor.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </p>
            <p>
              <strong>size: </strong>
              {data.selectedSize.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <strong>${data.sumOfPrice}</strong>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <AddToCart
            product={data.product}
            color={data.selectedColor[data.selectedColor.length - 1]}
            size={data.selectedSize[data.selectedSize.length - 1]}
            setIsAlreadyAdded={setIsAlreadyAdded}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ShoppingCart;

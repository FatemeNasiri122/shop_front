import classes from '../styles/components/Buy.module.scss';
import { useMemo, useState } from 'react';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Collapse from '@mui/material/Collapse';
import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../api/product';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumbs, FormControl, InputLabel } from '@mui/material';
import { useSelector } from 'react-redux';
import BuySlider from '../components/product/BuySlider.jsx';
import AddToFavorite from '../components/product/AddToFavorite.jsx';
import AddToCart from '../components/cart/AddToCart.jsx';
import LoadingState from '../components/helper/LoadingState.jsx';
import EmptyState from '../components/helper/EmptyState.jsx';

const Product = () => {
  const { user } = useSelector((state) => state.user);
  const [selectColor, setSelectColor] = useState("");
  const [selectSize, setSelectSize] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isAlreadyAdded, setIsAlreadyAdded] = useState(false);
  const [loadingCart, setLoadingCart] = useState(true);
  const [open, setOpen] = useState(0);
  const { id } = useParams();

  const { isLoading, data, isError, isSuccess } = useQuery({
    queryKey: ['product'],
    queryFn: async () => getProduct(id),
    cacheTime: 10,
    onSuccess: (response) => {
      user?.cart?.items?.map((item) => {
        if (item.product._id.toString() === response?._id.toString()) {
          setIsAlreadyAdded(true);
        }
      });
    }
  });

  useMemo(() => {
    if (isSuccess) {
      setLoadingCart(false);
      setSelectColor(data?.colors[0].color);
      setSelectSize(data?.size[0]);
    }
  }, [isSuccess]);
  const moveToSelectedImage = (selected) => {
    const selectedImage = document.querySelector(`#item-${selected}`);
    selectedImage.scrollIntoView();
  };

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <EmptyState data="product" />;
  }
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" className="breadCrumLink">
          Home
        </Link>
        <Link to={`/products/${data?.type}`} className="breadCrumLink">
          {data?.type}
        </Link>
        <span className="breadCrumText">{data?.name}</span>
      </Breadcrumbs>
      <Grid container marginTop="20px">
        <Grid item lg={1} sx={{ display: { xs: 'none', lg: 'block' } }}>
          <div className={classes.leftImgContainer}>
            {data?.images.map((image, i) => (
              <div
                key={image}
                onClick={() => moveToSelectedImage(i)}
                className={classes.imgContainer}
              >
                <img loading='lazy' src={image} alt="product" />
              </div>
            ))}
          </div>
        </Grid>
        <Grid item sm={6} lg={7} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <div className={classes.imgCenterContainer}>
            {data?.images.map((img, i) => (
              <img loading='lazy' key={img} id={`item-${i}`} src={img} alt="product" />
            ))}
          </div>
        </Grid>
        <Grid item xs={12} sx={{ display: { sm: 'none' } }}>
          <BuySlider images={data?.images} />
        </Grid>
        <Grid item sm={6} lg={4} paddingLeft={{ sm: '20px' }}>
          <div className={classes.topCard}>
            <div className={classes.iconContainer}>{data && <AddToFavorite isSuccess={isSuccess} product={data} />}</div>
            <h2>{data?.name}</h2>
            <div>
              <strong>code: </strong>
              <span className={classes.code}>{data?.code}</span>
            </div>
            <p className={classes.price}>
              <strong>${data?.price}</strong>
            </p>
          </div>
          <div className={classes.colorContainer}>
            <p>
              <strong>color : </strong>
              <span> {selectColor}</span>
            </p>
            <div className={classes.circleContainer}>
              {data?.colors?.map((color) =>
                color === 'blackAndWhite' ? (
                  <button
                    key={color.code}
                    onClick={() => setSelectColor(color.color)}
                    className={
                      color.color === selectColor ? classes.selectedCircle : classes.circle
                    }
                    style={{
                      background:
                        'linear-gradient(to right,white 0%,white 50%, black 50%,black 100%)'
                    }}
                  ></button>
                ) : (
                  <button
                    key={color}
                    onClick={() => setSelectColor(color.color)}
                    className={
                      color.color === selectColor ? classes.selectedCircle : classes.circle
                    }
                    style={{ backgroundColor: color.code }}
                  ></button>
                )
              )}
            </div>
          </div>
          <div className={classes.sizeContainer}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">size</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  fullWidth
                  defaultValue={selectSize}
                  label="size"
                >
                  {data?.size.map((s) => (
                    <MenuItem key={s} value={s} onClick={() => setSelectSize(s)}>
                      {s}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {data?.numberOfProduct > 0 && !loadingCart ? (
              <AddToCart
                isAlreadyAdded={isAlreadyAdded}
                setIsAlreadyAdded={setIsAlreadyAdded}
                product={data}
                color={selectColor}
                size={selectSize}
                setErrorMsg={setErrorMsg}
                setColor={selectColor}
                setSize={selectSize}
              />
            ) : (
              <span className={classes.soldOut}>This product is sold out</span>
            )}
            <p className={classes.error}>{errorMsg}</p>
          </div>
          <div className={classes.questionContainer}>
            <div
              className={classes.question}
              onClick={() => setOpen((prev) => (prev === 1 ? 0 : 1))}
            >
              <strong>PRODUCT DETAILS</strong>
              {open === 1 ? <RemoveIcon /> : <AddIcon />}
            </div>
            <Collapse orientation="vertical" in={open === 1}>
              <p>
                {data?.productDetails}
              </p>
            </Collapse>
          </div>
          <div className={classes.questionContainer}>
            <div
              className={classes.question}
              onClick={() => setOpen((prev) => (prev === 2 ? 0 : 2))}
            >
              <strong>COMPOSITION</strong>
              {open === 2 ? <RemoveIcon /> : <AddIcon />}
            </div>
            <Collapse orientation="vertical" in={open === 2}>
              <p>{data?.composition}</p>
            </Collapse>
          </div>
          <div className={classes.questionContainer}>
            <div
              className={classes.question}
              onClick={() => setOpen((prev) => (prev === 3 ? 0 : 3))}
            >
              <strong>DELIVERY & RETURNS</strong>
              {open === 3 ? <RemoveIcon /> : <AddIcon />}
            </div>
            <Collapse orientation="vertical" in={open === 3}>
              <p>
                {data?.delivery}
              </p>
            </Collapse>
          </div>
          <div className={classes.questionContainer}>
            <div
              className={classes.question}
              onClick={() => setOpen((prev) => (prev === 4 ? 0 : 4))}
            >
              <strong>AUTHENTICITY</strong>
              {open === 4 ? <RemoveIcon /> : <AddIcon />}
            </div>
            <Collapse orientation="vertical" in={open === 4}>
              <p>
                {data?.authenticity}
              </p>
            </Collapse>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Product;

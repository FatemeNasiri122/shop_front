import classes from '../styles/components/Buy.module.scss';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useMemo, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Collapse from '@mui/material/Collapse';
import BuySlider from '../components/BuySlider';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import AddToFavorite from '../components/AddToFavorite';
import AddToCart from '../components/AddToCart';
import LoadingState from '../components/LoadingState';
import EmptyState from '../components/EmptyState';
import { useSelector } from 'react-redux';
import { getProduct } from '../api/product';
import { Breadcrumbs, FormControl, InputLabel } from '@mui/material';

const Product = () => {
  const { user } = useSelector((state) => state.user);
  const [selectColor, setSelectColor] = useState('please select color');
  const [selectSize, setSelectSize] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isAlreadyAdded, setIsAlreadyAdded] = useState(false);
  const [loadingCart, setLoadingCart] = useState(true);
  const [open, setOpen] = useState(0);
  const { id } = useParams();

  const { isLoading, data, isError, isSuccess } = useQuery({
    queryKey: ['product'],
    queryFn: async () => getProduct(id),
    onSuccess: (response) => {
      user?.cart?.items?.map((item) => {
        if (item.product._id.toString() === response?._id.toString()) {
          setIsAlreadyAdded(true);
        }
      });
      setLoadingCart(false);
    }
  });

  useMemo(() => {
    setSelectColor(data?.colors[0]);
    setSelectSize(data?.size[0]);
  }, [isSuccess]);

  const moveToSelectedImage = (selected) => {
    const selectedImage = document.querySelector(`#item-${selected}`);
    selectedImage.scrollIntoView();
  };
  console.log(isAlreadyAdded);
  if (isLoading) {
    return <LoadingState />;
  }
  if (isError) {
    return <EmptyState data="product" />;
  }
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" className='breadCrumLink'>Home</Link>
        <Link to={`/products/${data?.type}`} className='breadCrumLink'>{data?.type}</Link>
        <span className='breadCrumText'>{data?.name}</span>
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
                <img src={image} alt="product" />
              </div>
            ))}
          </div>
        </Grid>
        <Grid item sm={6} lg={7} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <div className={classes.imgCenterContainer}>
            {data?.images.map((img, i) => (
              <img key={img} id={`item-${i}`} src={img} alt="product" />
            ))}
          </div>
        </Grid>
        <Grid item xs={12} sx={{ display: { sm: 'none' } }}>
          <BuySlider images={data?.images} />
        </Grid>
        <Grid item sm={6} lg={4} paddingLeft={{ sm: '20px' }}>
          <div className={classes.topCard}>
            <div className={classes.iconContainer}>{data && <AddToFavorite product={data} />}</div>
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
              <strong>color</strong>
              <span> : {selectColor}</span>
            </p>
            <div className={classes.circleContainer}>
              {data?.colors?.map((color) =>
                color === 'blackAndWhite' ? (
                  <button
                    key={color}
                    onClick={() => setSelectColor(color)}
                    className={color === selectColor ? classes.selectedCircle : classes.circle}
                    style={{
                      background:
                        'linear-gradient(to right,white 0%,white 50%, black 50%,black 100%)'
                    }}
                  ></button>
                ) : (
                  <button
                    key={color}
                    onClick={() => setSelectColor(color)}
                    className={color === selectColor ? classes.selectedCircle : classes.circle}
                    style={{ backgroundColor: color }}
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
                item={null}
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
                See how this cotton jersey crewneck T-shirt gets shaken up. The garment features the
                iconic Skull with Brand and rhinestone applications. A saffian leather patch bearing
                the PP Hexagon is sewn on the yoke. Two needle stitching hems.
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
              <p>FABRIC #1: 100% COTTON | TRIMMING #1: 100% GLASS FIBRE</p>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate doloribus
                eum facere hic ipsum laudantium placeat, quam quia quisquam quo quod reprehenderit
                suscipit. Atque corporis magnam nobis porro praesentium?
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate doloribus
                eum facere hic ipsum laudantium placeat, quam quia quisquam quo quod reprehenderit
                suscipit. Atque corporis magnam nobis porro praesentium?
              </p>
            </Collapse>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Product;

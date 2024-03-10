import classes from '../styles/components/Products.module.scss';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import Product from '../components/Product';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useReducer } from 'react';
import EmptyState from '../components/EmptyState';
import LoadingState from '../components/LoadingState';
import { getProducts } from '../api/product';
import { Breadcrumbs, FormControl, InputLabel, Select } from '@mui/material';

const initialSelect = {
  filterItems: [
    {
      id: 1,
      type: 'category',
      items: [
        { name: 'cloth', checked: false },
        { name: 'shoes', checked: false },
        { name: 'bags', checked: false }
      ]
    },
    {
      id: 2,
      type: 'color',
      items: [
        { name: 'red', checked: false },
        { name: 'black and white', checked: false },
        { name: 'green', checked: false },
        { name: 'blue', checked: false }
      ]
    },
    {
      id: 3,
      type: 'size',
      items: [
        { name: 'xs', checked: false },
        { name: 's', checked: false },
        { name: 'm', checked: false },
        { name: 'l', checked: false },
        { name: 'xl', checked: false },
        { name: '2xl', checked: false },
        { name: '3xl', checked: false },
        { name: '4xl', checked: false },
        { name: '5xl', checked: false }
      ]
    },
    {
      id: 4,
      type: 'sortby',
      items: [
        { name: 'cheapest', checked: false },
        { name: 'most expensive', checked: false }
      ]
    }
  ],
  selectedItems: [],
  category: '',
  sortby: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'check':
      return {
        ...state,
        filterItems: state.filterItems.map((select) => {
          if (select.id === action.id) {
            return {
              ...select,
              items: select.items.map((item) => {
                if (item.name === action.name) {
                  return { ...item, checked: !item.checked };
                } else {
                  return item;
                }
              })
            };
          } else {
            return select;
          }
        }),
        selectedItems: action.checked
          ? [...state.selectedItems, `&${action.selectType}=${action.name}`]
          : state.selectedItems.filter((item) => item.split('=')[1] !== action.name)
      };
    case 'category':
      return {
        ...state,
        filterItems: state.filterItems.map((select) => {
          if (select.id === action.id) {
            return {
              ...select,
              items: select.items.map((item) => {
                if (item.name === action.name) {
                  return { ...item, checked: action.checked };
                } else {
                  return { ...item, checked: false };
                }
              })
            };
          } else {
            return select;
          }
        }),
        category: action.checked ? `&${action.selectType}=${action.name}` : ''
      };
    case 'sortby':
      return {
        ...state,
        filterItems: state.filterItems.map((select) => {
          if (select.id === action.id) {
            return {
              ...select,
              items: select.items.map((item) => {
                if (item.name === action.name) {
                  return { ...item, checked: action.checked };
                } else {
                  return { ...item, checked: false };
                }
              })
            };
          } else {
            return select;
          }
        }),
        sortby: action.checked ? `&${action.selectType}=${action.name}` : ''
      };
    case 'clear':
      return initialSelect;
    default:
      return state;
  }
};

const Products = () => {
  const [selects, dispatch] = useReducer(reducer, initialSelect);
  const { filterItems, selectedItems, category, sortby } = selects;
  const [page, setPage] = useState(1);
  const { type } = useParams();

  const { isLoading, isError, data } = useQuery({
    queryKey: ['products', selects, page, type],
    queryFn: async () => getProducts(type, page, selectedItems, category, sortby)
  });

  const closeFilter = (select, item) => {
    if (select.type === 'sortby' || select.type === 'category') {
      dispatch({
        type: select.type,
        id: select.id,
        name: item.name,
        checked: false
      });
    } else {
      dispatch({
        type: 'check',
        id: select.id,
        name: item.name,
        checked: false
      });
    }
  };

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <EmptyState data="products" />;
  }

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" className='breadCrumLink'>home</Link>
        <span className='breadCrumText'>{type}</span>
      </Breadcrumbs>
      <div className={classes.category}>
        <div className={classes.selectsContainer}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">categoty</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="categoty">
              {filterItems[0].items.map((category) => (
                <FormGroup key={category.name} sx={{ mx: 2 }}>
                  <FormControlLabel
                    control={<Checkbox checked={category.checked} />}
                    label={category.name}
                    onChange={(e) => {
                      console.log(e.target.checked);
                      dispatch({
                        type: 'category',
                        id: 1,
                        name: category.name,
                        checked: e.target.checked,
                        selectType: 'category'
                      });
                      
                    }}
                  />
                </FormGroup>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">color</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="color">
              {filterItems[1].items.map((color) => (
                <FormGroup key={color.name} sx={{ mx: 2 }}>
                  <FormControlLabel
                    control={<Checkbox checked={color.checked} />}
                    label={color.name}
                    onChange={(e) => {
                      dispatch({
                        type: 'check',
                        id: 2,
                        name: color.name,
                        checked: e.target.checked,
                        selectType: 'color'
                      });
                      
                    }}
                  />
                </FormGroup>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">size</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="size">
              {filterItems[2].items.map((size) => (
                <FormGroup key={size.name} sx={{ mx: 2 }}>
                  <FormControlLabel
                    control={<Checkbox checked={size.checked} />}
                    label={size.name}
                    onChange={(e) => {
                      dispatch({
                        type: 'check',
                        id: 3,
                        name: size.name,
                        checked: e.target.checked,
                        selectType: 'size'
                      });
                      
                    }}
                  />
                </FormGroup>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">sort by</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="sort by">
              {filterItems[3].items.map((sort) => (
                <FormGroup key={sort.name} sx={{ mx: 2 }}>
                  <FormControlLabel
                    control={<Checkbox checked={sort.checked} />}
                    label={sort.name}
                    onChange={(e) => {
                      dispatch({
                        type: 'sortby',
                        id: 4,
                        name: sort.name,
                        checked: e.target.checked,
                        selectType: 'sortby'
                      });
                      
                    }}
                  />
                </FormGroup>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      {(selectedItems.length > 0 || category !== '' || sortby !== '') && (
        <div className={classes.clear}>
          <div>
            {filterItems.map((select) =>
              select.items.map(
                (item) =>
                  item.checked && (
                    <Button
                      key={item.name}
                      sx={{ margin: '8px', fontSize: '10px' }}
                      variant="outlined"
                      onClick={() => {
                        closeFilter(select, item);
                      }}
                      endIcon={<CloseIcon />}
                    >
                      {item.name}
                    </Button>
                  )
              )
            )}
          </div>
          <div>
            <Button
              sx={{ fontSize: "10px", padding:"8px",whiteSpace: 'nowrap', marginRight: "8px" }}
              variant="contained"
              color="error"
              endIcon={<CloseIcon sx={{width: "16px", height: "16px"}} />}
              onClick={() => dispatch({ type: 'clear', id: 0, name: '' })}
            >
              clear all
            </Button>
          </div>
        </div>
      )}
      {data?.products?.length !== 0 ? (
        <>
          <Grid container spacing={2} marginTop="10px">
            {data?.products?.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product?._id}>
                <Product data={product} />
              </Grid>
            ))}
          </Grid>
          <div className={classes.paginationContainer}>
            <Pagination
              count={Math.ceil(data?.totalItems / 4)}
              shape="rounded"
              page={page}
              color="primary"
              onChange={(event, value) => setPage(value)}
            />
          </div>
        </>
      ) : (
        <EmptyState data="products" />
      )}
    </>
  );
};

export default Products;

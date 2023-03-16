import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ProductCard from './components/ProductCard';
import './App.css'

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    '& img': {
      marginRight: theme.spacing(2),
    },
    '& nav': {
      flexGrow: 1,
      '& ul': {
        display: 'flex',
        listStyle: 'none',
        '& li': {
          marginLeft: theme.spacing(2),
          '& a': {
            color: '#333',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
        },
      },
    },
    '& input[type="text"]': {
      padding: theme.spacing(1),
      border: '1px solid #ccc',
      borderRadius: theme.spacing(0.5),
      marginLeft: theme.spacing(2),
      '&:focus': {
        outline: 'none',
        borderColor: theme.palette.primary.main,
      },
    },
  },
  footer: {
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& ul': {
      display: 'flex',
      listStyle: 'none',
      '& li': {
        marginLeft: theme.spacing(2),
        '& a': {
          color: '#333',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
}));

function App() {
  const [products, setProducts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <header className={classes.header}>
        <img src="" alt="Ecommerce Site Logo" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
        <input type="text" placeholder="Search Products" />
      </header>
      <main>
        <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
          <Typography variant="h4" gutterBottom>Our Products</Typography>
          <Grid container spacing={2}>
            {products.map(product => (
              <Grid item xs={6} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </footer>
    </div>
  )
}
export default App

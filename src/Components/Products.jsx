import React from "react";
import { useNavigate } from "react-router-dom";

//Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function Products() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handlePage = () => {
    navigate("/carrito");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <>
      <Button size="small" onClick={handlePage}>
        Ir al carrito
      </Button>
      <Button onClick={handleClose}>
        <CloseIcon fontSize="small" color="inherit" />
      </Button>
    </>
  );

  return (
    <>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia component="img" height="140" image="" alt="product" />
        <CardContent>
          <h4>Titulo producto</h4>
          <p>
            Descripcion: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dicta quisquam velit quibusdam maiores reprehenderit qui,
            minima cum aspernatur magnam commodi necessitatibus. Libero quas
            incidunt deleniti.
          </p>
          <span>$200</span>
        </CardContent>
        <CardActions>
          <Button color="success" onClick={handleClick}>
            <ShoppingCartTwoToneIcon />
            <Snackbar
              open={open}
              onClose={handleClose}
              autoHideDuration={3000}
              message="¡Agregado al carrito!"
              action={action}
              disableWindowBlurListener={true}
            />
          </Button>
          <Button color="success">
            <ShareTwoToneIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Products;

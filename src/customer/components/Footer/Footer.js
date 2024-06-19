import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3} mt={3}>
          <Typography className="pb-5" variant="h6">
            About
          </Typography> 
          <div>
          <Button className="pb-2" variant="h6" gutterBottom>
            Contact Us
          </Button>
          </div>
          
          <div>
          <Button className="pb-2" variant="h6" gutterBottom>
            About Us
          </Button>
          </div>
          
          <div>
          <Button className="pb-2" variant="h6" gutterBottom>
            Career
          </Button>
          </div>

          <div>
          <Button className="pb-2" variant="h6" gutterBottom>
            Press
          </Button>
          </div>
          
          
        </Grid>

        <Grid item xs={12} sm={6} md={3} mt={3}>
          <Typography className="pb-5" variant="h6">
          {" "}
            Help{" "}
          </Typography> 
          <div>
          <Button className="pb-2" variant="h6" gutterBottom>
            Payments
          </Button>
          </div>
          
          <div>
          <Button className="pb-2" variant="h6" gutterBottom>
            Shipping
          </Button>
          </div>
          
          <div>
          <Button className="pb-2" variant="h6" gutterBottom>
            Cancellation & Returns
          </Button>
          </div>

          <div>
          <Button className="pb-2" variant="h6" gutterBottom>
            FAQ
          </Button>
          </div>
          
          
        </Grid>

        <Grid item xs={12} sm={6} md={3} mt={3}>
          <Typography className="pb-5" variant="h6">
          {" "}
            Documentation
          </Typography> 
          <div>
          <Button className="pb-2" variant="h6" gutterBottom>
            Guides
          </Button>
          </div>
          
          <div>
          <Button className="pb-2" variant="h6" gutterBottom>
            API Status
          </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3} mt={3}>
          <Typography className="pb-5" variant="h6">
          {" "}
            Legal{" "}
          </Typography> 
          <div>
          <Button className="pb-2" variant="h6" gutterBottom>
            Claim
          </Button>
          </div>
          
          <div>
          <Button className="pb-2" variant="h6" gutterBottom>
            Privacy
          </Button>
          </div>
          
          <div>
          <Button className="pb-2" variant="h6" gutterBottom>
            Terms
          </Button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 Company Name. All rights reserved. 
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made With love by Pritam.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by{' '}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

import React, { useState, useEffect } from "react";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";

import { ImageList, ImageListItem, ListSubheader } from "@mui/material/";
import Constants from "./AppConstant";
const CartPage = () => {
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState("Pay");

  let url = Constants.url;
  useEffect(() => {
    const getClientToken = async () => {
      try {
        const { data } = await axios.get(`${url}payment/api/getClientToken`);
        setClientToken(data.clientToken);
      } catch (error) {
        console.log(error);
      }
    };
    getClientToken();
  }, []);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post(`${url}payment/api/processPayment`, {
        paymentMethodNonce: nonce,
        amount: 100, // Replace this with the total amount to be charged
      });
      setLoading(false);
      localStorage.removeItem("cart"); // Clear the cart after successful payment
      setInstance(null); // Reset the Drop-in instance
      setAlert("Payment successful!"); // Show a success message
    } catch (error) {
      console.log(error);
      setLoading(false);
      setAlert("Payment failed!"); // Show an error message
    }
  };

  return (
    <div
      style={{
        justifyContent: "center",
        padding: "20px",
        backgroundImage: "linear-gradient(to right, #39ff6d , #701c1c)",
      }}
      className="container startpage App"
    >
      <div className="row">
        <div className="col-md-6">
          <h2></h2>
          {/* Render the items in the cart */}
          <div className="cart-items"></div>
        </div>
        <div className="col-md-6">
          <h2>ga!Kan mu$ic Premium</h2>
          <h6>
            {" "}
            Note - Use Valid Test Card Number from Braintree Payment Gateway
          </h6>
          {!clientToken ? (
            <p>Loading payment gateway...</p>
          ) : (
            <>
              {/* Render the Drop-in UI */}
              <DropIn
                options={{
                  authorization: clientToken,
                }}
                onInstance={(instance) => setInstance(instance)}
              />
              {/* Render the payment button */}
              <Button
                sx={{ margin: "20px" }}
                className="btn btn-primary "
                onClick={handlePayment}
                variant={
                  alert === "Payment successful!" ? "contained" : "outlined"
                }
                color={alert === "Payment successful!" ? "success" : "error"}
              >
                {loading
                  ? "Processing payment..."
                  : "Pay Now"
                  ? `${alert}`
                  : `${alert}`}
                {localStorage.setItem(
                  "myData",
                  JSON.stringify({ Token: alert })
                )}
              </Button>
              {alert === "Payment successful!" && (
                <ListSubheader className="subheader">
                  <h3>
                    <h2>Congratulation!!!</h2> Upload your Own Songs
                    Now.........
                  </h3>
                </ListSubheader>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;

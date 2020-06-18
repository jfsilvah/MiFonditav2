import axios from "axios";

export default {

  getCustomers: function () {
    return axios.get("/api/customers");
  },

  getCustomer: function (id) {
    return axios.get("/api/customers/" + id);
  },

  validateCustomerEmail: function (email) {
    return axios.get("/api/validateEmail/" + email);
  },

  saveCustomer: function (customerInfo) {
    return axios.post("/api/newCustomer", customerInfo);
  },

  updateCustomer: function (customerInfo) {
    return axios.put("/api/customers", customerInfo);
  },

  deleteCustomer: function (id) {
    return axios.delete("/api/customers/" +id);
  },

  getMenu: function (foodType) {
    return axios.get("/api/foods/" + foodType);
  },

  getOrders: function () {
    console.log("Entro a API de get orders");
    return axios.get("/api/orders");
  },

  getOrder: function (id) {
    return axios.get("/api/ordersDetail/"+id);
  },

  createOrder: function (orderInfo) {
    return axios.post("/api/orders/", orderInfo);
  },

  updateOrder: function (orderInfo) {
    return axios.put("/api/orders/", orderInfo);
  },
  deleteOrder: function (id) {
    return axios.delete("/api/orders/" + id);
  }
};
    
import api from "./api"; export const getServices = () => { return 
  api.get("/services");
};
export const createOrder = (order) => { return api.post("/orders", order);
};

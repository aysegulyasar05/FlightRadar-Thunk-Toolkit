import { configureStore } from "@reduxjs/toolkit";
import flightslice from "./slices/flightslice";

export default configureStore({reducer : flightslice});


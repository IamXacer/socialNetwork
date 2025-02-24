import React from "react";
import { store, RootState } from './redux/redux-store';

/*export const StoreContext = React.createContext(null)*/
export const StoreContext = React.createContext<RootState | null>(null);
import React from "react";
import {IStore} from "../interfaces/interfaces";

export const Context: React.Context<{ store: IStore, setStore: (argument: IStore) => void, setCompleteSectionIds: (argument: number[]) => void, completeSectionIds: number[] | any }> = React.createContext({
  setStore: ( argument: IStore ) => {},
  store: {
    foundation_count: 0,
    discovery_count: 0,
    delivery_count: 0,
    foundation_checked_count: 0,
    discovery_checked_count: 0,
    delivery_checked_count: 0
  },
  setCompleteSectionIds: (argument: number[]) => {},
  completeSectionIds: []
});

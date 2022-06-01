import React from "react";
import {IContent} from "../interfaces/interfaces";

// @ts-ignore
export const Context: React.Context<{ store: Array<IContent>, setStore?: (argument: IContent[]) => void }> = React.createContext({
  store: [{
    id: 1,
    title: "Foundation",
    list: [{ id: 1, title: "Setup virtual office", isChecked: false }]
  }],
  setStore: (argument: IContent[]) => {}
});

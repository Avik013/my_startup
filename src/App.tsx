import React from "react";
import {IContent, IStore} from "./interfaces/interfaces";
import { Section } from "./Components/section/Section";
import {preDefinedStoreBuilder} from "./utils/Helpers";
import { Context } from "./context/Context";
import "./App.scss";
const content: IContent[] = [
  {
    id: 1,
    title: "Foundation",
    list: ["Setup virtual office", "Set mission & vision", "Select business name", "Buy domains"]
  },
  {
    id: 2,
    title: "Discovery",
    list: ["Create Roadmap", "Competitor Analysis"]
  },
  {
    id: 3,
    title: "Delivery",
    list: ["Release marketing website", "Release MVP"]
  }
];

const preDefinedStore: IStore = preDefinedStoreBuilder(content);

function App() {
  const [store, setStore] = React.useState<IStore>(preDefinedStore);
  const [completeSectionIds, setCompleteSectionIds] = React.useState<number[]>([]);

  return (
    <div className={"my_startup_progress__box"}>
      <Context.Provider value={{ store: store, setStore: setStore, setCompleteSectionIds, completeSectionIds }}>
        <div className={"my_startup_progress__body"}>
          <h4>My Startup Progress</h4>
          {
            content.map((item: IContent) => (
              <Section
                key = {item.id}
                id = {item.id}
                title = {item.title}
                list = {item.list}
              />
            ))
          }
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;

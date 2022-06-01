import React from 'react';
import {Context} from "./context/Context";
import {Section} from "./Components/section/Section";
import {IContent} from "./interfaces/interfaces"
import './App.scss';

let storedData: string | null = localStorage.getItem("data");
let preDefinedStore: IContent[];
const content: IContent[] = [
  {
    id: 1,
    title: "Foundation",
    list: [
      {
        id: 1,
        title: "Setup virtual office",
        isChecked: false
      },
      {
        id: 2,
        title: "Set mission & vision",
        isChecked: false
      },
      {
        id: 3,
        title: "Select business name",
        isChecked: false
      },
      {
        id: 4,
        title: "Buy domains",
        isChecked: false
      }
    ]
  },
  {
    id: 2,
    title: "Discovery",
    list: [
      {
        id: 1,
        title: "Create Roadmap",
        isChecked: false
      },
      {
        id: 2,
        title: "Competitor Analysis",
        isChecked: false
      }
    ]
  },
  {
    id: 3,
    title: "Delivery",
    list: [
      {
        id: 1,
        title: "Release marketing website",
        isChecked: false
      },
      {
        id: 2,
        title: "Release MVP",
        isChecked: false
      }
    ]
  }
];
if (storedData)
{
  preDefinedStore = JSON.parse(storedData);
}
else
{
  localStorage.setItem("data", JSON.stringify(content));
  preDefinedStore = content;
}

function App() {
  const [store, setStore] = React.useState<IContent[]>(preDefinedStore);
  return (
    <div className={"my_startup_progress__box"}>
      <Context.Provider value={{
        store: store,
        setStore: setStore,
      }}>
        <div className={"my_startup_progress__body"}>
          <h4>My Startup Progress</h4>
          {store.map((item: IContent) => (
            <Section
              key = {item.id}
              id = {item.id}
              list = {item.list}
              title = {item.title}
            />
          ))
          }
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;

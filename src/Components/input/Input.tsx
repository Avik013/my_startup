import React from "react";
import {IContent, IContentItem, IInput} from "../../interfaces/interfaces";
import {Context} from "../../context/Context";
import {dataRefresher} from "../../utils/Helpers";

export const Input: React.FC<IInput> = (props: IInput) => {
  const context = React.useContext(Context);

  const inputChangeHandler = (inputId: number): void =>
  {
    const previousStore = context.store;
    previousStore[props.sectionId - 1].list[inputId - 1].isChecked = !previousStore[props.sectionId - 1].list[inputId - 1].isChecked;
    for (let i: number = props.sectionId; i < previousStore.length; i++)
    {
      previousStore[i].list.forEach((item: IContentItem) => item.isChecked = false);
    }
    localStorage.setItem("data", JSON.stringify(previousStore));
    // @ts-ignore
    context.setStore([...previousStore]);
    if (alertHandler(previousStore))
    {
      fetch("https://uselessfacts.jsph.pl/random.json")
        .then(response => response.json())
        .then(data => alert(data.text))
        .then(() => {
          // @ts-ignore
          context.setStore(dataRefresher(previousStore))
        })
    }
  }

  const disableHandler = (): boolean =>
  {
    let disabled: boolean = false;
    if (props.sectionId === 1)
    {
      return false;
    }

    for (let i: number = 0; i < props.sectionId - 1; i++)
    {
      for (let j = 0; j < context.store[i].list.length; j++)
      {
        if (!context.store[i].list[j].isChecked)
        {
          disabled = true
        }
      }
    }
    return disabled;
  }

  const alertHandler = (store: IContent[]): boolean =>
  {
    let isFinished: boolean = true;

    for (let i: number = 0; i < store.length; i++)
    {
      for (let j = 0; j < context.store[i].list.length; j++)
      {
        if (!context.store[i].list[j].isChecked)
        {
          isFinished = false;
        }
      }
    }
    return isFinished;
  }

  return (
    <label className="item__label">
      <input
        type={"checkbox"}
        className="item__checkbox"
        onChange={() => inputChangeHandler(props.id)}
        checked={props.isChecked}
        disabled={disableHandler()}
      />
      {props.title}
    </label>
  )
}

import {IContent} from "../interfaces/interfaces";

export const dataRefresher = (store: IContent[]): IContent[] =>
{
  for (let i: number = 0; i < store.length; i++)
  {
    for (let j = 0; j < store[i].list.length; j++)
    {
      store[i].list[j].isChecked = false;
    }
  }
  return store;
}

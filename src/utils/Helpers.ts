import {IContent} from "../interfaces/interfaces";

export const preDefinedStoreBuilder = (content: IContent[]) =>
{
  return content.reduce((acc: any, item: IContent) => {
    return Object.assign(acc, {[`${item.title.toLowerCase()}_count`]: item.list.length, [`${item.title.toLowerCase()}_checked_count`]: 0})
  }, {});
}

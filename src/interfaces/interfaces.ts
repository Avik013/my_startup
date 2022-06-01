export interface IContent {
  id: number,
  title: string;
  list: IContentItem[]
}

export interface IContentItem {
  id: number;
  title: string;
  isChecked: boolean;
}

export interface ISection extends IContent {};

export interface IInput extends IContentItem{
  sectionId: number;
}

export interface IContent {
  id: number,
  title: string;
  list: string[]
}

export interface IStore {
  foundation_count: number;
  discovery_count: number;
  delivery_count: number;
  foundation_checked_count: number;
  discovery_checked_count: number;
  delivery_checked_count: number;
}

export interface ISection extends IContent {};

export interface IInput {
  title: string;
  section_name: string;
  section_id: number;
}

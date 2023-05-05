export interface fileInterface {
  type?: string;
  name?: string;
  added?: string;
  size?: number;
  subFiles?: fileInterface[];
}

export interface fileExplorerInterface {
  items: fileInterface[];
}

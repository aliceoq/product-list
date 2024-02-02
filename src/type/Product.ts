export interface Product {
  ProductID: number;
  Name: string;
  Price: number;
  "Retail Price": number;
  ThumbnailURL: string;
  PictureURL: string;
  Description: string;
  Category: string;
  CategoryID: number;
  Brand: string;
  Color: string;
  Badges: string;
  RatingAvg?: number;
  "Rating Avg"?: number;
  RatingCount?: number;
  "Rating Count"?: number;
  Stock: number;
  DateCreated: string;
}

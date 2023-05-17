export interface BlogItemCardType {
  photo: string;
  heading: string;
  description: string;
  date: string;
  author: BlogAuthorType;
}

export interface BlogAuthorType {
  photo: string;
  firstName: string;
  lastName: string;
}

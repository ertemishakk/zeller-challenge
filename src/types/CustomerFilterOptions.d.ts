interface CustomerFilterOptions {
  ne?: String;
  eq?: String;
  le?: String;
  lt?: String;
  ge?: String;
  gt?: String;
  contains?: String;
  notContains?: String;
  between?: [String];
  beginsWith?: String;
}

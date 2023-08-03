/** @format */

import { String, Union } from "ts-toolbelt";

const query = `/home?name=vominhkha&age=22`;

type Query = typeof query;

type SecondQueryPart = String.Split<Query, "?">[1]; //"name=vominhkha&age=22"

type QueryElement = String.Split<SecondQueryPart, "&">; // ["name=vominhkha", "age=22"]

type QueryParams = {
  [Q in QueryElement[number]]: {
    [K in String.Split<Q, "=">[0]]: String.Split<Q, "=">[1];
  };
}[QueryElement[number]];

const objQueryResult: Union.Merge<QueryParams> = {
  name: "vominhkha",
  age: "22",
};
console.log(objQueryResult);

export type LiteralType<T> = T extends string
	? "string"
	: T extends number
	? "number"
	: T extends boolean
	? "boolean"
	: T extends null
	? "null"
	: T extends undefined
	? "undefined"
	: never;

  type Res1 = LiteralType<"linbudu">; // "string"
  type Res2 = LiteralType<599>; // "number"
  type Res3 = LiteralType<true>; // "boolean"
  type Res4 = LiteralType<null>;
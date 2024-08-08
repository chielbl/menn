// Schemas
import "./schemas/http-responses.tsp";

import "@typespec/http";
import "@typespec/openapi";

using TypeSpec.Http;
using TypeSpec.OpenAPI;


// Definded more complex id type that mostly use for mongodb
@pattern("^[0-9a-fA-F]{24}$")
@example("66b110c33b57a8e773000001")
scalar objectId extends string;

// @pattern("(?:[0-9]{4}-[0-9]{2}-[0-9]{2}(?:[Tt][0-9]{2}:[0-9]{2}:[0-9]{2}(?:[Zz]|[+-][0-9]{2}:[0-9]{2})?)?)?$")
// @example("2024-08-08T14:30:00Z")
// scalar date extends string;

// Defined a standard id type that all models can use
scalar id extends string;


interface Routes<T> {
  @get
  GetAll(): T[] | Error;

  @get
  Get(@path id: string): T | NotFound | Error;

  @post
  Create(@body item: T): T | BadRequest | Error;

  @delete
  Delete(@path id: string): T | NoContent | Error;

  @put
  Update(@path id: string, @body item: T): T | BadRequest | Error;
}

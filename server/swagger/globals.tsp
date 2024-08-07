// Schemas
import "./schemas/error.tsp";

import "@typespec/http";
import "@typespec/openapi";

using TypeSpec.Http;
using TypeSpec.OpenAPI;


// Definded more complex id type that mostly use for mongodb
@pattern("^[0-9a-fA-F]{24}$")
@example("66b110c33b57a8e773000001")
scalar objectId extends string;

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
  Delete(@path id: string): T | NotFound | Error;

  @put
  Update(@path id: int32, @body item: T): T | BadRequest | Error;
}

// Models
import "./models/Error.tsp";

import "@typespec/http";
import "@typespec/openapi";

using TypeSpec.Http;
using TypeSpec.OpenAPI;


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

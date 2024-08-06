// Globals  
import "./globals.tsp";

// Models
import "./models/Error.tsp";
import "./models/Product.tsp";

import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi";
import "@typespec/versioning";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using TypeSpec.OpenAPI;

@info({
  description: "This is a shop API",
  contact: {
    name: "Chiel Bleyenbergh",
  },
})

@service({
  title: "Product Service",
})
@server("http://localhost:8000", "Server")

namespace Shop;

// Routes
@tag("Product")
@route("api/products")
interface Products extends Routes<Product> {}
// interface Products {
//   @get
//   GetAll(): Product[] | Error;

//   @get
//   Get(@path id: string): Product | Error;

//   @post
//   Create(@body item: Product): Product | Error;

//   @delete
//   Delete(@path id: string): string  | Error;
  
//   @put
//   Update(@path id: string, @body item: Product): string | Error;
// }

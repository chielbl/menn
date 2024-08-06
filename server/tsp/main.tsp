import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi";
import "@typespec/versioning";
// import "./common.tsp";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using TypeSpec.OpenAPI;

@service({
  title: "Product Service",
})
@server("http://localhost:8000", "Server")
namespace Product;

@error
model Error {
   code: string;
   message: string;
}

model Product {
@visibility("read","update") 
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: float;
}

@tag("Product")
@route("api/products")
interface Products {
  @get getAll(): Product[] | Error;
  @get get(@path id: string): Product | Error;
  @post create(@body item: Product): Product | Error;
  @delete delete(@path id: string): string  | Error;
  @put update(@path id: string, @body item: Product): string | Error;
}

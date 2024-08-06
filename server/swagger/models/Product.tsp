import "@typespec/http";

using TypeSpec.Http;

model Product {
  @visibility("read","update") 
  id: string;

  @minLength(1)
  @maxLength(20)
  name: string;

  @minLength(1)
  @maxLength(100)
  description: string;

  category: string;
  image: string;
  price: float;
}

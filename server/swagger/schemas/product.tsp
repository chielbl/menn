// Globals
import "../globals.tsp";

// Schemas
import "./meta.tsp";
import "./review.tsp";
import "./category.tsp";
import "./availabilityStatus.tsp";

import "@typespec/http";

using TypeSpec.Http;


model Product {
  @visibility("read","update") 
  id: objectId;

  @minLength(1)
  @maxLength(20)
  @example("Original Cookie")
  name: string;

  @minLength(1)
  @maxLength(100)
  @example("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
  description: string;

  category: Category;

  @minValue(0)
  @example(9.99)
  price: float;

  @minValue(0)
  @example(0)
  discountPercentage: float;

  @minValue(0)
  @maxValue(5)
  @example(0)
  rating: float;

  @minValue(0)
  @example(0)
  stock: integer;

  availabilityStatus: AvailabilityStatus;

  thumbnail: string;

  images: string[];

  reviews: Review[];

  @visibility("read")
  meta: Meta;
}

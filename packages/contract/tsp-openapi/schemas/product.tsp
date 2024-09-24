// Globals
import "../globals.tsp";

// Schemas
import "./meta.tsp";
import "./review.tsp";
import "./category.tsp";
import "./availability-status.tsp";

import "@typespec/http";

using TypeSpec.Http;


model Product {
  @visibility("read") 
  id: objectId;

  @minLength(1)
  @maxLength(128)
  @example("Original Cookie")
  name: string;

  @minLength(1)
  @maxLength(255)
  @example("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
  description: string;

  category: Category;

  @minValue(0)
  @example(9.99)
  price: float;

  @minValue(0)
  @example(0)
  discountPercentage: float;

//   @minValue(0)
//   @maxValue(5)
//   @example(0)
//   rating: float;

  @minValue(0)
  @example(0)
  stock: float;

  availabilityStatus: AvailabilityStatus;

  thumbnail: string;

  images: string[];

  reviews: Review[];

  ...Meta;
  // @doc("The date & time the resources was created")
  // @visibility("read","query")
  // createdAt: utcDateTime;

  // @doc("The date & time åthe resources was last updated")
  // @visibility("read","query")
  // updatedAt: utcDateTime;
}

import "@typespec/http";

using TypeSpec.Http;


@example(AvailabilityStatus.`Low Stock`)
enum AvailabilityStatus {
  "In Stock",
  "Low Stock",
  "Out of Stock",
}

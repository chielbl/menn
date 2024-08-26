// Schemas
import "./paginated-meta.tsp";

model PaginatedData<T> {
  meta:PaginatedMeta;
  
  @example(#[])
  data: T[];

}

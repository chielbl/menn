model PaginatedMeta {
  @example(1)
  page: integer;

  @example(10)
  pageSize: integer;

  @example(100)
  total: integer;

  @example(10)
  totalPages: integer;

  @example(1)
  nextPage: integer;

  @example(1)
  prevPage: integer;

  @example(10)
  curPage: integer;
}

model PaginatedData<T> {
  meta: PaginatedMeta;

  @example(#[])
  data: T[];
}

model PaginatedMeta {
  @example(1)
  page: integer;

  @example(10)
  
  pageSize: integer;

  @example(100)
  total: integer;

  @example(10)
  totalPages: integer;

  @example(false)
  hasNextPage: boolean;

  @example(true)
  hasPrevPage: boolean;
}

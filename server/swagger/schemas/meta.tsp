model Meta {
  @doc("The date & time the resources was created")
  @visibility("read")
  createdAt: utcDateTime;

  @doc("The date & time the resources was last updated")
  @visibility("read")
  updatedAt: utcDateTime;
}

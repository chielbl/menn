model Review{
  @minValue(1)
  @maxValue(5)
  @example(1)
  rating: float;

  @minLength(1)
  @maxLength(100)
  @example("Very unhappy with my purchase!")
  comment: string;

  date: utcDateTime;

  @example("John Doe")
  reviewerName: string;

  @example("john.doe@test.com")
  reviewerEmail: string;
}

import type { Request, Response } from 'express';

export type Req<T> = Request<{ body: T }>;
export type Res<T> = Response<{ data: T } | { error: string }>;
// export type { Request };
// export type { Response };

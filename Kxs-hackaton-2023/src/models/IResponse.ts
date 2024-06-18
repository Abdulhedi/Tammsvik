export interface IResponse<T> {
    status?: number;
    data: {
      result?: T;
      error?: {
        message?: string;
      };
    };
}
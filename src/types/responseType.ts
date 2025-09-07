export interface ErrorStructure {
  field: string;
  message: string;
}

export interface APIResponse {
  content: any;
  message: string;
  errors: ErrorStructure[];
}

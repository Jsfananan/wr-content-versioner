export interface OfficeDirector {
  name: string;
  title: string;
  email: string;
  phone: string;
}

export interface OfficeConfig {
  id: string;
  name: string;
  director: OfficeDirector;
  localFocus: string[];
  preferredBibleVerses: string[];
  toneNotes: string;
  signatureBlock: string;
  localContext: string;
  audienceNotes: string;
  active: boolean;
}

export type ContentType = 'email' | 'invitation';

export interface VersionRequest {
  content: string;
  contentType: ContentType;
  officeIds: string[];
  additionalInstructions?: string;
}

export interface VersionResult {
  officeId: string;
  officeName: string;
  directorName: string;
  content: string;
}

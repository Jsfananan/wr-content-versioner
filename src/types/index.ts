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

export interface Adaptation {
  text: string;           // The adapted text snippet
  reason: string;         // Which office config field drove this (e.g., "Director tone: pastoral and warm")
  configSource: string;   // Short label like "Tone", "Local Focus", "Bible Verse", "Signature", "Audience", "Local Context"
}

export interface KeepInMind {
  type: 'warning' | 'info' | 'suggestion';
  message: string;
}

export interface VersionResult {
  officeId: string;
  officeName: string;
  directorName: string;
  directorEmail: string;
  content: string;
  adaptations: Adaptation[];
  keepInMind: KeepInMind[];
}

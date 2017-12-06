// This file is automatically generated from the JsonMapper for type IntegrationRequiredField.
// Modifying the mapper and reloading the page will update this file.

export const REQUEST_INTEGRATION_REQUIRED_FIELD_FIELDS = [

]

export const RESPONSE_INTEGRATION_REQUIRED_FIELD_FIELDS = [
  'tag',
  'anyTag',
  'allTags'
]

export class RequestIntegrationRequiredField {

}

export class ResponseIntegrationRequiredField {
  /** Matches a field that has this tag. */
  tag: string | null
  /** If present, supercedes 'tag' and matches a field that has any of the provided tags. */
  anyTag: string[] | null
  /** If present, supercedes 'tag' and matches a field that has all of the provided tags. */
  allTags: string[] | null
}

export class WireRequestIntegrationRequiredField {

}

/* tslint:disable:variable-name */
export class WireResponseIntegrationRequiredField {
  /** Matches a field that has this tag. */
  tag: string | null
  /** If present, supercedes 'tag' and matches a field that has any of the provided tags. */
  any_tag: string[] | null
  /** If present, supercedes 'tag' and matches a field that has all of the provided tags. */
  all_tags: string[] | null
}
/* tslint:enable:variable-name */

/**
 * Represents a user from MLH as returned by the /user endpoint after OAuth.
 */
export interface MLHUser {
  id: string;
  // eslint-disable-next-line camelcase
  first_name: string;
  // eslint-disable-next-line camelcase
  last_name: string;
  email: string;
  major: string;
  // eslint-disable-next-line camelcase
  date_of_birth: string;
  // eslint-disable-next-line camelcase
  phone_number: string;
  // eslint-disable-next-line camelcase
  level_of_study: string;
  school: {
    id: number;
    name: string;
  }
}

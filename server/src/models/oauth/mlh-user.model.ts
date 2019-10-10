/**
 * Represents a user from MLH as returned by the /user endpoint after OAuth.
 */
export interface MLHUser {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    major: string;
    date_of_birth: string;
    phone_number: string;
    level_of_study: string;
    school: {
        id: number;
        name: string;
    }
}


/**
 * AuthorService 
 * Responsible for fetching external data and provide it
 * to the ViewComponent.
 */
export class AuthorService {
    getAuthors(): string[] {
        return ['Author1', 'Author2', 'Author3'];
    }
}
import {Component} from 'angular2/core'
import {AuthorService} from './Services/author.service';  // Import of the service (for dependency injection)

// ********Component decorator pattern start ******** //
@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        {{ title }}
        <ul>
            <li *ngFor="#author of authors">
                {{ author }}
            </li>
        </ul>
    `,
    providers: [AuthorService] // The dependency injection
})
// ******** Component decorator pattern end ******** //
export class AuthorComponent {
    title = "This is the authors page";
    authors: string[];
    
    /**
     * AuthorComponent constructor
     * Imports the data from the AuthorService and renderes it into the 
     * component template.
     * 
     * Setting the AuthorService as a parameter makes this constructor
     * less bound to possible future changes of AuthorService´ properties
     * as it only needs an instance of the class when created like this.
     */ 
    constructor(authorSerice: AuthorService) { // The dependency injection
        this.authors = authorSerice.getAuthors();
    }
    
    /**
     * If it was written something like this:
     * constructor() {
     *      this.authors = new AuthorService();
     *  }    
     * This file would break if another property is
     * added to the AuthorService class
     */
}
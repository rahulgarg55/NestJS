import {Controller, Delete, Get, Put, Post} from "@nestjs/common"


@Controller('book')
export class BookController {
//add book 

@Post('/add')
addBook(): string {
    return 'This will add a book';
}

//delete book   
@Delete('/delete')
deleteBook(): string {
    return 'This is for deleting book';
}

@Put("/update")
updateBook(): string{
    return "this will update book"; 
}
@Get("/find")  
findAllBooks(): string{
    return "This will find all books";  
}


}
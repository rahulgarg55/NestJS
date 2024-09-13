import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { ChatModule } from './chat.module';
import { OrderModule } from './orders.module';
import { BookController } from './app.controller';

@Module({
  imports: [UsersModule, OrderModule, ChatModule],
  controllers: [BookController],
  providers: [],
  exports: []
})
export class RootModule {
constructor() {
  console.log('App Module');    
}
}
import { Module } from '@nestjs/common';
import { Feature3 } from './feature3.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [Feature3, UsersModule],
  controllers: [],
  providers: [],
  exports: []
})
export class ChatModule {
constructor() {
  console.log('Chat Module');    
}
}
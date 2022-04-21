import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import pgConfig from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(pgConfig), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

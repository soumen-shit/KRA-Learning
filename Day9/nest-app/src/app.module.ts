import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/entities/book.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/entities/profile.entity';
import { OrderModule } from './order/order.module';
import { Order } from './order/entities/order.entity';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { Student } from './student/entities/student.entity';
import { Course } from './course/entities/course.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'soumen',
      database: 'NEST_DB',
      entities: [Book, User, Profile, Order, Student, Course],
      migrations: [],
      synchronize: true,
    }),
    BookModule,
    UserModule,
    ProfileModule,
    OrderModule,
    StudentModule,
    CourseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

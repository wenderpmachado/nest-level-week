import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repository: MongoRepository<User>,
  ) {}

  async findOneByEmail(email: string): Promise<User | false> {
    const user = await this.repository.findOne({ email });

    return user ?? false;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { name, email } = createUserDto;

    const user = await this.findOneByEmail(email);

    if (user) {
      return user;
    }

    const createUser = this.repository.create({ name, email });

    const result = await this.repository.insertOne(createUser);

    const [userCreated] = result.ops;

    return userCreated;
  }
}

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export default () =>
  ({
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    entities: [join(__dirname, '..', '*.entity.{ts,js}')],
    autoLoadEntities: true,
    synchronize: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  } as TypeOrmModuleOptions);

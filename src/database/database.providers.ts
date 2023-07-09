
import { Sequelize } from 'sequelize-typescript';
import { User } from '../modules/users/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'admin',
        database: 'nest-course'
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
import 'dotenv/config'
import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

class User extends Model {
  declare id: number;
  declare name: string;
  declare lastName: string;
  declare password: string;
  declare email: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  lastName: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  password: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  email: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  }
}, {
  tableName: 'users',
  sequelize, // passing the `sequelize` instance is required
});

async function testDatabase() {
  await sequelize.sync({ force: true });
  const newUser = await User.create({
    name: 'Johnny',
    lastName: 'Bravo',
    password: '123456',
    email: 'johnny@bravo.com'
  });
  console.log(`User ${newUser.name} created with id ${newUser.id}`);

  const foundUser = await User.findOne({ where: { name: 'Johnny' } });
  if (foundUser === null) return;
  console.log(foundUser.name);
}

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return testDatabase();
  })
  .then(() => {
    console.log('Test database operation completed successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

export default sequelize;


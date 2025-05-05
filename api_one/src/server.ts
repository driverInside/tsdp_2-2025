import 'dotenv/config';
import sequelize from './db/datadase';
import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);

  await sequelize
    .authenticate();
  
    console.log('Connection has been established successfully.');
});

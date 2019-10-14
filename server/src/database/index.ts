import mongoose from 'mongoose';

export const DBAddr: string = process.env.DB_ADDRESS || '127.0.0.1:27017';
export const DBName: string = process.env.DB_NAME || 'comet-crate-essentials';

class Database {
  constructor() {
    Database.connect();
  }

  private static connect() {
    mongoose.connect(`mongodb://${DBAddr}/${DBName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => {
        console.log('Database Connected.');
      })
      .catch((err) => {
        console.error('Failed to connect to database.');
        throw err;
      });
  }
}

export default new Database();

import mongoose, { Connection, Mongoose } from 'mongoose';

export const DBAddr: string = process.env.DB_ADDRESS || '127.0.0.1:27017';
export const DBName: string = process.env.DB_NAME || 'comet-crate_essentials';

class Database {
  private static mongooseInstance: Mongoose;

  constructor() {
    Database.connect();
  }

  private static connect() {
    mongoose.connect(`mongodb://${DBAddr}/${DBName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then((mongooseInstance) => {
        console.log('Database Connected.');
        this.mongooseInstance = mongooseInstance;
      })
      .catch((err) => {
        console.error('Failed to connect to database.');
        throw err;
      });
  }

  public getConnection(): Connection {
    return mongoose.connection;
  }
}

export default new Database();

import 'dotenv/config';
import { connectToDatabase } from './database/mongoose';

async function main() {
    try {
        await connectToDatabase();
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

main();
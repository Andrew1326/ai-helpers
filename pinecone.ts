const dotenv = require('dotenv');
import { Pinecone } from '@pinecone-database/pinecone';

dotenv.config();

const { PINECONE_API_KEY, PINECONE_ENVIRONMENT } = process.env;

const pinecone = new Pinecone({
  apiKey: PINECONE_API_KEY,
  environment: PINECONE_ENVIRONMENT,
});

export default pinecone;

import pinecone from '../pinecone';
import { Document } from '@langchain/core/documents';
import getVectorStore from './getVectorStore';

export interface IDocPayload {
  pageContent: string;
  metadata?: object;
}

export interface IInsertIntoVectorStorePayload {
  index: string;
  items: IDocPayload[];
}

const insertIntoVectorStore = async ({
  index,
  items,
}: IInsertIntoVectorStorePayload) => {
  const pineconeIndex = pinecone.Index(index);

  // get vector store
  const vectorStore = await getVectorStore(pineconeIndex);

  // create documents from items
  const docs = items.map((el) => new Document(el));

  // add documents into vector store
  const ids = await vectorStore.addDocuments(docs);

  return ids;
};

export default insertIntoVectorStore;

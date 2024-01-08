import pinecone from '../pinecone';
import { DocumentInterface } from '@langchain/core/documents';
import getVectorStore from './getVectorStore';

export interface ISimilaritySearchPayload {
  index: string;
  query: string;
  k?: number;
  filter?: object;
}

const similaritySearch = async ({
  index,
  query,
  k,
  filter,
}: ISimilaritySearchPayload): Promise<
  DocumentInterface<Record<string, any>>[]
> => {
  const pineconeIndex = pinecone.Index(index);

  // get vector store
  const vectorStore = await getVectorStore(pineconeIndex);

  // get items that match query
  const results = await vectorStore.similaritySearch(query, k, filter);

  return results;
};

export default similaritySearch;

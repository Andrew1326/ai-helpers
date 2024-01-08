import pinecone from '../pinecone';
import getVectorStore from './getVectorStore';

export interface IMaximalMarginalRelevancePayload {
  index: string;
  query: string;
  k: number;
  fetchK: number;
  filter?: object;
}

const maximalMarginalRelevanceSearch = async ({
  index,
  query,
  k,
  fetchK,
  filter,
}: IMaximalMarginalRelevancePayload) => {
  const pineconeIndex = pinecone.Index(index);

  // get vector store
  const vectorStore = await getVectorStore(pineconeIndex);

  // get items that match query from any side
  const results = await vectorStore.maxMarginalRelevanceSearch(query, {
    k,
    fetchK,
    filter,
  });

  return results;
};

export default maximalMarginalRelevanceSearch;

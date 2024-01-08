import pinecone from '../pinecone';
import getVectorStore from './getVectorStore';

export interface IDeleteFromVectorStore {
  index: string;
  ids: string[];
}

const deleteFromVectorStore = async ({
  index,
  ids,
}: IDeleteFromVectorStore) => {
  const pineconeIndex = pinecone.Index(index);

  // get vector store
  const vectorStore = await getVectorStore(pineconeIndex);

  // delete records by ids
  const result = await vectorStore.delete({
    ids,
  });

  return result
};

export default deleteFromVectorStore;

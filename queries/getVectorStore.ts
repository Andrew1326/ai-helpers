import { OpenAIEmbeddings } from '@langchain/openai';
import { PineconeStore } from '@langchain/community/vectorstores/pinecone';
import { Index, RecordMetadata } from '@pinecone-database/pinecone';

const getVectorStore = async (index: Index<RecordMetadata>) => {
  const vectorStore = await PineconeStore.fromExistingIndex(
    new OpenAIEmbeddings(),
    { pineconeIndex: index },
  );

  return vectorStore
};

export default getVectorStore;

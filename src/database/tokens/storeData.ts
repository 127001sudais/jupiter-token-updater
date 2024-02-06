import { insertToken } from "./tokenInsertion";
import { selectToken } from "./tokenSelection";

export async function storeData(data: any[]): Promise<any[]> {
  console.log("⏳⌛⏳ Checking and storing data...");

  let newTokensInserted: any[] = [];

  const checkPromises = data.map(async (token) => {
    const existingToken = await selectToken(token);
    if (!existingToken) {
      await insertToken(token);
      newTokensInserted.push(token);
    }
  });

  try {
    await Promise.all(checkPromises);
    console.log(`✅ ${newTokensInserted.length} new tokens 🪙 stored successfully, excluding duplicates.`);
    console.log('Newly listed tokens:', newTokensInserted);
  } catch (error) {
    console.error("❌ Error during data processing:", error);
    throw error;
  }

  return newTokensInserted;
}
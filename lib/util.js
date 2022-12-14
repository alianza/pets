export default async function findAndSerializeDoc(model, operation, query, options = {}) {
  const result = await operation.bind(model)(query, options).lean();
  return JSON.parse(JSON.stringify(result));
}

export const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const environment = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space,
  environment,
  accessToken,
})

export async function fetchEntries() {
  const entries = await client.getEntries()
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries }

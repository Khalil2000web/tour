import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'tznuew2h', // replace with your real project ID
  dataset: 'production',
  useCdn: true
});

export default client;

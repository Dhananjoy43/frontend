import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion: process.env.SANITY_API_VERSION,
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    useCdn: false,
});


const builder = imageUrlBuilder(client)
export const imageUrlFor = (source: string) => {
    return builder.image(source)
}


export const getFileUrl = (ref: string) => {
    const [_file, id, extension] = ref.split('-');
    return `https://cdn.sanity.io/files/${process.env.SANITY_PROJECT_ID}/${process.env.SANITY_DATASET}/${id}.${extension}`
}
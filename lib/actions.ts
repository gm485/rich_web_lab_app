import {NextRequest} from 'next/server'
import {db, authenticate} from '@/lib/database'
import { getProduct } from '@/app/types/Product'
import { auth } from '@clerk/nextjs/server';

export async function createPost(formData: FormData) {
  'use server'
  const session = await auth()

  const title = formData.get('title')
  const content = formData.get('content')

  // Mutate data
  // Revalidate cache
}


export async function deletePost(formData: FormData) {
  'use server'
  const db = await authenticate()

  const id = formData.get('id')

  // Verify the user owns this resource before deleting
  // Mutate data
  // Revalidate cache
}


export async function getProducts(){
  "use server"
  try{
    const {userId} = await auth();
    
    if (!userId) throw new Error("Unauthorized");

    await authenticate();

    return db.collection('Products').getFullList({
    sort: '-Name',


}); 

  }
  catch(err){
    console.log(err)

  } 
}

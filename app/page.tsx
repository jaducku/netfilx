import { Button } from '@/components/ui/button'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { authOptions } from './utils/auth'

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className='m-5'>
        <Button>Hello from shadcn/ui</Button>
        <h1>{session?.user?.name}</h1>
    </div>
  )
}

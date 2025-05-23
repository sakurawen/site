import Link from 'next/link';
import { Social } from '~/components/features/social';
import { Button } from '~/components/theme/button';
import { PageContainer } from '~/components/theme/page-container';

export default function Home() {
  return (
    <PageContainer className='home overflow-hidden container  mx-auto '>
      <div className='min-h-screen flex flex-col w-full justify-center space-y-8 items-center '>
        <div className='size-24 rounded-full bg-zinc-50'>
          <img src='https://avatars.githubusercontent.com/u/35162226?v=4' className='w-full shadow-xl object-contain shrink-0 pointer-events-none rounded-full' alt='avatar' />
        </div>
        <div className='flex flex-col items-center justify-center space-y-8'>
          <div className='text-center '>
            <h1 className='text-xl mb-4'>
              Wen's Blog
            </h1>
            <p className='text-base max-w-xs text-balance text-gray-600'>
              I am a Node.js developer. Currently, I don't have more to introduce about myself.
            </p>
          </div>
          <Social />
          <Link href='/blog'>
            <Button size='lg' className='px-8 rounded-full'>Blog</Button>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}

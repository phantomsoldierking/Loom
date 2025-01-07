import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <main className="flex flex-row h-screen w-full items-center justify-between px-80">
        <div className='flex  bg-indigo-950 rounded-xl px-10 py-56' item-center>
            <h1 className='font-bold text-9xl text-lime-400'>Yoom</h1>
        </div>
        
      <SignUp />
    </main>
  );
}   
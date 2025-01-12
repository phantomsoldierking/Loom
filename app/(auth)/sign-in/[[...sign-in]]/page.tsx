import { SignIn } from '@clerk/nextjs';

export default function SiginInPage() {
  return (
        <SignIn 
          routing='hash'
        />

  );
}
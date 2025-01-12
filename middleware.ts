// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const protectedRoute = createRouteMatcher([
//   '/',
//   '/upcoming',
//   '/meeting(.*)',
//   '/previous',
//   '/recordings',
//   '/personal-room',
// ]);

// export default clerkMiddleware( async (auth, req) => {
  
//   if (protectedRoute(req)) await auth.protect()

// });

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isIgnoredRoute = createRouteMatcher([
  '/sign-in',
  '/sign-up'
]);
// export default clerkMiddleware()

export default clerkMiddleware(async (auth, req) => {
    if (!isIgnoredRoute(req)) await auth.protect()
  })

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
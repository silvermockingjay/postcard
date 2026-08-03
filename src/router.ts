import { createBrowserRouter, type LoaderFunctionArgs } from 'react-router';
import { default as App } from './App';
import { Invitation, Main, NotFound } from '@/pages';
import { getInvitation } from '@/services';
import { AppErrorBoundary } from '@/boundaries';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    ErrorBoundary: AppErrorBoundary,
    children: [
      { index: true, Component: Main },
      {
        path: 'invitation/:id',
        loader: ({ params }: LoaderFunctionArgs) => {
          if (!params.id)
            throw new Response('Missing id invitation', { status: 400 });
          return getInvitation(params.id);
        },
        Component: Invitation,
      },
      { path: '*', Component: NotFound },
    ],
  },
]);

import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest): Promise<Response> {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (
    typeof body !== 'object' ||
    body === null ||
    typeof (body as Record<string, unknown>).password !== 'string'
  ) {
    return Response.json({ error: 'Missing required field: password' }, { status: 400 });
  }

  const { password } = body as { password: string };
  const appPassword = process.env.APP_PASSWORD;

  if (!appPassword) {
    console.error('APP_PASSWORD environment variable is not set');
    return Response.json({ error: 'Server configuration error' }, { status: 500 });
  }

  if (password !== appPassword) {
    return Response.json({ error: 'Invalid password' }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set('wr_auth', 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 86400,
    path: '/',
  });

  return Response.json({ success: true }, { status: 200 });
}

import type { APIContext } from 'astro';

export const ADMIN_SESSION_COOKIE = 'nk_admin_session';
const SESSION_PREFIX = 'admin-session:';
const SESSION_TTL_SECONDS = 60 * 60 * 12;

type AdminSession = {
  email: string;
  expiresAt: number;
};

function sessionStore(context: Pick<APIContext, 'locals'>) {
  return context.locals.runtime?.env.SESSION;
}

function cookieOptions(maxAge = SESSION_TTL_SECONDS) {
  return {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'lax' as const,
    maxAge
  };
}

export async function createAdminSession(context: Pick<APIContext, 'cookies' | 'locals'>, email: string) {
  const store = sessionStore(context);
  if (!store) throw new Error('SESSION KV belum tersedia.');

  const token = crypto.randomUUID() + crypto.randomUUID().replace(/-/g, '');
  const session: AdminSession = {
    email: email.toLowerCase(),
    expiresAt: Date.now() + SESSION_TTL_SECONDS * 1000
  };

  await store.put(SESSION_PREFIX + token, JSON.stringify(session), { expirationTtl: SESSION_TTL_SECONDS });
  context.cookies.set(ADMIN_SESSION_COOKIE, token, cookieOptions());
}

export async function getAdminSession(context: Pick<APIContext, 'cookies' | 'locals'>) {
  const store = sessionStore(context);
  const token = context.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  if (!store || !token) return null;

  const raw = await store.get(SESSION_PREFIX + token);
  if (!raw) return null;

  try {
    const session = JSON.parse(raw) as AdminSession;
    if (!session.email || session.expiresAt <= Date.now()) {
      await store.delete(SESSION_PREFIX + token);
      return null;
    }
    return session;
  } catch {
    await store.delete(SESSION_PREFIX + token);
    return null;
  }
}

export async function clearAdminSession(context: Pick<APIContext, 'cookies' | 'locals'>) {
  const store = sessionStore(context);
  const token = context.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  if (store && token) await store.delete(SESSION_PREFIX + token);
  context.cookies.delete(ADMIN_SESSION_COOKIE, cookieOptions(0));
}

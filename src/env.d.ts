/// <reference types="astro/client" />
/// <reference types="@cloudflare/workers-types" />

import type { SupabaseClient, User } from '@supabase/supabase-js';

type CloudflareRuntimeEnv = {
  ASSETS?: Fetcher;
  NK_MEDIA?: R2Bucket;
  SESSION?: KVNamespace;
  PUBLIC_SITE_URL?: string;
  PUBLIC_SUPABASE_URL?: string;
  PUBLIC_SUPABASE_ANON_KEY?: string;
  ADMIN_EMAILS?: string;
  SUPABASE_SERVICE_ROLE_KEY?: string;
  CLOUDFLARE_R2_PUBLIC_URL?: string;
  PUBLIC_GOOGLE_SITE_VERIFICATION?: string;
  PUBLIC_GA_ID?: string;
  PUBLIC_GTM_ID?: string;
};

declare global {
  namespace App {
    interface Locals {
      supabase?: SupabaseClient;
      user?: User | null;
      isAdmin?: boolean;
      isSupabaseConfigured?: boolean;
      runtime?: {
        env: CloudflareRuntimeEnv;
      };
    }
  }
}

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_SUPABASE_URL?: string;
  readonly PUBLIC_SUPABASE_ANON_KEY?: string;
  readonly ADMIN_EMAILS?: string;
  readonly SUPABASE_SERVICE_ROLE_KEY?: string;
  readonly CLOUDFLARE_R2_PUBLIC_URL?: string;
  readonly PUBLIC_GOOGLE_SITE_VERIFICATION?: string;
  readonly PUBLIC_GA_ID?: string;
  readonly PUBLIC_GTM_ID?: string;
}

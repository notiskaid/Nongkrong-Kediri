import { readFileSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';

try {
  const raw = readFileSync('.env', 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const index = trimmed.indexOf('=');
    if (index === -1) continue;
    const key = trimmed.slice(0, index).trim();
    const value = trimmed.slice(index + 1).trim().replace(/^['"]|['"]$/g, '');
    if (key && process.env[key] == null) process.env[key] = value;
  }
} catch {}

const supabase = createClient(process.env.PUBLIC_SUPABASE_URL || '', process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY || '', {
  auth: { autoRefreshToken: false, persistSession: false }
});

const { data, error } = await supabase
  .from('seo_pages_public')
  .select('slug,status,robots,content')
  .eq('slug', 'tempat-ngopi-kediri')
  .maybeSingle();

if (error) throw error;

console.log(JSON.stringify({
  slug: data?.slug,
  status: data?.status,
  robots: data?.robots,
  blocks: Array.isArray(data?.content) ? data.content.map((block) => block.type) : [],
  hasSeoContent: JSON.stringify(data?.content || []).includes('Rekomendasi Tempat Ngopi di Kediri')
}, null, 2));

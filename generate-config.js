const fs = require('fs');

const config = `window.KODMOD_CONFIG = {
  SUPABASE_URL: ${JSON.stringify(process.env.SUPABASE_URL || '')},
  SUPABASE_ANON_KEY: ${JSON.stringify(process.env.SUPABASE_ANON_KEY || '')},

  CAMPAIGN_TARGET: 100000000,
  GRAND_FINAL_DATE: '2026-10-29',
  SPONSOR_COUNT: 0,

  BANK_NAME: 'Bank Mandiri',
  BANK_ACCOUNT_NUMBER: '1360019351375',
  BANK_ACCOUNT_NAME: 'GABRIEL EDBERT LIAND',

  WHATSAPP_NUMBER: '6281328777891',
  EMAIL: 'gabrieledbert@student.telkomuniversity.ac.id',
  INSTAGRAM: '@kodmod.ai'
};
`;

fs.writeFileSync('config.js', config);

console.log('[KODMOD] config.js generated successfully');
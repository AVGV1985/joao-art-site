// src/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zaerzeklhmwcnhaohqof.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphZXJ6ZWtsaG13Y25oYW9ocW9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1NjAwODgsImV4cCI6MjA2MjEzNjA4OH0.7sBMIPA5IZK0SQO4bqVd28ZZ5hsKcCD9fffkAwaA6Ns' // pegas em Project Settings > API

export const supabase = createClient(supabaseUrl, supabaseKey)

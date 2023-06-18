import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://yrkouqxtdxbxdsvdtsku.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlya291cXh0ZHhieGRzdmR0c2t1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcwOTM3MDcsImV4cCI6MjAwMjY2OTcwN30.QBHLZCqYT5uaHRDRyrgQEA4oYpPRkZO0MYT_IRb-N5M"
);

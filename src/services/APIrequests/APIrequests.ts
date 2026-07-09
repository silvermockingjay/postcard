import { supabase } from '../supabase';
import type { Invitation } from '@/utils/schema';

export async function createInvitation(userData: Invitation) {
  const { data, error } = await supabase
    .from('invitations')
    .insert([userData])
    .select();
  if (error) throw error;
  return data;
}

export async function getInvitation(receivedId: string) {
  const { data, error } = await supabase
    .from('invitations')
    .select('*')
    .eq('id', receivedId)
    .single();
  if (error) throw error;
  return data;
}

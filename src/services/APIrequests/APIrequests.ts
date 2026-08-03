import { supabase } from '../supabase';
import type { Invitation } from '@/utils/schema';

export async function createInvitation(userData: Invitation) {
  const { data, error } = await supabase
    .from('invitations')
    .insert([userData])
    .select()
    .single();
  if (error) throw new Error('Failed to create invitation', { cause: error });
  return data;
}

export async function getInvitation(receivedId: string) {
  const { data, error } = await supabase
    .from('invitations')
    .select('*')
    .eq('id', receivedId)
    .maybeSingle();
  if (error) throw new Error('Failed to load invitation', { cause: error });
  if (!data)
    throw new Response('Invitation not found', {
      status: 404,
    });
  return data;
}

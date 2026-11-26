export async function saveContactSubmission(supabase, { name, email, subject, message }) {
  if (!supabase) throw new Error('Supabase is not configured.');

  const { error } = await supabase.from('contact_submissions').insert({
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
  });

  if (error) throw error;
}

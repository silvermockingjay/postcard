export async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Copied:', text);
  } catch (error) {
    console.error('Failed:', error);
  }
}

export default async function CopyEmailToClipboard(email) {
  try {
    await navigator.clipboard.writeText(email);
    console.log('Email copied to clipboard');
  } catch (error) {
    console.error('Could not copy email: ', error);
  }
}

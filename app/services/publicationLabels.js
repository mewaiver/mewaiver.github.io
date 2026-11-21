export function categoryLabel(value) {
  const labels = { ai: 'AI', 'cloud-computing': 'Cloud Computing', iot: 'IoT' };
  return labels[value] || value.replace(/-/g, ' ').replace(/\b\w/g, letter => letter.toUpperCase());
}

export function shouldShowVersion(post) {
  return post.type === 'whitepaper' || post.type === 'research-note' || post.hasExplicitVersion;
}

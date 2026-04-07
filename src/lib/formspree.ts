const FORMSPREE_URL = "https://formspree.io/f/mdapjnwa";

export async function submitToFormspree(data: Record<string, string>) {
  const res = await fetch(FORMSPREE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Formspree submission failed");
  }
  return res.json();
}

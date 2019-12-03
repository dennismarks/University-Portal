/**
 * Create user
 */
export async function create({ username, email, password }) {
  const request = await fetch(`/api/v1/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, email, password })
  });

  if (!request.ok) {
    const error = await request.json();
    throw error;
  } else {
    const user = await request.json();
    return user;
  }
}

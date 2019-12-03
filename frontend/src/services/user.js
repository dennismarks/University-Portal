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

export async function login({ username, password }) {
  const request = await fetch(`/api/v1/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });

  if (!request.ok) {
    let error = null;
    if (request.status === 401) {
      error = await request.json();
    } else {
      error = await request.text();
    }
    throw error;
  } else {
    const user = await request.json();
    return user;
  }
}

export async function logout() {
  await fetch(`/api/v1/user/logout`);
}

export async function fetchAuthUser() {
  const request = await fetch(`/api/v1/user/me`);
  if (!request.ok) {
    return null;
  } else {
    const user = await request.json();
    return user;
  }
}

export async function fetchUser(userId) {
  const request = await fetch(`/api/v1/user/${userId}`);
  const user = await request.json();
  return user;
}

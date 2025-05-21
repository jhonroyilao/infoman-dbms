fetch('/api/users')
  .then(res => res.json())
  .then(data => {
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML = data.map(user => `<p>${user.name}</p>`).join('');
  });

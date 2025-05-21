# 🧾 Instructions for Working with Git and GitHub

This guide will help you properly contribute your code to the repository for our project.

---

## ✅ 1. Clone the Repository (First Time Only)

If you haven’t cloned the repository yet, do this:

```bash
git clone https://github.com/jhonroyilao/infoman-dbms.git
cd infoman-dbms
```

---

## ✅ 2. Create a New Branch (Avoid Conflicts)

Before making changes, **create your own branch**:

```bash
git checkout -b your-branchname
```

---

## ✅ 3. Make Your Changes

- Work on your assigned files inside the project folder.
- Create any new files as needed.

---

## ✅ 4. Stage and Commit Your Changes

After making changes:

```bash
git add .
git commit -m "Added a new file"
```

Use a clear commit message explaining what you did.

---

## ✅ 5. Push Your Branch to GitHub

```bash
git push origin your-branchname
```

---

## ✅ 6. Open a Pull Request (PR)

1. Go to the [GitHub repo](https://github.com/jhonroyilao/infoman-dbms).
2. It will show a prompt to **"Compare & pull request"** for your branch.
3. Click it and create a pull request so your code can be reviewed and merged.

---

## 🔁 If You Need to Update Your Work Later

Pull the latest version from the main branch before doing more work:

```bash
git checkout main
git pull origin main
git checkout your-branchname
git merge main
```

Then repeat the `add`, `commit`, and `push` steps.

# Host Your Classic Bags Site on GitHub (Free)

Follow these steps to put your site online with **GitHub Pages**. Your site will be at:  
`https://YOUR_USERNAME.github.io/classic-bags/`

---

## Step 1: Create a GitHub account (if you don’t have one)

- Go to [github.com](https://github.com) and sign up (free).

---

## Step 2: Create a new repository on GitHub

1. Log in to GitHub.
2. Click the **+** (top right) → **New repository**.
3. Set:
   - **Repository name:** `classic-bags` (or any name you like).
   - **Public**.
   - Do **not** check “Add a README” (your folder already has files).
4. Click **Create repository**.

---

## Step 3: Push your project from your computer

Open **Command Prompt** or **PowerShell**, then go to your project folder and run the commands below.  
Replace `YOUR_USERNAME` with your real GitHub username.

```bash
cd "d:\classic bags"

git init
git add .
git commit -m "Initial commit - Classic Bags website"

git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/classic-bags.git
git push -u origin main
```

**Example:** If your username is `john`, use:
`https://github.com/john/classic-bags.git`

- If Git asks for login, use your **GitHub username** and a **Personal Access Token** (not your normal password).  
  To create a token: GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Generate new token** (give it “repo” permission).

---

## Step 4: Turn on GitHub Pages

1. On GitHub, open your repo **classic-bags**.
2. Go to **Settings** → **Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source:** Deploy from a branch.
   - **Branch:** `main` → **/ (root)**.
4. Click **Save**.

---

## Step 5: Wait and open your site

- Wait **1–3 minutes**.
- Your site will be at: **https://YOUR_USERNAME.github.io/classic-bags/**  
  (Use your real GitHub username.)

---

## Updating the site later

After you change files (HTML, CSS, images, etc.), run:

```bash
cd "d:\classic bags"
git add .
git commit -m "Update site"
git push
```

The site will update automatically after a minute or two.

---

## Checklist

- [ ] GitHub account created
- [ ] New repo `classic-bags` created (no README)
- [ ] `git init`, `add`, `commit`, `remote`, `push` done
- [ ] Settings → Pages → Deploy from branch `main` / root
- [ ] Opened `https://YOUR_USERNAME.github.io/classic-bags/`

That’s it. Your Classic Bags site is hosted on GitHub.

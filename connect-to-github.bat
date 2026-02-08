@echo off
echo ============================================
echo   Connect Classic Bags to GitHub
echo ============================================
echo.

cd /d "d:\classic bags"

echo Step 1: Initializing git...
git init
if errorlevel 1 (
    echo Git may already be initialized. Continuing...
)

echo.
echo Step 2: Adding all files...
git add .

echo.
echo Step 3: Creating first commit...
git commit -m "Initial commit - Classic Bags website"

echo.
echo Step 4: Setting main branch...
git branch -M main

echo.
echo ============================================
echo   NEXT: Add your GitHub repo and push
echo ============================================
echo.
echo 1. Go to https://github.com/new
echo 2. Create a new repository named: classic-bags
echo    (Leave "Add README" UNCHECKED)
echo 3. Copy your GitHub USERNAME (e.g. john123)
echo.
set /p USERNAME="Enter your GitHub username: "
echo.
echo Adding remote and pushing...
git remote remove origin 2>nul
git remote add origin https://github.com/%USERNAME%/classic-bags.git
git push -u origin main

echo.
echo Done! If push asked for login, use your GitHub username
echo and a Personal Access Token (not password).
echo.
pause

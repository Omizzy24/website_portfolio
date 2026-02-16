#!/bin/bash

# Portfolio Deployment Helper Script
# This script helps you deploy your portfolio to GitHub and Vercel

set -e

echo "🚀 Portfolio Deployment Helper"
echo "================================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in m1ke-portfolio directory"
    echo "Please run: cd m1ke-portfolio && ./deploy.sh"
    exit 1
fi

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"
echo ""

# Check if remote exists
if git remote get-url origin &> /dev/null; then
    REMOTE_URL=$(git remote get-url origin)
    echo "🔗 Current remote: $REMOTE_URL"
    echo ""
    
    # Ask if user wants to change remote
    read -p "Do you want to change the remote URL? (y/n): " CHANGE_REMOTE
    if [ "$CHANGE_REMOTE" = "y" ]; then
        read -p "Enter your new GitHub repository URL: " NEW_REMOTE
        git remote set-url origin "$NEW_REMOTE"
        echo "✅ Remote updated to: $NEW_REMOTE"
    fi
else
    echo "⚠️  No remote configured"
    read -p "Enter your GitHub repository URL: " NEW_REMOTE
    git remote add origin "$NEW_REMOTE"
    echo "✅ Remote added: $NEW_REMOTE"
fi

echo ""
echo "📦 Checking git status..."
git status --short

echo ""
read -p "Ready to push to GitHub? (y/n): " PUSH_CONFIRM

if [ "$PUSH_CONFIRM" = "y" ]; then
    echo "🚀 Pushing to GitHub..."
    git push -u origin "$CURRENT_BRANCH"
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🎉 Next steps:"
    echo "1. Go to https://vercel.com/new"
    echo "2. Import your repository"
    echo "3. Deploy!"
    echo ""
    echo "Your repository: $(git remote get-url origin)"
else
    echo "❌ Push cancelled"
    echo ""
    echo "When you're ready, run:"
    echo "  git push -u origin $CURRENT_BRANCH"
fi

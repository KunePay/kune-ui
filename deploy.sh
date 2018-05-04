# The following code generates a static HTML version of this app 
# into a 'docs' directory which is then pushed to github.
# 
# Replace the contents of this file as needed for your app's
# continuous deployment (CD) workflow.

# Generate static HTML content
yarn build
yarn export

# Move exported HTML content to 'docs' directory
rm -rf docs
mv out docs

# We use github pages, re-add CNAME file
echo "kune-ui.org" > docs/CNAME

# Add changed docs, commit, and push to github
git add docs
git commit -m "Docs updated `date +\"%b %d, %Y\"`"
git push origin master

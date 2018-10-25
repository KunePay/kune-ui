# The following code generates a static HTML version of this app 
# into a 'docs' directory which is then pushed to github.
# 
# Replace the contents of this file as needed for your app's
# continuous deployment (CD) workflow.

# Generate static HTML content
yarn build
yarn export

# Remove special characters from file names that make gh-pages fail
mv out/_next/static out/
rm -rf out/_next
npm install -g renamer
renamer --find "/_/g" --replace "" "out/**"
renamer --find "/~/g" --replace "" "out/**"
for i in {1..30}; do sh -c "find out -name '*.html' -exec sed -i.bk -e 's/_next\///g;s/\(\"\/static\/[^\~]*\)\~\([^\"\~]*\"\)/\1\2/g;s/\(\"\/static\/[^_]*\)_\([^_\"]*\"\)/\1\2/g' {} \; && rm out/*.bk && rm out/**/*.bk"; done

# Move exported HTML content to 'docs' directory
rm -rf docs
mv out docs

# Copy assets to docs directory since docs it is treated as root by gh-pages 
cp -r assets docs/assets

# We use github pages, re-add CNAME file
echo "kune-ui.org" > docs/CNAME

# Add changed docs, commit, and push to github
git add docs
git commit -m "Docs updated `date +\"%b %d, %Y\"`"
git push origin master

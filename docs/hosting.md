# Host with GitHub Pages

This portfolio is a static HTML/CSS site. It works under the repository path `/Abishkar-portfolio/`; its stylesheet uses a relative URL.

1. Merge the portfolio pull request into `main`.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select **main** and **/(root)**, then **Save**.
5. Wait for the Pages deployment to finish and use **Visit site** to confirm the published URL.

Expected URL: https://Abishkarm.github.io/Abishkar-portfolio/

If Pages already uses another source, review that setting before changing it. If deployment fails, inspect the Pages build/deployment run in **Actions**.

`index.html` is the entry point. `.nojekyll` disables Jekyll processing. The site needs no npm packages, backend, environment variables, custom domain, or paid hosting. The legacy `portfolio.tsx` file is retained but is not executed by this site.

## Check after publication

- Open the URL in a private browser window.
- Check the navigation, email link, GitHub links, and narrow/mobile layout.
- Confirm the stylesheet loads beneath `/Abishkar-portfolio/`.
- Confirm your email address and application details are current before sharing.

## Suggested repository description

Mechanical engineering portfolio: thermal systems, HVAC and building automation experience, and automation-related code.

## Updating the site

Edit the text in `index.html` and the matching Markdown brief in `projects/`. Push changes to the configured publishing branch; GitHub Pages republishes them.

[GitHub's publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)  
[GitHub's site-creation documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

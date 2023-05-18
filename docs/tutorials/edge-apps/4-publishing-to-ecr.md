---
sidebar_position: 4
---

# Part 4: Publishing to ECR

Now that we've finished [preparing our code](creating-an-edge-app) and [testing it](testing-an-edge-app), we're almost ready to publish it to the [Edge Code Repository](https://portal.sagecontinuum.org)!

## Preparing our app

Before publishing an app to the [Edge Code Repository](/docs/about/architecture#edge-code-repository-ecr), we need to add a few packaging items to it.

First, update the homepage in your `sage.yaml` to point to your `app-tutorial` Github repo and verify that it matches the following:

```yaml
name: "App tutorial"
description: "My really amazing app!"
keywords: ""
authors: "Your name"
collaborators: ""
funding: ""
license: ""
homepage: "https://github.com/username/app-tutorial"
source:
  architectures:
    - "linux/amd64"
    - "linux/arm64"
```

Next, create an `ecr-meta` directory in your repo and populate it with the following text and media:

* `ecr-science-description.md` - Markdown with in depth description of the science being done here (1 page of text).
* `ecr-icon.jpg` - An icon for the project/work 512x512px.
* `ecr-science-image.jpg` - A science image for the project with a minimum size of 1920x1080px.

Once we've commited and pushed those files to your repo, we're ready to publish our app!

## Publishing our app

Please visit the [Edge Code Repository](https://portal.sagecontinuum.org) and complete the following steps:

1. Go to "Sign In" and follow the instructions.
2. Go to "My Apps".
3. Go to "Create app" and follow the instructions.

If everything is successful, your plugin will appeared and be marked as "Built".

## Conclusion

Congratulation! You've successfully written, tested and published an app to ECR!

We encourage you to check out other apps in the [ECR](https://portal.sagecontinuum.org) and explore additional functionality provided by [pywaggle](https://github.com/waggle-sensor/pywaggle).

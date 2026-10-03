# Moderator browser demo

[Open the live demo](https://shubin123.github.io/desert-ant-moderator-demo/)

Explore on-device NSFW image detection by Desert Ant Labs, trained on licensed and synthetic data.

Powered by [Desert Ant Labs](https://desertant.com) 🐜. The model, weights, and SDK are by Desert Ant Labs B.V.; this independent demo is maintained by Shubin123. See [ATTRIBUTION.md](ATTRIBUTION.md) and the [SDK license](https://license.desertant.com/1.0).

## Run locally

Serve the site directory over HTTP:

```sh
python3 -m http.server 8080 --directory site
```

Open http://localhost:8080. No build step or backend is required. The SDK and runtimes use a pinned import map; downloads occur on first inference. Microphone capture requires localhost or HTTPS. SDK usage telemetry contains no input or output content.

## Deployment

The GitHub Actions workflow publishes the site directory to GitHub Pages on pushes to main. Choose GitHub Actions as the Pages source.

## Upstream

- [SDK documentation](https://github.com/Desert-Ant-Labs/desert-ant-core/blob/main/docs/models/moderator.md)
- [Original model](https://huggingface.co/desert-ant-labs/moderator)
- [Desert Ant Labs](https://desertant.com)

Inference runs locally in a modern browser.


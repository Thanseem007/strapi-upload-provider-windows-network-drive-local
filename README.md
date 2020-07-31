# strapi-provider-upload-network-drive

Windows NetworkDriver provider for Strapi CMS file upload.

## Installation

```
yarn add strapi-provider-upload-network-drive-local
```

## Config

`./extensions/upload/config/settings.json`

```json
{
      "provider": "network-drive-local",
      "providerOptions": {
        "NETWORK_DRIVE_PATH": "<diver-path>",
        "FILE_PATH":"file-path",
        "username": "<drive-username>",
        "password": "<driver-password>",
        "baseUrl":"<base-url>"
      },
}
```



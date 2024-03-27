# README
This is a module template for FoundryVTT Modules with included build scripts and github actions. If you want to use github actions, make sure they have write permissions to the repository in the settings.

## Replace Before Use
Before using, make sure to replace all instances of the following strings in the repository files

### `package.json`
`foundryvtt-module-template` - The repository/module name

`"description": "..."` - The module description
`GithubUsername` - Your github username or organization name
`RepositoryName` - Your repository's name
`Author Name` - Your name
`"license": "MIT",` - Replace `MIT` with your desired license

### `package-lock.json`
`foundryvtt-module-template` - The repository/module name
`"license": "MIT",` - Replace `MIT` with your desired license

### `module.json`
`foundryvtt-module-template` - The repository/module name
`Module Name` - The human-readable module name
`Module Description` - A short description of the module's functionality
`Author Name` - Your name
`Discord Name` - Your discord username
`"url": "github.com/GithubUsername",` - Replace `GithubUsername` with yours, or replace the whole string with another website

### `lang/en.json`
`ModuleSpace` - The localization namespace you want to use for the module

### `init.mjs`
`foundryvtt-module-template` - The repository/module name

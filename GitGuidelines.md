# Git Commit Message Guidelines

This document outlines the rules and conventions for writing Git commit messages in this project. Following these guidelines will help maintain a clean and readable project history.

## General Rules

1. **Limit the Subject Line**: The subject line should be concise and limited to 50 characters.
2. **Capitalize the Subject Line**: The first letter of the subject line should be capitalized.
3. **Use the Imperative Mood**: Write the subject line in the imperative form (e.g., "Add feature" instead of "Added feature").
4. **Separate Subject from Body**: Use a blank line to separate the subject line from the body of the commit message.
5. **Limit the Body**: The body of the message should be wrapped at 72 characters.
6. **Use the Body to Explain Why**: If the commit addresses a bug or feature, include relevant context or justification for the change in the body.

## Commit Message Format

The format of the commit message should be as follows:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

The type should indicate the nature of the change. Common types include:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Branch Naming Conventions

To maintain clarity in version control, follow these branch naming conventions:

- **Feature Branches**: `feature/feature-name`  
  For adding new features (e.g., `feature/user-auth`).

- **Bugfix Branches**: `bugfix/bug-description`  
  For fixing bugs (e.g., `bugfix/login-error`).

- **Hotfix Branches**: `hotfix/critical-fix`  
  For urgent fixes in production (e.g., `hotfix/security-patch`).

- **Release Branches**: `release/version-number`  
  For preparing a new production release (e.g., `release/1.0.0`).

- **Chore Branches**: `chore/task-name`  
  For minor tasks or updates (e.g., `chore/update-dependencies`).

## Examples

Here are some examples of well-structured commit messages:

```
feat(UserProfile): add avatar upload functionality

Implemented the ability for users to upload their avatars. This change
improves user experience and personalization.

Closes #45
```

```
fix(Button): correct alignment issue in loading state

Fixed an alignment issue that occurred when the loading state was active.
This improves the visual consistency of the button component.
```

```
docs(README): update installation instructions

Updated the README to reflect the new installation instructions and added
examples for clarity.
```

## Conclusion

Following these guidelines will help maintain a consistent and understandable commit history, making it easier for all contributors to track changes and collaborate effectively. Thank you for adhering to these rules!

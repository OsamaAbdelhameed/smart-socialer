```markdown
# smart-socialer Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development conventions and workflows observed in the `smart-socialer` TypeScript codebase. It covers file naming, import/export styles, commit message patterns, and testing structure, providing practical examples and command suggestions for efficient collaboration and code consistency.

## Coding Conventions

### File Naming
- **Convention:** camelCase for file names.
- **Example:**  
  ```
  userProfile.ts
  socialFeedManager.ts
  ```

### Import Style
- **Convention:** Use alias imports for modules.
- **Example:**
  ```typescript
  import utils from '@utils/helpers';
  import apiClient from '@services/apiClient';
  ```

### Export Style
- **Convention:** Use default exports for modules.
- **Example:**
  ```typescript
  // userProfile.ts
  const userProfile = { /* ... */ };
  export default userProfile;
  ```

### Commit Messages
- **Convention:** Conventional commits using the `feat` prefix.
- **Example:**
  ```
  feat: add user profile editing functionality
  feat: integrate new social feed API
  ```

## Workflows

### Creating a New Feature
**Trigger:** When starting development on a new feature  
**Command:** `/new-feature`

1. Create a new TypeScript file using camelCase (e.g., `newFeature.ts`).
2. Implement the feature using default exports.
3. Import dependencies using alias imports.
4. Write corresponding tests in a `*.test.ts` file.
5. Commit changes with a message starting with `feat:` followed by a concise description.

### Writing Tests
**Trigger:** When adding or updating functionality  
**Command:** `/write-test`

1. Create a test file named after the module, using the pattern `moduleName.test.ts`.
2. Write tests using the project's preferred (unknown) testing framework.
3. Ensure tests cover main use cases and edge cases.
4. Run tests to verify correctness.

### Committing Changes
**Trigger:** When ready to commit code  
**Command:** `/commit-changes`

1. Stage your changes.
2. Write a commit message starting with `feat:` and a brief summary (max ~91 chars).
3. Push to the repository.

## Testing Patterns

- **File Pattern:** Test files use the `*.test.ts` naming convention.
- **Framework:** Testing framework is not specified; follow standard TypeScript testing practices.
- **Example:**
  ```typescript
  // userProfile.test.ts
  import userProfile from './userProfile';

  describe('userProfile', () => {
    it('should return correct user data', () => {
      // test implementation
    });
  });
  ```

## Commands
| Command         | Purpose                                               |
|-----------------|-------------------------------------------------------|
| /new-feature    | Start a new feature with proper file and commit setup |
| /write-test     | Create and implement tests for a module               |
| /commit-changes | Commit code using the conventional commit pattern     |
```

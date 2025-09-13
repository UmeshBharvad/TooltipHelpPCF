# Contributing to Help Tooltip PCF Control

Thank you for your interest in contributing to the Help Tooltip PCF Control! This document provides guidelines and instructions for contributing.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## Development Process

### 1. Setting Up Development Environment

```powershell
# Clone the repository
git clone https://github.com/UmeshBharvad/TooltipHelpPCF.git

# Install dependencies
npm install

# Build the project
npm run build
```

### 2. Branch Strategy

- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Urgent production fixes

### 3. Making Changes

1. Create a new branch:
```powershell
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```

2. Make your changes
3. Test thoroughly
4. Update documentation
5. Update CHANGELOG.md

### 4. Commit Guidelines

Follow semantic commit messages:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Formatting changes
- `refactor:` - Code restructuring
- `test:` - Adding/updating tests
- `chore:` - Maintenance tasks

Example:
```
feat: add HTML support in tooltips

- Added HTML content rendering
- Updated documentation
- Added safety checks
```

### 5. Testing

1. Run all tests:
```powershell
npm test
```

2. Test in Power Apps:
   - Import control
   - Test all features
   - Verify accessibility
   - Check browser compatibility

### 6. Pull Request Process

1. Update your branch:
```powershell
git fetch origin
git rebase origin/develop
```

2. Push your changes:
```powershell
git push origin feature/your-feature-name
```

3. Create Pull Request:
   - Use PR template
   - Link related issues
   - Add screenshots if relevant
   - List testing steps

4. Code Review:
   - Address review comments
   - Update PR as needed
   - Get approval

### 7. Documentation

Update these files as needed:
- README.md
- CHANGELOG.md
- QUICK-START.md
- TESTING.md
- Code comments
- Type definitions

## Development Guidelines

### 1. Code Style

- Follow TypeScript best practices
- Use React functional components
- Implement proper error handling
- Add meaningful comments
- Use consistent naming

### 2. Component Structure

```typescript
// Import order
import * as React from 'react';
import { FluentUI imports } from '@fluentui/react-components';
import { Custom imports } from './components';
import { Types } from './types';

// Component structure
export const Component: React.FC<Props> = (props) => {
    // Hooks
    // Event handlers
    // Helper functions
    // Render methods
    return (
        <JSX />
    );
};
```

### 3. Testing Requirements

- Unit tests for components
- Integration tests for PCF
- Accessibility testing
- Browser compatibility
- Performance testing

### 4. Performance Considerations

- Optimize renders
- Lazy load when possible
- Minimize bundle size
- Cache appropriately
- Handle cleanup

### 5. Accessibility Guidelines

- Use semantic HTML
- Add ARIA labels
- Ensure keyboard navigation
- Support screen readers
- Test color contrast

## Release Process

1. Version Update:
   - Update version in manifest
   - Update CHANGELOG.md
   - Create release notes

2. Testing:
   - Run all tests
   - Perform manual testing
   - Check documentation

3. Release:
   - Merge to main
   - Tag release
   - Create GitHub release
   - Update solution files

## Getting Help

- Create an issue
- Join discussions
- Review documentation
- Check existing PRs

## Additional Resources

- [PCF Documentation](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/overview)
- [Fluent UI Docs](https://react.fluentui.dev/)
- [TypeScript Guidelines](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)
- [React Best Practices](https://reactjs.org/docs/hooks-rules.html)

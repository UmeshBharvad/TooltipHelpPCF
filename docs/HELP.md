# Help Tooltip PCF Control - Documentation

## Table of Contents
1. [Overview](#overview)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Usage Examples](#usage-examples)
5. [Troubleshooting](#troubleshooting)

## Overview

The Help Tooltip PCF Control adds informative tooltips to form fields in Power Apps. This control enhances user experience by providing contextual help information through elegantly designed tooltips.

### Key Features
- Customizable help icon with tooltip
- Support for both plain text and HTML content
- Configurable icon positioning (left/right)
- Environment variable support for dynamic content
- Accessible UI with ARIA labels

## Installation

### Step 1: Import Solution
![Import Solution](assets/docs/import-solution.png)
1. Download the solution file
2. Navigate to Power Apps Admin Center
3. Click "Import Solution"
4. Select the downloaded file

### Step 2: Add to Form
![Add Control](assets/docs/add-control.png)
1. Open your form in edit mode
2. Select the field where you want to add help
3. In the Properties pane, locate Controls
4. Add the Help Tooltip control

## Configuration

### Basic Settings
![Basic Configuration](assets/docs/basic-config.png)

1. **Tooltip Content**
   - Type: Text or HTML
   - Description: The help message to display
   - Example: "Enter your full legal name as it appears on documents"

2. **Icon Position**
   ![Icon Position](assets/docs/icon-position.png)
   - Left: Icon appears before the field
   - Right: Icon appears after the field

3. **Content Style**
   ![Content Styles](assets/docs/content-styles.png)
   - Plain Text: Simple text display
   - HTML: Rich formatted content

### Advanced Settings

1. **Environment Variables**
   ![Environment Variables](assets/docs/env-vars.png)
   - Enable environment variable usage
   - Specify variable name
   - Set up dynamic content

## Usage Examples

### 1. Simple Text Help
![Simple Text Example](assets/docs/simple-text.png)
```json
{
  "tooltipContent": "Enter your full legal name as it appears on official documents.",
  "iconPosition": "right",
  "tooltipStyle": "plainText"
}
```

### 2. Formatted HTML Help
![HTML Example](assets/docs/html-example.png)
```json
{
  "tooltipContent": "<div><h4>Password Requirements</h4><ul><li>Minimum 8 characters</li><li>Include numbers</li><li>Include special characters</li></ul></div>",
  "iconPosition": "left",
  "tooltipStyle": "html"
}
```

### 3. Dynamic Content
![Dynamic Content](assets/docs/dynamic-content.png)
```json
{
  "useEnvironmentVariable": "true",
  "environmentVariableName": "HelpContent_CustomerID",
  "iconPosition": "right"
}
```

## State Examples

### Default State
![Default State](assets/docs/default-state.png)
*Control in its default state*

### Hover State
![Hover State](assets/docs/hover-state.png)
*Tooltip displayed on hover*

### Error State
![Error State](assets/docs/error-state.png)
*Control showing error state*

## Troubleshooting

### Common Issues

1. **Tooltip Not Showing**
   ![Tooltip Issue](assets/docs/tooltip-issue.png)
   - Check tooltip content is provided
   - Verify tooltipStyle setting
   - Check browser console for errors

2. **HTML Not Rendering**
   ![HTML Issue](assets/docs/html-issue.png)
   - Verify HTML is valid
   - Check tooltipStyle is "html"
   - Review content formatting

3. **Environment Variable Issues**
   ![Environment Issue](assets/docs/env-issue.png)
   - Verify variable exists
   - Check variable name spelling
   - Ensure proper permissions

### Error Messages

| Error | Solution |
|-------|----------|
| "Invalid HTML content" | Check HTML formatting |
| "Environment variable not found" | Verify variable name and existence |
| "Tooltip content missing" | Ensure content is provided |

## Best Practices

1. **Content Writing**
   ![Content Best Practices](assets/docs/content-best-practices.png)
   - Keep help text concise
   - Use clear language
   - Structure complex information

2. **HTML Usage**
   ![HTML Best Practices](assets/docs/html-best-practices.png)
   - Use semantic markup
   - Keep styling minimal
   - Test across browsers

3. **Performance**
   ![Performance Tips](assets/docs/performance-tips.png)
   - Optimize HTML content
   - Use environment variables efficiently
   - Cache when possible

## Support

For issues and feature requests, please:
1. Check the [Troubleshooting](#troubleshooting) section
2. Review existing GitHub issues
3. Open a new issue if needed

## Version History

See [CHANGELOG.md](CHANGELOG.md) for detailed version history and updates.

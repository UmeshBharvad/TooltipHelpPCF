# Quick Start Guide - Help Tooltip PCF Control

This guide will help you quickly get started with the Help Tooltip PCF Control.

## Installation

### Method 1: Using the Managed Solution
1. Download the managed solution from `Solutions/bin/Release`
2. In Power Apps, go to Solutions
3. Click "Import"
4. Select the downloaded solution
5. Follow the import wizard

### Method 2: From Source Code
```powershell
# Clone the repository
git clone https://github.com/UmeshBharvad/TooltipHelpPCF.git

# Install dependencies
npm install

# Build the control
npm run build

# Build the solution
cd Solutions
dotnet build
```

## Basic Usage

### Adding to a Form
1. Open your form in Power Apps
2. Select a field you want to add help for
3. In Properties -> Controls, add the Help Tooltip control
4. Configure basic properties:
   - Set tooltip content
   - Choose icon position
   - Select content style (plain/HTML)

### Example Configurations

#### Simple Text Help
```json
{
  "tooltipContent": "Enter your full legal name as it appears on official documents.",
  "iconPosition": "right",
  "tooltipStyle": "plainText"
}
```

#### Rich HTML Help
```json
{
  "tooltipContent": "<div><h4>Password Requirements</h4><ul><li>Minimum 8 characters</li><li>Include numbers</li><li>Include special characters</li></ul></div>",
  "iconPosition": "left",
  "tooltipStyle": "html"
}
```

#### Using Environment Variables
```json
{
  "useEnvironmentVariable": "true",
  "environmentVariableName": "HelpContent_CustomerID",
  "iconPosition": "right"
}
```

## Testing the Control

### Basic Tests
1. Hover over the help icon
2. Verify tooltip appears
3. Check content formatting
4. Test icon positioning

### HTML Content Test
1. Set tooltipStyle to "html"
2. Add HTML content
3. Verify proper rendering
4. Test HTML elements

### Environment Variable Test
1. Create environment variable
2. Configure control to use it
3. Verify content loading
4. Test variable updates

## Troubleshooting

### Common Issues

#### Tooltip Not Showing
- Check tooltip content is provided
- Verify tooltipStyle setting
- Check browser console for errors

#### HTML Not Rendering
- Verify HTML is valid
- Check tooltipStyle is "html"
- Review content formatting

#### Environment Variable Issues
- Verify variable exists
- Check variable name spelling
- Ensure proper permissions

## Advanced Usage

### Custom Styling
Add custom styles to HTML content:
```html
<div class="custom-help">
  <h3 style="color: #0078d4;">Help Guide</h3>
  <p style="margin: 10px 0;">Important instructions:</p>
  <ul style="list-style-type: disc; margin-left: 20px;">
    <li>Step 1</li>
    <li>Step 2</li>
  </ul>
</div>
```

### Dynamic Content
Use environment variables for dynamic content:
1. Create environment variable
2. Add HTML content with placeholders
3. Update variable through Power Automate

## Best Practices

1. Content Writing
   - Keep help text concise
   - Use clear language
   - Structure complex information

2. HTML Usage
   - Use semantic markup
   - Keep styling minimal
   - Test across browsers

3. Performance
   - Optimize HTML content
   - Use environment variables efficiently
   - Cache when possible

## Additional Resources

- [Full Documentation](./README.md)
- [Contributing Guide](./CONTRIBUTING.md)
- [Testing Guide](./TESTING.md)
- [Power Apps PCF Documentation](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/overview)
- [Fluent UI Documentation](https://react.fluentui.dev/)

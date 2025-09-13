# Help Tooltip PCF Control

A Power Apps Component Framework (PCF) control that provides customizable help tooltips for form fields in Power Apps using Fluent UI components. This control enhances user experience by providing contextual help information through elegant tooltips that can be positioned flexibly and support both plain text and HTML content.

## Author
Umesh Bharvad

## Visual Guide

### Control States
![Initial State](assets/screenshots/initial-state.png)
*Default state of the Help Tooltip control*

![Tooltip State](assets/screenshots/tooltip-state.png)
*Control showing tooltip on hover*

### Implementation Steps
![Adding the Control](assets/screenshots/power-apps-add-control.png)
*Adding the Help Tooltip control to a form*

![Configuration](assets/screenshots/power-apps-configure.png)
*Configuring the control properties*

## Features
- Customizable help icon with tooltip
- Support for both plain text and HTML content
- Configurable icon positioning (left/right)
- Environment variable support for dynamic content
- Accessible UI with ARIA labels
- Responsive design
- Seamless integration with Power Apps forms

## Requirements
- Power Apps environment
- Modern web browser
- Power Apps CLI version 1.35.1 or higher
- .NET SDK version 9.0 or higher

## Installation

### From Solution File
1. Download the solution file from the `Solutions/bin/Debug` directory
2. Open the Power Platform Admin Center
3. Navigate to Solutions
4. Click "Import"
5. Select the downloaded solution file
6. Follow the import wizard steps

### Building from Source
1. Clone the repository
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Build the control:
   ```powershell
   npm run build
   ```
4. Build the solution:
   ```powershell
   cd Solutions
   dotnet build
   ```

## Usage

### Configuration Options
- **useEnvironmentVariable**: Enable/disable environment variable usage
- **environmentVariableName**: Name of the environment variable to use
- **iconPosition**: Position of the help icon (left/right)
- **tooltipStyle**: Content style (plainText/html)
- **tooltipContent**: The actual help content to display

### Example HTML Content
```html
<div>
  <h3>Help Information</h3>
  <p>This field requires <strong>specific format</strong>:</p>
  <ul>
    <li>Must be numeric</li>
    <li>Maximum 10 digits</li>
  </ul>
</div>
```

## Development

### Project Structure
```
HelpToolTipPCF/
├── FluentUIControl/
│   ├── css/
│   │   └── FluentUIControl.css
│   ├── ControlManifest.Input.xml
│   ├── index.ts
│   └── FluentUIControl.tsx
├── Solutions/
│   └── [Solution files]
├── package.json
└── tsconfig.json
```

### Key Components
1. `FluentUIControl.tsx` - Main React component with tooltip implementation
2. `index.ts` - PCF control implementation
3. `ControlManifest.Input.xml` - Control manifest with property definitions

### Building
- `npm run build` - Builds the PCF control
- `dotnet build` (in Solutions directory) - Builds the solution package

## Troubleshooting

### Common Issues
1. **Tooltip Not Showing**
   - Check if tooltip content is provided
   - Verify browser compatibility
   - Check console for errors

2. **HTML Content Not Rendering**
   - Ensure tooltipStyle is set to "html"
   - Verify HTML content is properly formatted

### Error Messages
- "Invalid HTML content" - Check HTML formatting
- "Environment variable not found" - Verify variable name and existence

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and development process.

## Testing
For testing procedures and guidelines, please refer to [TESTING.md](TESTING.md).

## Quick Start
For a quick guide to get started, check out [QUICK-START.md](QUICK-START.md).

## License
This project is licensed under the MIT License.

## Support
For support or feature requests, please open an issue in the repository.

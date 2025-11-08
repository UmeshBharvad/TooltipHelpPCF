# 🚀 Running the Tooltip Help Control

## Current Status
✅ **Project is built and ready!** Both managed and unmanaged solution packages are available in:
- `solutions/TooltipHelpControl/bin/Release/ub_TooltipHelpControl_managed.zip`
- `solutions/TooltipHelpControl/bin/Release/ub_TooltipHelpControl_unmanaged.zip`

## 🌐 Demo Running
I've created and opened a **test.html** file that demonstrates how the control works. This shows:
- Interactive tooltip functionality
- Different content types (plain text and HTML)
- Hover and click activation
- Responsive styling

## 🛠️ Development Server (Node.js Required)

To run the official PCF test harness, you need Node.js installed. Once Node.js is available:

```powershell
# Start the development server
npm start

# Or using pcf-scripts directly
npx pcf-scripts start
```

This will:
- Start a local development server (usually on http://localhost:8181)
- Open the PCF test harness in your browser
- Allow you to test the control with different property values
- Provide hot reload for development changes

## 📦 Deployment Options

### Option 1: Import Solution (Recommended)
1. Go to https://make.powerapps.com
2. Select your environment
3. Go to Solutions → Import solution
4. Upload either:
   - `ub_TooltipHelpControl_managed.zip` (for production)
   - `ub_TooltipHelpControl_unmanaged.zip` (for development)

### Option 2: Direct Push (Development)
```powershell
# Connect to your environment first
pac auth create --url https://yourorg.crm.dynamics.com

# Push the control directly
pac pcf push --publisher-prefix ub_
```

## 🎯 Using the Control

Once deployed, you can add the control to any form field by:
1. Edit the form in Power Apps
2. Select a field
3. Go to Properties → Controls
4. Add Control → Import → Select "Tooltip Help Control"
5. Configure the properties:
   - **Help Content Source**: Choose between custom text or environment variable
   - **Custom Help Content**: Enter your help text (supports HTML)
   - **Environment Variable Name**: Reference to environment variable
   - **Help Icon Placement**: Position relative to field
   - **Tooltip Activation**: Hover, Click, or Both
   - **Styling options**: Size, colors, positioning

## 🔧 Control Properties

| Property | Type | Description |
|----------|------|-------------|
| helpContentSource | OptionSet | Choose content source (Custom/Environment Variable) |
| customHelpContent | Multiple | Direct text/HTML content |
| envVariableName | SingleLine.Text | Environment variable name |
| helpIconPlacement | OptionSet | Icon position (Before/After/Above/Below) |
| tooltipActivation | OptionSet | Activation method (Hover/Click/Both) |
| contentRenderMode | OptionSet | Render as HTML or Plain Text |
| helpIconSize | WholeNumber | Icon size in pixels |
| helpIconColor | SingleLine.Text | Icon color (hex/CSS color) |
| tooltipMaxWidth | WholeNumber | Max tooltip width in pixels |
| tooltipBgColor | SingleLine.Text | Tooltip background color |
| tooltipTextColor | SingleLine.Text | Tooltip text color |

The control is now ready for use! 🎉
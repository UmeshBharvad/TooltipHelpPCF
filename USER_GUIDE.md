# 📋 Tooltip Help Control - Step-by-Step User Guide

## 🎯 Overview
The Tooltip Help Control adds interactive help tooltips to your Power Apps forms, providing contextual assistance to users without cluttering the interface.

---

## 📦 Step 1: Deploy the Control to Your Environment

### Option A: Import Solution (Recommended)

1. **Download the Solution File**
   - Navigate to: `solutions/TooltipHelpControl/bin/Release/`
   - Choose one:
     - `ub_TooltipHelpControl_managed.zip` (for production environments)
     - `ub_TooltipHelpControl_unmanaged.zip` (for development/test environments)

2. **Import to Power Platform**
   - Go to [https://make.powerapps.com](https://make.powerapps.com)
   - Select your target environment
   - Click **Solutions** in the left navigation
   - Click **Import solution**
   - Click **Browse** and select your downloaded .zip file
   - Click **Next** → **Import**
   - Wait for the import to complete (usually 1-2 minutes)

### Option B: Direct Push (Development Only)

```powershell
# Connect to your environment
pac auth create --url https://yourorg.crm.dynamics.com

# Push the control
pac pcf push --publisher-prefix ub_
```

---

## 🎨 Step 2: Add the Control to a Form

### 2.1 Open Form Editor

1. Go to [https://make.powerapps.com](https://make.powerapps.com)
2. Navigate to **Apps** or **Tables**
3. Select your app or table
4. Choose **Forms** tab
5. Select the form you want to edit
6. Click **Edit form**

### 2.2 Add Control to a Field

1. **Select a field** where you want to add help
2. Click **Properties** (in the right panel)
3. Go to the **Controls** tab
4. Click **Add control**
5. Search for **"Tooltip Help Control"** or **"ub_TooltipHelpControl"**
6. Select it and click **Add**
7. Set it as the **default control** for your desired form factors (Web, Phone, Tablet)

---

## ⚙️ Step 3: Configure Control Properties

### 3.1 Basic Configuration

#### **Help Content Source**
- **Custom Text**: Enter help content directly
- **Environment Variable**: Reference a reusable environment variable

#### **Content Input** (if Custom Text selected)
- Enter your help text
- Supports plain text and HTML formatting
- Examples:
  ```
  Plain text: "Enter the customer's full legal name"
  
  HTML: "<strong>Required Field</strong><br/>Enter the customer's full legal name as it appears on official documents."
  ```

#### **Environment Variable Name** (if Environment Variable selected)
- Enter the name of your environment variable
- Example: `help_customer_name`

### 3.2 Appearance Settings

#### **Help Icon Placement**
- **Before Field**: Icon appears to the left of the field
- **After Field**: Icon appears to the right of the field (default)
- **Above Field**: Icon appears above the field
- **Below Field**: Icon appears below the field

#### **Icon Styling**
- **Help Icon Size**: Size in pixels (default: 20)
- **Help Icon Color**: CSS color or hex code (default: #0078d4)
  - Examples: `#ff6b35`, `red`, `rgb(255, 107, 53)`

### 3.3 Tooltip Behavior

#### **Tooltip Activation**
- **Hover**: Tooltip shows on mouse hover
- **Click**: Tooltip shows on click and stays open
- **Both**: Hover to show, click to pin (recommended)

#### **Content Rendering**
- **Plain Text**: Renders as simple text
- **HTML**: Renders with HTML formatting (bold, lists, links, etc.)

#### **Tooltip Styling**
- **Max Width**: Maximum tooltip width in pixels (default: 300)
- **Background Color**: Tooltip background color (default: #323130)
- **Text Color**: Tooltip text color (default: white)

---

## 🎯 Step 4: Common Use Cases & Examples

### Example 1: Simple Help Text
```
Field: Customer Name
Help Content Source: Custom Text
Content: "Enter the customer's full legal name as it appears on official documents."
Activation: Both
Placement: After Field
```

### Example 2: Rich HTML Help
```
Field: Priority Level
Help Content Source: Custom Text
Content: "<strong>Priority Levels:</strong><br/>• <em>Low:</em> 5-7 business days<br/>• <em>Medium:</em> 2-3 business days<br/>• <em>High:</em> Same day response<br/>• <em>Critical:</em> Immediate escalation"
Content Rendering: HTML
Activation: Click
```

### Example 3: Environment Variable
```
Field: Account Number
Help Content Source: Environment Variable
Environment Variable Name: help_account_number
Content Rendering: HTML
```

Create the environment variable:
1. Go to **Settings** → **Environment variables**
2. Click **New**
3. Name: `help_account_number`
4. Value: `Account numbers are 8-digit codes starting with 'ACC'. Contact IT if you need help locating this number.`

---

## 🎨 Step 5: Styling & Customization

### Theme Integration
Match your organization's branding:

```
Icon Color: #your-brand-primary
Tooltip Background: #your-brand-dark
Tooltip Text Color: #your-brand-light
```

### Responsive Design
The control automatically adjusts for different screen sizes:
- **Desktop**: Full-size tooltips with rich content
- **Tablet**: Medium-size tooltips
- **Mobile**: Compact tooltips with essential content

---

## 🔧 Step 6: Testing Your Implementation

### 6.1 Preview Mode
1. Click **Preview** in the form editor
2. Test tooltip functionality:
   - Hover over help icons
   - Click to pin tooltips
   - Test on different screen sizes

### 6.2 Published Form Testing
1. **Save** and **Publish** your form
2. Open a record using the form
3. Verify all tooltips work as expected
4. Test with actual users for feedback

---

## 🚀 Step 7: Advanced Configuration

### Multiple Languages
For multi-language environments:

1. Create environment variables for each language:
   - `help_customer_name_en`
   - `help_customer_name_es`
   - `help_customer_name_fr`

2. Use Power Platform's localization features to reference the appropriate variable

### Bulk Configuration
For multiple fields:

1. Configure one field completely
2. Copy the control configuration
3. Paste to other fields
4. Update only the help content for each field

---

## ✅ Step 8: Best Practices

### Content Guidelines
- **Keep it concise**: Users should get help quickly
- **Use progressive disclosure**: Start with essential info, add details if needed
- **Include examples**: Show users what good input looks like
- **Update regularly**: Keep help content current with process changes

### UX Considerations
- **Don't overuse**: Only add help where users commonly struggle
- **Consistent placement**: Use the same icon position throughout your app
- **Clear visual hierarchy**: Help shouldn't compete with primary content
- **Mobile-friendly**: Test on mobile devices regularly

### Performance Tips
- **Use environment variables** for repeated content
- **Optimize HTML content** - avoid heavy formatting
- **Test with real data** to ensure tooltips don't interfere with workflows

---

## 🔍 Troubleshooting

### Common Issues

**Help icon not appearing**
- ✅ Verify control is set as default for the form factor
- ✅ Check that the field is visible on the form
- ✅ Ensure solution was imported successfully

**Tooltip content not showing**
- ✅ Verify help content is entered correctly
- ✅ Check environment variable name (if using)
- ✅ Ensure content rendering mode matches your content type

**Styling not applied**
- ✅ Use valid CSS color values
- ✅ Check numeric values are within reasonable ranges
- ✅ Clear browser cache and refresh

**Mobile display issues**
- ✅ Test responsive breakpoints
- ✅ Keep tooltip content concise for mobile
- ✅ Verify touch interactions work properly

---

## 📞 Support & Updates

### Getting Help
1. Check this guide first
2. Review the demo file (`test.html`) for examples
3. Contact your Power Platform administrator
4. Reference Microsoft's PCF documentation

### Future Updates
- Export your solution before major platform updates
- Test control functionality after platform updates
- Keep backup copies of your configuration

---

## 🎉 You're Ready!

Your Tooltip Help Control is now configured and ready to improve user experience. Users will appreciate the contextual help without form clutter!

**Next Steps:**
1. Monitor user feedback
2. Iterate on help content based on common questions
3. Expand to other forms where users need guidance
4. Consider creating a help content style guide for consistency

Happy helping! 🚀
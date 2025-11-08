# 🚀 Quick Start Reference Card

## 📦 1. Deploy Control
1. Go to [make.powerapps.com](https://make.powerapps.com)
2. **Solutions** → **Import solution**
3. Upload `ub_TooltipHelpControl_managed.zip`

## 🎨 2. Add to Form
1. Edit form → Select field
2. **Properties** → **Controls** → **Add control**
3. Search "Tooltip Help Control" → **Add**
4. Set as default control

## ⚙️ 3. Quick Configuration

### Essential Settings
```
Help Content Source: Custom Text
Content: "Your help text here"
Tooltip Activation: Both
Help Icon Placement: After Field
```

### Common Properties
| Property | Default | Example |
|----------|---------|---------|
| Icon Size | 20 | `24` |
| Icon Color | #0078d4 | `#ff6b35` |
| Max Width | 300 | `250` |
| Background | #323130 | `#2c3e50` |
| Text Color | white | `#ecf0f1` |

## 💡 Content Examples

### Simple Text
```
Enter the customer's full legal name
```

### Rich HTML
```html
<strong>Required Field</strong><br/>
• Must be unique<br/>
• 8-16 characters<br/>
• Contact IT for help
```

### Environment Variable
```
Variable Name: help_customer_name
Content: Pre-defined help text
```

## ✅ Testing Checklist
- [ ] Icon appears in correct position
- [ ] Tooltip shows on hover/click
- [ ] Content displays correctly
- [ ] Works on mobile devices
- [ ] Matches your app's theme

## 🔧 Troubleshooting
- **No icon?** → Check control is set as default
- **No tooltip?** → Verify content is entered
- **Wrong style?** → Check CSS color values
- **Mobile issues?** → Test responsive behavior

---
*For detailed instructions, see USER_GUIDE.md*
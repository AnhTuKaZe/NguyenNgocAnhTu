# 🤝 Contributing to Nguyễn Ngọc Anh Tú Premium Module

First off, thank you for considering contributing! 🎉

This document provides guidelines for contributing to this project. Please take a moment to review this document before submitting your first contribution.

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [Getting Started](#-getting-started)
- [How to Contribute](#-how-to-contribute)
- [Development Setup](#-development-setup)
- [Pull Request Process](#-pull-request-process)
- [Coding Standards](#-coding-standards)
- [Testing Guidelines](#-testing-guidelines)
- [Commit Messages](#-commit-messages)

---

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all.

### Our Standards

**Examples of behavior that contributes to a positive environment:**
- ✅ Using welcoming and inclusive language
- ✅ Being respectful of differing viewpoints
- ✅ Gracefully accepting constructive criticism
- ✅ Focusing on what is best for the community
- ✅ Showing empathy towards other community members

**Examples of unacceptable behavior:**
- ❌ Trolling, insulting/derogatory comments, and personal attacks
- ❌ Public or private harassment
- ❌ Publishing others' private information
- ❌ Other conduct which could reasonably be considered inappropriate

---

## 🚀 Getting Started

### Prerequisites

- Git installed on your machine
- Text editor (VS Code recommended)
- One of the supported proxy apps for testing:
  - Surge 4.0+
  - Loon 2.0+
  - Shadowrocket 2.2+
  - Quantumult X 1.4+
  - Stash 2.0+

### Project Structure

```
NguyenNgocAnhTu/
├── Module/
│   ├── js/                          # JavaScript files
│   │   ├── locket.js               # Locket Gold script
│   │   └── deleteHeader.js         # Header modification
│   ├── NguyenNgocAnhTu_Surge.sgmodule
│   ├── NguyenNgocAnhTu_Loon.plugin
│   ├── NguyenNgocAnhTu_Shadowrocket.module
│   ├── NguyenNgocAnhTu_QuantumultX.snippet
│   ├── NguyenNgocAnhTu_Stash.stoverride
│   ├── README.md
│   └── INDEX.md
├── LICENSE
├── README.md
└── CONTRIBUTING.md
```

---

## 💡 How to Contribute

### Types of Contributions

We welcome many types of contributions:

#### 1. 🐛 Bug Reports
- Found a bug? Open an issue!
- Include steps to reproduce
- Specify app and version
- Add screenshots if possible

#### 2. ✨ Feature Requests
- Have an idea? Open a discussion!
- Describe the feature clearly
- Explain why it would be useful
- Consider implementation complexity

#### 3. 📝 Documentation
- Fix typos or unclear sections
- Add examples
- Translate to other languages
- Improve installation guides

#### 4. 🔧 Code Contributions
- Fix bugs
- Add features
- Optimize performance
- Add support for new apps

---

## 💻 Development Setup

### 1. Fork the Repository

Click the "Fork" button at the top right of the repository page.

### 2. Clone Your Fork

```bash
git clone https://github.com/YourUsername/NguyenNgocAnhTu.git
cd NguyenNgocAnhTu
```

### 3. Add Upstream Remote

```bash
git remote add upstream https://github.com/AnhTuKaZe/NguyenNgocAnhTu.git
```

### 4. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

**Branch naming conventions:**
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation
- `perf/` - Performance improvements
- `refactor/` - Code refactoring

### 5. Make Your Changes

Edit the files you want to change.

### 6. Test Thoroughly

**Test on at least 2 different apps!**

For scripts:
- Test with real API calls
- Verify no breaking changes
- Check performance impact

For modules:
- Import into test device
- Test all 3 apps (YouTube, Spotify, Locket)
- Verify MITM still works

---

## 🔄 Pull Request Process

### Before Submitting

✅ **Checklist:**
- [ ] Code follows project style guidelines
- [ ] All tests pass
- [ ] Documentation updated
- [ ] Tested on at least 2 apps
- [ ] No merge conflicts with main branch
- [ ] Commit messages are clear
- [ ] Only one feature per PR

### Submitting the PR

1. **Push to your fork:**
```bash
git push origin feature/your-feature-name
```

2. **Open Pull Request:**
- Go to original repository
- Click "Pull requests" → "New pull request"
- Select your branch
- Fill in the PR template

3. **PR Title Format:**
```
[Type] Brief description

Examples:
[Feature] Add TikTok Premium support
[Fix] Resolve Spotify timeout issue
[Docs] Update installation guide
[Perf] Optimize Locket response time
```

4. **PR Description Should Include:**
- 📝 What changes you made
- 🎯 Why you made them
- 🧪 How you tested
- 📱 Which apps you tested on
- 📸 Screenshots (if UI changes)
- 🔗 Related issues/discussions

### Review Process

1. Maintainer will review your PR
2. Feedback may be provided
3. Make requested changes
4. Once approved, PR will be merged
5. Your contribution will be credited!

---

## 📏 Coding Standards

### JavaScript Style

#### 1. Use IIFE Pattern
```javascript
(function() {
  'use strict';
  
  // Your code here
  
})();
```

#### 2. Use 'use strict'
```javascript
'use strict';
```

#### 3. Constants in UPPER_CASE
```javascript
const EXPIRES_DATE = "2099-07-18T01:04:17Z";
const PRODUCT_ID = "locket.premium.yearly";
```

#### 4. Meaningful Variable Names
```javascript
// ❌ Bad
const d = "2025-07-18";
const obj = {...};

// ✅ Good
const specificDate = "2025-07-18";
const subscriptionData = {...};
```

#### 5. Comments
```javascript
// ========= Section Header ========= //

// Single line comment for complex logic
const result = complexFunction(); // Inline comment
```

#### 6. Performance Optimizations
```javascript
// ✅ Use for...in instead of .find()
for (const key in mapping) {
  if (ua.indexOf(key) !== -1) {
    // Process
    break; // Early exit
  }
}

// ✅ Pre-build objects
const data = { ... }; // Build once

// ✅ Use indexOf() instead of includes()
if (str.indexOf(search) !== -1) { ... }
```

### Module File Format

#### Surge (.sgmodule)
```ini
#!name=Module Name
#!desc=Description
#!author=Author Name

[Script]
script-name = type=http-response,pattern=...,script-path=...,requires-body=1
```

#### Loon (.plugin)
```ini
#!name = Module Name
#!desc = Description

[Script]
http-response ^pattern script-path=..., requires-body=true, tag=TagName
```

#### Shadowrocket (.module)
```ini
#!name=Module Name
#!desc=Description

[Script]
script-name = type=http-response, pattern=..., script-path=..., requires-body=true
```

---

## 🧪 Testing Guidelines

### Testing Checklist

#### For JavaScript Changes:

- [ ] **Syntax Check**: No JavaScript errors
- [ ] **Functionality**: Feature works as intended
- [ ] **Performance**: No significant slowdown
- [ ] **Compatibility**: Works on target apps
- [ ] **Edge Cases**: Handle errors gracefully

#### For Module Changes:

- [ ] **Import**: Module imports successfully
- [ ] **MITM**: Hostnames are correct
- [ ] **Scripts**: All scripts load
- [ ] **YouTube**: No ads, PiP works
- [ ] **Spotify**: No ads, unlimited skips
- [ ] **Locket**: Premium unlocked

#### Testing Matrix:

Test on at least **2 of these combinations**:

| App | iOS Version | Test Result |
|-----|-------------|-------------|
| Surge | iOS 14+ | ✅ / ❌ |
| Loon | iOS 14+ | ✅ / ❌ |
| Shadowrocket | iOS 14+ | ✅ / ❌ |
| Quantumult X | iOS 14+ | ✅ / ❌ |
| Stash | iOS 14+ / Android 8+ | ✅ / ❌ |

### Performance Testing

**Measure before and after:**

```javascript
// Add timing
console.time('script-execution');
// Your code
console.timeEnd('script-execution');
```

**Acceptable Performance:**
- Locket response: < 100ms
- Header processing: < 30ms
- Memory usage: < 512KB

---

## 📝 Commit Messages

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation only
- **style**: Code style (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring
- **perf**: Performance improvement
- **test**: Adding tests
- **chore**: Maintenance tasks

### Examples

```bash
# Good commits
git commit -m "feat(locket): add ultra-fast IIFE optimization"
git commit -m "fix(spotify): resolve timeout on slow networks"
git commit -m "docs(readme): add troubleshooting section"
git commit -m "perf(youtube): reduce memory usage by 50%"

# Bad commits (avoid these)
git commit -m "update"
git commit -m "fix bug"
git commit -m "changes"
```

### Detailed Commit

```bash
git commit -m "feat(locket): optimize response processing

- Implement IIFE pattern for isolated scope
- Use pre-built objects to avoid re-creation
- Switch from .find() to for...in loop (40% faster)
- Remove console.log to eliminate I/O overhead

Performance improvement:
- Response time: 150ms → 60ms (60% faster)
- Memory usage: 512KB → 256KB (50% less)

Tested on: Surge, Shadowrocket, Loon
Closes #123"
```

---

## 🎯 Priority Areas

We especially welcome contributions in these areas:

### High Priority
- 🔥 **Performance optimization** - Faster is better!
- 🐛 **Bug fixes** - Fix issues in existing features
- 📱 **New app support** - Support more proxy apps
- 🌍 **Translations** - English, Chinese, Japanese, etc.

### Medium Priority
- ✨ **New features** - Additional premium unlocks
- 📝 **Documentation** - Better guides and examples
- 🧪 **Testing** - More comprehensive tests

### Low Priority
- 🎨 **UI improvements** - Better formatting
- 🔧 **Refactoring** - Code cleanup

---

## ❓ Questions?

**Need help?**

- 💬 [Open a Discussion](https://github.com/AnhTuKaZe/NguyenNgocAnhTu/discussions)
- 📱 [Message on Messenger](https://www.messenger.com/channel/NguyenNgocAnhTu.VN)
- 📧 Email: Via Messenger

---

## 🙏 Thank You!

Thank you for taking the time to contribute! Every contribution, no matter how small, is valuable and appreciated. 💝

---

<div align="center">

**Happy Contributing! 🎉**

Made with ❤️ by the community

</div>

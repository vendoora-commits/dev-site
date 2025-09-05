# Vendoora Development Site

A modern, multilingual development site with comprehensive RTL/LTR support and advanced MCP (Model Context Protocol) tools for enhanced development capabilities.

## 🌍 Multilingual Support

### Supported Languages
- **English (en)** - LTR (Left-to-Right)
- **Spanish (es)** - LTR
- **Portuguese (pt)** - LTR
- **French (fr)** - LTR
- **Bengali (bn)** - LTR
- **Uzbek (uz)** - LTR
- **Russian (ru)** - LTR
- **Hebrew (he)** - RTL (Right-to-Left)
- **Arabic (ar)** - RTL (Right-to-Left)
- **Urdu (ur)** - RTL (Right-to-Left)

### Domain-Based Locale Detection

The site automatically detects the appropriate language based on the domain:

- **vendoora.pk** → Urdu (اردو) - Default for Pakistan
- **vendoora.us.com** → English - Default for United States
- **vendoora.es** → Spanish (Español)
- **vendoora.pt** → Portuguese (Português)
- **vendoora.fr** → French (Français)
- **vendoora.bd** → Bengali (বাংলা)
- **vendoora.uz** → Uzbek (O'zbek)
- **vendoora.ru** → Russian (Русский)
- **vendoora.il** → Hebrew (עברית)
- **vendoora.sa** → Arabic (العربية)

**Note**: `vendoora.com` is not currently owned. The site will fallback to English for any unrecognized domains.

### RTL/LTR Features
- ✅ Automatic text direction detection
- ✅ RTL-specific CSS styles and layouts
- ✅ Component-level RTL awareness
- ✅ Proper navigation and UI element positioning
- ✅ Language-specific typography and spacing

### Language Switching
The site includes a language switcher in the navigation that allows users to switch between supported languages. The interface automatically adjusts for RTL/LTR layouts.

## 🛠️ MCP Tools Integration

This project includes a comprehensive set of MCP tools for enhanced development capabilities:

### Available MCP Tools

#### 🔍 Visual Analysis Tool
- **Purpose**: Analyze website pages for accessibility, performance, and best practices
- **Features**:
  - Page rendering and screenshot capture
  - Accessibility compliance checking (WCAG 2.2 AA)
  - Performance metrics analysis
  - Cross-device compatibility testing
  - Enterprise best practices validation

#### 🧠 AI Coding Assistant
- **Purpose**: AI-powered code generation, analysis, and optimization
- **Features**:
  - Production-ready code generation
  - Code quality analysis and recommendations
  - Automated refactoring suggestions
  - Comprehensive test suite generation
  - Performance optimization recommendations
  - Security audit and vulnerability detection
  - AI-powered code reviews
  - Documentation generation

#### 📊 Analytics Tool
- **Purpose**: Website analytics and monitoring
- **Features**:
  - Page view tracking
  - Custom event tracking
  - Performance monitoring
  - User behavior analysis
  - Report generation

#### 📁 Filesystem Tool
- **Purpose**: File system operations and management
- **Features**:
  - File reading and writing
  - Directory listing and navigation
  - File pattern searching
  - Project structure analysis

#### 🗄️ Supabase Tool
- **Purpose**: Database operations and real-time features
- **Features**:
  - Database query execution
  - Data insertion, updates, and deletion
  - Real-time subscriptions
  - Database schema management

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm
- Git

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd dev-site-1
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up MCP tools**:
   ```bash
   npm run mcp:setup
   ```

4. **Configure environment**:
   ```bash
   cp .env.mcp.example .env.mcp
   # Edit .env.mcp with your API keys and configuration
   ```

### Development

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Start MCP tools** (in a separate terminal):
   ```bash
   npm run mcp:start
   ```

3. **View available tools**:
   ```bash
   npm run mcp:list
   ```

## 📁 Project Structure

```
dev-site-1/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # React components
│   ├── utils/               # Utility functions
│   └── i18n.ts             # Internationalization config
├── messages/                # Translation files
│   ├── en.json             # English translations
│   ├── es.json             # Spanish translations
│   ├── pt.json             # Portuguese translations
│   └── ar.json             # Arabic translations
├── mcp-tools/               # MCP tools directory
│   ├── vendoora-mcp-visual-analysis/
│   ├── vendoora-mcp-ai-coding/
│   └── vendoora-mcp-analytics/
├── mcp-config.json          # MCP configuration
├── setup-mcp.sh            # MCP setup script
├── run-mcp.js              # MCP runner script
└── MCP_TOOLS.md            # MCP tools documentation
```

## 🌐 Internationalization

### Adding New Languages

1. **Add language to configuration**:
   ```javascript
   // next-intl.config.js
   locales: ['en', 'es', 'pt', 'ar', 'new-lang']
   ```

2. **Create translation file**:
   ```bash
   cp messages/en.json messages/new-lang.json
   # Translate the content
   ```

3. **Update language switcher**:
   ```javascript
   // src/components/LanguageSwitcher.tsx
   <option value="new-lang">New Language</option>
   ```

4. **Add RTL support if needed**:
   ```javascript
   // src/utils/direction.ts
   RTL_LANGUAGES = ['ar', 'he', 'fa', 'ur', 'new-rtl-lang']
   ```

### RTL/LTR Styling

The project includes comprehensive RTL support:

```css
/* RTL-specific styles */
.rtl {
  direction: rtl;
  text-align: right;
}

.rtl .flex {
  flex-direction: row-reverse;
}

.rtl .ml-6 {
  margin-left: 0;
  margin-right: 1.5rem;
}
```

## 🛠️ MCP Tools Usage

### Visual Analysis
```bash
# Analyze your deployed site
npm run mcp:start
# Use visual analysis tools to check accessibility and performance
```

### AI Coding
```bash
# Generate code with AI assistance
# Use AI coding tools for code generation, analysis, and optimization
```

### Analytics
```bash
# Track and analyze website performance
# Use analytics tools to monitor user behavior and site performance
```

## 🔧 Configuration

### MCP Configuration
Edit `mcp-config.json` to customize:
- Server configurations
- Tool availability
- Environment variables
- RTL/LTR support settings

### Environment Variables
Required environment variables in `.env.mcp`:
```bash
# OpenAI Configuration (for AI coding tools)
OPENAI_API_KEY=your_openai_api_key_here

# Supabase Configuration (for database tools)
SUPABASE_URL=your_supabase_url_here
SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Analytics Configuration
ANALYTICS_API_KEY=your_analytics_api_key_here
```

## 🧪 Testing

### RTL/LTR Testing
1. Switch to Arabic language
2. Verify text direction is RTL
3. Check navigation and layout positioning
4. Test form inputs and interactions

### MCP Tools Testing
```bash
# Test MCP tools
npm run mcp:test
```

## 📚 Documentation

- [MCP Tools Documentation](MCP_TOOLS.md) - Detailed MCP tools usage
- [Contact Setup](CONTACT_SETUP.md) - Email configuration
- [Next.js Documentation](https://nextjs.org/docs) - Next.js framework docs
- [next-intl Documentation](https://next-intl-docs.vercel.app/) - Internationalization docs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test RTL/LTR support if adding new languages
5. Test MCP tools functionality
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check the documentation in this README
- Review MCP_TOOLS.md for MCP-specific help
- Open an issue for bugs or feature requests

---

**Built with ❤️ by the Vendoora Team**

*Enterprise-grade development tools for modern web applications*
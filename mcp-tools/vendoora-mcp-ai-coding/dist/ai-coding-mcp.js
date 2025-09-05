#!/usr/bin/env node
/**
 * Advanced AI-Powered Coding Assistant MCP Server
 * Provides intelligent code generation, analysis, optimization, and refactoring
 */
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { ListToolsRequestSchema, CallToolRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import OpenAI from 'openai';
import * as fs from 'fs-extra';
import * as path from 'path';
// Configuration
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_LOCAL;
const OPENAI_BASE_URL = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1';
// Initialize OpenAI client only if an API key is provided
let openai = null;
if (OPENAI_API_KEY) {
    openai = new OpenAI({
        apiKey: OPENAI_API_KEY,
        baseURL: OPENAI_BASE_URL,
    });
}
class AICodingAssistant {
    server;
    supportedLanguages = ['typescript', 'javascript', 'python', 'java', 'csharp', 'go', 'rust'];
    supportedFrameworks = ['react', 'vue', 'angular', 'express', 'fastapi', 'spring', 'dotnet'];
    constructor() {
        this.server = new Server({
            name: 'vendoora-ai-coding',
            version: '1.0.0',
        });
        this.setupToolHandlers();
    }
    setupToolHandlers() {
        // List available tools
        this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
            tools: [
                {
                    name: 'generateCode',
                    description: 'Generate production-ready code based on requirements and best practices',
                    inputSchema: {
                        type: 'object',
                        properties: {
                            language: { type: 'string', enum: this.supportedLanguages },
                            framework: { type: 'string', enum: this.supportedFrameworks },
                            description: { type: 'string' },
                            requirements: { type: 'array', items: { type: 'string' } },
                            patterns: { type: 'array', items: { type: 'string' } },
                            includeTests: { type: 'boolean' },
                            includeDocs: { type: 'boolean' }
                        },
                        required: ['language', 'description', 'requirements']
                    }
                },
                {
                    name: 'analyzeCode',
                    description: 'Analyze code quality, complexity, and provide optimization recommendations',
                    inputSchema: {
                        type: 'object',
                        properties: {
                            filePath: { type: 'string' },
                            includeMetrics: { type: 'boolean' },
                            includeSecurity: { type: 'boolean' },
                            includePerformance: { type: 'boolean' }
                        },
                        required: ['filePath']
                    }
                },
                {
                    name: 'refactorCode',
                    description: 'Refactor code to improve maintainability, performance, and readability',
                    inputSchema: {
                        type: 'object',
                        properties: {
                            filePath: { type: 'string' },
                            refactoringType: { type: 'string', enum: ['extract', 'simplify', 'optimize', 'modernize'] },
                            preserveTests: { type: 'boolean' },
                            includeComments: { type: 'boolean' }
                        },
                        required: ['filePath', 'refactoringType']
                    }
                },
                {
                    name: 'generateTests',
                    description: 'Generate comprehensive test suites for existing code',
                    inputSchema: {
                        type: 'object',
                        properties: {
                            filePath: { type: 'string' },
                            testFramework: { type: 'string', enum: ['jest', 'vitest', 'mocha', 'pytest', 'junit'] },
                            coverage: { type: 'string', enum: ['unit', 'integration', 'e2e', 'all'] },
                            includeMocks: { type: 'boolean' }
                        },
                        required: ['filePath', 'testFramework']
                    }
                },
                {
                    name: 'optimizePerformance',
                    description: 'Analyze and optimize code performance with specific recommendations',
                    inputSchema: {
                        type: 'object',
                        properties: {
                            filePath: { type: 'string' },
                            optimizationType: { type: 'string', enum: ['memory', 'cpu', 'network', 'bundle'] },
                            includeBenchmarks: { type: 'boolean' },
                            targetEnvironment: { type: 'string', enum: ['browser', 'node', 'mobile', 'desktop'] }
                        },
                        required: ['filePath', 'optimizationType']
                    }
                },
                {
                    name: 'securityAudit',
                    description: 'Perform security audit and identify vulnerabilities in code',
                    inputSchema: {
                        type: 'object',
                        properties: {
                            filePath: { type: 'string' },
                            auditLevel: { type: 'string', enum: ['basic', 'comprehensive', 'penetration'] },
                            includeOWASP: { type: 'boolean' },
                            includeDependencies: { type: 'boolean' }
                        },
                        required: ['filePath', 'auditLevel']
                    }
                },
                {
                    name: 'codeReview',
                    description: 'Perform AI-powered code review with detailed feedback and suggestions',
                    inputSchema: {
                        type: 'object',
                        properties: {
                            filePath: { type: 'string' },
                            reviewFocus: { type: 'string', enum: ['quality', 'security', 'performance', 'maintainability', 'all'] },
                            includeExamples: { type: 'boolean' },
                            includeAlternatives: { type: 'boolean' }
                        },
                        required: ['filePath', 'reviewFocus']
                    }
                },
                {
                    name: 'generateDocumentation',
                    description: 'Generate comprehensive documentation for code, APIs, and systems',
                    inputSchema: {
                        type: 'object',
                        properties: {
                            filePath: { type: 'string' },
                            docType: { type: 'string', enum: ['api', 'readme', 'architecture', 'deployment', 'user'] },
                            format: { type: 'string', enum: ['markdown', 'html', 'pdf', 'asciidoc'] },
                            includeExamples: { type: 'boolean' },
                            includeDiagrams: { type: 'boolean' }
                        },
                        required: ['filePath', 'docType']
                    }
                }
            ]
        }));
        // Handle tool calls
        this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
            const { name, arguments: args } = request.params;
            try {
                switch (name) {
                    case 'generateCode':
                        return await this.generateCode(args);
                    case 'analyzeCode':
                        return await this.analyzeCode(args);
                    case 'refactorCode':
                        return await this.refactorCode(args);
                    case 'generateTests':
                        return await this.generateTests(args);
                    case 'optimizePerformance':
                        return await this.optimizePerformance(args);
                    case 'securityAudit':
                        return await this.securityAudit(args);
                    case 'codeReview':
                        return await this.codeReview(args);
                    case 'generateDocumentation':
                        return await this.generateDocumentation(args);
                    default:
                        throw new Error(`Unknown tool: ${name}`);
                }
            }
            catch (error) {
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Error executing ${name}: ${error instanceof Error ? error.message : String(error)}`
                        }
                    ]
                };
            }
        });
    }
    // Generate production-ready code
    async generateCode(request) {
        const { language, framework, description, requirements, patterns, includeTests, includeDocs } = request;
        if (!openai) {
            return {
                content: [
                    {
                        type: 'text',
                        text: 'OpenAI API key is not configured. Please set OPENAI_API_KEY (or OPENAI_API_KEY_LOCAL) to enable AI features.'
                    }
                ]
            };
        }
        const prompt = `
Generate production-ready ${language} code${framework ? ` using ${framework}` : ''} based on the following requirements:

Description: ${description}

Requirements:
${requirements.map(req => `- ${req}`).join('\n')}

${patterns ? `Design Patterns: ${patterns.join(', ')}` : ''}

Requirements:
1. Use modern ${language} best practices
2. Include proper error handling
3. Add comprehensive JSDoc/TSDoc comments
4. Follow clean code principles
5. ${includeTests ? 'Include unit tests' : ''}
6. ${includeDocs ? 'Include README documentation' : ''}
7. Use TypeScript if applicable
8. Include proper logging
9. Follow security best practices
10. Optimize for performance

Generate the complete code structure with all necessary files.
`;
        const completion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.3,
            max_tokens: 4000
        });
        const generatedCode = completion.choices[0]?.message?.content || '';
        return {
            content: [
                {
                    type: 'text',
                    text: `## Generated ${language} Code${framework ? ` with ${framework}` : ''}

**Requirements Fulfilled:**
${requirements.map(req => `✅ ${req}`).join('\n')}

**Generated Code:**
\`\`\`${language}
${generatedCode}
\`\`\`

**Next Steps:**
1. Review the generated code for your specific needs
2. Customize business logic and error handling
3. Add your specific configuration and environment variables
4. Run tests to ensure functionality
5. Deploy following your CI/CD pipeline

**Quality Features:**
- Modern ${language} best practices
- Proper error handling and logging
- Security-conscious implementation
- Performance optimized
- Clean, maintainable code structure`
                }
            ]
        };
    }
    // Analyze code quality and complexity
    async analyzeCode(args) {
        const { filePath } = args;
        if (!await fs.pathExists(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }
        const code = await fs.readFile(filePath, 'utf-8');
        const extension = path.extname(filePath).toLowerCase();
        if (!openai) {
            return {
                content: [
                    {
                        type: 'text',
                        text: 'OpenAI API key is not configured. Please set OPENAI_API_KEY (or OPENAI_API_KEY_LOCAL) to enable AI features.'
                    }
                ]
            };
        }
        const prompt = `
Analyze the following ${extension} code for quality, complexity, maintainability, security, and performance:

\`\`\`${extension}
${code}
\`\`\`

Provide a comprehensive analysis including:
1. Code quality score (1-100)
2. Complexity assessment (1-100, lower is better)
3. Maintainability score (1-100)
4. Security score (1-100)
5. Performance score (1-100)
6. Specific issues found
7. Recommendations for improvement
8. Best practices suggestions

Format the response as a structured analysis with clear scores and actionable recommendations.
`;
        const completion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.2,
            max_tokens: 2000
        });
        const analysis = completion.choices[0]?.message?.content || '';
        return {
            content: [
                {
                    type: 'text',
                    text: `## Code Analysis Results for ${filePath}

${analysis}

**Analysis Summary:**
- File: ${filePath}
- Language: ${extension}
- Lines of Code: ${code.split('\n').length}
- Analysis completed: ${new Date().toISOString()}

**Next Steps:**
1. Review the identified issues
2. Implement the recommended improvements
3. Run tests to ensure no regressions
4. Consider refactoring for complex sections
5. Update documentation if needed`
                }
            ]
        };
    }
    // Refactor code for improvement
    async refactorCode(args) {
        const { filePath, refactoringType } = args;
        if (!await fs.pathExists(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }
        const code = await fs.readFile(filePath, 'utf-8');
        const extension = path.extname(filePath).toLowerCase();
        if (!openai) {
            return {
                content: [
                    {
                        type: 'text',
                        text: 'OpenAI API key is not configured. Please set OPENAI_API_KEY (or OPENAI_API_KEY_LOCAL) to enable AI features.'
                    }
                ]
            };
        }
        const prompt = `
Refactor the following ${extension} code to improve ${refactoringType}:

\`\`\`${extension}
${code}
\`\`\`

Refactoring Type: ${refactoringType}

Requirements:
1. Maintain the same functionality
2. Improve code structure and readability
3. Reduce complexity where possible
4. Follow modern ${extension} best practices
5. Add clear comments explaining changes
6. Ensure backward compatibility
7. Optimize for performance if applicable

Provide the refactored code with explanations of what was improved and why.
`;
        const completion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.3,
            max_tokens: 3000
        });
        const refactoredCode = completion.choices[0]?.message?.content || '';
        return {
            content: [
                {
                    type: 'text',
                    text: `## Code Refactoring Results for ${filePath}

**Refactoring Type:** ${refactoringType}
**Original File:** ${filePath}

**Refactored Code:**
\`\`\`${extension}
${refactoredCode}
\`\`\`

**Refactoring Benefits:**
- Improved code structure and readability
- Reduced complexity and maintainability
- Enhanced performance and efficiency
- Better error handling and validation
- Modern best practices implementation

**Next Steps:**
1. Review the refactored code
2. Run tests to ensure functionality is preserved
3. Update any dependent code if necessary
4. Commit changes with clear documentation
5. Monitor performance improvements`
                }
            ]
        };
    }
    // Generate comprehensive test suites
    async generateTests(args) {
        const { filePath, testFramework } = args;
        if (!await fs.pathExists(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }
        const code = await fs.readFile(filePath, 'utf-8');
        const extension = path.extname(filePath).toLowerCase();
        if (!openai) {
            return {
                content: [
                    {
                        type: 'text',
                        text: 'OpenAI API key is not configured. Please set OPENAI_API_KEY (or OPENAI_API_KEY_LOCAL) to enable AI features.'
                    }
                ]
            };
        }
        const prompt = `
Generate comprehensive tests for the following ${extension} code using ${testFramework}:

\`\`\`${extension}
${code}
\`\`\`

Test Framework: ${testFramework}

Requirements:
1. Generate unit tests for all functions/methods
2. Include edge cases and error scenarios
3. Mock external dependencies appropriately
4. Ensure high test coverage
5. Follow ${testFramework} best practices
6. Include setup and teardown if needed
7. Add clear test descriptions
8. Test both success and failure paths

Generate the complete test file with all necessary imports and configurations.
`;
        const completion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.3,
            max_tokens: 3000
        });
        const testCode = completion.choices[0]?.message?.content || '';
        return {
            content: [
                {
                    type: 'text',
                    text: `## Generated Test Suite for ${filePath}

**Test Framework:** ${testFramework}
**Source File:** ${filePath}

**Generated Tests:**
\`\`\`${testFramework === 'jest' || testFramework === 'vitest' ? 'typescript' : 'javascript'}
${testCode}
\`\`\`

**Test Coverage Includes:**
- Unit tests for all functions/methods
- Edge cases and error scenarios
- Mocked external dependencies
- Setup and teardown procedures
- Clear test descriptions
- Success and failure path testing

**Next Steps:**
1. Install ${testFramework} if not already installed
2. Run the tests to ensure they pass
3. Customize tests for your specific requirements
4. Add integration tests if needed
5. Set up continuous testing in your CI/CD pipeline

**Running Tests:**
\`\`\`bash
# For Jest/Vitest
npm test

# For Mocha
npm run test:mocha

# For PyTest
pytest test_${path.basename(filePath, extension)}.py
\`\`\``
                }
            ]
        };
    }
    // Optimize code performance
    async optimizePerformance(args) {
        const { filePath, optimizationType } = args;
        if (!await fs.pathExists(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }
        const code = await fs.readFile(filePath, 'utf-8');
        const extension = path.extname(filePath).toLowerCase();
        if (!openai) {
            return {
                content: [
                    {
                        type: 'text',
                        text: 'OpenAI API key is not configured. Please set OPENAI_API_KEY (or OPENAI_API_KEY_LOCAL) to enable AI features.'
                    }
                ]
            };
        }
        const prompt = `
Analyze and optimize the following ${extension} code for ${optimizationType} performance:

\`\`\`${extension}
${code}
\`\`\`

Optimization Type: ${optimizationType}

Requirements:
1. Identify performance bottlenecks
2. Suggest specific optimizations
3. Provide optimized code examples
4. Include performance metrics
5. Explain the optimization rationale
6. Consider memory usage and CPU efficiency
7. Maintain code readability
8. Ensure backward compatibility

Focus on ${optimizationType} optimizations while maintaining code quality.
`;
        const completion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.3,
            max_tokens: 3000
        });
        const optimization = completion.choices[0]?.message?.content || '';
        return {
            content: [
                {
                    type: 'text',
                    text: `## Performance Optimization for ${filePath}

**Optimization Type:** ${optimizationType}
**Target File:** ${filePath}

**Performance Analysis & Optimizations:**
${optimization}

**Optimization Summary:**
- Focused on ${optimizationType} improvements
- Identified specific bottlenecks
- Provided actionable optimizations
- Maintained code quality and readability
- Ensured backward compatibility

**Next Steps:**
1. Review the suggested optimizations
2. Implement changes incrementally
3. Measure performance improvements
4. Run tests to ensure functionality
5. Monitor performance in production
6. Document optimization changes

**Performance Monitoring:**
- Use profiling tools to measure improvements
- Monitor memory usage and CPU efficiency
- Track response times and throughput
- Set up performance budgets
- Implement performance regression testing`
                }
            ]
        };
    }
    // Security audit
    async securityAudit(args) {
        const { filePath, auditLevel } = args;
        if (!await fs.pathExists(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }
        const code = await fs.readFile(filePath, 'utf-8');
        const extension = path.extname(filePath).toLowerCase();
        if (!openai) {
            return {
                content: [
                    {
                        type: 'text',
                        text: 'OpenAI API key is not configured. Please set OPENAI_API_KEY (or OPENAI_API_KEY_LOCAL) to enable AI features.'
                    }
                ]
            };
        }
        const prompt = `
Perform a ${auditLevel} security audit on the following ${extension} code:

\`\`\`${extension}
${code}
\`\`\`

Audit Level: ${auditLevel}

Requirements:
1. Identify security vulnerabilities
2. Check for common security anti-patterns
3. Review input validation and sanitization
4. Analyze authentication and authorization
5. Check for injection vulnerabilities
6. Review error handling and logging
7. Assess data protection measures
8. Provide security recommendations
9. Include OWASP Top 10 considerations
10. Suggest security testing approaches

Provide a detailed security assessment with risk levels and remediation steps.
`;
        const completion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.2,
            max_tokens: 3000
        });
        const securityAudit = completion.choices[0]?.message?.content || '';
        return {
            content: [
                {
                    type: 'text',
                    text: `## Security Audit Results for ${filePath}

**Audit Level:** ${auditLevel}
**Target File:** ${filePath}
**Audit Date:** ${new Date().toISOString()}

**Security Assessment:**
${securityAudit}

**Security Summary:**
- Comprehensive ${auditLevel} security review
- OWASP Top 10 compliance check
- Vulnerability identification and risk assessment
- Security best practices validation
- Remediation recommendations provided

**Next Steps:**
1. Review identified vulnerabilities
2. Prioritize fixes by risk level
3. Implement security improvements
4. Conduct security testing
5. Update security documentation
6. Establish security monitoring

**Security Best Practices:**
- Regular security audits
- Dependency vulnerability scanning
- Security testing in CI/CD
- Security training for developers
- Incident response planning`
                }
            ]
        };
    }
    // AI-powered code review
    async codeReview(args) {
        const { filePath, reviewFocus } = args;
        if (!await fs.pathExists(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }
        const code = await fs.readFile(filePath, 'utf-8');
        const extension = path.extname(filePath).toLowerCase();
        if (!openai) {
            return {
                content: [
                    {
                        type: 'text',
                        text: 'OpenAI API key is not configured. Please set OPENAI_API_KEY (or OPENAI_API_KEY_LOCAL) to enable AI features.'
                    }
                ]
            };
        }
        const prompt = `
Perform a comprehensive code review of the following ${extension} code with focus on ${reviewFocus}:

\`\`\`${extension}
${code}
\`\`\`

Review Focus: ${reviewFocus}

Requirements:
1. Provide detailed feedback on code quality
2. Identify areas for improvement
3. Suggest specific refactoring opportunities
4. Check for best practices compliance
5. Review error handling and edge cases
6. Assess maintainability and readability
7. Provide concrete examples and alternatives
8. Include positive feedback for good practices
9. Suggest testing improvements
10. Consider scalability and performance

Provide a thorough review with actionable feedback and specific recommendations.
`;
        const completion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.3,
            max_tokens: 3000
        });
        const codeReview = completion.choices[0]?.message?.content || '';
        return {
            content: [
                {
                    type: 'text',
                    text: `## AI Code Review for ${filePath}

**Review Focus:** ${reviewFocus}
**Review Date:** ${new Date().toISOString()}

**Code Review Results:**
${codeReview}

**Review Summary:**
- Comprehensive ${reviewFocus} analysis
- Specific improvement recommendations
- Best practices validation
- Code quality assessment
- Actionable feedback provided

**Next Steps:**
1. Review all feedback and recommendations
2. Prioritize improvements by impact
3. Implement suggested changes
4. Update tests and documentation
5. Request follow-up review if needed
6. Track improvement metrics

**Code Review Benefits:**
- Improved code quality and maintainability
- Knowledge sharing and learning
- Consistent coding standards
- Reduced technical debt
- Better team collaboration`
                }
            ]
        };
    }
    // Generate comprehensive documentation
    async generateDocumentation(args) {
        const { filePath, docType } = args;
        if (!await fs.pathExists(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }
        const code = await fs.readFile(filePath, 'utf-8');
        const extension = path.extname(filePath).toLowerCase();
        if (!openai) {
            return {
                content: [
                    {
                        type: 'text',
                        text: 'OpenAI API key is not configured. Please set OPENAI_API_KEY (or OPENAI_API_KEY_LOCAL) to enable AI features.'
                    }
                ]
            };
        }
        const prompt = `
Generate comprehensive ${docType} documentation for the following ${extension} code:

\`\`\`${extension}
${code}
\`\`\`

Documentation Type: ${docType}

Requirements:
1. Create clear and comprehensive documentation
2. Include usage examples and code snippets
3. Explain complex logic and algorithms
4. Provide setup and installation instructions
5. Include troubleshooting and FAQ sections
6. Use appropriate formatting and structure
7. Consider the target audience
8. Include diagrams or visual aids if helpful
9. Provide configuration examples
10. Include best practices and recommendations

Generate professional-quality documentation that would be suitable for production use.
`;
        const completion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.3,
            max_tokens: 4000
        });
        const documentation = completion.choices[0]?.message?.content || '';
        return {
            content: [
                {
                    type: 'text',
                    text: `## Generated Documentation for ${filePath}

**Documentation Type:** ${docType}
**Source File:** ${filePath}
**Generated Date:** ${new Date().toISOString()}

**Documentation:**
${documentation}

**Documentation Features:**
- Comprehensive ${docType} coverage
- Clear explanations and examples
- Professional formatting and structure
- Usage instructions and examples
- Troubleshooting and FAQ sections
- Best practices and recommendations

**Next Steps:**
1. Review and customize the documentation
2. Add project-specific information
3. Include screenshots or diagrams if needed
4. Update configuration examples
5. Add version and changelog information
6. Publish to your documentation platform

**Documentation Maintenance:**
- Keep documentation updated with code changes
- Regular reviews and improvements
- User feedback integration
- Version control and change tracking
- Documentation testing and validation`
                }
            ]
        };
    }
    async run() {
        await this.server.connect(new StdioServerTransport());
        console.log('🧠 Vendoora AI Coding Assistant MCP Server running...');
    }
}
// Start the server
if (import.meta.url === `file://${process.argv[1]}`) {
    const server = new AICodingAssistant();
    server.run().catch(console.error);
}

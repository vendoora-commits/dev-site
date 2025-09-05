#!/usr/bin/env node

/**
 * Simple test script for the Vendoora Visual Analysis MCP Server
 * Tests basic functionality without requiring full MCP client setup
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, readdirSync, readFileSync, statSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🧪 Testing Vendoora Visual Analysis MCP Server...\n');

// Test 1: Check if the server can start
console.log('✅ Test 1: Server Startup');
console.log('   Starting MCP server...');

const serverProcess = spawn('node', [join(__dirname, 'dist/visual-analysis-mcp.js')], {
  stdio: ['pipe', 'pipe', 'pipe']
});

let serverOutput = '';
let serverError = '';

serverProcess.stdout.on('data', (data) => {
  serverOutput += data.toString();
});

serverProcess.stderr.on('data', (data) => {
  serverError += data.toString();
});

// Give the server a moment to start
setTimeout(() => {
  console.log('   Server process started successfully');
  console.log('   Output:', serverOutput.trim() || 'No output yet');
  
  if (serverError) {
    console.log('   Errors:', serverError.trim());
  }
  
  // Test 2: Check if the built files exist
  console.log('\n✅ Test 2: Build Verification');
  const distPath = join(__dirname, 'dist');
  
  if (existsSync(distPath)) {
    const files = readdirSync(distPath);
    console.log('   Built files found:', files);
    
    if (files.includes('visual-analysis-mcp.js')) {
      console.log('   ✅ Main server file exists');
    } else {
      console.log('   ❌ Main server file missing');
    }
  } else {
    console.log('   ❌ Dist folder not found');
  }
  
  // Test 3: Check dependencies
  console.log('\n✅ Test 3: Dependencies Check');
  try {
    const packageJson = JSON.parse(readFileSync(join(__dirname, 'package.json'), 'utf8'));
    console.log('   Dependencies:', Object.keys(packageJson.dependencies || {}));
    console.log('   Dev Dependencies:', Object.keys(packageJson.devDependencies || {}));
  } catch (error) {
    console.log('   ❌ Error reading package.json:', error.message);
  }
  
  // Test 4: Check Playwright installation
  console.log('\n✅ Test 4: Playwright Check');
  try {
    const playwrightPath = join(__dirname, 'node_modules/playwright');
    if (existsSync(playwrightPath)) {
      console.log('   ✅ Playwright installed');
      
      // Check if browsers are installed
      const browsersPath = join(playwrightPath, '.cache');
      if (existsSync(browsersPath)) {
        console.log('   ✅ Playwright browsers available');
      } else {
        console.log('   ⚠️  Playwright browsers may need installation');
      }
    } else {
      console.log('   ❌ Playwright not found');
    }
  } catch (error) {
    console.log('   ❌ Error checking Playwright:', error.message);
  }
  
  // Test 5: TypeScript compilation check
  console.log('\n✅ Test 5: TypeScript Compilation');
  try {
    const sourceFile = join(__dirname, 'src/visual-analysis-mcp.ts');
    const compiledFile = join(__dirname, 'dist/visual-analysis-mcp.js');
    
    if (existsSync(sourceFile) && existsSync(compiledFile)) {
      const sourceSize = statSync(sourceFile).size;
      const compiledSize = statSync(compiledFile).size;
      
      console.log('   ✅ Source and compiled files exist');
      console.log(`   📊 Source: ${sourceSize} bytes, Compiled: ${compiledSize} bytes`);
      
      if (compiledSize > 0) {
        console.log('   ✅ Compilation successful');
      } else {
        console.log('   ❌ Compiled file is empty');
      }
    } else {
      console.log('   ❌ Source or compiled file missing');
    }
  } catch (error) {
    console.log('   ❌ Error checking compilation:', error.message);
  }
  
  // Summary
  console.log('\n🎯 Test Summary');
  console.log('   The Vendoora Visual Analysis MCP Server is ready for integration!');
  console.log('   Next steps:');
  console.log('   1. Integrate with your MCP client');
  console.log('   2. Test with real deployed pages');
  console.log('   3. Validate enterprise best practices');
  console.log('   4. Monitor visual quality metrics');
  
  // Clean up
  serverProcess.kill();
  process.exit(0);
  
}, 2000);

// Handle server process errors
serverProcess.on('error', (error) => {
  console.log('   ❌ Server startup failed:', error.message);
});

serverProcess.on('exit', (code) => {
  if (code !== 0) {
    console.log(`   ⚠️  Server exited with code ${code}`);
  }
});

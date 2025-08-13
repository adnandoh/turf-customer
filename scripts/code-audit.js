const fs = require('fs');
const path = require('path');

function analyzeCodeEfficiency() {
  console.log('🔍 Code Efficiency Audit\n');

  const appDir = path.join(__dirname, '../app');
  const issues = [];
  const suggestions = [];

  function analyzeFile(filePath, relativePath) {
    if (!fs.existsSync(filePath)) return;
    
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    // Check for performance issues
    let hasUseEffect = false;
    let hasUseState = false;
    let hasLargeComponents = lines.length > 200;
    let hasInlineStyles = content.includes('style={{');
    let hasConsoleLog = content.includes('console.log');
    let hasUnoptimizedImages = content.includes('<img ') && !content.includes('<Image');
    let hasLazyLoading = content.includes('loading="lazy"');
    let hasSizes = content.includes('sizes=');

    if (content.includes('useEffect')) hasUseEffect = true;
    if (content.includes('useState')) hasUseState = true;

    // Report issues
    if (hasLargeComponents) {
      issues.push(`${relativePath}: Large component (${lines.length} lines) - consider splitting`);
    }

    if (hasInlineStyles) {
      issues.push(`${relativePath}: Inline styles detected - use CSS classes for better performance`);
    }

    if (hasConsoleLog && process.env.NODE_ENV === 'production') {
      issues.push(`${relativePath}: Console.log statements found - remove for production`);
    }

    if (hasUnoptimizedImages) {
      issues.push(`${relativePath}: Unoptimized <img> tags - use Next.js Image component`);
    }

    // Report good practices
    if (hasLazyLoading) {
      suggestions.push(`${relativePath}: ✅ Lazy loading implemented`);
    }

    if (hasSizes) {
      suggestions.push(`${relativePath}: ✅ Image sizes attribute used`);
    }

    // Check for React best practices
    if (hasUseEffect && hasUseState) {
      // Check for potential infinite loops
      const useEffectMatches = content.match(/useEffect\([^,]+,\s*\[[^\]]*\]/g);
      if (useEffectMatches) {
        useEffectMatches.forEach(match => {
          if (match.includes('[]')) {
            suggestions.push(`${relativePath}: ✅ useEffect with empty dependency array`);
          }
        });
      }
    }
  }

  function walkDirectory(dir, baseDir = '') {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const relativePath = path.join(baseDir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        walkDirectory(filePath, relativePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        analyzeFile(filePath, relativePath);
      }
    });
  }

  walkDirectory(appDir);

  // Report findings
  console.log('🚨 Issues Found:');
  if (issues.length === 0) {
    console.log('  ✅ No major issues detected!');
  } else {
    issues.forEach(issue => console.log(`  ⚠️  ${issue}`));
  }

  console.log('\n✅ Good Practices:');
  if (suggestions.length === 0) {
    console.log('  📝 Consider implementing performance best practices');
  } else {
    suggestions.forEach(suggestion => console.log(`  ${suggestion}`));
  }

  // Bundle size analysis
  console.log('\n📦 Bundle Analysis:');
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
  const dependencies = Object.keys(packageJson.dependencies || {});
  const devDependencies = Object.keys(packageJson.devDependencies || {});

  console.log(`  Dependencies: ${dependencies.length}`);
  console.log(`  Dev Dependencies: ${devDependencies.length}`);

  // Check for heavy dependencies
  const heavyDeps = dependencies.filter(dep => 
    ['moment', 'lodash', 'jquery', 'bootstrap'].includes(dep)
  );

  if (heavyDeps.length > 0) {
    console.log(`  ⚠️  Heavy dependencies detected: ${heavyDeps.join(', ')}`);
    console.log('     Consider lighter alternatives');
  }

  // Performance recommendations
  console.log('\n🚀 Performance Recommendations:');
  console.log('  • Use React.memo() for expensive components');
  console.log('  • Implement code splitting with dynamic imports');
  console.log('  • Use useMemo() and useCallback() for expensive calculations');
  console.log('  • Optimize images with WebP format');
  console.log('  • Implement lazy loading for below-fold content');
  console.log('  • Use CSS-in-JS libraries sparingly');
  console.log('  • Minimize bundle size with tree shaking');

  console.log('\n✨ Code audit complete!');
}

analyzeCodeEfficiency();
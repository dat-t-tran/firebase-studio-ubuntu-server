// scripts/autopush.js
const { execSync } = require('child_process');

setInterval(() => {
  try {
    const changes = execSync('git status --porcelain').toString().trim();
    if (changes) {
      console.log('📦 Committing changes...');
      execSync('git add .');
      execSync(`git commit -m "auto: save at ${new Date().toISOString()}"`);
      execSync('git push');
      console.log('✅ Pushed!');
    } else {
      console.log('🔍 No changes to commit');
    }
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}, 10 * 60 * 1000); // Every 10 minutes

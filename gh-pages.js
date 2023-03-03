var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Larry-Gan/PCSTaxToolV2.git', // Update to point to your repository  
        user: {
            name: 'Larry Gan', // update to use your name
            email: 'lbgan2000@berkeley.edu' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
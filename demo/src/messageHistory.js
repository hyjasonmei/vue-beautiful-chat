export default [
  {
    type: 'text', author: `me`, id: 0, data: {
      text: `Why don't they have salsa on the table?`,
      isShowLike: true,
      like: 0,
      isShowRating: true 
    }
  },
  { type: 'text', author: `mattmezza`, id: 1, data: { text: `What do you need salsa for?` } },
  { type: 'text', author: `me`, id: 2, data: { text: `Salsa is now the number one condiment in America.` } },
  { type: 'text', author: `mattmezza`, id: 3, data: { text: `You know why? Because people like to say 'salsa.' 'Excuse me, do you have salsa?' 'We need more salsa.' 'Where is the salsa? No salsa?'` } },
  { type: 'text', author: `me`, id: 4, data: { text: `You know it must be impossible for a Spanish person to order seltzer and not get salsa. 'I wanted seltzer, not salsa.'` } },
  { type: 'text', author: `mattmezza`, id: 5, data: { text: `Don't you know the difference between seltzer and salsa?? You have the seltezer after the salsa!` } },
  { type: 'text', author: `me`, id: 6, data: { text: `See, this should be a show. This is the show. ` } },
  { type: 'text', author: `mattmezza`, id: 7, data: { text: `What?` } },
  { type: 'text', author: `me`, id: 8, data: { text: `This. Just talking.` } },
  { type: 'text', author: `mattmezza`, id: 9, data: { text: `Yeah, right.` } },
  { type: 'text', author: `me`, id: 10, data: { text: `I'm really serious. I think that's a good idea. ` } },
  { type: 'text', author: `mattmezza`, id: 11, data: { text: `Just talking? Well what's the show about?` } },
  { type: 'text', author: `me`, id: 12, data: { text: `It's about nothing.` } },
  { type: 'text', author: `mattmezza`, id: 100, data: { text: `No story?` } },
  { type: 'system', id: 13, data: { text: 'You have been transferred to another operator', meta: '04-07-2018 15:57' } },
  { type: 'file', author: `support`, id: 14, data: { text: `No forget the story. `, file: { name: 'awesome', url: 'https://media.giphy.com/media/dkGhBWE3SyzXW/giphy.gif' } } },
  { type: 'file', author: `me`, id: 15, data: { text: `What about this one instead?? `, file: { url: 'http://www.quickmeme.com/img/2d/2d95cc80f9a2a2578a8f632eebecddcc1c12e5b08ab85f81a5d401670d5f36c1.jpg' }, meta: '✓✓ Read' } },
  { type: 'text', author: `support`, id: 16, data: { text: `You've got to have a story. You've got to have a story. You've got to have a story. You've got to have a story. You've got to have a story. You've got to have a story. ` } },
  { type: 'emoji', author: `me`, id: 17, data: { emoji: `😋` } },
  { type: 'text', author: `me`, id: 18, data: { text: `Do you read me...`, meta: '✓✓ Read' } },
  { type: 'text', author: `me`, id: 19, data: { text: `...or not?`, meta: '✓ Delivered' } },
  { type: 'system', id: 20, data: { text: 'User changed security key', meta: '04-08-2018 15:57' } },
  { type: 'text', author: `support`, id: 21, data: { text: `What about suggestions?` }, suggestions: ["Looks good!", "It's OK.", "Uhh.. Do I really have to say something?", "This suggestion is way too long for css purpose. Let's make it long... Longer, and more and more.. Never ending."] },
  {
    type: 'text', author: `support`, id: 22, data: {
      text: "<p><b>HTML Content</b><ul><li>item 1</li><li>item 2</li></ul></p>",
      refs: [{ key: 0, title: 'aaa', content: 'aaa bbb ccc' }, { key: 1, title: 'bbb', content: 'aaa bbb ccc' }],
      isHtml: true
    }
  },
  {
    type: 'text', author: `support`, id: 22, data: {
      text: "<p>To create an AWS account, you need to follow these steps:</p>\n<ol>\n<li>Get approval from your functional head, such as xxxxxx. If you're unsure who your functional head is, please refer to <a href=\"https://xxx \" target=\"_blank\" rel=\"noopener noreferrer\">xxxx</a> <sup>[doc0]</sup>.</li>\n<li>Read the InfoSec policies to understand the security guidelines. You can find more information on the <a href=\"https://xxxxx\" target=\"_blank\" rel=\"noopener noreferrer\">Security Suggestions for using generative AI</a> page <sup>[doc0]</sup>.</li>\n<li>Create an external distribution list (DL) on JARVIS using the instructions provided on the <a href=\"https://xxxxxx/\" target=\"_blank\" rel=\"noopener noreferrer\">Create Distribution List</a> page. Make sure to use the \"@xxxxx.com\" email domain and add xxxx Chxxxang (<a href=\"mailto:xxxxx@xxxxxx.com\">xxxxx@xxxxxxxxxxxxxx.com</a>) to the DL. If you need to create multiple accounts, create multiple external DLs <sup>[doc0]</sup>.</li>\n<li>Notify the cloud admin by sending an email to the DL \"All of Trend Corp IS Cloud Admins\" with the subject \"AWS Account Creation - Your Service or Team Name\" and provide the required information mentioned in the email content <sup>[doc0]</sup>.</li>\n</ol>\n<p>Please note that the account creation process will be done by the AWS admin, who will create the account and provide you with the account information <sup>[doc0]</sup>.</p>\n<p>(<em>Source: <a href=\"https://xxxxxxxx\" target=\"_blank\" rel=\"noopener noreferrer\">xxxxxxxxx Account Creation</a></em>)</p>",
      refs: [{ key: 0, title: 'AWS_Account_Creation.md - Part 1', content: 'AWS_Account_Creation.md - Part 1AWS_Account_Creation.md - Part 1AWS_Account_Creation.md - Part 1AWS_Account_Creation.md - Part 1' }],
      isHtml: true
    }
  },
  {
    type: 'text', author: `me`, id: 22, data: {
      text: "<p>To create an AWS account, you need to follow these steps:</p>\n<ol>\n<li>Get approval from your functional head, such as xxxxxx. If you're unsure who your functional head is, please refer to <a href=\"https://xxx \" target=\"_blank\" rel=\"noopener noreferrer\">xxxx</a> <sup>[doc0]</sup>.</li>\n<li>Read the InfoSec policies to understand the security guidelines. You can find more information on the <a href=\"https://xxxxx\" target=\"_blank\" rel=\"noopener noreferrer\">Security Suggestions for using generative AI</a> page <sup>[doc0]</sup>.</li>\n<li>Create an external distribution list (DL) on JARVIS using the instructions provided on the <a href=\"https://xxxxxx/\" target=\"_blank\" rel=\"noopener noreferrer\">Create Distribution List</a> page. Make sure to use the \"@xxxxx.com\" email domain and add xxxx Chxxxang (<a href=\"mailto:xxxxx@xxxxxx.com\">xxxxx@xxxxxxxxxxxxxx.com</a>) to the DL. If you need to create multiple accounts, create multiple external DLs <sup>[doc0]</sup>.</li>\n<li>Notify the cloud admin by sending an email to the DL \"All of Trend Corp IS Cloud Admins\" with the subject \"AWS Account Creation - Your Service or Team Name\" and provide the required information mentioned in the email content <sup>[doc0]</sup>.</li>\n</ol>\n<p>Please note that the account creation process will be done by the AWS admin, who will create the account and provide you with the account information <sup>[doc0]</sup>.</p>\n<p>(<em>Source: <a href=\"https://xxxxxxxx\" target=\"_blank\" rel=\"noopener noreferrer\">xxxxxxxxx Account Creation</a></em>)</p>",
      refs: [{ key: 0, title: 'AWS_Account_Creation.md - Part 1', content: 'AWS_Account_Creation.md - Part 1AWS_Account_Creation.md - Part 1AWS_Account_Creation.md - Part 1AWS_Account_Creation.md - Part 1' }],
      isHtml: true,
      isShowRating: true 
    }
  },
]

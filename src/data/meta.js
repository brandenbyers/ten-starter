const {
  META_TITLE,
  META_URL,
  META_DESC,
  META_LANG,
  META_EMAIL,
  META_PHONE
} = process.env

module.exports = {
  title: META_TITLE || '',
  url: META_URL || '',
  description: META_DESC || '',
  lang: META_LANG || 'en',
  email: META_EMAIL || '',
  phone: META_PHONE || '',
}

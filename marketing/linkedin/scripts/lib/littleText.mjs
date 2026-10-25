// LinkedIn's Posts API parses `commentary` as "little text". Unescaped reserved
// characters silently truncate or mangle the post (a bare "(" is the classic
// way to lose everything after it), so every commentary goes through here.
//
// `#hashtag` is left alone so hashtags stay clickable; a lone "#" is escaped.

const RESERVED = /[\\|{}@[\]()<>*_~]/g;

/**
 * @param {string} text
 * @returns {string}
 */
export function escapeLittleText(text) {
  return text
    .replace(RESERVED, (ch) => `\\${ch}`)
    .replace(/#(?![\p{L}\p{N}_])/gu, '\\#');
}

/**
 * Commentary limit for a LinkedIn post.
 */
export const MAX_COMMENTARY_LENGTH = 3000;

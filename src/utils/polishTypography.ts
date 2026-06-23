const NBSP = '\u00A0';

/** Polish short words that should not end a line alone. */
const SHORT_WORDS =
  'a|i|o|u|w|z|że|to|te|niż|czy|bo|już|by|ze|we|od|do|na|po|za|ku|co|lub|ale|oraz|ani|gdy|jak|dla|bez|przy|pod|nad|czyli|lecz|więc';

const SHORT_WORD_PATTERN = new RegExp(`\\s(${SHORT_WORDS})\\s`, 'gi');

/** Bind short words to the next word and avoid a single-word last line. */
export function polishTypography(text: string): string {
  const withBoundEnclitics = text.replace(
    /(\S+)\s+(się)\s/gi,
    `$1${NBSP}$2 `,
  );

  const withBoundShortWords = withBoundEnclitics.replace(
    SHORT_WORD_PATTERN,
    ` $1${NBSP}`,
  );

  return withBoundShortWords.replace(
    /(\S+)\s+(\S+)\s*$/,
    `$1${NBSP}$2`,
  );
}

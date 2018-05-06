// @flow
/**
 * This util is meant to be used to turn strings incompatible with url fragment standards
 * into valid and SEO friendly url fragment strings.
 * (i.e. "Árvíztűrő tükörfúrógép!" becomes "arvizturo-tukorfurogep")
 */
import normalizeDiacritics from '../normalizeDiacritics';

export default function toUrlFragmentFormat(string: string): string {
  let output: string = string;

  // Make diacritic characters "normal" (i.e. "Á" to "A").
  output = normalizeDiacritics(string);

  // Replace all spaces with "-" character, this allows search engines to more easily
  // read words present in string.
  output = output.replace(/\s/g, '-');

  // Make lower case, this is merely a stylistic choice which may help avoid some
  // case related edge case problems.
  output = output.toLowerCase();

  // Encode URI, this is a neat little trick for easily getting rid of problematic
  // special characters in the next step.
  output = encodeURIComponent(output);

  // Remove all out of whack special characters in a single regex replace.
  output = output.replace(/%[0-9A-F]{2}/gi, '');

  return output;
};

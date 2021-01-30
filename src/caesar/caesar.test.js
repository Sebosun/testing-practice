const caesar = require('./caesar');

test('returns caesar encrypted message', () => {
  expect(caesar('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
});

test('returns caesar encrypted message', () => {
    expect(caesar('defend the east wall of the castle', 13)).toBe('qrsraq gur rnfg jnyy bs gur pnfgyr');
});

test('returns caesar encrypted message', () => {
    expect(caesar('defend the east wall of the castle', 353)).toBe('stutcs iwt tphi lpaa du iwt rphiat');
});

test('returns caesar encrypted message', () => {
    expect(caesar('Testing another thing. ', 8)).toBe('Bmabqvo ivwbpmz bpqvo. ');
  });
  
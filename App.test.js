const { run } = require('./index');

describe("Testing run function", () => {
  test('case 1', () => {
    expect(run('23-10')).toBe('Sun-2016 Fri-2020 Sat-2021 Sun-2022 Fri-2026 Sat-2027 Sat-2032 Sun-2033 Fri-2037 Sat-2038 Sun-2039 Fri-2043 Sun-2044 Fri-2048 Sat-2049 Sun-2050 Fri-2054 Sat-2055 Sat-2060 Sun-2061 Fri-2065 ');
  });

  test('case 2 with leap year', () => {
    expect(run('29-02')).toBe('Sat-2020 Sun-2032 Fri-2036 Sat-2048 Sun-2060 Fri-2064 ');
  });

  test('case 3', () => {
    expect(run('31-12')).toBe('');
  });
});

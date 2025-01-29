const sass = require('sass');
const path = require('path');

describe('Scale Generator', () => {
  const compile = (data) => {
    return sass.compileString(data, {
      loadPaths: [path.join(__dirname, '..')],
    });
  };

  test('generates correct scale values', () => {
    const scss = `
      @use 'config' as *;
      @use 'style' as *;
      
      $test-scale: generate-scales(0.25, 4);
      
      .test {
        content: '#{$test-scale}';
      }
    `;

    const result = compile(scss);
    const expectedValues = [0.25, 0.5, 0.75, 1.25];
    const values = result.css
      .match(/content: '(.+)'/)[1]
      .split(' ')
      .map(Number);

    expect(values).toEqual(expectedValues);
  });

  test('throws error for invalid start value', () => {
    const scss = `
      @use 'config' as *;
      @use 'style' as *;
      
      $test-scale: generate-scales(-1, 4);
    `;

    expect(() => compile(scss)).toThrow('Scale start must be greater than 0');
  });

  test('throws error for invalid count value', () => {
    const scss = `
      @use 'config' as *;
      @use 'style' as *;
      
      $test-scale: generate-scales(0.25, 0);
    `;

    expect(() => compile(scss)).toThrow('Scale count must be greater than 0');
  });
}); 
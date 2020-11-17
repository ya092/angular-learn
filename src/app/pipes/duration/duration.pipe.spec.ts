import { DurationPipe } from './duration.pipe';

describe('Pipe: Duratione', () => {
  let pipe = new DurationPipe();
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should convert', () => {
    expect(pipe.transform(50)).toBe('50min');
  });

  it('should convert', () => {
    expect(pipe.transform(60)).toBe('1h');
  });

  it('should convert', () => {
    expect(pipe.transform(70)).toBe('1h 10min');
  });
});

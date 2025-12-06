describe('Telemetry Service', () => {
  test('System status should be nominal', () => {
    const systemStatus = { telemetry: 'nominal' };
    expect(systemStatus.telemetry).toBe('nominal');
  });

  // Uncomment this to simulate a failure for Module 7 (Conditionals)
  test('Simulate Failure', () => {
    expect(true).toBe(false);
  });
});
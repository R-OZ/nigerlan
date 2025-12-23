// A defect assertion checks the desired behavior, never blesses the bug.
// Unexpected success and non-assertion failures fail the ordinary test run.
export function knownDefect(id, description, check) {
  test(`KNOWN ${id}: ${description}`, async () => {
    if (process.env.NIGERLAN_VERIFY_DEFECTS === '1') return check();
    let failure;
    try {
      await check();
    } catch (error) {
      failure = error;
    }
    if (!failure?.matcherResult) {
      throw failure || new Error(`${id} now passes: remove the known-defect marker after review`);
    }
    console.info(`Expected assertion failure; unresolved ${id}: ${description}`);
  });
}

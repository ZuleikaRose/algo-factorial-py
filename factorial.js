function factorial(num) {
	// Factorials are only defined for non-negative integers
	if (!Number.isInteger(num) || num < 0) {
		throw new RangeError("factorial is only defined for non-negative integers");
	}

	// Use BigInt (the trailing n) so large results stay exact.
	// 0! is 1, and the loop below never runs for 0, so result stays 1n
	let result = 1n;
	for (let n = 2n; n <= BigInt(num); n++) {
		result *= n;
	}
	return result;
}

module.exports = { factorial };

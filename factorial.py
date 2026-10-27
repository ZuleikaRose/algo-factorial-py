def factorial(num):
	# Factorials are only defined for non-negative integers
	if not isinstance(num, int) or num < 0:
		raise ValueError("factorial is only defined for non-negative integers")

	# 0! is 1, and the loop below never runs for 0, so result stays 1
	result = 1
	for n in range(2, num + 1):
		result *= n
	return result

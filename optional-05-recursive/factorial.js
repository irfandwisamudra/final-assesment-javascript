function factorial(n) {
  if (n < 0) throw new RangeError('n must be a non-negative integer');
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;

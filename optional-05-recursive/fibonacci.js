function fibonacci(n) {
  if (n < 0) throw new RangeError('n must be a non-negative integer');
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  const seq = fibonacci(n - 1);
  const len = seq.length;
  const next = seq[len - 1] + seq[len - 2];
  return [...seq, next];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;

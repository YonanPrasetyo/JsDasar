function fibonacci(n) {
    if (n === 0) {
        return [0];
    } else if (n === 1) {
        return [0, 1];
    }
    const sequence = fibonacci(n - 1);
    const nextNumber = sequence[n - 1] + sequence[n - 2];
    return sequence.concat(nextNumber);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;

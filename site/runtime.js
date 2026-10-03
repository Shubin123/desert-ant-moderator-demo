export async function load(onProgress) {
  const { Moderator } = await import('@desert-ant-labs/moderator');
  const litert = await import('@litertjs/core');
  return Moderator.load({ litert, litertWasmDir: 'https://unpkg.com/@litertjs/core@2.5.2/wasm/', onProgress });
}


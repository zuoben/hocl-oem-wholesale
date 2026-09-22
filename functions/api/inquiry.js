/** Cloudflare Pages Function — POST /api/inquiry */
export async function onRequestPost(context) {
  try {
    const contentType = context.request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return Response.json({ ok: false, error: 'Expected application/json' }, { status: 400 });
    }

    const body = await context.request.json();
    console.log('[inquiry]', JSON.stringify(body));

    return Response.json(
      {
        ok: true,
        message: 'Inquiry received. We typically reply within ~24 hours on business days.',
      },
      { status: 200 },
    );
  } catch {
    return Response.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

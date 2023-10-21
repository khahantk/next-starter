import type { NextApiRequest, NextApiResponse } from 'next';

export default async function revalidateCache(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader('Cache-Control', 'no-cache');

  try {
    const { uri } = req.query;
    if (Array.isArray(uri)) {
      for (let idx = 0; idx < uri.length; idx++) {
        const pathname = uri[idx];
        res.revalidate(pathname);
        console.log(`Path: ${pathname} revalidated`);
      }
    } else if (uri?.toString()) {
      const pathname = uri.toString();
      await res.revalidate(pathname);
      console.log(`Path: ${pathname} revalidated`);
    }
    return res.json({ revalidated: true, uri });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}

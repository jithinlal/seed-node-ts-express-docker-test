import prisma from './db';

export async function addUrl(url: string, nanoId: string) {
	return await prisma.url.create({
		data: {
			nanoId,
			url,
		},
	});
}

export async function findUrl(nanoId: string | undefined) {
	return await prisma.url.findFirst({
		where: { nanoId },
	});
}
